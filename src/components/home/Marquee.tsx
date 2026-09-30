"use client";

import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';

const ROW_A = ['Loga', 'Vizuální identity', 'Sazba knih', 'Časopisy', 'Katalogy', 'Výroční zprávy'];
const ROW_B = ['Weby', 'E-shopy', 'Landing pages', 'Vizitky', 'Plakáty', 'Letáky', 'Obaly'];
const DOTS = ['#FF6B73', '#4ECDC4', '#6C7BD0', '#F29E4C'];

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

// Nekonečný pás, který zrychluje a mění směr podle rychlosti scrollu
function Row({ items, base, outline }: { items: string[]; base: number; outline?: boolean }) {
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const vel = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(vel, [0, 1000], [0, 5], { clamp: false });
  const dir = useRef(1);
  const reduced = useReducedMotion();
  const tx = useTransform(x, (v) => `${wrap(-25, 0, v)}%`);
  // mimo obrazovku se pás nehýbe (šetří výkon na mobilu)
  const rowRef = useRef<HTMLDivElement>(null);
  const visible = useInView(rowRef);

  useAnimationFrame((_, delta) => {
    if (reduced || !visible) return;
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    x.set(x.get() + dir.current * base * (delta / 1000) * (1 + Math.abs(f)));
  });

  const seq = [...items, ...items];
  return (
    <div ref={rowRef} className="marquee-row">
      <motion.div className="marquee-track" style={{ x: tx }}>
        {[0, 1].map((k) =>
          seq.map((w, j) => (
            <span key={`${k}-${j}`} className={`marquee-item ${outline ? 'outline' : ''}`}>
              {w}
              <span className="dot" style={{ background: DOTS[j % DOTS.length] }} />
            </span>
          ))
        )}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="marquee" aria-label="Přehled služeb">
      <Row items={ROW_A} base={-2} />
      <Row items={ROW_B} base={2} outline />
    </section>
  );
}
