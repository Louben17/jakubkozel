import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/components/seo';
import { SERVICES } from '@/components/services';
import { ARTICLES } from '@/content/articles';

// Mapa webu včetně obrázků (Google je pak snáz najde i ve vyhledávání obrázků)
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
      images: [`${SITE_URL}/opengraph-image`],
    },
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}${s.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      images: (s.gallery ?? []).map((g) => `${SITE_URL}${g.src}`),
    })),
    {
      url: `${SITE_URL}/o-mne`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
      images: [`${SITE_URL}/jakub-kozel.webp`],
    },
    { url: `${SITE_URL}/kontakt`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    {
      url: `${SITE_URL}/poradna`,
      lastModified: new Date(Math.max(...ARTICLES.map((a) => +new Date(a.updated ?? a.published)))),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...ARTICLES.map((a) => ({
      url: `${SITE_URL}/poradna/${a.slug}`,
      lastModified: new Date(a.updated ?? a.published),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      images: [`${SITE_URL}/poradna/${a.slug}.webp`],
    })),
  ];
}
