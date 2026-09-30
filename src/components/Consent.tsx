"use client";

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Google Analytics se načte AŽ po souhlasu (bez souhlasu se nepošle nic, ani bezcookiesové pingy)
export const GA_ID = 'G-ZKYRCNPZ9D';
const KEY = 'cookie-consent-v1';
const OPEN_EVENT = 'cookie-consent:open';

type Choice = 'granted' | 'denied';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function readChoice(): Choice | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

// po odvolání souhlasu smaže cookies Google Analytics
function clearGaCookies() {
  const host = window.location.hostname.replace(/^www\./, '');
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim();
    if (name === '_ga' || name.startsWith('_ga_') || name === '_gid') {
      for (const domain of ['', `; domain=.${host}`, `; domain=${window.location.hostname}`]) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
      }
    }
  });
}

/** Událost do GA – zavolá se jen když je GA načtené (tj. po souhlasu) */
export function track(event: string, params?: Record<string, unknown>) {
  window.gtag?.('event', event, params);
}

export default function Consent() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const c = readChoice();
    setChoice(c);
    if (!c) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const decide = (c: Choice) => {
    try {
      localStorage.setItem(KEY, c);
    } catch {}
    if (c === 'denied' && choice === 'granted') {
      clearGaCookies();
      window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
    }
    setChoice(c);
    setOpen(false);
  };

  return (
    <>
      {choice === 'granted' && (
        <>
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
          </Script>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        </>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            className="consent"
            role="dialog"
            aria-live="polite"
            aria-label="Souhlas s cookies"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="consent-title">
              <span className="consent-dot" aria-hidden="true" />
              Cookies
            </p>
            <p className="consent-text">
              Rád bych věděl, jak web používáte, proto bych použil analytické cookies služby Google Analytics.
              Bez vašeho souhlasu se nic neměří. Volbu můžete kdykoli změnit v patičce webu.
            </p>
            <div className="consent-actions">
              <button className="consent-btn" onClick={() => decide('denied')}>
                Jen nezbytné
              </button>
              <button className="consent-btn solid" onClick={() => decide('granted')}>
                Přijmout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Odkaz do patičky – znovu otevře lištu se souhlasem */
export function CookieSettings() {
  return (
    <button className="cookie-settings" onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Nastavení cookies
    </button>
  );
}
