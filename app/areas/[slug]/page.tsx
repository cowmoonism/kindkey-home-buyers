import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { getCityBySlug, cities } from '@/data/cities';
import CityPageClient from '@/components/CityPageClient';

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

  return {
    title: `Sell Your House in ${city.name}, WA - Cash Offer | Washington State`,
    description: `${city.description} Buying houses in ${city.name} and throughout Washington State.`,
    openGraph: {
      title: `Sell Your House in ${city.name}, WA - Cash Offer`,
      description: `${city.description} Buying houses in ${city.name} and throughout Washington State.`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Sell Your House in ${city.name}, WA - Cash Offer`,
      description: `${city.description} Buying houses in ${city.name} and throughout Washington State.`,
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kindkeyhomebuyers.com';
  const heroVideoSrc = process.env.NEXT_PUBLIC_HERO_VIDEO_SRC ?? '/hero-loop.mp4';
  const heroPosterSrc = process.env.NEXT_PUBLIC_HERO_IMAGE_SRC ?? '/logo.avif';
  const hasVideoBackground = !!(
    process.env.NEXT_PUBLIC_HERO_VIDEO_SRC && process.env.NEXT_PUBLIC_HERO_VIDEO_SRC !== 'none'
  );

  return (
    <>
      <Script
        type="application/ld+json"
        id="local-business-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'KindKey Home Buyers LLC',
            description: `Principal real estate investor and cash home buyer purchasing houses in ${city.name}, WA and throughout Washington State`,
            url: siteUrl,
            areaServed: [
              {
                '@type': 'State',
                name: 'Washington',
                addressRegion: 'WA',
              },
              {
                '@type': 'City',
                name: city.name,
                addressRegion: 'WA',
              },
            ],
            serviceType: 'Cash Home Buyer',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'WA',
            },
          }),
        }}
      />
      <Script
        type="application/ld+json"
        id="breadcrumb-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: siteUrl,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Areas We Buy',
                item: `${siteUrl}/areas`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: `${city.name}, WA`,
                item: `${siteUrl}/areas/${city.slug}`,
              },
            ],
          }),
        }}
      />
      {/* City Page Content - Client Component handles Ads/SEO mode */}
      <CityPageClient
        city={{
          name: city.name,
          slug: city.slug,
          description: city.description,
          intro: city.intro,
          faq: city.faq,
        }}
        heroVideoSrc={heroVideoSrc}
        heroPosterSrc={heroPosterSrc}
        backgroundImageSrc="/logo2.avif"
        hasVideoBackground={hasVideoBackground}
        companyName="KindKey Home Buyers"
        siteUrl={siteUrl}
      />
    </>
  );
}
