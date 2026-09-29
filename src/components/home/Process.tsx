"use client";

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { animate, motion, useInView, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { SERVICES } from '../services';

const STEPS = [
  { t: 'Poznáme se', d: 'Probereme cíle, publikum, termín i rozpočet.' },
  { t: 'Návrh', d: 'Připravím koncepty a společně vybereme směr.' },
  { t: 'Doladění', d: 'Pilujeme detaily, dokud to nesedí na milimetr.' },
  { t: 'Předání', d: 'Tisková data, spuštěný web nebo manuál značky.' },
];

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

export default function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 55%'] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  // kolik bodů osy už čára minula (bod i leží na i / (n - 1) délky)
  const [reached, setReached] = useState(-1);
  useMotionValueEvent(line, 'change', (v) => {
    setReached(Math.floor(v * (STEPS.length - 1) + 0.02));
  });

  return (
    <section className="process">
      <div className="section-head">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Jak to probíhá
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Od nápadu po hotovou věc.
        </motion.h2>
      </div>

      <motion.div
        className="process-panel"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="process-stat">
          <p className="stat-num" aria-label="10+">
            <Counter to={10} suffix="+" />
          </p>
          <div className="stat-side">
            <p className="stat-label">
              let praxe v&nbsp;grafice, sazbě a&nbsp;webech
            </p>
            <ul className="stat-tags">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <i style={{ background: s.accent }} />
                  {s.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ol ref={ref} className="timeline">
          <li className="timeline-track" aria-hidden="true">
            <motion.span className="timeline-line h" style={{ scaleX: line }} />
            <motion.span className="timeline-line v" style={{ scaleY: line }} />
          </li>
          {STEPS.map((s, i) => {
            const accent = SERVICES[i].accent;
            const on = reached >= i;
            return (
              <li key={s.t} className={`tl-step ${on ? 'on' : ''}`} style={{ '--accent': accent } as CSSProperties}>
                <span className="tl-node">
                  <span className="tl-no">0{i + 1}</span>
                </span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            );
          })}
        </ol>
      </motion.div>
    </section>
  );
}
