"use client";

import { memo, type ReactNode } from 'react';
import { useLoop, ramp, easeOut, easeInOut, easeBack, lerp } from '../home/loop';

const INK = '#1d1d24';
const ORANGE = '#F29E4C';
const ORANGE_INK = '#A3570C';
const TEAL = '#2BB39A';
const CREAM = '#FFF7EE';
const SOFT = '#5d6070';

// Rámeček animované ilustrace v článku (popisek čte i čtečka obrazovky, SVG je dekorativní)
export function AnimFigure({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <figure className="art-anim">
      <div className="art-anim-stage">{children}</div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* A4 v pixelech – výřez listu pod lupou při 72, 150 a 300 DPI          */
/* ------------------------------------------------------------------ */

// barva bodu motivu v souřadnicích výřezu 0..1 (kus oranžového kruhu a tyrkysové vlny)
function sample(x: number, y: number) {
  if (Math.hypot(x - 0.62, y - 0.42) < 0.38) return ORANGE;
  if (y > 0.78 + 0.08 * Math.sin(x * 6)) return TEAL;
  return CREAM;
}

const STEPS = [
  { n: 6, dpi: 72, px: '595 × 842 px', a: 0.18, b: 0.4 },
  { n: 12, dpi: 150, px: '1240 × 1754 px', a: 0.4, b: 0.6 },
  { n: 28, dpi: 300, px: '2480 × 3508 px', a: 0.6, b: 0.88 },
];

// memo: mřížka se překreslí jen při prolínání, ne v každém snímku smyčky
const PixelGrid = memo(function PixelGrid({ n, opacity }: { n: number; opacity: number }) {
  if (opacity <= 0.01) return null;
  const s = 220 / n;
  const cells = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      cells.push(<rect key={`${i}-${j}`} x={i * s} y={j * s} width={s + 0.4} height={s + 0.4} fill={sample((i + 0.5) / n, (j + 0.5) / n)} />);
  return (
    <g opacity={opacity}>
      {cells}
      {n < 20 && (
        <g stroke="#fff" strokeOpacity={0.55} strokeWidth={0.8}>
          {Array.from({ length: n - 1 }, (_, k) => (
            <g key={k}>
              <line x1={(k + 1) * s} y1={0} x2={(k + 1) * s} y2={220} />
              <line x1={0} y1={(k + 1) * s} x2={220} y2={(k + 1) * s} />
            </g>
          ))}
        </g>
      )}
    </g>
  );
});

export function PixelAnim() {
  const [ref, t] = useLoop<SVGSVGElement>(10, 0.8);
  const out = 1 - ramp(t, 0.92, 0.98);
  const sheet = easeOut(ramp(t, 0, 0.08));
  const lens = easeBack(ramp(t, 0.08, 0.16));
  const panel = easeOut(ramp(t, 0.12, 0.2));
  const active = [...STEPS].reverse().find((s) => t >= s.a) ?? STEPS[0];

  return (
    <svg ref={ref} viewBox="0 0 600 300" className="illu" aria-hidden="true">
      <g opacity={out}>
        {/* list A4 s motivem */}
        <g transform={`translate(30 ${lerp(70, 40, sheet)})`} opacity={sheet}>
          <rect width={156} height={220} rx={3} fill="#fff" stroke={INK} strokeOpacity={0.12} />
          <clipPath id="pa-sheet">
            <rect width={156} height={220} rx={3} />
          </clipPath>
          <g clipPath="url(#pa-sheet)">
            <circle cx={96} cy={78} r={52} fill={ORANGE} />
            <path d="M0 170 Q40 150 80 168 T156 160 V220 H0 Z" fill={TEAL} />
            <rect x={18} y={190} width={60} height={5} rx={2.5} fill="#fff" opacity={0.8} />
          </g>
          <text x={78} y={240} textAnchor="middle" fontSize={12} fontWeight={700} fill={SOFT}>
            A4 · 210 × 297 mm
          </text>
          {/* lupa nad hranou kruhu */}
          <g transform={`translate(70 40) scale(${lens})`} opacity={lens}>
            <rect x={-6} y={-6} width={48} height={48} rx={6} fill="none" stroke={INK} strokeWidth={2.5} />
          </g>
        </g>

        {/* spojnice lupa → výřez */}
        <g stroke={INK} strokeOpacity={0.18 * panel} strokeDasharray="3 4">
          <line x1={136} y1={74} x2={230} y2={40} />
          <line x1={136} y1={116} x2={230} y2={260} />
        </g>

        {/* zvětšený výřez */}
        <g transform="translate(230 40)" opacity={panel}>
          <clipPath id="pa-zoom">
            <rect width={220} height={220} rx={10} />
          </clipPath>
          <g clipPath="url(#pa-zoom)">
            <rect width={220} height={220} fill={CREAM} />
            {STEPS.map((s, i) => {
              const next = STEPS[i + 1];
              const op = easeInOut(ramp(t, s.a, s.a + 0.05)) * (next ? 1 - easeInOut(ramp(t, next.a, next.a + 0.05)) : 1);
              return <PixelGrid key={s.n} n={s.n} opacity={op} />;
            })}
          </g>
          <rect width={220} height={220} rx={10} fill="none" stroke={INK} strokeOpacity={0.15} />
        </g>

        {/* DPI a počet pixelů A4 */}
        <g transform="translate(472 80)" opacity={panel}>
          {STEPS.map((s) => {
            const on = s === active && t >= STEPS[0].a;
            return (
              <g key={s.dpi} transform={`translate(0 ${STEPS.indexOf(s) * 62})`}>
                <text fontSize={22} fontWeight={800} fill={on ? ORANGE_INK : INK} opacity={on ? 1 : 0.25}>
                  {s.dpi}
                </text>
                <text y={18} fontSize={10.5} fontWeight={600} fill={SOFT} opacity={on ? 1 : 0.35}>
                  DPI · {s.px}
                </text>
              </g>
            );
          })}
        </g>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Obálky – A4 se přeloží na třetiny a zajede do obálky DL             */
/* ------------------------------------------------------------------ */
export function EnvelopeAnim() {
  const [ref, t] = useLoop<SVGSVGElement>(10, 0.86);
  const out = 1 - ramp(t, 0.92, 0.98);
  const letterIn = easeOut(ramp(t, 0, 0.07));
  const foldBottom = easeInOut(ramp(t, 0.1, 0.22));
  const foldTop = easeInOut(ramp(t, 0.24, 0.36));
  const envIn = easeOut(ramp(t, 0.36, 0.45));
  const over = easeInOut(ramp(t, 0.46, 0.55)); // přesun nad obálku
  const down = easeInOut(ramp(t, 0.55, 0.64)); // zasunutí shora
  const flap = easeInOut(ramp(t, 0.66, 0.76));

  // dopis 140 × 198 (A4 v měřítku), třetiny po 66; obálka DL 147 × 73
  const sB = 1 - 2 * foldBottom; // spodní třetina se přehne nahoru
  const sT = 1 - 2 * foldTop; // horní třetina se přehne dolů
  const EX = 380;
  const EY = 150;
  // složený dopis = střední třetina (y 66..132 v souřadnicích dopisu)
  const lx = lerp(100, EX + 3.5, over);
  const ly = lerp(lerp(30, EY - 150, over), EY + 4 - 66, down) - (1 - letterIn) * 30;
  const label = down > 0.98 ? 'v obálce DL 110 × 220 mm' : foldTop > 0.98 ? 'na třetiny: 99 × 210 mm' : 'A4 · 210 × 297 mm';
  const envT = `translate(0 ${(1 - envIn) * 14})`;
  const sF = 1 - 2 * flap; // chlopeň: otevřená nahoru (1) → zavřená dolů (−1)
  const flapEl = (
    <g transform={`${envT} translate(0 ${EY}) scale(1 ${sF}) translate(0 ${-EY})`} opacity={envIn}>
      <path d={`M${EX} ${EY} L${EX + 73.5} ${EY - 40} L${EX + 147} ${EY} Z`} fill={sF < 0 ? ORANGE : '#F4E3CF'} stroke={ORANGE} strokeOpacity={0.5} />
    </g>
  );

  const lines = (y0: number, n: number) =>
    Array.from({ length: n }, (_, i) => <rect key={i} x={16} y={y0 + i * 10} width={i === n - 1 ? 60 : 108} height={3.5} rx={1.75} fill={INK} opacity={0.14} />);

  return (
    <svg ref={ref} viewBox="0 0 600 300" className="illu" aria-hidden="true">
      <g opacity={out}>
        {/* obálka – zadní stěna a otevřená chlopeň (za dopisem) */}
        <g transform={envT} opacity={envIn}>
          <rect x={EX} y={EY} width={147} height={73} rx={3} fill="#F4E3CF" />
        </g>
        {sF >= 0 && flapEl}

        {/* dopis */}
        <g transform={`translate(${lx} ${ly})`} opacity={letterIn}>
          <rect x={0} y={66} width={140} height={66} fill="#fff" stroke={INK} strokeOpacity={0.12} />
          {lines(78, 4)}
          {/* spodní třetina – přehnutí kolem y = 132 */}
          <g transform={`translate(0 132) scale(1 ${sB}) translate(0 -132)`}>
            <rect x={0} y={132} width={140} height={66} fill={sB > 0 ? '#fff' : '#F1F1F5'} stroke={INK} strokeOpacity={0.12} />
            {sB > 0 && lines(142, 4)}
          </g>
          {/* horní třetina – přehnutí kolem y = 66; na rubu je adresa, která skončí v okénku */}
          <g transform={`translate(0 66) scale(1 ${sT}) translate(0 -66)`}>
            <rect x={0} y={0} width={140} height={66} fill={sT > 0 ? '#fff' : '#FAFAFC'} stroke={INK} strokeOpacity={0.12} />
            {sT > 0 ? (
              <>
                <circle cx={22} cy={18} r={7} fill={ORANGE} />
                {lines(36, 2)}
              </>
            ) : (
              <g transform="translate(0 66) scale(1 -1)">
                <rect x={20} y={32} width={46} height={4} rx={2} fill={INK} opacity={0.5} />
                <rect x={20} y={40} width={34} height={4} rx={2} fill={INK} opacity={0.32} />
                <rect x={20} y={48} width={40} height={4} rx={2} fill={INK} opacity={0.32} />
              </g>
            )}
          </g>
        </g>

        {/* obálka – přední stěna s okénkem (evenodd = díra), zavřená chlopeň před dopisem */}
        <g transform={envT} opacity={envIn}>
          <path
            d={`M${EX} ${EY + 10} H${EX + 147} V${EY + 73} H${EX} Z M${EX + 13} ${EY + 32} h60 v30 h-60 Z`}
            fillRule="evenodd"
            fill="#FBEBD7"
            stroke={ORANGE}
            strokeOpacity={0.5}
          />
          <rect x={EX + 13} y={EY + 32} width={60} height={30} rx={2} fill="none" stroke={ORANGE} strokeOpacity={0.6} />
        </g>
        {sF < 0 && flapEl}

        <text x={300} y={284} textAnchor="middle" fontSize={14} fontWeight={700} fill={ORANGE_INK}>
          {label}
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Formáty B – A3 až A6 do sebe, úhlopříčka 1 : √2, pak B4 a C4        */
/* ------------------------------------------------------------------ */
const K = 0.6; // px na mm
const OX = 70;
const OY = 280;
const SHEETS = [
  { name: 'A3', w: 297, h: 420, c: INK, dash: '', a: 0.02 },
  { name: 'A4', w: 210, h: 297, c: INK, dash: '', a: 0.1 },
  { name: 'A5', w: 148, h: 210, c: INK, dash: '', a: 0.18 },
  { name: 'A6', w: 105, h: 148, c: INK, dash: '', a: 0.26 },
  { name: 'B4', w: 250, h: 353, c: ORANGE, dash: '6 4', a: 0.5 },
  { name: 'C4', w: 229, h: 324, c: TEAL, dash: '2 3', a: 0.62 },
];

export function FormatsAnim() {
  const [ref, t] = useLoop<SVGSVGElement>(10, 0.85);
  const out = 1 - ramp(t, 0.92, 0.98);
  const diag = easeInOut(ramp(t, 0.36, 0.46));
  const dLen = Math.hypot(297, 420) * K * 1.08;

  return (
    <svg ref={ref} viewBox="0 0 600 300" className="illu" aria-hidden="true">
      <g opacity={out}>
        {SHEETS.map((s) => {
          const p = easeInOut(ramp(t, s.a, s.a + 0.1));
          const per = 2 * (s.w + s.h) * K;
          const lab = easeOut(ramp(t, s.a + 0.06, s.a + 0.12));
          const isA = s.name.startsWith('A');
          return (
            <g key={s.name}>
              <rect
                x={OX}
                y={OY - s.h * K}
                width={s.w * K}
                height={s.h * K}
                fill={isA ? '#fff' : s.c}
                fillOpacity={isA ? 0.6 * p : 0.08 * p}
                stroke={s.c}
                strokeOpacity={isA ? 0.55 : 1}
                strokeWidth={isA ? 1.3 : 2}
                strokeDasharray={s.dash || per}
                strokeDashoffset={s.dash ? 0 : per * (1 - p)}
                opacity={s.dash ? p : 1}
              />
              <text
                x={isA ? OX + s.w * K - 6 : OX + 6}
                y={isA ? OY - s.h * K + 15 : OY - s.h * K - 5}
                textAnchor={isA ? 'end' : 'start'}
                fontSize={isA ? 12 : 13}
                fontWeight={800}
                fill={isA ? INK : s.c === ORANGE ? ORANGE_INK : '#1D7968'}
                opacity={lab}
              >
                {s.name}
              </text>
            </g>
          );
        })}

        {/* úhlopříčka přes pravé horní rohy – všechny formáty mají stejný poměr stran */}
        <line
          x1={OX}
          y1={OY}
          x2={OX + 297 * K * 1.08}
          y2={OY - 420 * K * 1.08}
          stroke="#6C7BD0"
          strokeWidth={1.5}
          strokeDasharray={dLen}
          strokeDashoffset={dLen * (1 - diag)}
        />

        {/* legenda */}
        <g transform="translate(330 70)">
          {[
            { text: 'Řada A: každý další formát je polovina', c: INK, a: 0.06 },
            { text: 'Rohy leží na jedné přímce: poměr 1 : √2', c: '#4957C0', a: 0.4 },
            { text: 'B4 250 × 353 mm: mezi A4 a A3', c: ORANGE_INK, a: 0.54 },
            { text: 'C4 229 × 324 mm: obálka na A4', c: '#1D7968', a: 0.66 },
          ].map((l, i) => {
            const o = easeOut(ramp(t, l.a, l.a + 0.06));
            return (
              <text key={l.text} x={lerp(12, 0, o)} y={i * 36} fontSize={13.5} fontWeight={700} fill={l.c} opacity={o}>
                {l.text}
              </text>
            );
          })}
        </g>
      </g>
    </svg>
  );
}
