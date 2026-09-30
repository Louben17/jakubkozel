"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from './Navigation';
import { breadcrumbLd, ld } from './seo';
import Cta, { Letters } from './home/Cta';
import { SignatureMark } from './home/Signature';
import { SERVICES } from './services';

const EASE = [0.22, 1, 0.36, 1] as const;

const SKILLS = [
  { title: 'Design', bg: '#FFE3E0', accent: '#FF6B73', items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Sketch'] },
  { title: 'Web', bg: '#DDF5EC', accent: '#2BB39A', items: ['HTML & CSS', 'JavaScript', 'WordPress', 'Responzivní design'] },
  { title: 'Specializace', bg: '#E4E8FA', accent: '#6C7BD0', items: ['Vizuální identita', 'UI/UX design', 'Typografie', 'Print design'] },
];

export default function About() {
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(breadcrumbLd([{ name: 'O mně', path: '/o-mne' }]))} />
      <Navigation />

      {/* úvod – tmavý panel v barvě pozadí fotky, aby portrét splynul */}
      <section className="about-hero">
        <div className="about-text">
          <motion.p className="eyebrow eyebrow-dark" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            O mně
          </motion.p>
          <h1 className="cta-title about-title">
            <Letters text="Jsem Jakub," className="cta-l1" />
            <Letters text="grafický designér." delay={0.25} className="cta-l2" gradient />
          </h1>
          <motion.p
            className="about-lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: EASE }}
          >
            Grafickému designu se věnuji více než 10 let. Navrhuji loga a vizuální identity, sázím knihy a katalogy,
            stavím weby a připravuji tiskoviny — od první skici až po hotová data pro tiskárnu.
          </motion.p>
          <motion.div
            className="about-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7, ease: EASE }}
          >
            <Link href="/kontakt#poptavka" className="about-btn solid">
              Poptat spolupráci <span aria-hidden="true">→</span>
            </Link>
            <Link href="/#sluzby" className="about-btn ghost">
              Co dělám
            </Link>
          </motion.div>
        </div>

        <motion.div
          ref={photoRef}
          className="about-photo"
          initial={{ scale: 1.06, filter: 'brightness(0)' }}
          animate={{ scale: 1, filter: 'brightness(1)' }}
          transition={{ duration: 1.6, ease: EASE }}
        >
          <motion.div className="about-photo-inner" style={{ y: photoY }}>
            <Image
              src="/jakub-kozel.webp"
              alt="Jakub Kozel – grafický designér, portrét"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 560px"
              style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
            />
          </motion.div>
          <motion.div
            className="about-sign"
            initial={{ opacity: 0, y: 16, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ delay: 1.4, duration: 0.9, ease: EASE }}
          >
            <SignatureMark className="about-sign-mark" />
          </motion.div>
        </motion.div>
      </section>

      {/* motto + příběh */}
      <section className="about-story">
        <motion.blockquote
          className="about-quote"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          „Dobrý design není jen o&nbsp;tom, jak něco vypadá — ale hlavně o&nbsp;tom, <em>jak to funguje</em>.“
        </motion.blockquote>
        <div className="about-cols">
          {[
            'Začínal jsem jako freelancer a postupně jsem si vybudoval portfolio klientů od malých podniků až po větší společnosti.',
            'Specializuji se na kompletní vizuální identity, moderní weby a precizní DTP sazbu. Ke každému projektu přistupuji s důrazem na detail a funkčnost.',
            'Věřím, že design má pomáhat komunikovat správné poselství. Proto začínám tím, že poslouchám — a teprve pak kreslím.',
          ].map((t, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: EASE }}
            >
              {t}
            </motion.p>
          ))}
        </div>
      </section>

      {/* nástroje a dovednosti */}
      <section className="about-skills">
        <div className="section-head">
          <p className="eyebrow">Nástroje a dovednosti</p>
          <h2 className="section-title">S čím pracuji.</h2>
        </div>
        <div className="skills-grid">
          {SKILLS.map((g, i) => (
            <motion.div
              key={g.title}
              className="skill-card"
              style={{ background: g.bg, '--accent': g.accent } as CSSProperties}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
            >
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="about-services">
          {SERVICES.map((s) => (
            <Link key={s.slug} href={s.href} className="other" style={{ background: s.bg }}>
              <span className="other-no" style={{ color: s.ink }}>
                {s.no}
              </span>
              <span className="other-title">{s.title}</span>
              <span className="other-arrow" style={{ background: s.accent }} aria-hidden="true">
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
