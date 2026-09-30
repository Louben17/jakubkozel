"use client";

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import Signature from './Signature';

// sloveso + obor – obojí se střídá, ať to není pořád „Navrhuji"
const WORDS = [
  { verb: 'Navrhuji', text: 'loga', color: '#FF6B73' },
  { verb: 'Tvořím', text: 'vizuální identity', color: '#E0569B' },
  { verb: 'Sázím', text: 'knihy a časopisy', color: '#6C7BD0' },
  { verb: 'Stavím', text: 'weby', color: '#2BB39A' },
  { verb: 'Chystám', text: 'tiskoviny', color: '#F29E4C' },
  { verb: 'Ladím', text: 'katalogy', color: '#4ECDC4' },
  { verb: 'Dělám', text: 'e-shopy', color: '#B872D6' },
  { verb: 'Kreslím', text: 'plakáty', color: '#FF6B73' },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  // parallax barevných skvrn za myší
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 18 });
  const sy = useSpring(my, { stiffness: 40, damping: 18 });
  const bx1 = useTransform(sx, (v) => v * 40);
  const by1 = useTransform(sy, (v) => v * 40);
  const bx2 = useTransform(sx, (v) => v * -60);
  const by2 = useTransform(sy, (v) => v * -50);

  // při odjezdu dolů se podpis zmenší a rozostří
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="hero"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      <div className="hero-bg" aria-hidden="true">
        <motion.div className="blob blob-coral" style={{ x: bx1, y: by1 }} />
        <motion.div className="blob blob-teal" style={{ x: bx2, y: by2 }} />
        <motion.div className="blob blob-lilac" style={{ x: by1, y: bx2 }} />
      </div>

      {/* ořezové značky v rozích – odkaz na tisk */}
      <div className="crop-marks" aria-hidden="true">
        {['tl', 'tr', 'bl', 'br'].map((c, k) => (
          <motion.span
            key={c}
            className={`crop ${c}`}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + k * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>

      <motion.div className="hero-inner" style={{ scale, y, opacity }}>
        <motion.p
          className="hero-kicker"
          initial={{ y: 12, filter: 'blur(6px)' }}
          animate={{ y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Grafika · DTP · Weby · Tiskoviny
        </motion.p>

        {/* hlavní nadpis stránky = podpis; text pro Google a čtečky je v sr-only */}
        <h1 className="hero-title">
          <span className="sr-only">Jakub Kozel – grafický designér: grafika, DTP, tvorba webů a tiskoviny</span>
          <Signature decorative />
        </h1>

        <motion.p
          className="hero-line"
          initial={{ y: 16, filter: 'blur(8px)' }}
          animate={{ y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <span className="rotator rotator-verb">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={WORDS[i].verb}
                className="rotator-word"
                initial={{ y: '100%', opacity: 0, filter: 'blur(6px)' }}
                animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: '-100%', opacity: 0, filter: 'blur(6px)' }}
                transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              >
                {WORDS[i].verb}
              </motion.span>
            </AnimatePresence>
          </span>{' '}
          <span className="rotator">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={WORDS[i].text}
                className="rotator-word"
                style={{ color: WORDS[i].color }}
                initial={{ y: '100%', opacity: 0, filter: 'blur(6px)' }}
                animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: '-100%', opacity: 0, filter: 'blur(6px)' }}
                transition={{ type: 'spring', stiffness: 260, damping: 26, delay: 0.08 }}
              >
                {WORDS[i].text}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>
      </motion.div>

      <motion.a
        href="#sluzby"
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
      >
        <span>Co dělám</span>
        <span className="scroll-line" />
      </motion.a>
    </section>
  );
}
