import { ImageResponse } from 'next/og';
import { JAKUB_PATHS, KOZEL_PATHS } from '@/components/home/signaturePaths';
import { BRAND_STOPS_HEX } from '@/components/brand';

// Náhled při sdílení odkazu (Facebook, LinkedIn, WhatsApp, Google…)
export const alt = 'Jakub Kozel – grafika, DTP, weby a tiskoviny';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// podpis jako samostatné SVG se stejným přechodem jako na webu
function signatureSvg() {
  const stops = BRAND_STOPS_HEX.map((s) => `<stop offset="${s.offset}" stop-color="${s.color}"/>`).join('');
  const grad = (id: string, dx: number, dy: number) =>
    `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${130 - dx}" y1="${260 - dy}" x2="${700 - dx}" y2="${400 - dy}">${stops}</linearGradient>`;
  const paths = (list: string[]) => list.map((d) => `<path d="${d}"/>`).join('');
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 800 520" width="800" height="520">` +
    `<defs>${grad('a', 50, 50)}${grad('b', 150, 270)}</defs>` +
    `<g transform="translate(50 50)" fill="url(#a)">${paths(JAKUB_PATHS)}</g>` +
    `<g transform="translate(150 270)" fill="url(#b)">${paths(KOZEL_PATHS)}</g></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
          backgroundImage:
            'radial-gradient(circle at 12% 20%, rgba(255,209,212,1) 0%, rgba(255,209,212,0) 45%), radial-gradient(circle at 88% 85%, rgba(201,241,238,1) 0%, rgba(201,241,238,0) 45%)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={signatureSvg()} width={620} height={403} alt="" />
        <div style={{ marginTop: 28, fontSize: 30, letterSpacing: 8, color: '#5d6070', fontWeight: 600 }}>
          GRAFIKA · DTP · WEBY · TISKOVINY
        </div>
        <div style={{ marginTop: 14, fontSize: 24, color: '#9a9dab' }}>jakubkozel.cz</div>
      </div>
    ),
    size,
  );
}
