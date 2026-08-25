'use client';

import { useEffect, useState } from 'react';
import { isAdsMode, getCityFromPath } from '@/lib/adsMode';
import AdsHeroSection from './AdsHeroSection';
import AdsConversionBlocks from './AdsConversionBlocks';
import AdsFAQ from './AdsFAQ';
import SEOContentAccordion from './SEOContentAccordion';
import CTASection from './CTASection';
import CityHeroSection from './CityHeroSection';
import TrustBadges from './TrustBadges';
import StepTimeline from './StepTimeline';
import FAQAccordion from './FAQAccordion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ReviewsSection = dynamic(() => import('@/components/ReviewsSection'), {
  ssr: true,
});

interface CityPageClientProps {
  city: {
    name: string;
    slug: string;
    description: string;
    intro: string;
    faq: Array<{ question: string; answer: string }>;
  };
  heroVideoSrc?: string;
  heroPosterSrc: string;
  backgroundImageSrc: string;
  hasVideoBackground: boolean;
  companyName: string;
  siteUrl: string;
}

export default function CityPageClient({
  city,
  heroVideoSrc,
  heroPosterSrc,
  backgroundImageSrc,
  hasVideoBackground,
  companyName,
  siteUrl,
}: CityPageClientProps) {
  const [adsMode, setAdsMode] = useState(false);

  useEffect(() => {
    setAdsMode(isAdsMode());
  }, []);

  // Ads Mode: High-conversion layout
  if (adsMode) {
    return (
      <>
        {/* Ads Hero Section */}
        <AdsHeroSection cityName={city.name} />

        {/* Conversion Blocks */}
        <AdsConversionBlocks cityName={city.name} />

        {/* FAQ */}
        <AdsFAQ cityName={city.name} items={city.faq} />

        {/* SEO Content (Collapsible) */}
        <SEOContentAccordion
          cityName={city.name}
          cityIntro={city.intro}
          cityDescription={city.description}
        />

        {/* Final CTA */}
        <CTASection
          title={`Ready to Sell Your ${city.name} Home?`}
          subtitle="Get your cash offer today. No obligation, no pressure."
        />
      </>
    );
  }

  // SEO Mode: Original layout
  return (
    <>
      {/* Hero Section */}
      <CityHeroSection
        cityName={city.name}
        cityDescription={city.description}
        heroVideoSrc={heroVideoSrc}
        heroPosterSrc={heroPosterSrc}
        backgroundImageSrc={backgroundImageSrc}
        hasVideoBackground={hasVideoBackground}
        companyName={companyName}
      />

      {/* Trust Badges */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      {/* Choose Your Option Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-text-primary md:text-4xl">
              Choose Your Option
            </h2>
            <p className="mb-12 text-center text-xl text-text-secondary">
              Learn about selling your house directly to KindKey in {city.name}. Pick the
              information that best fits your situation.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Link
                href={`/areas/${city.slug}/sell-my-house-fast`}
                className="group rounded-lg border-2 border-divider bg-gradient-to-br from-accent/10 to-accent-blue/10 p-8 shadow-lg transition-all hover:border-accent hover:shadow-xl"
              >
                <div className="mb-4 text-4xl">⚡</div>
                <h3 className="mb-3 text-2xl font-bold text-text-primary transition-colors group-hover:text-accent">
                  Sell My House Fast in {city.name}
                </h3>
                <p className="mb-4 text-text-secondary">
                  Need to close quickly? We can close in as little as 7 days. Pick your closing
                  date.
                </p>
                <span className="inline-flex items-center gap-2 font-semibold text-accent">
                  Learn more
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                href={`/areas/${city.slug}/cash-offer`}
                className="group rounded-lg border-2 border-divider bg-gradient-to-br from-accent/10 to-accent-blue/10 p-8 shadow-lg transition-all hover:border-accent hover:shadow-xl"
              >
                <div className="mb-4 text-4xl">💰</div>
                <h3 className="mb-3 text-2xl font-bold text-text-primary transition-colors group-hover:text-accent">
                  Get a Cash Offer in {city.name}
                </h3>
                <p className="mb-4 text-text-secondary">
                  Want a fair cash offer? No obligation. Transparent process. Receive your offer
                  within 24 hours.
                </p>
                <span className="inline-flex items-center gap-2 font-semibold text-accent">
                  Learn more
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                href={`/areas/${city.slug}/sell-house-as-is`}
                className="group rounded-lg border-2 border-divider bg-gradient-to-br from-accent/10 to-accent-blue/10 p-8 shadow-lg transition-all hover:border-accent hover:shadow-xl"
              >
                <div className="mb-4 text-4xl">🏠</div>
                <h3 className="mb-3 text-2xl font-bold text-text-primary transition-colors group-hover:text-accent">
                  Sell As-Is in {city.name}
                </h3>
                <p className="mb-4 text-text-secondary">
                  House needs repairs? We buy houses in any condition. No repairs needed before the
                  sale; KindKey handles repairs after purchase.
                </p>
                <span className="inline-flex items-center gap-2 font-semibold text-accent">
                  Learn more
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Surrounding Areas Section */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-text-primary md:text-3xl">
              We Serve {city.name} and Nearby Areas
            </h2>
            <p className="text-lg text-text-secondary">
              While {city.name} is one of our primary service areas, we also buy houses in nearby
              communities throughout Washington State. If you're in a surrounding area, we can still
              help you sell your house fast for cash. Don't see your area listed?{' '}
              <Link href="/contact" className="text-accent underline hover:text-accent/80">
                Contact us
              </Link>{' '}
              to see if we can help.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-text-primary md:text-4xl">
            How It Works in {city.name}
          </h2>
          <p className="mb-12 text-center text-xl text-text-secondary">
            Sell directly to a local principal buyer in {city.name}
          </p>
          <StepTimeline />
        </div>
      </section>

      {/* About Selling in City */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-text-primary md:text-4xl">
              Selling Your House in {city.name}, WA
            </h2>
            <div className="rounded-lg border border-divider bg-white p-8 shadow-lg">
              <div className="prose prose-lg max-w-none text-text-secondary">
                <p className="mb-4 text-lg">{city.intro}</p>
                <p className="mb-6 text-lg">
                  As part of our commitment to buying houses throughout Washington State, we're
                  proud to purchase homes from homeowners in {city.name} and across the entire
                  state. Whether you're in {city.name} or any other city in Washington, we're here
                  to buy your house fast for cash.
                </p>
                <div className="rounded-lg border border-accent/20 bg-accent/10 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-text-primary">
                    Why Sell to Us in {city.name}?
                  </h3>
                  <ul className="list-inside list-disc space-y-3 text-text-secondary">
                    <li>Local {city.name} market expertise</li>
                    <li>Fast closing on your timeline</li>
                    <li>No repairs needed</li>
                    <li>No agent commission charged by KindKey</li>
                    <li>Fair, transparent cash offers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* FAQ */}
      <section className="bg-primary py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-text-primary md:text-4xl">
            Frequently Asked Questions - {city.name}
          </h2>
          <FAQAccordion items={city.faq} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Ready to Sell Your ${city.name} Home?`}
        subtitle="Get your cash offer today. No obligation, no pressure."
      />
    </>
  );
}
