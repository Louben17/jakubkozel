"use client";

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useScroll, useSpring } from 'framer-motion';
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

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
        ref={ref}
        className="process-panel"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="process-stat">
          <p className="stat-num">
            <Counter to={10} suffix="+" />
          </p>
          <p className="stat-label">let praxe v grafice, sazbě a webech</p>
        </div>

        <div className="process-steps">
          <div className="steps-track">
            <motion.div className="steps-line" style={{ scaleX: line }} />
          </div>
          <ol className="steps">
            {STEPS.map((s, i) => {
              const accent = SERVICES[i].accent;
              return (
                <motion.li
                  key={s.t}
                  className="step"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-15% 0px' }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="step-no" style={{ background: accent }}>
                    0{i + 1}
                  </span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </motion.div>
    </section>
  );
}
