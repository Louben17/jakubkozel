"use client";

import { useEffect, useState, type CSSProperties, type FormEvent, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SERVICES } from './services';
import { track } from './Consent';

const EASE = [0.22, 1, 0.36, 1] as const;
const BUDGETS = ['do 10 000 Kč', '10–30 000 Kč', '30–80 000 Kč', 'nad 80 000 Kč', 'nevím'];
const DEADLINES = ['spěchá', 'do měsíce', 'do 3 měsíců', 'bez termínu'];

type Status = 'idle' | 'sending' | 'done' | 'error';

function Chip({
  active,
  onClick,
  accent,
  children,
}: {
  active: boolean;
  onClick: () => void;
  accent?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={`chip ${active ? 'on' : ''}`}
      style={{ '--accent': accent ?? '#fff' } as CSSProperties}
      aria-pressed={active}
      onClick={onClick}
    >
      {accent && <i />}
      {children}
    </button>
  );
}

export default function InquiryForm() {
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  // /kontakt?obor=grafika → obor rovnou předvybraný (tlačítka „Nezávazně poptat")
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('obor');
    const s = SERVICES.find((x) => x.slug === slug);
    if (s) setServices([s.label]);
  }, []);

  const toggle = (label: string) =>
    setServices((cur) => (cur.includes(label) ? cur.filter((x) => x !== label) : [...cur, label]));

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/poptavka', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          phone: fd.get('phone'),
          message: fd.get('message'),
          web: fd.get('web'),
          services,
          budget,
          deadline,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Zprávu se nepodařilo odeslat.');
      track('generate_lead', { services: services.join(', ') || 'neuvedeno', budget: budget || 'neuvedeno' });
      setStatus('done');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Zprávu se nepodařilo odeslat.');
      setStatus('error');
    }
  }

  return (
    <motion.div
      id="poptavka"
      className="inquiry"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <AnimatePresence mode="wait">
        {status === 'done' ? (
          <motion.div
            key="done"
            className="inquiry-done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <svg viewBox="0 0 64 64" className="done-icon" aria-hidden="true">
              <defs>
                <linearGradient id="done-g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#F66F76" />
                  <stop offset="0.5" stopColor="#E665EC" />
                  <stop offset="1" stopColor="#56D2CA" />
                </linearGradient>
              </defs>
              <motion.circle
                cx="32"
                cy="32"
                r="29"
                fill="none"
                stroke="url(#done-g)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: EASE }}
              />
              <motion.path
                d="M20 33 L28.5 41.5 L45 24"
                fill="none"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
              />
            </svg>
            <h3>Díky, poptávka je na cestě.</h3>
            <p>Ozvu se vám co nejdřív.</p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={submit} exit={{ opacity: 0, y: -10 }}>
            <div className="inquiry-head">
              <p className="eyebrow eyebrow-dark">Poptávka</p>
              <h2>Popište mi svůj projekt.</h2>
            </div>

            <fieldset className="field">
              <legend>O co jde?</legend>
              <div className="chips">
                {SERVICES.map((s) => (
                  <Chip key={s.slug} active={services.includes(s.label)} accent={s.accent} onClick={() => toggle(s.label)}>
                    {s.label}
                  </Chip>
                ))}
              </div>
            </fieldset>

            <div className="field-row">
              <label className="field">
                <span>Jméno *</span>
                <input name="name" required autoComplete="name" maxLength={120} placeholder="Jan Novák" />
              </label>
              <label className="field">
                <span>E-mail *</span>
                <input name="email" type="email" required autoComplete="email" maxLength={160} placeholder="jan@firma.cz" />
              </label>
              <label className="field">
                <span>Telefon</span>
                <input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="nepovinné" />
              </label>
            </div>

            <label className="field">
              <span>Zpráva *</span>
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                placeholder="Co potřebujete, pro koho to je, případně odkaz na podklady…"
              />
            </label>

            <div className="field-row two">
              <fieldset className="field">
                <legend>Rozpočet</legend>
                <div className="chips">
                  {BUDGETS.map((b) => (
                    <Chip key={b} active={budget === b} onClick={() => setBudget(budget === b ? '' : b)}>
                      {b}
                    </Chip>
                  ))}
                </div>
              </fieldset>
              <fieldset className="field">
                <legend>Termín</legend>
                <div className="chips">
                  {DEADLINES.map((d) => (
                    <Chip key={d} active={deadline === d} onClick={() => setDeadline(deadline === d ? '' : d)}>
                      {d}
                    </Chip>
                  ))}
                </div>
              </fieldset>
            </div>

            {/* past na roboty – člověk pole nevidí */}
            <input name="web" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />

            <div className="inquiry-foot">
              <p className="gdpr">Údaje použiji jen k odpovědi na vaši poptávku.</p>
              <button type="submit" className="inquiry-send" disabled={status === 'sending'}>
                {status === 'sending' ? 'Odesílám…' : 'Odeslat poptávku'}
                <span aria-hidden="true">→</span>
              </button>
            </div>
            {status === 'error' && (
              <p className="inquiry-error" role="alert">
                {error}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
