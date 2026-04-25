import type { MetadataRoute } from 'next';
import { SITE_URL, STATIC_ROUTES } from './lib/seo';

export const dynamic = 'force-static';

const LAST_MODIFIED = new Date('2026-03-03T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: route === '/' || route === '/en' ? 'weekly' : route.endsWith('.pdf') ? 'yearly' : 'monthly',
    priority: route === '/' || route === '/en' ? 1 : route.endsWith('.pdf') ? 0.5 : 0.8
  }));
}
