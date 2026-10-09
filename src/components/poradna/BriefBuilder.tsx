"use client";

import { useState, type ReactNode } from 'react';
import { BRIEF_KEY } from '../consentKey';

type Need = { label: string; obor: string };

const NEEDS: Need[] = [
  { label: 'Logo', obor: 'grafika' },
  { label: 'Vizuální identita', obor: 'grafika' },
  { label: 'Vizitky', obor: 'tiskoviny' },
  { label: 'Leták', obor: 'tiskoviny' },
  { label: 'Plakát', obor: 'tiskoviny' },
  { label: 'Katalog nebo brožura', obor: 'dtp' },
  { label: 'Kniha', obor: 'dtp' },
  { label: 'Web', obor: 'webdesign' },
  { label: 'Grafika na sítě', obor: 'grafika' },
];

const MOODS = [
  'seriózní',
  'přátelský',
  'hravý',
  'luxusní',
  'tradiční',
  'moderní',
  'minimalistický',
  'technický',
  'přírodní',
  'odvážný',
];

const ASSETS = ['logo ve vektoru (SVG, PDF, AI)', 'texty', 'vlastní fotky', 'barvy nebo manuál značky', 'zatím nic'];

const toggle = (list: string[], v: string, max = Infinity) =>
  list.includes(v) ? list.filter((x) => x !== v) : list.length < max ? [...list, v] : list;

function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="calc-field brief-field">
      <span>{label}</span>
      {children}
      {hint && <small>{hint}</small>}
    </label>
  );
}

function Chips({ legend, items, value, onToggle }: { legend: string; items: string[]; value: string[]; onToggle: (v: string) => void }) {
  return (
    <fieldset className="calc-field brief-field">
      <legend>{legend}</legend>
      <div className="calc-seg">
        {items.map((v) => (
          <button key={v} type="button" className={value.includes(v) ? 'on' : ''} aria-pressed={value.includes(v)} onClick={() => onToggle(v)}>
            {v}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

// Průvodce zadáním: z vyplněných polí složí text, který jde zkopírovat nebo rovnou vložit do poptávky
export default function BriefBuilder() {
  const [needs, setNeeds] = useState<string[]>([]);
  const [company, setCompany] = useState('');
  const [about, setAbout] = useState('');
  const [audience, setAudience] = useState('');
  const [moods, setMoods] = useState<string[]>([]);
  const [likes, setLikes] = useState('');
  const [dislikes, setDislikes] = useState('');
  const [assets, setAssets] = useState<string[]>([]);
  const [specs, setSpecs] = useState('');
  const [deadline, setDeadline] = useState('');
  const [copied, setCopied] = useState(false);

  const lines: [string, string][] = [
    ['Co potřebuji', needs.join(', ')],
    ['Firma nebo projekt', company],
    ['Čím se zabýváme', about],
    ['Naši zákazníci', audience],
    ['Jaký dojem má výsledek dělat', moods.join(', ')],
    ['Líbí se mi', likes],
    ['Nechci', dislikes],
    ['Podklady, které mám', assets.join(', ')],
    ['Rozměr, náklad, kde se to použije', specs],
    ['Termín', deadline],
  ];
  const filled = lines.filter(([, v]) => v.trim());
  const text = filled.map(([k, v]) => `${k}: ${v.trim()}`).join('\n');
  const obor = NEEDS.find((n) => n.label === needs[0])?.obor ?? 'grafika';

  const copy = () => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const send = () => {
    try {
      sessionStorage.setItem(BRIEF_KEY, text);
    } catch {}
    window.location.href = `/kontakt?obor=${obor}#poptavka`;
  };

  return (
    <div className="calc brief">
      <Chips legend="Co potřebujete" items={NEEDS.map((n) => n.label)} value={needs} onToggle={(v) => setNeeds(toggle(needs, v))} />

      <div className="brief-two">
        <Field label="Firma nebo projekt">
          <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Pekárna U Lípy" />
        </Field>
        <Field label="Termín">
          <input value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder="do 15. listopadu, veletrh 3. 12." />
        </Field>
      </div>

      <Field label="Čím se zabýváte" hint="Dvě tři věty, jako byste to vysvětlovali známému.">
        <textarea rows={3} value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Pečeme kváskový chleba a dorty na zakázku, prodáváme v jedné prodejně a na trzích." />
      </Field>

      <Field label="Kdo jsou vaši zákazníci">
        <textarea rows={2} value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="Rodiny z okolí, kavárny, které od nás odebírají pečivo." />
      </Field>

      <Chips legend="Jaký dojem má výsledek dělat (nejvýš 3)" items={MOODS} value={moods} onToggle={(v) => setMoods(toggle(moods, v, 3))} />

      <div className="brief-two">
        <Field label="Líbí se mi" hint="Odkazy a u každého, co přesně se vám líbí.">
          <textarea rows={3} value={likes} onChange={(e) => setLikes(e.target.value)} placeholder="web pekárny X: hodně fotek a krémová barva" />
        </Field>
        <Field label="Nechci">
          <textarea rows={3} value={dislikes} onChange={(e) => setDislikes(e.target.value)} placeholder="nic zlatého, žádné klipartové klásky" />
        </Field>
      </div>

      <Chips legend="Podklady, které máte" items={ASSETS} value={assets} onToggle={(v) => setAssets(toggle(assets, v))} />

      <Field label="Rozměr, náklad, kde se to použije">
        <textarea rows={2} value={specs} onChange={(e) => setSpecs(e.target.value)} placeholder="leták A5 oboustranně, 1 000 ks; logo na ceduli, krabice od dortů a Instagram" />
      </Field>

      <div className="calc-out brief-out" aria-live="polite">
        {filled.length ? (
          <>
            <textarea className="brief-text" readOnly rows={Math.min(14, filled.length + 2)} value={text} aria-label="Hotové zadání" />
            <div className="brief-actions">
              <button type="button" className="calc-chip brief-btn" onClick={copy}>
                {copied ? 'Zkopírováno' : 'Zkopírovat'}
              </button>
              <button type="button" className="calc-chip brief-btn solid" onClick={send}>
                Vložit do poptávky <span aria-hidden="true">→</span>
              </button>
            </div>
            <p className="calc-note">
              Vyplněno {filled.length} z {lines.length}. Prázdná pole se do zadání nevypíšou.
            </p>
          </>
        ) : (
          <p className="calc-note">Začněte tím, co potřebujete. Zadání se bude skládat tady.</p>
        )}
      </div>
    </div>
  );
}
