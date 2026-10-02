import Navigation from '@/components/Navigation';
import Cta from '@/components/home/Cta';
import ArticleCards from '@/components/poradna/ArticleCards';
import { breadcrumbLd, ld, pageMetadata, SITE_URL } from '@/components/seo';
import { ARTICLES } from '@/content/articles';

export const metadata = pageMetadata({
  title: 'Poradna – grafika, tisková data a formáty',
  description:
    'Praktické návody od grafika Jakuba Kozla: formáty papíru v mm i pixelech, převod px na mm, rozměr vizitky, spadávka, příprava tiskových dat, RGB vs. CMYK a formáty loga.',
  path: '/poradna',
});

export default function PoradnaPage() {
  const listLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Poradna',
    url: `${SITE_URL}/poradna`,
    inLanguage: 'cs-CZ',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: ARTICLES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/poradna/${a.slug}`,
        name: a.title,
      })),
    },
  };

  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(listLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(breadcrumbLd([{ name: 'Poradna', path: '/poradna' }]))} />
      <Navigation />

      <section className="pr-hero">
        <p className="eyebrow">Poradna</p>
        <h1 className="section-title">
          Návody, se kterými <span className="grad-text">tisk dopadne dobře.</span>
        </h1>
        <p className="pr-lead">
          Odpovědi na otázky, které od klientů slyším nejčastěji. Jaký rozměr, kolik pixelů, proč tiskárna vrátila data
          a jaké soubory s logem kam patří.
        </p>
      </section>

      <section className="pr-list">
        <ArticleCards articles={ARTICLES} headingLevel={2} />
      </section>

      <Cta />
    </div>
  );
}
