import { ImageResponse } from 'next/og';
import { ARTICLES, articleBySlug } from '@/content/articles';
import { SERVICES } from '@/components/services';

// Náhled článku při sdílení: barva oboru, název a podpis webu
export const alt = 'Poradna – Jakub Kozel';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function ArticleOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const a = articleBySlug((await params).slug)!;
  const s = SERVICES.find((x) => x.slug === a.service)!;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: s.bg,
          color: '#1d1d24',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 28, fontWeight: 700, letterSpacing: 4, color: s.ink }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: s.accent }} />
          PORADNA · {s.title.toUpperCase()}
        </div>
        <div style={{ display: 'flex', fontSize: a.title.length > 60 ? 62 : 72, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2 }}>
          {a.title}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28, color: '#5d6070' }}>
          <span>Jakub Kozel</span>
          <span>jakubkozel.cz</span>
        </div>
      </div>
    ),
    size,
  );
}
