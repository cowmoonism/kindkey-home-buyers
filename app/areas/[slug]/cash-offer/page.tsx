import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { getCityBySlug, cities } from '@/data/cities';
import { intentFAQs } from '@/data/intentFAQs';
import IntentPageTemplate from '@/components/IntentPageTemplate';

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) {
    return {
      title: 'City Not Found',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kindkeyhomebuyers.com';
  const title = `Get a Cash Offer in ${city.name}, WA — Fair & Transparent`;
  const description = `Get a fair cash offer for your house in ${city.name}, WA. No obligation. Transparent process. Receive your offer within 24 hours. We buy houses as-is.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${siteUrl}/areas/${slug}/cash-offer`,
    },
  };
}

export default async function CashOfferPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  return (
    <>
      {/* FAQ JSON-LD Schema */}
      <Script
        type="application/ld+json"
        id="faq-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: intentFAQs['cash-offer'].map((faq) => ({
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

      <IntentPageTemplate
        cityName={city.name}
        citySlug={city.slug}
        intentType="cash-offer"
        h1={`Get a Cash Offer in ${city.name}, WA`}
        valueProp={`Fair cash offer. No obligation. Transparent process. We buy houses in ${city.name} and throughout Washington State.`}
        benefits={[
          'Fair Cash Offer',
          'No Obligation',
          'Transparent Process',
          'No Agent Commission Charged by KindKey',
        ]}
        intentSpecificSection={{
          title: `Fair Cash Offer in ${city.name} - No Obligation`,
          content: (
            <div className="prose prose-lg max-w-none text-text-secondary">
              <p className="mb-4 text-lg">
                Get a fair, transparent cash offer for your house in {city.name}. Our offers are
                competitive, and there's no obligation - you can review the offer and decide.
              </p>
              <ul className="mb-4 list-inside list-disc space-y-3">
                <li>Fair, competitive cash offers</li>
                <li>No obligation - review and decide</li>
                <li>No separate service or assignment fee charged by KindKey</li>
                <li>Receive your offer within 24 hours</li>
                <li>Compare with other offers</li>
              </ul>
              <p className="text-lg">
                We understand the {city.name} market and provide fair cash offers based on your
                property's location, condition, and current market value. After a quick walkthrough
                (virtual or in-person), we'll give you a transparent, no-obligation cash offer.
              </p>
            </div>
          ),
        }}
        faqs={intentFAQs['cash-offer']}
      />
    </>
  );
}
