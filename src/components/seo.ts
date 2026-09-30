import { SERVICES } from './services';

export const SITE_URL = 'https://www.jakubkozel.cz';
export const NAME = 'Jakub Kozel';
export const EMAIL = 'jakubkozel@seznam.cz';
export const PHONE = '+420728890062';

// Strukturovaná data (schema.org) – Google z nich pozná, kdo je Jakub Kozel a co dělá
export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: NAME,
      givenName: 'Jakub',
      familyName: 'Kozel',
      jobTitle: 'Grafický designér',
      description: 'Grafický designér – loga a vizuální identity, DTP sazba, tvorba webů a tiskoviny.',
      url: SITE_URL,
      email: `mailto:${EMAIL}`,
      telephone: PHONE,
      image: `${SITE_URL}/jakub-kozel.webp`,
      knowsAbout: ['Grafický design', 'Vizuální identita', 'Logo', 'DTP', 'Sazba knih', 'Tvorba webů', 'Webdesign', 'Tiskoviny'],
      nationality: { '@type': 'Country', name: 'Česko' },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: NAME,
      alternateName: ['jakubkozel.cz', 'Jakub Kozel – grafik'],
      inLanguage: 'cs-CZ',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: `${NAME} – grafika, DTP, weby a tiskoviny`,
      url: SITE_URL,
      email: EMAIL,
      telephone: PHONE,
      image: `${SITE_URL}/opengraph-image`,
      founder: { '@id': `${SITE_URL}/#person` },
      areaServed: { '@type': 'Country', name: 'Česko' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Služby',
        itemListElement: SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.lead, url: `${SITE_URL}${s.href}` },
        })),
      },
    },
  ],
};

/** Kompletní metadata podstránky (Next metadata se slučují jen mělce, openGraph by se jinak přepsal celý) */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }) {
  const full = `${title} | ${NAME}`;
  const image = { url: '/opengraph-image', width: 1200, height: 630, alt: `${NAME} – grafika, DTP, weby a tiskoviny` };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', locale: 'cs_CZ', siteName: NAME, url: path, title: full, description, images: [image] },
    twitter: { card: 'summary_large_image', title: full, description, images: [image.url] },
  } as const;
}
