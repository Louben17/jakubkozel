import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { ARTICLES, articleBySlug } from '@/content/articles';
import { SERVICES } from '@/components/services';

// Náhled článku při sdílení: vlevo barva oboru a název, vpravo hero fotka
export const alt = 'Poradna – Jakub Kozel';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function ArticleOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const a = articleBySlug((await params).slug)!;
  const s = SERVICES.find((x) => x.slug === a.service)!;
  // výřez 620 × 630 (JPEG – generátor neumí WebP)
  const photo = await readFile(join(process.cwd(), 'src/content/poradna/og', `${a.slug}.jpg`));
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: s.bg, color: '#1d1d24' }}>
        <div style={{ width: 580, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '60px 48px 56px 60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 24, fontWeight: 700, letterSpacing: 4, color: s.ink }}>
            <div style={{ width: 16, height: 16, borderRadius: 8, background: s.accent }} />
            PORADNA
          </div>
          <div style={{ display: 'flex', fontSize: a.title.length > 60 ? 46 : 52, lineHeight: 1.12, letterSpacing: -1 }}>{a.title}</div>
          <div style={{ display: 'flex', fontSize: 26, color: '#5d6070' }}>Jakub Kozel · jakubkozel.cz</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/jpeg;base64,${photo.toString('base64')}`} width={620} height={630} alt="" />
      </div>
    ),
    size,
  );
}
