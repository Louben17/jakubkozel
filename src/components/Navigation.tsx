"use client";

import { useEffect, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { brandColor } from './brand';
import { SERVICES } from './services';

const LINKS = [
  ...SERVICES.map((s) => ({ href: s.href, label: s.label, accent: s.accent })),
  { href: '/poradna', label: 'Poradna', accent: '#E58AC8' },
  { href: '/o-mne', label: 'O mně', accent: '#B872D6' },
];

export default function Navigation() {
  const pathname = usePathname();
  const dark = pathname === '/kontakt' || pathname === '/o-mne'; // stránky s tmavým úvodem
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // po odscrollování dostane lišta pozadí; při jízdě dolů se schová, nahoru se vrátí
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > last && y > 240);
      last = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`site-nav ${dark ? 'is-dark' : ''} ${scrolled ? 'is-scrolled' : ''} ${hidden && !open ? 'is-hidden' : ''}`}>
        <div className="nav-bar">
          <Link href="/" className="nav-logo" aria-label="Jakub Kozel – úvod">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="" width={68} height={44} className="nav-logo-mark" />
          </Link>

          <nav className="nav-links" aria-label="Hlavní menu">
            {LINKS.map((l) => {
              const active = pathname === l.href || pathname.startsWith(`${l.href}/`);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`nav-link ${active ? 'active' : ''}`}
                  style={{ '--accent': l.accent } as CSSProperties}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/kontakt" className={`nav-cta ${pathname === '/kontakt' ? 'active' : ''}`}>
            Kontakt <span aria-hidden="true">→</span>
          </Link>

          <button
            className={`nav-burger ${open ? 'open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-overlay"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="overlay-links" aria-label="Mobilní menu">
              {[{ href: '/', label: 'Úvod' }, ...LINKS, { href: '/kontakt', label: 'Kontakt' }].map((l, i, arr) => (
                <motion.div
                  key={l.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    className={`overlay-link ${pathname === l.href ? 'active' : ''}`}
                    style={{ color: brandColor(i / (arr.length - 1)) }}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="overlay-contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href="mailto:jakubkozel@seznam.cz">jakubkozel@seznam.cz</a>
              <a href="tel:+420728890062">728 890 062</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
