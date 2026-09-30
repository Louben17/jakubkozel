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

/** Drobečková navigace pro Google (zobrazuje se ve výsledcích místo URL) */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Úvod', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === '/' ? '' : it.path}`,
    })),
  };
}

/** Schéma konkrétní služby (obor) navázané na osobu Jakuba Kozla */
export function serviceLd(s: { title: string; lead: string; href: string; tiles: { title: string; description: string }[]; gallery?: { src: string }[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    serviceType: s.title,
    description: s.lead,
    url: `${SITE_URL}${s.href}`,
    provider: { '@id': `${SITE_URL}/#person` },
    areaServed: { '@type': 'Country', name: 'Česko' },
    ...(s.gallery?.length ? { image: s.gallery.map((g) => `${SITE_URL}${g.src}`) } : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: s.title,
      itemListElement: s.tiles.map((t) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: t.title, description: t.description },
      })),
    },
  };
}

/** <script type="application/ld+json"> obsah */
export const ld = (data: unknown) => ({ __html: JSON.stringify(data) });
