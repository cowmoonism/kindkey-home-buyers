import nodemailer from 'nodemailer';

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
  if (transporter) return transporter;

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);

  if (!smtpUser || !smtpPass) {
    console.warn('SMTP credentials not configured');
    return null;
  }

  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  return transporter;
}

export async function sendLeadEmail(lead: {
  name: string;
  phone?: string;
  email?: string;
  reasonForSelling?: string;
  propertyAddress: string;
  city: string;
  condition: string;
  timeframe: string;
  preferredContact: string;
  smsNonMarketingConsent?: boolean;
  smsMarketingConsent?: boolean;
  pagePath?: string;
}): Promise<boolean> {
  const emailTransporter = getTransporter();
  if (!emailTransporter) return false;

  const notifyEmail = process.env.LEADS_NOTIFY_EMAIL;
  if (!notifyEmail) {
    console.warn('LEADS_NOTIFY_EMAIL not set');
    return false;
  }

  const conditionLabels: Record<string, string> = {
    'as-is': 'As-Is',
    cosmetic: 'Cosmetic Fixes',
    'major-repair': 'Major Repairs',
  };

  const timeframeLabels: Record<string, string> = {
    asap: 'ASAP',
    '7-14-days': '7-14 Days',
    '30-plus': '30+ Days',
  };

  const contactLabels: Record<string, string> = {
    call: 'Call',
    sms: 'Text',
    email: 'Email',
  };

  const html = `
    <h2>New Lead - KindKey Home Buyers</h2>
    <p><strong>Name:</strong> ${lead.name}</p>
    <p><strong>Phone:</strong> ${lead.phone && lead.phone.trim() !== '+1' ? lead.phone : 'Not provided'}</p>
    ${lead.email ? `<p><strong>Email:</strong> ${lead.email}</p>` : ''}
    <hr>
    <p><strong>Property Address:</strong><br>${lead.propertyAddress}<br>${lead.city}</p>
    <p><strong>Condition:</strong> ${conditionLabels[lead.condition] || lead.condition}</p>
    <p><strong>Timeframe:</strong> ${timeframeLabels[lead.timeframe] || lead.timeframe}</p>
    <p><strong>Preferred Contact:</strong> ${contactLabels[lead.preferredContact] || lead.preferredContact}</p>
    ${lead.smsNonMarketingConsent !== undefined ? `<p><strong>SMS non-marketing consent:</strong> ${lead.smsNonMarketingConsent ? 'Yes' : 'No'}</p>` : ''}
    ${lead.smsMarketingConsent !== undefined ? `<p><strong>SMS marketing consent:</strong> ${lead.smsMarketingConsent ? 'Yes' : 'No'}</p>` : ''}
    ${lead.reasonForSelling ? `<p><strong>Reason for selling:</strong><br>${lead.reasonForSelling}</p>` : ''}
    ${lead.pagePath ? `<p><strong>Page:</strong> ${lead.pagePath}</p>` : ''}
  `;

  try {
    const smtpUser = process.env.SMTP_USER;
    await emailTransporter.sendMail({
      from: smtpUser,
      to: notifyEmail,
      subject: 'New Lead — KindKey Home Buyers',
      html,
    });
    return true;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
}
