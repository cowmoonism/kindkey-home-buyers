'use client';

import { useState } from 'react';
import Link from 'next/link';
import LeadForm from './LeadForm';
import { motion } from 'framer-motion';
import TrustBadges from './TrustBadges';
import FAQAccordion from './FAQAccordion';
import CTASection from './CTASection';
import type { IntentType } from '@/data/intentFAQs';

interface IntentPageTemplateProps {
  cityName: string;
  citySlug: string;
  intentType: IntentType;
  h1: string;
  valueProp: string;
  benefits: string[];
  intentSpecificSection: {
    title: string;
    content: React.ReactNode;
  };
  faqs: Array<{ question: string; answer: string }>;
}

const intentConfig: Record<IntentType, { ctaText: string; heroSubtitle: string }> = {
  'sell-fast': {
    ctaText: 'Sell My House Fast',
    heroSubtitle: 'Close in days, not months. Pick your closing date.',
  },
  'cash-offer': {
    ctaText: 'Get My Cash Offer',
    heroSubtitle: 'Fair cash offer. No obligation. Transparent process.',
  },
  'as-is': {
    ctaText: 'Sell As-Is',
    heroSubtitle: 'We buy houses in any condition. No repairs needed.',
  },
};

export default function IntentPageTemplate({
  cityName,
  citySlug,
  intentType,
  h1,
  valueProp,
  benefits,
  intentSpecificSection,
  faqs,
}: IntentPageTemplateProps) {
  const config = intentConfig[intentType];
  const [formSubmitted, setFormSubmitted] = useState(false);

  const steps = [
    {
      number: '1',
      title: 'Tell us about the house',
      description: 'Share your property details. Takes less than 60 seconds.',
    },
    {
      number: '2',
      title: 'Get a fair cash offer',
      description: 'Receive a transparent, no-obligation cash offer within 24 hours.',
    },
    {
      number: '3',
      title: 'Close on your timeline',
      description: 'We close when it works for you. Fast, simple, and flexible.',
    },
  ];

  // Links to other intent pages for same city
  const otherIntentPages = [
    {
      slug: 'sell-my-house-fast',
      title: 'Sell My House Fast',
      description: 'Need to close quickly?',
    },
    {
      slug: 'cash-offer',
      title: 'Get a Cash Offer',
      description: 'Want a fair cash offer?',
    },
    {
      slug: 'sell-house-as-is',
      title: 'Sell As-Is',
      description: 'House needs repairs?',
    },
  ].filter((page) => {
    const currentSlug =
      intentType === 'sell-fast'
        ? 'sell-my-house-fast'
        : intentType === 'cash-offer'
          ? 'cash-offer'
          : 'sell-house-as-is';
    return page.slug !== currentSlug;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-secondary py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
                {h1}
              </h1>
              <p className="mb-4 text-xl text-text-secondary md:text-2xl">{valueProp}</p>
              <p className="mb-6 text-lg text-text-secondary">{config.heroSubtitle}</p>

              {/* Benefits Bullets */}
              <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary md:gap-6 md:text-base">
                {benefits.map((benefit, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Form - Above the fold */}
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left: Form */}
              <div className="order-2 lg:order-1">
                <div className="sticky top-4 rounded-lg border-2 border-divider bg-white p-6 shadow-2xl md:p-8">
                  <h2 className="mb-2 text-2xl font-bold text-text-primary md:text-3xl">
                    {config.ctaText}
                  </h2>
                  <p className="mb-6 text-text-secondary">
                    Fill out the form below and we'll respond within 24 hours.
                  </p>
                  <LeadForm
                    variant="short"
                    cityName={cityName}
                    onSuccess={() => {
                      setFormSubmitted(true);
                      window.location.href = '/thank-you';
                    }}
                  />
                  <p className="mt-4 text-center text-sm text-text-secondary">
                    No pressure. We respond within 24 hours.
                  </p>
                </div>
              </div>

              {/* Right: Pain Points / Benefits */}
              <div className="order-1 lg:order-2">
                <div className="rounded-lg border border-accent/20 bg-accent/10 p-6 md:p-8">
                  <h3 className="mb-4 text-xl font-semibold text-text-primary md:text-2xl">
                    Common Situations We Help With:
                  </h3>
                  <ul className="mb-6 space-y-3">
                    {[
                      'Behind on payments?',
                      'Inherited a property?',
                      'Costly repairs?',
                      'Bad tenants?',
                      'Need to move fast?',
                    ].map((point, index) => (
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

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">How It Works</h2>
            <p className="text-xl text-text-secondary">
              Selling your house in {cityName} is simple and fast
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-divider text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-text-primary">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intent-Specific Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-text-primary md:text-4xl">
              {intentSpecificSection.title}
            </h2>
            <div className="rounded-lg border border-divider bg-white p-8 shadow-md">
              {intentSpecificSection.content}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-primary py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-text-primary md:text-4xl">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Internal Links to Other Intent Pages */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-text-primary md:text-3xl">
              Other Options for Selling Your House in {cityName}
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {otherIntentPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/areas/${citySlug}/${page.slug}`}
                  className="rounded-lg border border-divider bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <h3 className="mb-2 text-xl font-semibold text-text-primary">{page.title}</h3>
                  <p className="text-text-secondary">{page.description}</p>
                  <span className="mt-2 inline-block font-medium text-accent">Learn more →</span>
                </Link>
              ))}
              <Link
                href={`/areas/${citySlug}`}
                className="rounded-lg border border-divider bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <h3 className="mb-2 text-xl font-semibold text-text-primary">View All Options</h3>
                <p className="text-text-secondary">
                  Learn about selling your house directly to KindKey in {cityName}
                </p>
                <span className="mt-2 inline-block font-medium text-accent">Learn more →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title={`Ready to Sell Your ${cityName} Home?`}
        subtitle="Get your cash offer today. No obligation, no pressure."
      />
    </>
  );
}
