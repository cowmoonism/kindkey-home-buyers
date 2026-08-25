declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetIdOrEventName: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export function trackEvent(eventName: string, eventParams?: Record<string, unknown>): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

export function trackLeadSubmit(formData: {
  city?: string;
  condition?: string;
  timeframe?: string;
}): void {
  trackEvent('lead_submit', {
    city: formData.city,
    condition: formData.condition,
    timeframe: formData.timeframe,
  });

  // Google Ads conversion tracking
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', 'generate_lead', {
        lead_type: 'cash_offer',
        city: formData.city || 'unknown',
        condition: formData.condition || 'unknown',
        timeframe: formData.timeframe || 'unknown',
      });
    } catch (error) {
      console.error('Google Ads tracking error:', error);
    }
  }
}

export function trackHeroCTA(): void {
  trackEvent('hero_cta_click');
}

export function trackWhatsAppClick(): void {
  trackEvent('whatsapp_click');
}

export function trackCallClick(): void {
  trackEvent('call_click');
}
