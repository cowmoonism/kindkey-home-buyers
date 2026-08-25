import type { Metadata } from 'next';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import StepTimeline from '@/components/StepTimeline';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';

// Lazy load below-the-fold components
const ReviewsSection = dynamic(() => import('@/components/ReviewsSection'), {
  ssr: true,
});

const companyName = 'KindKey Home Buyers';
const defaultHeroImage = '/logo.avif';

export const metadata: Metadata = {
  title: 'Sell House As-Is - No Repairs Needed | KindKey Home Buyers',
  description:
    'Sell your house as-is in any condition. No repairs or cleaning needed. We buy houses in any condition throughout Washington State. Get your cash offer today.',
  keywords: [
    'sell house as-is',
    'we buy houses as-is',
    'sell house without repairs',
    'cash home buyer as-is',
    'sell damaged house',
    'sell house in any condition',
    'Washington State',
  ],
  openGraph: {
    title: 'Sell House As-Is - No Repairs Needed | KindKey Home Buyers',
    description:
      'Sell your house as-is in any condition. No repairs or cleaning needed. We buy houses in any condition throughout Washington State.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell House As-Is - No Repairs Needed',
    description:
      'Sell your house as-is in any condition. No repairs or cleaning needed. We buy houses in any condition throughout Washington State.',
  },
};

const asIsFaq = [
  {
    question: 'What does as-is mean?',
    answer:
      "As-is means we buy your house in its current condition, without requiring any repairs, cleaning, or improvements. Whether your house needs minor cosmetic fixes or major structural repairs, we'll make you a fair cash offer based on its current state.",
  },
  {
    question: 'Do I need to clean or repair anything before selling?',
    answer:
      "No! You don't need to clean, repair, or improve anything. We buy houses exactly as they are. This saves you time, money, and stress. You can sell your house in any condition.",
  },
  {
    question: 'What types of properties do you buy as-is?',
    answer:
      'We buy all types of residential properties as-is: single-family homes, condos, townhouses, multi-family properties, and even land. Whether the property needs minor fixes, major repairs, or is in foreclosure, we can make you an offer.',
  },
  {
    question: 'Will I get a fair offer for my house in its current condition?',
    answer:
      'Yes. We evaluate your property based on its location, condition, and current market value. We provide a written, no-obligation cash offer that explains the proposed purchase terms.',
  },
  {
    question: 'How quickly can you close on an as-is property?',
    answer:
      "We can close on your timeline, typically within 7-14 days, but we work with your schedule. Whether you need to close quickly or need more time, we're flexible. Every situation is unique.",
  },
];

export default function SellHouseAsIsPage() {
  const heroVideoSrc = process.env.NEXT_PUBLIC_HERO_VIDEO_SRC ?? '/hero-loop.mp4';
  const heroPosterSrc = process.env.NEXT_PUBLIC_HERO_IMAGE_SRC ?? defaultHeroImage;
  const hasVideoBackground = !!(heroVideoSrc && heroVideoSrc !== 'none');
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kindkeyhomebuyers.com';

  return (
    <>
      <Script
        type="application/ld+json"
        id="faq-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: asIsFaq.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      {/* Hero Section */}
      <HeroSection
        heroVideoSrc={heroVideoSrc}
        heroPosterSrc={heroPosterSrc}
        backgroundImageSrc="/logo2.avif"
        hasVideoBackground={hasVideoBackground}
        companyName={companyName}
      />

      {/* Trust Badges */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-text-primary md:text-4xl">
            How It Works
          </h2>
          <p className="mb-12 text-center text-xl text-text-secondary">
            Sell your house as-is directly to a principal buyer
          </p>
          <StepTimeline />
        </div>
      </section>

      {/* About Selling As-Is */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-text-primary md:text-4xl">
              Sell Your House As-Is — No Repairs Needed
            </h2>
            <div className="mb-8 rounded-lg border border-divider bg-white p-8 shadow-lg">
              <div className="prose prose-lg max-w-none text-text-secondary">
                <p className="mb-4 text-lg">
                  Tired of dealing with repairs, cleaning, and home improvements? We buy houses
                  exactly as they are—no repairs or cleaning needed. Whether your house needs minor
                  cosmetic fixes or major structural repairs, we&apos;ll make you a fair cash offer
                  based on its current condition.
                </p>
                <p className="mb-6 text-lg">
                  Selling your house as-is means you can skip the stress, time, and money that comes
                  with preparing a house for sale. KindKey handles repairs after purchase and
                  coordinates its side of the transaction with the closing agent.
                </p>
                <div className="rounded-lg border border-accent/20 bg-accent/10 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-text-primary">Why Sell As-Is?</h3>
                  <ul className="list-inside list-disc space-y-3 text-text-secondary">
                    <li>No repairs or renovations needed</li>
                    <li>No cleaning or staging required</li>
                    <li>Save time and money</li>
                    <li>Fast closing on your timeline</li>
                    <li>Fair, transparent cash offers</li>
                    <li>We buy houses in any condition</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-divider bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-text-primary">
                  Common Reasons to Sell As-Is
                </h3>
                <ul className="list-inside list-disc space-y-2 text-text-secondary">
                  <li>Inherited property that needs work</li>
                  <li>Facing foreclosure</li>
                  <li>Going through a divorce</li>
                  <li>Relocating quickly</li>
                  <li>Property needs major repairs</li>
                  <li>Don't want to deal with repairs</li>
                </ul>
              </div>

              <div className="rounded-lg border border-divider bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-text-primary">What We Buy As-Is</h3>
                <ul className="list-inside list-disc space-y-2 text-text-secondary">
                  <li>Single-family homes</li>
                  <li>Condos and townhouses</li>
                  <li>Multi-family properties</li>
                  <li>Houses needing repairs</li>
                  <li>Foreclosed properties</li>
                  <li>Properties in any condition</li>
                </ul>
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
            Frequently Asked Questions About Selling As-Is
          </h2>
          <FAQAccordion items={asIsFaq} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Sell Your House As-Is?"
        subtitle="Get your cash offer today. No repairs needed, no obligation."
      />
    </>
  );
}
