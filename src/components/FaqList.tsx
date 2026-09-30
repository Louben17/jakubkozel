"use client";

import { useState, type CSSProperties } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Faq } from './services';

const EASE = [0.22, 1, 0.36, 1] as const;

// Rozbalovací časté otázky + strukturovaná data FAQPage pro Google
export default function FaqList({ items, accent, bg }: { items: Faq[]; accent: string; bg: string }) {
  const [open, setOpen] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <section className="faq" style={{ '--accent': accent, '--bg': bg } as CSSProperties}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="section-head">
        <p className="eyebrow">Časté otázky</p>
        <h2 className="section-title">Na co se lidé ptají.</h2>
      </div>
      <div className="faq-list">
        {items.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              className={`faq-item ${isOpen ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: EASE }}
            >
              <button className="faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                <span>{f.q}</span>
                <span className="faq-icon" aria-hidden="true" />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="faq-a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
