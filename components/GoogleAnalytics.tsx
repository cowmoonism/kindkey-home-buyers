'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { useCookieConsent } from '@/lib/useCookieConsent';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const { hasConsent, isLoading } = useCookieConsent();
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if consent was already given (before hook loads)
    const checkStoredConsent = () => {
      const stored = localStorage.getItem('cookie-consent');
      if (stored) {
        try {
          const data = JSON.parse(stored);
          const expiryDate = new Date(data.expiry);
          if (expiryDate > new Date() && data.consent === 'accepted') {
            return true;
          }
        } catch {
          // Invalid data
        }
      }
      return false;
    };

    // If already consented, load immediately
    if (checkStoredConsent()) {
      setShouldLoad(true);
      return;
    }

    // Wait for hook to load, then check consent
    if (!isLoading && hasConsent) {
      setShouldLoad(true);
    }
  }, [hasConsent, isLoading]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Listen for consent acceptance event
    const handleConsent = () => {
      setShouldLoad(true);
    };

    window.addEventListener('cookieConsentAccepted', handleConsent);
    return () => window.removeEventListener('cookieConsentAccepted', handleConsent);
  }, []);

  if (!measurementId || !shouldLoad) {
    return null;
  }

  return (
    <>
      {/* Google tag (gtag.js) - Official Google Analytics 4 implementation */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        async
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            anonymize_ip: true,
          });
        `}
      </Script>
    </>
  );
}
