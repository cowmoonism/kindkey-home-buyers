# Google Tag (gtag.js) Setup - Verification

## ✅ Current Implementation Status

### Single Google Tag Installation (Updated 2025)

- **Location**: `app/layout.tsx`
- **Status**: ✅ **ONE Google tag installed** (no duplication)
- **Compliance**: ✅ Follows latest Google recommendations

### Implementation Details

1. **Step 1: Initialize dataLayer** (beforeInteractive):

   ```javascript
   window.dataLayer = window.dataLayer || [];
   function gtag() {
     dataLayer.push(arguments);
   }
   gtag('js', new Date());
   ```

2. **Step 2: Load gtag.js library** (afterInteractive):

   ```javascript
   // Loads with primary ID (GA4 if available, otherwise Google Ads)
   <Script src="https://www.googletagmanager.com/gtag/js?id={primaryTagId}" />
   ```

3. **Step 3: Configure both services** (afterInteractive):

   ```javascript
   // Google Ads (always loaded for conversion tracking)
   gtag('config', 'AW-17766515185');

   // Google Analytics 4 (if NEXT_PUBLIC_GA_MEASUREMENT_ID is set)
   gtag('config', 'G-XXXXXXXXXX', {
     anonymize_ip: true,
     send_page_view: true,
   });
   ```

### What's Configured

✅ **Google Ads**: `AW-17766515185` (always active)
✅ **Google Analytics 4**: Configured if `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var is set
✅ **Cookie Consent**: GA4 respects cookie consent, Google Ads loads immediately
✅ **Conversion Tracking**: Events fire via `gtag('event', ...)` in `lib/analytics.ts`

### No Duplication Found

- ❌ No separate "GA4 tag" script
- ❌ No separate "Google Ads tag" script
- ✅ Single Google tag handles both services

### Conversion Events

1. **Form Submission** (`lib/analytics.ts`):

   ```javascript
   gtag('event', 'generate_lead', {
     lead_type: 'cash_offer',
     city: '...',
     condition: '...',
     timeframe: '...',
   });
   ```

2. **Thank You Page** (`app/thank-you/page.tsx`):
   ```javascript
   gtag('event', 'conversion', {
     send_to: 'AW-17766515185/hcQZCKrs2swbEPGD3pdC',
     value: 1.0,
     currency: 'USD',
   });
   ```

## Verification Checklist

- [x] Only ONE `gtag.js` script loads
- [x] Google Ads ID configured: `AW-17766515185`
- [x] GA4 ID configured conditionally (if env var set)
- [x] No duplicate scripts
- [x] Conversion events fire correctly
- [x] Cookie consent respected for GA4

## Environment Variables

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional) - GA4 Measurement ID (G-XXXXXXXXXX)

## Notes

- Google tag (gtag.js) is universal and supports multiple IDs simultaneously
- One script can handle both Google Ads and GA4
- This is the recommended approach by Google
- **Tag Assistant Detection**: If GA4 ID is set, gtag.js loads with GA4 ID for better Tag Assistant recognition
- **Performance**: Uses Next.js Script component with proper loading strategies
- **Cookie Consent**: GA4 respects cookie consent, Google Ads loads immediately (required for conversion tracking)

## How It Works

1. **dataLayer initialization** happens first (beforeInteractive) to ensure it's ready
2. **gtag.js library** loads with primary tag ID (GA4 preferred for Tag Assistant)
3. **Both services configure** through the same gtag.js instance
4. **Conversion events** fire correctly for Google Ads tracking
5. **Page views** tracked automatically for GA4 (if configured)

## Tag Assistant VerificationTo verify tags are working:

1. Install Google Tag Assistant Chrome extension
2. Open your website
3. Click Tag Assistant icon
4. You should see:
   - ✅ Google Ads tag (AW-17766515185)
   - ✅ Google Analytics 4 tag (if NEXT_PUBLIC_GA_MEASUREMENT_ID is set)
