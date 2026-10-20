"use client";

import { useState } from 'react';
import { num } from '@/content/paper';

type Size = { w: number; h: number };

const ENVELOPES: Record<string, Size> = {
  C4: { w: 229, h: 324 },
  C5: { w: 162, h: 229 },
  C6: { w: 114, h: 162 },
  DL: { w: 110, h: 220 },
  'C6/5': { w: 114, h: 229 },
  B4: { w: 250, h: 353 },
  B5: { w: 176, h: 250 },
};

type Item = { label: string; size: Size; envelopes: string[]; note: string };

const ITEMS: Item[] = [
  {
    label: 'Dopis A4 přeložený na třetiny',
    size: { w: 99, h: 210 },
    envelopes: ['DL', 'C6/5'],
    note: 'Nejběžnější obchodní dopis. Obálka DL se dá koupit i s okénkem pro adresu.',
  },
  {
    label: 'A4 přeložené napůl',
    size: { w: 148.5, h: 210 },
    envelopes: ['C5'],
    note: 'Hodí se pro pár listů, které nechcete skládat na třetiny.',
  },
  {
    label: 'A4 nepřeložené',
    size: { w: 210, h: 297 },
    envelopes: ['C4'],
    note: 'Smlouvy, certifikáty a dokumenty, které se nemají pomačkat.',
  },
  {
    label: 'Silnější katalog A4',
    size: { w: 210, h: 297 },
    envelopes: ['B4'],
    note: 'B4 má víc místa pro tloušťku. Na hodně silné katalogy jsou obálky s rozšířeným dnem.',
  },
  {
    label: 'Brožura nebo leták A5',
    size: { w: 148, h: 210 },
    envelopes: ['C5', 'B5'],
    note: 'Tenká brožura se vejde do C5, silnější do B5.',
  },
  {
    label: 'Pohlednice nebo přání A6',
    size: { w: 105, h: 148 },
    envelopes: ['C6'],
    note: 'Přání A5 přeložené napůl má také rozměr A6.',
  },
  {
    label: 'Leták DL (99 × 210 mm)',
    size: { w: 99, h: 210 },
    envelopes: ['DL'],
    note: 'Leták DL je navržený přesně do obálky DL.',
  },
];

const SCALE = 0.55; // px nákresu na 1 mm

// Co posíláte → doporučená obálka a nákres obsahu v obálce v měřítku
export default function EnvelopePicker() {
  const [i, setI] = useState(0);
  const item = ITEMS[i];
  const [first, ...rest] = item.envelopes;
  const env = ENVELOPES[first];
  const pad = 4;
  const W = env.w * SCALE + pad * 2;
  const H = env.h * SCALE + pad * 2;

  return (
    <div className="calc">
      <fieldset className="calc-field brief-field">
        <legend>Co posíláte</legend>
        <div className="calc-seg">
          {ITEMS.map((x, k) => (
            <button key={x.label} type="button" className={k === i ? 'on' : ''} aria-pressed={k === i} onClick={() => setI(k)}>
              {x.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="calc-out env-out" aria-live="polite">
        <figure className="env-fig">
          <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} role="img" aria-label={`${item.label} v obálce ${first}, v měřítku`}>
            <rect x={pad} y={pad} width={env.w * SCALE} height={env.h * SCALE} rx="3" className="env-paper" />
            <rect
              x={pad + ((env.w - item.size.w) / 2) * SCALE}
              y={pad + ((env.h - item.size.h) / 2) * SCALE}
              width={item.size.w * SCALE}
              height={item.size.h * SCALE}
              rx="1.5"
              className="env-item"
            />
          </svg>
          <figcaption>v měřítku</figcaption>
        </figure>
        <div className="env-info">
          <p className="env-name">
            Obálka {first}
            <span>
              {env.w} × {env.h} mm
            </span>
          </p>
          <p className="calc-note">
            Volné místo: {num(env.w - item.size.w, 1)} mm na šířku a {num(env.h - item.size.h, 1)} mm na výšku.
          </p>
          <p className="calc-note">{item.note}</p>
          {rest.length > 0 && (
            <p className="calc-note">
              Jiná možnost:{' '}
              {rest.map((r) => (
                <strong key={r}>
                  {r} ({ENVELOPES[r].w} × {ENVELOPES[r].h} mm)
                </strong>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
