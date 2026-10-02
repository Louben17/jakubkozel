import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { CSSProperties } from 'react';
import Navigation from '@/components/Navigation';
import Cta from '@/components/home/Cta';
import FaqList from '@/components/FaqList';
import ArticleCards from '@/components/poradna/ArticleCards';
import { SERVICES } from '@/components/services';
import { articleLd, breadcrumbLd, ld, pageMetadata } from '@/components/seo';
import { ARTICLES, articleBySlug } from '@/content/articles';
import { BODIES } from '@/content/poradna';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const a = articleBySlug((await params).slug);
  if (!a) return {};
  return pageMetadata({
    title: a.title,
    description: a.description,
    path: `/poradna/${a.slug}`,
    image: `/poradna/${a.slug}/opengraph-image`,
    article: { published: a.published, updated: a.updated },
  });
}

const date = (iso: string) => new Date(iso).toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' });

export default async function ArticlePage({ params }: Props) {
  const a = articleBySlug((await params).slug);
  if (!a) notFound();
  const s = SERVICES.find((x) => x.slug === a.service)!;
  const Body = BODIES[a.slug];
  // nejdřív články ze stejného oboru, pak ostatní
  const related = [...ARTICLES.filter((x) => x.service === a.service), ...ARTICLES.filter((x) => x.service !== a.service)]
    .filter((x) => x.slug !== a.slug)
    .slice(0, 3);

  return (
    <div className="page" style={{ '--accent': s.accent, '--ink-accent': s.ink, '--bg': s.bg } as CSSProperties}>
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(articleLd(a))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={ld(
          breadcrumbLd([
            { name: 'Poradna', path: '/poradna' },
            { name: a.short, path: `/poradna/${a.slug}` },
          ]),
        )}
      />
      <Navigation />

      <article>
        <header className="art-hero">
          <div className="art-hero-card">
            <nav className="art-crumbs" aria-label="Drobečková navigace">
              <Link href="/poradna">Poradna</Link>
              <span aria-hidden="true">/</span>
              <Link href={s.href}>{s.title}</Link>
            </nav>
            <h1 className="art-title">{a.title}</h1>
            <p className="art-lead">{a.lead}</p>
            <p className="art-meta">
              <Link href="/o-mne">Jakub Kozel</Link>
              <span aria-hidden="true">·</span>
              <time dateTime={a.updated ?? a.published}>{date(a.updated ?? a.published)}</time>
              <span aria-hidden="true">·</span>
              <span>{a.minutes} min čtení</span>
            </p>
          </div>
        </header>

        <div className="prose">
          <Body />
        </div>
      </article>

      {a.faq && <FaqList items={a.faq} accent={s.accent} bg={s.bg} />}

      <section className="art-help">
        <div className="art-help-card">
          <div>
            <p className="eyebrow">{s.title}</p>
            <h2>Nechcete to řešit sami?</h2>
            <p>
              Připravím vám grafiku i data pro tiskárnu tak, aby všechno sedělo napoprvé. Napište, co potřebujete, a pošlu
              vám nezávaznou nabídku.
            </p>
          </div>
          <div className="svc-actions">
            <Link href={`/kontakt?obor=${s.slug}#poptavka`} className="svc-link" style={{ background: s.button }}>
              Nezávazně poptat <span aria-hidden="true">→</span>
            </Link>
            <Link href={s.href} className="svc-link ghost">
              {s.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="art-related">
        <p className="eyebrow">Další články z poradny</p>
        <ArticleCards articles={related} />
      </section>

      <Cta />
    </div>
  );
}
