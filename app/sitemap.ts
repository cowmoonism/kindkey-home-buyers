import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kindkeyhomebuyers.com';
  const now = new Date();

  const routes = [
    '',
    '/how-it-works',
    '/success',
    '/about',
    '/contact',
    '/thank-you',
    '/privacy',
    '/terms',
    '/sell-house-as-is',
    '/cash-offer',
    '/sell-house-washington',
  ];

  const cityRoutes = cities.map((city) => `/areas/${city.slug}`);

  // Intent pages for each city
  const intentTypes = ['sell-my-house-fast', 'cash-offer', 'sell-house-as-is'];
  const cityIntentRoutes = cities.flatMap((city) =>
    intentTypes.map((intent) => `/areas/${city.slug}/${intent}`)
  );

  const allRoutes = [...routes, ...cityRoutes, ...cityIntentRoutes];

  return allRoutes.map((route) => {
    // Set priority based on page importance
    let priority = 0.8; // default
    if (route === '') {
      priority = 1.0; // homepage
    } else if (route === '/sell-house-washington' || route.startsWith('/areas/')) {
      // City hub pages get 0.9, intent pages get 0.85
      if (route.match(/\/areas\/[^/]+\/(sell-my-house-fast|cash-offer|sell-house-as-is)$/)) {
        priority = 0.85; // intent pages
      } else {
        priority = 0.9; // city hub pages
      }
    } else if (['/how-it-works', '/contact', '/about'].includes(route)) {
      priority = 0.85; // important pages
    } else if (route === '/thank-you') {
      priority = 0.5; // lower priority (conversion page)
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority,
    };
  });
}
