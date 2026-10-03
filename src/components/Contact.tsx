"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import { breadcrumbLd, ld } from './seo';
import { Letters } from './home/Cta';
import { SERVICES } from './services';
import InquiryForm from './InquiryForm';
import Capacity from './Capacity';

const EASE = [0.22, 1, 0.36, 1] as const;

const CHANNELS = [
  { label: 'E-mail', value: 'jakubkozel@seznam.cz', href: 'mailto:jakubkozel@seznam.cz', copy: 'jakubkozel@seznam.cz' },
  { label: 'Telefon', value: '728 890 062', href: 'tel:+420728890062', copy: '+420 728 890 062' },
];

function Channel({ c, i }: { c: (typeof CHANNELS)[number]; i: number }) {
  const [copied, setCopied] = useState(false);

  return (
    <motion.div
      className="channel"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 + i * 0.12, duration: 0.7, ease: EASE }}
    >
      <a href={c.href} className="channel-main">
        <span className="channel-label">{c.label}</span>
        <span className="channel-value">{c.value}</span>
        <span className="channel-arrow" aria-hidden="true">
          →
        </span>
      </a>
      <button
        className="channel-copy"
        onClick={() => {
          navigator.clipboard?.writeText(c.copy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
          });
        }}
      >
        {copied ? 'Zkopírováno ✓' : 'Kopírovat'}
      </button>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(breadcrumbLd([{ name: 'Kontakt', path: '/kontakt' }]))} />
      <Navigation />
      <section className="contact">
        <motion.p
          className="eyebrow eyebrow-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Kontakt
        </motion.p>
        <h1 className="cta-title contact-title">
          <Letters text="Napište mi," className="cta-l1" />
          <Letters text="nebo zavolejte." delay={0.25} className="cta-l2" gradient />
        </h1>

        <Capacity delay={0.6} />

        <div className="channels">
          {CHANNELS.map((c, i) => (
            <Channel key={c.label} c={c} i={i} />
          ))}
        </div>

        <motion.div
          className="contact-services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {SERVICES.map((s) => (
            <span key={s.slug}>
              <span className="dot" style={{ background: s.accent }} />
              {s.label}
            </span>
          ))}
        </motion.div>

        <InquiryForm />
      </section>
    </div>
  );
}
