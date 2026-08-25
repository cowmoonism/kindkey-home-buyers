import type { Metadata } from 'next';
import Script from 'next/script';
import VideoCase from '@/components/VideoCase';
import CTASection from '@/components/CTASection';
import { caseStudies } from '@/data/cases';

export const metadata: Metadata = {
  title: 'Success Stories - Real Results from Kent & Federal Way',
  description:
    'See real success stories from homeowners in Kent and Federal Way who sold their houses fast for cash. No repairs, no hassle.',
};

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

export default function SuccessPage() {
  // Создаем VideoObject разметку для каждого YouTube видео
  const videoObjects = caseStudies
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
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-text-primary md:text-5xl">
              Success Stories
            </h1>
            <p className="text-xl text-text-secondary">
              Real results from homeowners in Kent and Federal Way who sold their houses fast for
              cash.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudies.map((caseStudy, index) => (
              <VideoCase key={caseStudy.id} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Join Our Success Stories?"
        subtitle="Get your cash offer today and learn about selling directly to KindKey."
      />
    </>
  );
}
