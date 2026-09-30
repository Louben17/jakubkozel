"use client";

import { useEffect, type CSSProperties } from 'react';
import { SIG_KEY } from '../consentKey';
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

// Ručně psaný podpis: obrys se nakreslí písmeno po písmenu, pak se vyplní.
// Kreslí čisté CSS (třída .sig-path v site.css), ne JavaScript – na mobilu plynule
// a hned z HTML. V rámci jedné návštěvy se přehraje jen jednou: inline skript SIG_BOOT
// v <head> přidá <html> třídu .sig-seen, která animaci vypne.
export default function Signature({ decorative = false }: { decorative?: boolean }) {
  useEffect(() => {
    try {
      sessionStorage.setItem(SIG_KEY, 'true');
    } catch {}
    // po dokreslení (nebo odchodu ze stránky) už se při návratu nepřehrává
    const root = document.documentElement;
    const t = setTimeout(() => root.classList.add('sig-seen'), 5000);
    return () => {
      clearTimeout(t);
      root.classList.add('sig-seen');
    };
  }, []);

  const letter = (d: string, i: number, delay: number, grad: string) => (
    <path
      key={i}
      d={d}
      pathLength={1}
      className="sig-path"
      stroke={grad}
      fill={grad}
      style={{ '--d': `${delay}s` } as CSSProperties}
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
