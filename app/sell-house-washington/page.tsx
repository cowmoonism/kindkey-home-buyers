import type { Metadata } from 'next';
import Script from 'next/script';
import AdsHeroSection from '@/components/AdsHeroSection';
import AdsConversionBlocks from '@/components/AdsConversionBlocks';
import AdsFAQ from '@/components/AdsFAQ';
import SEOContentAccordion from '@/components/SEOContentAccordion';
import CTASection from '@/components/CTASection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sell Your House FAST Anywhere in Washington — Cash Offer in 24 Hours',
  description:
    'Sell your house as-is directly to a principal buyer across Washington State. No repairs required before sale. Close in 7–14 days. Serving Kent, Auburn, Tacoma, Federal Way, Milton, Edgewood, Puyallup, and all of WA.',
  openGraph: {
    title: 'Sell Your House FAST Anywhere in Washington — Cash Offer',
    description:
      'Sell your house as-is directly to a principal buyer across Washington State. No repairs required before sale. Close in 7–14 days.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Your House FAST Anywhere in Washington — Cash Offer',
    description:
      'Sell your house as-is directly to a principal buyer across Washington State. No repairs required before sale. Close in 7–14 days.',
  },
  alternates: {
    canonical: 'https://kindkeyhomebuyers.com/sell-house-washington',
  },
};

const washingtonFAQ = [
  {
    question: 'Do you buy houses anywhere in Washington State?',
    answer:
      'Yes! We buy houses throughout Washington State, including Kent, Auburn, Tacoma, Federal Way, Milton, Edgewood, Puyallup, and surrounding areas. No matter where your property is located in WA, we can make you a fair cash offer.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer:
      "No! We buy houses in Washington exactly as they are. Whether your house needs minor cosmetic fixes or major repairs, we'll make you a fair cash offer. You do not need to make repairs before the sale; KindKey handles repairs after purchase.",
  },
  {
    question: 'How fast can we close in Washington?',
    answer:
      "We can close in as little as 7 days, but we work with your timeline. Whether you need to close quickly or need more time to move out, we're flexible. Most transactions in Washington close within 7-14 days, but we can accommodate your schedule.",
  },
  {
    question: 'What types of homes do you buy in Washington?',
    answer:
      "We buy all types of residential properties throughout Washington State: single-family homes, condos, townhouses, multi-family properties, and even land. Condition doesn't matter - we buy houses that need repairs, have tenants, are vacant, or are in perfect condition.",
  },
];

const washingtonSEOContent = {
  intro: `Washington State offers diverse real estate markets from the bustling Seattle metro area to the peaceful communities of Pierce and King Counties. Whether you're in Kent, Auburn, Tacoma, Federal Way, Milton, Edgewood, Puyallup, or anywhere else in Washington, selling your house can be stressful and time-consuming.`,
  description: `We're a local Washington-based cash home buyer serving homeowners throughout the entire state. We understand the unique real estate dynamics across different Washington communities and can provide fair, transparent cash offers regardless of your property's location or condition.`,
};

export default function SellHouseWashingtonPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kindkeyhomebuyers.com';

  return (
    <>
      {/* Schema.org markup */}
      <Script
        type="application/ld+json"
        id="local-business-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'KindKey Home Buyers LLC',
            description:
              'Principal real estate investor and cash home buyer purchasing houses throughout Washington State',
            url: siteUrl,
            areaServed: {
              '@type': 'State',
              name: 'Washington',
              addressRegion: 'WA',
            },
            serviceType: 'Cash Home Buyer',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Milton',
              addressRegion: 'WA',
              postalCode: '98354',
              addressCountry: 'US',
            },
            telephone: '+12532604117',
            email: 'info@kindkeyhomebuyers.com',
          }),
        }}
      />

      {/* Hero Section - High Conversion */}
      <AdsHeroSection cityName="Washington" />

      {/* Conversion Blocks */}
      <AdsConversionBlocks cityName="Washington" />

      {/* FAQ Section */}
      <AdsFAQ cityName="Washington" items={washingtonFAQ} />

      {/* SEO Content - Lower on Page */}
      <SEOContentAccordion
        cityName="Washington State"
        cityIntro={washingtonSEOContent.intro}
        cityDescription={washingtonSEOContent.description}
      />

      {/* City Links Section for SEO */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-text-primary md:text-3xl">
              We Buy Houses in Cities Throughout Washington
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { name: 'Kent', slug: 'kent' },
                { name: 'Auburn', slug: 'auburn' },
                { name: 'Tacoma', slug: 'tacoma' },
                { name: 'Federal Way', slug: 'federal-way' },
                { name: 'Milton', slug: 'milton' },
                { name: 'Edgewood', slug: 'edgewood' },
                { name: 'Puyallup', slug: 'puyallup' },
              ].map((city) => (
                <Link
                  key={city.slug}
                  href={`/areas/${city.slug}`}
                  className="rounded-lg border border-divider bg-secondary px-4 py-3 text-center font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent/10"
                >
                  {city.name}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-center text-text-secondary">
              Don't see your city? We buy houses throughout Washington State.{' '}
              <Link href="/contact" className="text-divider underline hover:text-divider/80">
                Contact us
              </Link>{' '}
              to see if we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Sell Your Washington Home?"
        subtitle="Get your cash offer today. No obligation, no pressure."
      />
    </>
  );
}
