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
  const title = `Sell Your House As-Is in ${city.name}, WA — No Repairs Needed`;
  const description = `Sell your house as-is in ${city.name}, WA. No repairs needed. We buy houses in any condition. Water damage, fire damage, structural issues - we buy them all. Get a fair cash offer today.`;

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
      canonical: `${siteUrl}/areas/${slug}/sell-house-as-is`,
    },
  };
}

export default async function SellAsIsPage({ params }: { params: Promise<{ slug: string }> }) {
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
            mainEntity: intentFAQs['as-is'].map((faq) => ({
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
        intentType="as-is"
        h1={`Sell Your House As-Is in ${city.name}, WA`}
        valueProp={`We buy houses in any condition in ${city.name}. No repairs needed. No matter what condition your house is in, we'll make you a fair cash offer.`}
        benefits={[
          'Any Condition',
          'No Repairs Needed',
          'Repairs After Purchase',
          'Fair Cash Offer',
        ]}
        intentSpecificSection={{
          title: `We Buy Houses in Any Condition in ${city.name}`,
          content: (
            <div className="prose prose-lg max-w-none text-text-secondary">
              <p className="mb-4 text-lg">
                We truly buy houses as-is in {city.name}. No matter what condition your house is in,
                we'll make you a fair cash offer. You don't need to fix anything.
              </p>
              <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <ul className="list-inside list-disc space-y-2">
                  <li>Water damage</li>
                  <li>Fire damage</li>
                  <li>Structural issues</li>
                  <li>Foundation problems</li>
                  <li>Roof problems</li>
                </ul>
                <ul className="list-inside list-disc space-y-2">
                  <li>Plumbing issues</li>
                  <li>Electrical problems</li>
                  <li>Cosmetic updates needed</li>
                  <li>Foreclosure situations</li>
                  <li>Tenant-occupied properties</li>
                </ul>
              </div>
              <p className="text-lg">
                Whether your house in {city.name} needs minor cosmetic fixes or major repairs, we
                buy it as-is. We handle all the repairs after we purchase the property, so you don't
                have to worry about anything.
              </p>
            </div>
          ),
        }}
        faqs={intentFAQs['as-is']}
      />
    </>
  );
}
