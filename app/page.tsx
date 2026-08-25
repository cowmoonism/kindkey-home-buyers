import type { Metadata } from 'next';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import StepTimeline from '@/components/StepTimeline';
import { caseStudies } from '@/data/cases';
import { faqData } from '@/data/faq';

// Lazy load below-the-fold components
const CityGrid = dynamic(() => import('@/components/CityGrid'), {
  ssr: true,
});
const VideoCase = dynamic(() => import('@/components/VideoCase'), {
  ssr: true,
});
const ReviewsSection = dynamic(() => import('@/components/ReviewsSection'), {
  ssr: true,
});
const FAQAccordion = dynamic(() => import('@/components/FAQAccordion'), {
  ssr: true,
});
const CTASection = dynamic(() => import('@/components/CTASection'), {
  ssr: true,
});

const companyName = 'KindKey Home Buyers';
const companyTagline = 'Life happens — we make selling simple, private, and fast';
const defaultHeroImage = '/logo.avif';

// Функция для извлечения YouTube ID из URL
function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  if (url.length === 11 && /^[a-zA-Z0-9_-]+$/.test(url)) {
    return url;
  }
  return null;
}

export const metadata: Metadata = {
  title: `${companyName} — Sell Your House Fast & Fair Throughout Washington State`,
  description: `${companyName}. ${companyTagline}. Buying houses throughout Washington State with transparent, as-is cash offers. Primary areas: Kent, Federal Way, Auburn, Milton, Tacoma, Edgewood, Puyallup, WA.`,
  openGraph: {
    title: `${companyName} — Sell Your House Fast & Fair Throughout Washington State`,
    description: `${companyName}. ${companyTagline}. Buying houses throughout Washington State with transparent, as-is cash offers. Primary areas: Kent, Federal Way, Auburn, Milton, Tacoma, Edgewood, Puyallup, WA.`,
    images: [
      {
        url: defaultHeroImage,
        alt: `${companyName} logo with a golden retriever holding a key`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyName} — Sell Your House Fast & Fair Throughout Washington State`,
    description: `${companyName}. ${companyTagline}. Buying houses throughout Washington State with transparent, as-is cash offers. Primary areas: Kent, Federal Way, Auburn, Milton, Tacoma, Edgewood, Puyallup, WA.`,
    images: [
      {
        url: defaultHeroImage,
        alt: `${companyName} logo with a golden retriever holding a key`,
      },
    ],
  },
};

export default function HomePage() {
  const heroVideoSrc = process.env.NEXT_PUBLIC_HERO_VIDEO_SRC ?? '/hero-loop.mp4';
  const heroPosterSrc = process.env.NEXT_PUBLIC_HERO_IMAGE_SRC ?? defaultHeroImage;
  const hasVideoBackground = !!(heroVideoSrc && heroVideoSrc !== 'none');

  // Создаем VideoObject разметку для первых 4 YouTube видео
  const videoObjects = caseStudies
    .slice(0, 4)
    .filter((caseStudy) => caseStudy.youtubeUrl)
    .map((caseStudy) => {
      const youtubeId = getYouTubeId(caseStudy.youtubeUrl!);
      if (!youtubeId) return null;

      return {
        '@type': 'VideoObject',
        name: `${caseStudy.address} - ${caseStudy.city} Success Story`,
        description: caseStudy.description,
        thumbnailUrl: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
        uploadDate: new Date().toISOString(),
        contentUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
        embedUrl: `https://www.youtube.com/embed/${youtubeId}`,
      };
    })
    .filter((video) => video !== null);

  return (
    <>
      {videoObjects.length > 0 &&
        videoObjects.map((video, index) => (
          <Script
            key={`video-schema-${index}`}
            type="application/ld+json"
            id={`video-schema-${index}`}
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                ...video,
              }),
            }}
          />
        ))}
      <Script
        type="application/ld+json"
        id="faq-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map((faq) => ({
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
      <Script
        type="application/ld+json"
        id="organization-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: companyName,
            url: 'https://kindkeyhomebuyers.com',
            logo: {
              '@type': 'ImageObject',
              url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kindkeyhomebuyers.com'}${heroPosterSrc}`,
              caption: `${companyName} logo — ${companyTagline}`,
            },
            slogan: companyTagline,
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
            Sell directly to a local principal buyer
          </p>
          <StepTimeline />
        </div>
      </section>

      {/* Areas We Buy */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-text-primary md:text-4xl">
            Buying Houses Throughout Washington State
          </h2>
          <p className="mb-4 text-center text-xl text-text-secondary">
            We buy houses throughout Washington State. Our primary areas include Kent, Federal Way,
            Auburn, Milton, Tacoma, Edgewood, and Puyallup, but we purchase homes from homeowners
            across the entire state.
          </p>
          <p className="mb-12 text-center text-lg text-text-secondary">
            Whether you're in Seattle, Tacoma, Spokane, or any other city in Washington, we're here
            to buy your house fast for cash.
          </p>
          <CityGrid />
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-text-primary md:text-4xl">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudies.slice(0, 4).map((caseStudy, index) => (
              <VideoCase key={caseStudy.id} caseStudy={caseStudy} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/success" className="font-semibold text-divider hover:underline">
              View All Success Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* FAQ */}
      <section className="bg-primary py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-text-primary md:text-4xl">
            Frequently Asked Questions
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
