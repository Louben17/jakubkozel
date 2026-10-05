"use client";

import { useState } from 'react';
import { PLATFORMS, PRICE_TYPES, PROGRAMS, USES, type Platform, type PriceType, type Use } from '@/content/programs';

const label = <T extends string>(list: { id: T; label: string }[], id: T) => list.find((x) => x.id === id)!.label;

function Filter<T extends string>({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: { id: T; label: string }[];
  value: T | null;
  onChange: (v: T | null) => void;
}) {
  return (
    <fieldset className="calc-field pg-filter">
      <legend>{title}</legend>
      <div className="calc-seg">
        <button type="button" className={value === null ? 'on' : ''} aria-pressed={value === null} onClick={() => onChange(null)}>
          Vše
        </button>
        {options.map((o) => (
          <button key={o.id} type="button" className={value === o.id ? 'on' : ''} aria-pressed={value === o.id} onClick={() => onChange(o.id)}>
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

// Průvodce výběrem grafického programu – filtr podle účelu, ceny a systému
export default function ProgramPicker() {
  const [use, setUse] = useState<Use | null>(null);
  const [price, setPrice] = useState<PriceType | null>(null);
  const [platform, setPlatform] = useState<Platform | null>(null);

  const list = PROGRAMS.filter(
    (p) =>
      (!use || p.uses.includes(use)) && (!price || p.priceTypes.includes(price)) && (!platform || p.platforms.includes(platform)),
  );

  return (
    <div className="pg">
      <div className="pg-filters">
        <Filter title="Co chci dělat" options={USES} value={use} onChange={setUse} />
        <Filter title="Cena" options={PRICE_TYPES} value={price} onChange={setPrice} />
        <Filter title="Systém" options={PLATFORMS} value={platform} onChange={setPlatform} />
      </div>

      <p className="pg-count" aria-live="polite">
        {list.length === 0
          ? 'Takovou kombinaci žádný program nesplňuje. Zkuste uvolnit některý filtr.'
          : `${list.length} z ${PROGRAMS.length} programů`}
      </p>

      <div className="pg-list">
        {list.map((p) => (
          <article key={p.name} className="pg-card">
            <header>
              <h3>{p.name}</h3>
              <div className="pg-tags">
                {p.priceTypes.map((t) => (
                  <span key={t} className={`pg-tag pg-${t}`}>
                    {label(PRICE_TYPES, t)}
                  </span>
                ))}
              </div>
            </header>
            <p className="pg-best">{p.best}</p>
            <dl>
              <div>
                <dt>Cena</dt>
                <dd>{p.price}</dd>
              </div>
              <div>
                <dt>AI</dt>
                <dd>{p.ai}</dd>
              </div>
              <div>
                <dt>Na co</dt>
                <dd>{p.uses.map((u, i) => (i ? label(USES, u).toLowerCase() : label(USES, u))).join(', ')}</dd>
              </div>
              <div>
                <dt>Systém</dt>
                <dd>{p.platforms.map((x) => label(PLATFORMS, x)).join(', ')}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
