import type { MetadataRoute } from 'next';
import { SITE_URL, STATIC_ROUTES } from './lib/seo';

export const dynamic = 'force-static';

const LAST_MODIFIED = new Date('2026-04-25T00:00:00.000Z');

function routePriority(route: string): number {
  if (route === '/' || route === '/en') return 1;
  if (route.endsWith('.pdf')) return 0.7;
  if (route.startsWith('/guides/') || route.endsWith('/guide')) return 0.9;
  if (route.startsWith('/fishmeal-buyers')) return 0.85;
  return 0.8;
}

function routeChangeFrequency(route: string): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (route === '/' || route === '/en') return 'weekly';
  if (route.endsWith('.pdf')) return 'yearly';
  if (route.startsWith('/guides/') || route.endsWith('/guide')) return 'monthly';
  return 'monthly';
}

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: routeChangeFrequency(route),
    priority: routePriority(route)
  }));
}
