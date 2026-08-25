import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Thank You - We'll Reach Out Soon",
  description:
    "Thank you for submitting your information. We'll reach out within one business day.",
};

export default function ThankYouPage() {
  return (
    <>
      {/* Event snippet for Submit lead form conversion page */}
      {/* Install on conversion page as per Google instructions */}
      {/* Stub gtag for reliability - works even if gtag.js hasn't loaded yet */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          gtag('event', 'conversion', {
            'send_to': 'AW-17766515185/hcQZCKrs2swbEPGD3pdC',
            'value': 1.0,
            'currency': 'USD'
          });
        `}
      </Script>
      <section className="flex min-h-screen items-center bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent">
                <svg
                  className="h-10 w-10 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="mb-6 text-4xl font-bold text-text-primary md:text-5xl">Thank You!</h1>
              <p className="mb-4 text-xl text-text-secondary">
                We've received your information and will reach out within one business day.
              </p>
              <p className="mb-8 text-lg text-text-secondary">
                Prefer Text? Text us at the number you provided, and we\'ll respond as soon as
                possible.
              </p>
            </div>

            <div className="mb-8 rounded-lg border border-divider bg-white p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold text-text-primary">What's Next?</h2>
              <ol className="list-inside list-decimal space-y-3 text-left text-text-secondary">
                <li>We\'ll review your property information</li>
                <li>We\'ll contact you via your preferred method</li>
                <li>Schedule a quick walkthrough (virtual or in-person)</li>
                <li>Receive your transparent, no-obligation cash offer</li>
              </ol>
            </div>

            <div className="flex justify-center">
              <Link
                href="/"
                className="rounded-lg bg-divider px-6 py-3 font-semibold text-white transition-colors hover:bg-divider/90"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
