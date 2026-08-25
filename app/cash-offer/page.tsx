import type { Metadata } from 'next';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import StepTimeline from '@/components/StepTimeline';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { APPROVED_TRANSACTION_DISCLOSURE } from '@/data/disclosures';

// Lazy load below-the-fold components
const ReviewsSection = dynamic(() => import('@/components/ReviewsSection'), {
  ssr: true,
});

const companyName = 'KindKey Home Buyers';
const defaultHeroImage = '/logo.avif';

export const metadata: Metadata = {
  title: 'Get Cash Offer - Receive Your Offer Within 24 Hours | KindKey Home Buyers',
  description:
    'Get your no-obligation cash offer within 24 hours. Fast, fair, and transparent cash offers for houses throughout Washington State. No repairs needed.',
  keywords: [
    'get cash offer',
    'cash offer for house',
    'cash home buyer',
    'get cash offer fast',
    'cash offer within 24 hours',
    'no obligation cash offer',
    'Washington State',
  ],
  openGraph: {
    title: 'Get Cash Offer - Receive Your Offer Within 24 Hours',
    description:
      'Get your no-obligation cash offer within 24 hours. Fast, fair, and transparent cash offers for houses throughout Washington State.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Cash Offer - Receive Your Offer Within 24 Hours',
    description:
      'Get your no-obligation cash offer within 24 hours. Fast, fair, and transparent cash offers for houses throughout Washington State.',
  },
};

const cashOfferFaq = [
  {
    question: 'How quickly will I receive my cash offer?',
    answer:
      "We typically provide cash offers within 24 hours of receiving your property information. After a quick walkthrough (virtual or in-person), we'll present you with a transparent, no-obligation cash offer.",
  },
  {
    question: 'Is the cash offer free and with no obligation?',
    answer:
      'Yes. KindKey does not charge you to submit property information or request an offer, and the offer comes with no obligation. You are free to accept, decline, or take time to think it over.',
  },
  {
    question: 'How do you determine the cash offer amount?',
    answer:
      'We evaluate your property based on its location, condition, size, and current market value. We consider comparable sales in your area and provide a fair, transparent cash offer that reflects the true value of your property.',
  },
  {
    question: 'Will the cash offer change after the walkthrough?',
    answer:
      'Our initial cash offer is based on the information you provide. After the walkthrough, we may adjust the offer if there are significant differences from what was described, but we always communicate any changes transparently. Most offers remain the same.',
  },
  {
    question: 'What happens after I accept the cash offer?',
    answer: `Once you accept our cash offer, KindKey coordinates its side of the purchase with escrow or the closing agent. We can typically close within 7-14 days while working with your schedule. ${APPROVED_TRANSACTION_DISCLOSURE}`,
  },
  {
    question: 'Do I need to make repairs before getting a cash offer?',
    answer:
      "No! We buy houses in any condition. You don't need to clean, repair, or improve anything. We'll make you a cash offer based on your property's current condition, whether it needs minor fixes or major repairs.",
  },
];

export default function CashOfferPage() {
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
            mainEntity: cashOfferFaq.map((faq) => ({
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
            How to Get Your Cash Offer
          </h2>
          <p className="mb-12 text-center text-xl text-text-secondary">
            Get your no-obligation cash offer within 24 hours
          </p>
          <StepTimeline />
        </div>
      </section>

      {/* About Getting Cash Offer */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-text-primary md:text-4xl">
              Get Your Cash Offer — Fast & Fair
            </h2>
            <div className="mb-8 rounded-lg border border-divider bg-white p-8 shadow-lg">
              <div className="prose prose-lg max-w-none text-text-secondary">
                <p className="mb-4 text-lg">
                  Ready to sell your house? Get your no-obligation cash offer within 24 hours. Our
                  process is simple, transparent, and designed to get you a fair cash offer
                  quickly—without the hassle of traditional real estate sales.
                </p>
                <p className="mb-6 text-lg">
                  We evaluate your property based on its location, condition, and current market
                  value. After a quick walkthrough (virtual or in-person), we&apos;ll present you
                  with a transparent cash offer. The written purchase agreement explains the
                  proposed terms and how closing-cost responsibility is allocated.
                </p>
                <div className="rounded-lg border border-accent/20 bg-accent/10 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-text-primary">
                    Why Get a Cash Offer From Us?
                  </h3>
                  <ul className="list-inside list-disc space-y-3 text-text-secondary">
                    <li>Receive your offer within 24 hours</li>
                    <li>No obligation—free to accept or decline</li>
                    <li>Fair, transparent cash offers</li>
                    <li>No repairs or cleaning needed</li>
                    <li>Fast closing on your timeline</li>
                    <li>No agent commission charged by KindKey</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-divider bg-white p-6 text-center shadow-lg">
                <div className="mb-4 text-4xl">⚡</div>
                <h3 className="mb-2 text-xl font-semibold text-text-primary">Fast Process</h3>
                <p className="text-text-secondary">
                  Get your cash offer within 24 hours. No waiting weeks for appraisals or market
                  analysis.
                </p>
              </div>

              <div className="rounded-lg border border-divider bg-white p-6 text-center shadow-lg">
                <div className="mb-4 text-4xl">💰</div>
                <h3 className="mb-2 text-xl font-semibold text-text-primary">Fair Offers</h3>
                <p className="text-text-secondary">
                  We provide transparent, fair cash offers based on current market value and
                  property condition.
                </p>
              </div>

              <div className="rounded-lg border border-divider bg-white p-6 text-center shadow-lg">
                <div className="mb-4 text-4xl">✅</div>
                <h3 className="mb-2 text-xl font-semibold text-text-primary">No Obligation</h3>
                <p className="text-text-secondary">
                  Receiving a cash offer is completely free with no obligation. You're free to
                  accept or decline.
                </p>
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
            Frequently Asked Questions About Cash Offers
          </h2>
          <FAQAccordion items={cashOfferFaq} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Your Cash Offer?"
        subtitle="Submit your information and receive your no-obligation cash offer within 24 hours."
      />
    </>
  );
}
