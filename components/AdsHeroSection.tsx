'use client';

import { useState } from 'react';
import Link from 'next/link';
import LeadForm from './LeadForm';

interface AdsHeroSectionProps {
  cityName: string;
}

export default function AdsHeroSection({ cityName }: AdsHeroSectionProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const painPoints = [
    'Behind on payments?',
    'Inherited a property?',
    'Costly repairs?',
    'Bad tenants?',
    'Need to move fast?',
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-secondary py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* H1 - Above the fold */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
              {cityName === 'Washington'
                ? 'Sell Your House FAST Anywhere in Washington — Get a Cash Offer in 24 Hours'
                : `Sell Your House FAST in ${cityName}, WA — Get a Cash Offer in 24 Hours`}
            </h1>
            <p className="mb-4 text-xl text-text-secondary md:text-2xl">
              We buy houses as-is. No repairs. Direct sale to a principal buyer. Close in 7–14 days.
            </p>

            {/* Trust Strip */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary md:gap-6 md:text-base">
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Principal WA Buyer
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Any Condition
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No Agent Commission Charged by KindKey
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No Obligation
              </span>
            </div>
          </div>

          {/* Form - Above the fold on mobile */}
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Form */}
            <div className="order-2 lg:order-1">
              <div className="sticky top-4 rounded-lg border-2 border-divider bg-white p-6 shadow-2xl md:p-8">
                <h2 className="mb-2 text-2xl font-bold text-text-primary md:text-3xl">
                  Get Your Cash Offer
                </h2>
                <p className="mb-6 text-text-secondary">
                  Fill out the form below and we'll respond within 24 hours.
                </p>
                <LeadForm
                  variant="short"
                  cityName={cityName}
                  onSuccess={() => {
                    setFormSubmitted(true);
                    // Redirect to thank you page
                    window.location.href = '/thank-you';
                  }}
                />
                <p className="mt-4 text-center text-sm text-text-secondary">
                  No pressure. We respond within 24 hours.
                </p>
              </div>
            </div>

            {/* Right: Pain Points */}
            <div className="order-1 lg:order-2">
              <div className="rounded-lg border border-accent/20 bg-accent/10 p-6 md:p-8">
                <h3 className="mb-4 text-xl font-semibold text-text-primary md:text-2xl">
                  Common Situations We Help With:
                </h3>
                <ul className="mb-6 space-y-3">
                  {painPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-text-secondary">
                      <svg
                        className="mt-0.5 h-6 w-6 flex-shrink-0 text-divider"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-text-primary">We can help.</p>
              </div>

              {/* Phone CTA */}
              <div className="mt-6 text-center">
                <a
                  href="tel:+12535183638"
                  className="inline-flex items-center gap-3 rounded-lg bg-divider px-6 py-3 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-divider/90"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now: (253) 518-3638
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
