"use client";

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { SERVICES, type Service } from '../services';

function Card({ s, i, progress }: { s: Service; i: number; progress: MotionValue<number> }) {
  const n = SERVICES.length;
  // karta se zmenšuje, jak ji překrývají další
  const scale = useTransform(progress, [i / n, 1], [1, 1 - (n - 1 - i) * 0.045]);
  const { Anim } = s;

  return (
    <div className="stack-slot">
      <motion.article
        className="svc-card"
        style={{ scale, top: `calc(9vh + ${i * 22}px)`, background: s.bg }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="svc-text">
          <span className="svc-no" style={{ color: s.ink }}>
            {s.no}
          </span>
          <h3 className="svc-title">{s.title}</h3>
          <p className="svc-lead">{s.lead}</p>
          <ul className="svc-items">
            {s.items.map((it) => (
              <li key={it} style={{ borderColor: `${s.accent}55` }}>
                {it}
              </li>
            ))}
          </ul>
          <Link href={s.href} className="svc-link" style={{ background: s.button }}>
            {s.cta}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="svc-stage">
          <Anim />
        </div>
      </motion.article>
    </div>
  );
}

export default function ServiceStack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section id="sluzby" className="services">
      <div className="section-head">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Co dělám
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Čtyři obory, jeden rukopis.
        </motion.h2>
      </div>
      <div ref={ref} className="stack">
        {SERVICES.map((s, i) => (
          <Card key={s.no} s={s} i={i} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
