'use client';

import { useState, useEffect } from 'react';

export type CookieConsent = 'pending' | 'accepted' | 'rejected';

const COOKIE_CONSENT_KEY = 'cookie-consent';
const COOKIE_CONSENT_EXPIRY_DAYS = 365;

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent>('pending');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if consent was already given
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        const expiryDate = new Date(data.expiry);
        if (expiryDate > new Date()) {
          setConsent(data.consent);
        } else {
          // Consent expired, reset to pending
          localStorage.removeItem(COOKIE_CONSENT_KEY);
          setConsent('pending');
        }
      } catch {
        // Invalid data, reset
        localStorage.removeItem(COOKIE_CONSENT_KEY);
        setConsent('pending');
      }
    }
    setIsLoading(false);
  }, []);

  const acceptCookies = () => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + COOKIE_CONSENT_EXPIRY_DAYS);

    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({
        consent: 'accepted' as CookieConsent,
        expiry: expiryDate.toISOString(),
      })
    );
    setConsent('accepted');

    // Trigger GA4 load if needed
    if (typeof window !== 'undefined' && window.dispatchEvent) {
      window.dispatchEvent(new Event('cookieConsentAccepted'));
    }
  };

  const rejectCookies = () => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + COOKIE_CONSENT_EXPIRY_DAYS);

    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({
        consent: 'rejected' as CookieConsent,
        expiry: expiryDate.toISOString(),
      })
    );
    setConsent('rejected');
  };

  return {
    consent,
    isLoading,
    acceptCookies,
    rejectCookies,
    hasConsent: consent === 'accepted',
  };
}
