'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from './LeadForm';

interface CityHeroSectionProps {
  cityName: string;
  cityDescription: string;
  heroVideoSrc: string | undefined;
  heroPosterSrc: string;
  backgroundImageSrc?: string;
  hasVideoBackground: boolean;
  companyName: string;
}

export default function CityHeroSection({
  cityName,
  cityDescription,
  heroVideoSrc,
  heroPosterSrc,
  backgroundImageSrc,
  hasVideoBackground,
  companyName,
}: CityHeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Parallax эффект: изображение движется медленнее чем скролл
  const parallaxOffset = scrollY * 0.5;

  // Выбираем изображение в зависимости от устройства
  const finalBackgroundImage = isMobile ? '/logo3.avif' : backgroundImageSrc || heroPosterSrc;

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          contain: 'layout style paint',
          willChange: 'auto',
        }}
      >
        {hasVideoBackground ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={finalBackgroundImage}
              className="h-full w-full object-cover opacity-40"
              style={{
                transform: `translateY(${parallaxOffset}px)`,
                willChange: 'transform',
              }}
              preload="metadata"
            >
              <source src={heroVideoSrc} type="video/mp4" />
            </video>
          </>
        ) : (
          <Image
            src={finalBackgroundImage}
            alt={`${companyName} logo with a golden retriever holding a key in front of a house`}
            fill
            className="object-cover object-top opacity-40"
            priority
            fetchPriority="high"
            quality={65}
            sizes="100vw"
            style={{
              transform: `translateY(calc(${parallaxOffset}px + 150px))`,
              willChange: 'transform',
            }}
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/95 to-white"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(240, 252, 255, 0.9), rgba(255, 255, 255, 1))',
            willChange: 'auto',
            contain: 'layout style paint',
          }}
          aria-hidden="true"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-8">
              <Image
                src={heroPosterSrc}
                alt={`${companyName} logo featuring a friendly golden retriever with a key`}
                width={320}
                height={213}
                priority
                fetchPriority="high"
                quality={70}
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"
                className="h-auto w-48 object-contain drop-shadow-md sm:w-56 md:w-64 lg:w-72 xl:w-80"
              />
            </div>
            <h1
              className="mb-6 text-balance text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl"
              style={{
                contain: 'layout',
                minHeight: '1.2em',
              }}
            >
              Sell Your House in {cityName}, WA — Fast & Fair
            </h1>
            <p className="mb-8 text-balance text-xl text-text-secondary">{cityDescription}</p>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#form"
                className="rounded-lg bg-divider px-8 py-4 text-center text-lg font-semibold text-white shadow-md transition-colors hover:bg-divider/90 hover:shadow-lg"
              >
                Get My Cash Offer
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-lg border-2 border-divider bg-transparent px-8 py-4 text-center text-lg font-semibold text-divider transition-colors hover:bg-divider/10"
              >
                Start in 60 seconds
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
              <span className="font-medium text-text-primary">Contact us:</span>
              <a
                href="tel:+12532604117"
                className="flex items-center gap-2 font-medium text-divider transition-colors hover:text-divider/80"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (253)260-4117
              </a>
              <a
                href="mailto:info@kindkeyhomebuyers.com"
                className="flex items-center gap-2 font-medium text-divider transition-colors hover:text-divider/80"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@kindkeyhomebuyers.com
              </a>
            </div>
          </div>

          <div id="form" className="rounded-lg border border-divider bg-white p-8 shadow-xl">
            <h2 className="mb-6 text-2xl font-bold text-text-primary">Get Your Cash Offer</h2>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
