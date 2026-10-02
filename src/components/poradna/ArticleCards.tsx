import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { SERVICES } from '../services';
import { articleImage, type Article } from '@/content/articles';

// Karty článků z poradny (výpis, související články, podstránky oborů)
export default function ArticleCards({ articles, headingLevel = 3 }: { articles: Article[]; headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as const;
  return (
    <div className="art-cards">
      {articles.map((a) => {
        const s = SERVICES.find((x) => x.slug === a.service)!;
        return (
          <Link
            key={a.slug}
            href={`/poradna/${a.slug}`}
            className="art-card"
            style={{ '--bg': s.bg, '--accent': s.accent } as CSSProperties}
          >
            <span className="art-card-photo">
              <Image src={articleImage(a.slug)} alt="" fill sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 380px" style={{ objectFit: 'cover' }} />
            </span>
            <span className="art-card-tag" style={{ color: s.ink }}>
              {s.title}
            </span>
            <H className="art-card-title">{a.title}</H>
            <p className="art-card-lead">{a.lead}</p>
            <span className="art-card-foot">
              {a.minutes} min čtení
              <span className="other-arrow" style={{ background: s.accent }} aria-hidden="true">
                →
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
