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
  const title = `Sell My House Fast in ${city.name}, WA — Close in 7-14 Days`;
  const description = `Sell your house fast in ${city.name}, WA. Close in as little as 7 days. Pick your closing date. No repairs needed. Get a fair cash offer today.`;

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
      canonical: `${siteUrl}/areas/${slug}/sell-my-house-fast`,
    },
  };
}

export default async function SellFastPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kindkeyhomebuyers.com';

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
            mainEntity: intentFAQs['sell-fast'].map((faq) => ({
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
        intentType="sell-fast"
        h1={`Sell My House Fast in ${city.name}, WA`}
        valueProp={`Close in days, not months. We buy houses fast in ${city.name} and throughout Washington State.`}
        benefits={[
          'Close in 7-14 Days',
          'Pick Your Closing Date',
          'No Repairs Needed',
          'No Agent Commission Charged by KindKey',
        ]}
        intentSpecificSection={{
          title: `Close Fast in ${city.name} - Pick Your Date`,
          content: (
            <div className="prose prose-lg max-w-none text-text-secondary">
              <p className="mb-4 text-lg">
                Need to sell your house fast in {city.name}? We can close in as little as 7 days,
                but we work with your timeline. Whether you need to close quickly or need more time
                to move out, we're flexible.
              </p>
              <ul className="mb-4 list-inside list-disc space-y-3">
                <li>Close in as little as 7 days</li>
                <li>Pick your closing date</li>
                <li>Flexible move-out dates</li>
                <li>Fast closing for urgent situations</li>
                <li>No waiting around</li>
              </ul>
              <p className="text-lg">
                Most transactions in {city.name} close within 7-14 days, but we can accommodate your
                schedule. We understand that sometimes you need to move fast, and we're here to
                help.
              </p>
            </div>
          ),
        }}
        faqs={intentFAQs['sell-fast']}
      />
    </>
  );
}
