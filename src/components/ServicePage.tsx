"use client";

import Link from 'next/link';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Cta from './home/Cta';
import Gallery from './Gallery';
import FaqList from './FaqList';
import ArticleCards from './poradna/ArticleCards';
import { ARTICLES } from '@/content/articles';
import { SERVICES, type Service } from './services';
import { breadcrumbLd, ld, serviceLd } from './seo';

const EASE = [0.22, 1, 0.36, 1] as const;

// Společná šablona podstránek oborů – stejný jazyk jako karty na homepage
export default function ServicePage({ slug }: { slug: Service['slug'] }) {
  const s = SERVICES.find((x) => x.slug === slug)!;
  const others = SERVICES.filter((x) => x.slug !== slug);
  const { Anim } = s;
  const articles = ARTICLES.filter((a) => a.service === slug);

  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(serviceLd(s))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(breadcrumbLd([{ name: s.title, path: s.href }]))} />
      <Navigation />

      <section className="svc-hero">
        <motion.div
          className="svc-hero-card"
          style={{ background: s.bg }}
          initial={{ y: 40, scale: 0.98 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="svc-text">
            <span className="svc-no" style={{ color: s.ink }}>
              {s.no} — Služby
            </span>
            <h1 className="svc-title svc-title-xl">{s.title}</h1>
            <p className="svc-lead">{s.lead}</p>
            <div className="svc-actions">
              <Link href={`/kontakt?obor=${s.slug}#poptavka`} className="svc-link" style={{ background: s.button }}>
                Nezávazně poptat <span aria-hidden="true">→</span>
              </Link>
              <a href="#nabidka" className="svc-link ghost">
                Co přesně dělám
              </a>
            </div>
          </div>
          <div className="svc-stage">
            <Anim />
          </div>
        </motion.div>
      </section>

      {s.gallery && (
        <div className="gallery-wrap">
          <div className="section-head">
            <p className="eyebrow">Ukázky</p>
            <h2 className="section-title">Jak to vypadá naživo.</h2>
          </div>
          <Gallery photos={s.gallery} accent={s.accent} />
        </div>
      )}

      <section id="nabidka" className="offer">
        <div className="section-head">
          <p className="eyebrow">Nabídka</p>
          <h2 className="section-title">S čím vám pomůžu.</h2>
        </div>
        <div className="tiles">
          {s.tiles.map((t, i) => (
            <motion.article
              key={t.title}
              className="tile"
              style={{ '--accent': s.accent, '--bg': s.bg } as CSSProperties}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6, ease: EASE }}
            >
              <span className="tile-icon">{t.icon}</span>
              <h3>{t.title}</h3>
              <p>{t.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <FaqList items={s.faq} accent={s.accent} bg={s.bg} />

      {articles.length > 0 && (
        <section className="svc-articles">
          <div className="section-head">
            <p className="eyebrow">Poradna</p>
            <h2 className="section-title">Chcete vědět víc?</h2>
          </div>
          <ArticleCards articles={articles} />
        </section>
      )}

      <section className="others">
        <p className="eyebrow">Další obory</p>
        <div className="others-list">
          {others.map((o) => (
            <Link key={o.slug} href={o.href} className="other" style={{ background: o.bg }}>
              <span className="other-no" style={{ color: o.ink }}>
                {o.no}
              </span>
              <span className="other-title">{o.title}</span>
              <span className="other-arrow" style={{ background: o.accent }} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Cta />
    </div>
  );
}
