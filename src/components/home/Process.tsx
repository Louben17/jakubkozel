"use client";

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useScroll, useSpring } from 'framer-motion';

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
      <div className="process-stat">
        <p className="stat-num">
          <Counter to={10} suffix="+" />
        </p>
        <p className="stat-label">let praxe v grafice, sazbě a webech</p>
      </div>

      <div ref={ref} className="process-steps">
        <p className="eyebrow">Jak to probíhá</p>
        <div className="steps-track">
          <motion.div className="steps-line" style={{ scaleX: line }} />
        </div>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="step-no">0{i + 1}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
