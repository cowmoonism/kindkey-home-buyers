'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { leadFormSchema, type LeadFormData } from '@/lib/schema';
import { trackLeadSubmit } from '@/lib/analytics';
import { useRecaptcha } from '@/lib/useRecaptcha';

interface LeadFormProps {
  variant?: 'short' | 'extended';
  className?: string;
  onSuccess?: () => void;
  cityName?: string;
}

export default function LeadForm({
  variant = 'short',
  className = '',
  onSuccess,
  cityName,
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { isReady, executeRecaptcha } = useRecaptcha(formRef);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      phone: '+1',
      smsNonMarketingConsent: false,
      smsMarketingConsent: false,
    },
  });

  // Initialize phone field with +1
  useEffect(() => {
    setValue('phone', '+1', { shouldValidate: false });
  }, [setValue]);

  // Phone number formatting function
  const formatPhoneNumber = (value: string): string => {
    // Always start with +1
    if (!value || !value.startsWith('+1')) {
      return '+1';
    }

    // Extract only digits after +1
    const digits = value.slice(2).replace(/\D/g, '');

    // If no digits, return just +1
    if (digits.length === 0) {
      return '+1';
    }

    // Limit to 10 digits maximum
    const limitedDigits = digits.slice(0, 10);

    // Format: +1(XXX) XXX-XXXX
    if (limitedDigits.length <= 3) {
      return `+1(${limitedDigits}`;
    } else if (limitedDigits.length <= 6) {
      return `+1(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
    } else {
      return `+1(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // If user tries to delete +1, restore it
    if (inputValue.length < 2 || !inputValue.startsWith('+1')) {
      setValue('phone', '+1', { shouldValidate: false });
      e.target.setSelectionRange(2, 2);
      return;
    }

    const formatted = formatPhoneNumber(inputValue);

    // Calculate cursor position
    const cursorPosition = e.target.selectionStart || 0;
    const digitsBeforeCursor = inputValue.slice(0, cursorPosition).replace(/\D/g, '').length;

    setValue('phone', formatted, { shouldValidate: true });

    // Restore cursor position after formatting
    setTimeout(() => {
      let newCursorPos = 2; // Start after +1
      const digitsInFormatted = formatted.slice(2).replace(/\D/g, '');

      if (digitsBeforeCursor > 0) {
        // Count digits up to cursor position in formatted string
        let digitCount = 0;
        for (let i = 2; i < formatted.length; i++) {
          if (/\d/.test(formatted[i])) {
            digitCount++;
            if (digitCount === digitsBeforeCursor) {
              newCursorPos = i + 1;
              break;
            }
          }
          if (digitCount < digitsBeforeCursor) {
            newCursorPos = i + 1;
          }
        }
      }

      e.target.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const cursorPosition = input.selectionStart || 0;

    // Prevent deleting +1 if cursor is at position 0-2
    if (
      (e.key === 'Backspace' && cursorPosition <= 2) ||
      (e.key === 'Delete' && cursorPosition < 2)
    ) {
      e.preventDefault();
      return;
    }

    // Only allow digits and prevent non-digit input except for formatting characters
    if (
      e.key.length === 1 &&
      !/\d/.test(e.key) &&
      e.key !== '(' &&
      e.key !== ')' &&
      e.key !== ' ' &&
      e.key !== '-' &&
      e.key !== '+' &&
      e.key !== '1'
    ) {
      // Allow + and 1 only at the start
      if (cursorPosition >= 2 && (e.key === '+' || e.key === '1')) {
        e.preventDefault();
      }
    }
  };

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const recaptchaToken = await executeRecaptcha('submit_lead');

      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
          pagePath: window.location.pathname,
          utm: new URLSearchParams(window.location.search).get('utm_source') || undefined,
          gclid: new URLSearchParams(window.location.search).get('gclid') || undefined,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to submit form');
      }

      trackLeadSubmit({
        city: data.city || cityName || 'unknown',
        condition: data.condition,
        timeframe: data.timeframe,
      });

      if (onSuccess) {
        onSuccess();
      } else {
        window.location.href = '/thank-you';
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      <div>
        <label
          htmlFor="propertyAddress"
          className="mb-2 block text-sm font-medium text-text-primary"
        >
          Property Address *
        </label>
        <input
          type="text"
          id="propertyAddress"
          {...register('propertyAddress')}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder={cityName ? `123 Main St, ${cityName}` : '123 Main St'}
          autoComplete="street-address"
        />
        {errors.propertyAddress && (
          <p className="mt-1 text-sm text-red-600">{errors.propertyAddress.message}</p>
        )}
      </div>

      {variant === 'short' && cityName ? (
        <input type="hidden" {...register('city')} value={cityName} />
      ) : (
        <div>
          <label htmlFor="city" className="mb-2 block text-sm font-medium text-text-primary">
            City *
          </label>
          <input
            type="text"
            id="city"
            {...register('city')}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder={
              cityName || 'Kent, Federal Way, Auburn, Milton, Tacoma, Edgewood, or Puyallup'
            }
            autoComplete="address-level2"
            defaultValue={cityName || ''}
          />
          {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="John Doe"
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text-primary">
            Phone <span className="font-normal text-text-secondary">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            onChange={handlePhoneChange}
            onKeyDown={handlePhoneKeyDown}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="+1(206) 555-1234"
            autoComplete="tel"
            maxLength={17}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      {variant === 'short' ? (
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
            Email <span className="font-normal text-text-secondary">(optional)</span>
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: false })}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="john@example.com"
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
      ) : (
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
            Email *
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="john@example.com"
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
      )}

      <div>
        <label
          htmlFor="reasonForSelling"
          className="mb-2 block text-sm font-medium text-text-primary"
        >
          Reason for selling
        </label>
        <textarea
          id="reasonForSelling"
          {...register('reasonForSelling')}
          rows={3}
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Tell us why you're selling..."
        />
        {errors.reasonForSelling && (
          <p className="mt-1 text-sm text-red-600">{errors.reasonForSelling.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="condition" className="mb-2 block text-sm font-medium text-text-primary">
          Property Condition *
        </label>
        <select
          id="condition"
          {...register('condition')}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">Select condition</option>
          <option value="as-is">As-Is (No repairs needed)</option>
          <option value="cosmetic">Cosmetic Fixes Needed</option>
          <option value="major-repair">Major Repairs Required</option>
        </select>
        {errors.condition && (
          <p className="mt-1 text-sm text-red-600">{errors.condition.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="timeframe" className="mb-2 block text-sm font-medium text-text-primary">
          When do you need to sell? *
        </label>
        <select
          id="timeframe"
          {...register('timeframe')}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">Select timeframe</option>
          <option value="asap">ASAP</option>
          <option value="7-14-days">7-14 Days</option>
          <option value="30-plus">30+ Days</option>
        </select>
        {errors.timeframe && (
          <p className="mt-1 text-sm text-red-600">{errors.timeframe.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="preferredContact"
          className="mb-2 block text-sm font-medium text-text-primary"
        >
          Preferred Contact Method *
        </label>
        <select
          id="preferredContact"
          {...register('preferredContact')}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="call">Phone Call</option>
          <option value="sms">Text</option>
          <option value="email">Email</option>
        </select>
        {errors.preferredContact && (
          <p className="mt-1 text-sm text-red-600">{errors.preferredContact.message}</p>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-start">
          <input
            type="checkbox"
            id="smsNonMarketingConsent"
            {...register('smsNonMarketingConsent')}
            className="mt-1 h-4 w-4 rounded border-gray-300 bg-white text-divider focus:ring-divider"
          />
          <label htmlFor="smsNonMarketingConsent" className="ml-2 text-sm text-text-secondary">
            By checking this box, I consent to receive non-marketing text messages including
            appointment confirmations, follow-ups, and service-related updates, from KindKey Home
            Buyers LLC. Message frequency varies, message &amp; data rates may apply. Text HELP for
            assistance, reply STOP to opt out.
          </label>
        </div>
        {errors.smsNonMarketingConsent && (
          <p className="text-sm text-red-600">{errors.smsNonMarketingConsent.message}</p>
        )}

        <div className="flex items-start">
          <input
            type="checkbox"
            id="smsMarketingConsent"
            {...register('smsMarketingConsent')}
            className="mt-1 h-4 w-4 rounded border-gray-300 bg-white text-divider focus:ring-divider"
          />
          <label htmlFor="smsMarketingConsent" className="ml-2 text-sm text-text-secondary">
            By checking this box, I consent to receive marketing and promotional messages including
            special offers, discounts, new product updates among others from KindKey Home Buyers LLC
            at the phone number provided. Frequency may vary. Message &amp; data rates may apply.
            Text HELP for assistance, reply STOP to opt out.
          </label>
        </div>
      </div>

      {submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-600">{submitError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !isReady}
        className="w-full rounded-lg bg-divider px-6 py-3 font-semibold text-white transition-colors hover:bg-divider/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Get My Cash Offer'}
      </button>

      <p className="text-center text-sm text-text-secondary">
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link href="/terms" className="hover:underline">
          Terms and Conditions
        </Link>
      </p>
    </form>
  );
}
