"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { JAKUB_PATHS, KOZEL_PATHS } from './signaturePaths';

const CORAL = '#FF6B73';
const TEAL = '#4ECDC4';

// Ručně psaný podpis: obrys se nakreslí písmeno po písmenu, pak se vyplní.
// V rámci jedné session se animace přehraje jen jednou.
export default function Signature() {
  const [skip, setSkip] = useState<boolean | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = sessionStorage.getItem('handwritingAnimated') === 'true';
    setSkip(reduced || seen);
    if (!seen) sessionStorage.setItem('handwritingAnimated', 'true');
  }, []);

  if (skip === null) return <svg viewBox="0 40 800 520" className="signature" aria-hidden="true" />;

  const letter = (d: string, i: number, color: string, delay: number) => (
    <motion.path
      key={i}
      d={d}
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={skip ? false : { pathLength: 0, fillOpacity: 0, strokeOpacity: 1 }}
      animate={{ pathLength: 1, fillOpacity: 1, strokeOpacity: 0 }}
      fill={color}
      transition={{
        pathLength: { duration: 1.4, ease: 'easeOut', delay },
        fillOpacity: { duration: 0.8, ease: 'easeInOut', delay: delay + 1.1 },
        strokeOpacity: { duration: 0.6, delay: delay + 1.6 },
      }}
    />
  );

  return (
    <svg viewBox="0 40 800 520" className="signature" role="img" aria-label="Jakub Kozel">
      <g transform="translate(50, 50)">{JAKUB_PATHS.map((d, i) => letter(d, i, CORAL, 0.2 + i * 0.3))}</g>
      <g transform="translate(150, 270)">{KOZEL_PATHS.map((d, i) => letter(d, i, TEAL, 1.6 + i * 0.3))}</g>
    </svg>
  );
}
