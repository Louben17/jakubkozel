"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import type { Photo } from './services';

const EASE = [0.22, 1, 0.36, 1] as const;

// Jedna fotka: odkryje se zdola, při scrollu se jemně posouvá, na klik se otevře přes celou obrazovku
function Shot({ p, i, big, accent, onOpen }: { p: Photo; i: number; big: boolean; accent: string; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-3.5%', '3.5%']);

  return (
    <motion.button
      ref={ref}
      className={`shot ${big ? 'shot-big' : ''}`}
      onClick={onOpen}
      aria-label={`Zvětšit: ${p.caption}`}
      initial={{ clipPath: 'inset(100% 0% 0% 0% round 24px)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 24px)' }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 1.1, delay: i * 0.12, ease: EASE }}
    >
      <motion.div className="shot-img" style={{ y }}>
        <motion.div
          className="shot-zoom"
          initial={{ scale: 1.18 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 1.6, delay: i * 0.12, ease: EASE }}
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes={big ? '(max-width: 860px) 100vw, 700px' : '(max-width: 860px) 100vw, 480px'}
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </motion.div>
      <span className="shot-caption">
        <i style={{ background: accent }} />
        {p.caption}
      </span>
    </motion.button>
  );
}

export default function Gallery({ photos, accent }: { photos: Photo[]; accent: string }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((o) => (o === null ? o : (o + 1) % photos.length));
      if (e.key === 'ArrowLeft') setOpen((o) => (o === null ? o : (o - 1 + photos.length) % photos.length));
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, photos.length]);

  return (
    <section className="gallery">
      <div className="gallery-grid">
        {photos.map((p, i) => (
          <Shot key={p.src} p={p} i={i} big={i === 0} accent={accent} onOpen={() => setOpen(i)} />
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="lightbox"
            onClick={() => setOpen(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.figure
                key={open}
                className="lightbox-figure"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <Image
                  src={photos[open].src}
                  alt={photos[open].alt}
                  width={1536}
                  height={1024}
                  sizes="92vw"
                  className="lightbox-img"
                />
                <figcaption>
                  <span>
                    <i style={{ background: accent }} />
                    {photos[open].caption}
                  </span>
                  <span className="lightbox-count">
                    {open + 1} / {photos.length}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
            <button className="lightbox-close" onClick={() => setOpen(null)} aria-label="Zavřít">
              ✕
            </button>
            {photos.length > 1 && (
              <>
                <button
                  className="lightbox-nav prev"
                  aria-label="Předchozí"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen((open - 1 + photos.length) % photos.length);
                  }}
                >
                  ←
                </button>
                <button
                  className="lightbox-nav next"
                  aria-label="Další"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen((open + 1) % photos.length);
                  }}
                >
                  →
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
