import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { leadFormSchema } from '@/lib/schema';
import { verifyRecaptcha } from '@/lib/captcha';
import { postToCRM } from '@/lib/crm';
import { sendTelegramMessage, formatLeadForTelegram } from '@/lib/telegram';
import { sendLeadEmail } from '@/lib/mailer';

// Rate limiting setup - requires UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '15 m'),
      analytics: true,
    })
  : null;

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIP || 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    if (ratelimit) {
      const ip = getClientIP(request);
      const { success, limit, remaining } = await ratelimit.limit(ip);
      if (!success) {
        return NextResponse.json(
          { message: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
    }

    const body = await request.json();

    // Validate with Zod
    const validationResult = leadFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: validationResult.error.errors },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Verify reCAPTCHA
    if (data.recaptchaToken) {
      const isValid = await verifyRecaptcha(data.recaptchaToken);
      if (!isValid) {
        return NextResponse.json({ message: 'reCAPTCHA verification failed' }, { status: 400 });
      }
    }

    const ip = getClientIP(request);
    const pagePath = body.pagePath || 'unknown';

    // Prepare data for CRM
    const crmData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      reasonForSelling: data.reasonForSelling,
      propertyAddress: data.propertyAddress,
      city: data.city,
      condition: data.condition,
      timeframe: data.timeframe,
      preferredContact: data.preferredContact,
      smsNonMarketingConsent: data.smsNonMarketingConsent,
      smsMarketingConsent: data.smsMarketingConsent,
      utm: body.utm,
      gclid: body.gclid,
      pagePath,
      recaptchaScore: 0.9, // Default if not verified
      ip,
    };

    // Fan-out to all channels (fire and forget)
    const promises = [
      postToCRM(crmData).catch((error) => {
        console.error('CRM webhook error:', error);
      }),
      sendTelegramMessage(formatLeadForTelegram(crmData)).catch((error) => {
        console.error('Telegram error:', error);
      }),
      sendLeadEmail(crmData).catch((error) => {
        console.error('Email error:', error);
      }),
    ];

    // Don't wait for all to complete, but log if any fail
    await Promise.allSettled(promises);

    return NextResponse.json({ success: true, message: 'Lead submitted successfully' });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
