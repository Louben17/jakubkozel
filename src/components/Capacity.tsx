"use client";

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { capacityInfo } from './capacityData';

const EASE = [0.22, 1, 0.36, 1] as const;

// Ukazatel vytíženosti – lišta v přechodu značky se naplní při zobrazení
export default function Capacity({ delay = 0 }: { delay?: number }) {
  const { load, status, start } = capacityInfo();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);

  // procenta naskakují souběžně s lištou
  useEffect(() => {
    if (!inView) return;
    if (reduce) return setShown(load);
    const c = animate(0, load, { delay: delay + 0.2, duration: 1.6, ease: EASE, onUpdate: (v) => setShown(Math.round(v)) });
    return () => c.stop();
  }, [inView, reduce, load, delay]);

  return (
    <motion.div
      ref={ref}
      className="cap"
      style={{ '--cap-color': status.color } as CSSProperties}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ delay, duration: 0.7, ease: EASE }}
    >
      <div className="cap-head">
        <span className="cap-status">
          <span className="cap-dot" aria-hidden="true" />
          {status.label}
        </span>
        <span className="cap-pct" aria-hidden="true">
          {shown} %
        </span>
      </div>
      <div className="cap-bar" role="progressbar" aria-label="Vytíženost" aria-valuemin={0} aria-valuemax={100} aria-valuenow={load} aria-valuetext={`${load} %`}>
        <motion.div
          className="cap-fill"
          initial={{ clipPath: reduce ? `inset(0 ${100 - load}% 0 0 round 999px)` : 'inset(0 100% 0 0 round 999px)' }}
          animate={inView ? { clipPath: `inset(0 ${100 - load}% 0 0 round 999px)` } : undefined}
          transition={{ delay: delay + 0.2, duration: 1.6, ease: EASE }}
        />
      </div>
      <p className="cap-note">
        Vytíženost {load} % · <strong>{start}</strong>
      </p>
    </motion.div>
  );
}
