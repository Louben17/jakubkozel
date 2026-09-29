"use client";

import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Tlačítko, které se lehce „přisaje" ke kurzoru
function Magnetic({ href, children, variant }: { href: string; children: ReactNode; variant: 'solid' | 'ghost' }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`magnet ${variant}`}
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.3);
        y.set((e.clientY - r.top - r.height / 2) * 0.4);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}

const LINE_1 = 'Máte projekt?';
const LINE_2 = 'Pojďme ho udělat.';

// barva písmene podél přechodu korálová → tyrkysová
// (přes fialovou, aby střed přechodu nezšedl)
const mix = (k: number) => `hsl(${357 - 181 * k} ${88 - 30 * k}% ${70 - 12 * k}%)`;

function Letters({ text, delay = 0, className, gradient }: { text: string; delay?: number; className?: string; gradient?: boolean }) {
  // slova drží pohromadě, aby se nezalomila uprostřed
  let k = 0;
  return (
    <motion.span
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px' }}
    >
      {text.split(' ').map((word, w) => (
        <span key={w} className="cta-word" aria-hidden="true">
          {word.split('').map((ch) => {
            const i = k++;
            return (
              <motion.span
                key={i}
                className="cta-letter"
                style={gradient ? { color: mix(i / (text.length - 1)) } : undefined}
                variants={{ hidden: { y: '110%', rotate: 8 }, show: { y: '0%', rotate: 0 } }}
                transition={{ delay: delay + i * 0.025, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {ch}
              </motion.span>
            );
          })}
          {(k++, ' ')}
        </span>
      ))}
    </motion.span>
  );
}

export default function Cta() {
  return (
    <section className="cta">
      <h2 className="cta-title">
        <Letters text={LINE_1} className="cta-l1" />
        <Letters text={LINE_2} delay={0.3} className="cta-l2" gradient />
      </h2>
      <motion.div
        className="cta-actions"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Magnetic href="mailto:jakubkozel@seznam.cz" variant="solid">
          jakubkozel@seznam.cz
        </Magnetic>
        <Magnetic href="tel:+420728890062" variant="ghost">
          728 890 062
        </Magnetic>
      </motion.div>
    </section>
  );
}
