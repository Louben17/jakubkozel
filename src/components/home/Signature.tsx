"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { JAKUB_PATHS, KOZEL_PATHS } from './signaturePaths';
import { BRAND_STOPS } from '../brand';

// Jeden souvislý diagonální přechod přes celý podpis (stejný jako v patičce).
// userSpaceOnUse počítá v souřadnicích skupiny, proto má každé slovo svou kopii
// posunutou o translate() dané skupiny.
const G = { x1: 130, y1: 260, x2: 700, y2: 400 };
const WORDS = [
  { id: 'jakub', dx: 50, dy: 50 },
  { id: 'kozel', dx: 150, dy: 270 },
];

function Gradients({ prefix }: { prefix: string }) {
  return (
    <defs>
      {WORDS.map((w) => (
        <linearGradient
          key={w.id}
          id={`${prefix}-${w.id}`}
          gradientUnits="userSpaceOnUse"
          x1={G.x1 - w.dx}
          y1={G.y1 - w.dy}
          x2={G.x2 - w.dx}
          y2={G.y2 - w.dy}
        >
          {BRAND_STOPS.map((s) => (
            <stop key={s.offset} offset={s.offset} stopColor={s.color} />
          ))}
        </linearGradient>
      ))}
    </defs>
  );
}

/** Statický podpis jako logo (menu) */
export function SignatureMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 40 800 520" className={className} role="img" aria-label="Jakub Kozel">
      <Gradients prefix="mark" />
      <g transform="translate(50, 50)" fill="url(#mark-jakub)">
        {JAKUB_PATHS.map((d, i) => <path key={i} d={d} />)}
      </g>
      <g transform="translate(150, 270)" fill="url(#mark-kozel)">
        {KOZEL_PATHS.map((d, i) => <path key={i} d={d} />)}
      </g>
    </svg>
  );
}

// Ručně psaný podpis: obrys se nakreslí písmeno po písmenu, pak se vyplní.
// V rámci jedné session se animace přehraje jen jednou.
export default function Signature({ decorative = false }: { decorative?: boolean }) {
  const [skip, setSkip] = useState<boolean | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = sessionStorage.getItem('handwritingAnimated') === 'true';
    setSkip(reduced || seen);
    if (!seen) sessionStorage.setItem('handwritingAnimated', 'true');
  }, []);

  if (skip === null) return <svg viewBox="0 40 800 520" className="signature" aria-hidden="true" />;

  const letter = (d: string, i: number, delay: number, grad: string) => (
    <motion.path
      key={i}
      d={d}
      stroke={grad}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={skip ? false : { pathLength: 0, fillOpacity: 0, strokeOpacity: 1 }}
      animate={{ pathLength: 1, fillOpacity: 1, strokeOpacity: 0 }}
      fill={grad}
      transition={{
        pathLength: { duration: 1.4, ease: 'easeOut', delay },
        fillOpacity: { duration: 0.8, ease: 'easeInOut', delay: delay + 1.1 },
        strokeOpacity: { duration: 0.6, delay: delay + 1.6 },
      }}
    />
  );

  return (
    <svg
      viewBox="0 40 800 520"
      className="signature"
      {...(decorative ? { 'aria-hidden': true } : { role: 'img', 'aria-label': 'Jakub Kozel' })}
    >
      <Gradients prefix="sig" />
      <g transform="translate(50, 50)">{JAKUB_PATHS.map((d, i) => letter(d, i, 0.2 + i * 0.3, 'url(#sig-jakub)'))}</g>
      <g transform="translate(150, 270)">{KOZEL_PATHS.map((d, i) => letter(d, i + 5, 1.6 + i * 0.3, 'url(#sig-kozel)'))}</g>
    </svg>
  );
}
