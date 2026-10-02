"use client";

import { useState } from 'react';
import { MM_PER_INCH, num } from '@/content/paper';

type Unit = 'px' | 'mm' | 'cm' | 'in';

const UNITS: { id: Unit; label: string }[] = [
  { id: 'px', label: 'px' },
  { id: 'mm', label: 'mm' },
  { id: 'cm', label: 'cm' },
  { id: 'in', label: 'palce' },
];

const DPIS = [72, 150, 300];

const PRESETS: { label: string; w: number; h: number; unit: Unit }[] = [
  { label: 'A4', w: 210, h: 297, unit: 'mm' },
  { label: 'A5', w: 148, h: 210, unit: 'mm' },
  { label: 'A3', w: 297, h: 420, unit: 'mm' },
  { label: 'Vizitka', w: 90, h: 50, unit: 'mm' },
  { label: 'Full HD', w: 1920, h: 1080, unit: 'px' },
  { label: 'Fotka 12 Mpx', w: 4000, h: 3000, unit: 'px' },
];

// kolik milimetrů je jedna jednotka (px závisí na DPI)
const mmPer = (unit: Unit, dpi: number) =>
  unit === 'px' ? MM_PER_INCH / dpi : unit === 'mm' ? 1 : unit === 'cm' ? 10 : MM_PER_INCH;

const parse = (v: string) => {
  const n = parseFloat(v.replace(',', '.').replace(/\s/g, ''));
  return Number.isFinite(n) && n > 0 ? n : 0;
};

// Převodník px ↔ mm ↔ cm ↔ palce při zvoleném rozlišení
export default function PxCalculator() {
  const [w, setW] = useState('210');
  const [h, setH] = useState('297');
  const [unit, setUnit] = useState<Unit>('mm');
  const [dpi, setDpi] = useState(300);
  const [customDpi, setCustomDpi] = useState('');

  const effDpi = parse(customDpi) || dpi;
  const wMm = parse(w) * mmPer(unit, effDpi);
  const hMm = parse(h) * mmPer(unit, effDpi);
  const ok = wMm > 0 && hMm > 0;

  const rows: { label: string; digits: number; f: number }[] = [
    { label: 'Pixely', digits: 0, f: effDpi / MM_PER_INCH },
    { label: 'Milimetry', digits: 1, f: 1 },
    { label: 'Centimetry', digits: 2, f: 0.1 },
    { label: 'Palce', digits: 2, f: 1 / MM_PER_INCH },
  ];
  const pxW = Math.round((wMm / MM_PER_INCH) * effDpi);
  const pxH = Math.round((hMm / MM_PER_INCH) * effDpi);
  const at300 = (mm: number) => Math.round((mm / MM_PER_INCH) * 300);

  return (
    <div className="calc">
      <div className="calc-presets" role="group" aria-label="Rychlá volba">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            className="calc-chip"
            onClick={() => {
              setW(String(p.w));
              setH(String(p.h));
              setUnit(p.unit);
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="calc-inputs">
        <label className="calc-field">
          <span>Šířka</span>
          <input inputMode="decimal" value={w} onChange={(e) => setW(e.target.value)} />
        </label>
        <span className="calc-x" aria-hidden="true">
          ×
        </span>
        <label className="calc-field">
          <span>Výška</span>
          <input inputMode="decimal" value={h} onChange={(e) => setH(e.target.value)} />
        </label>
        <fieldset className="calc-field">
          <legend>Jednotka</legend>
          <div className="calc-seg">
            {UNITS.map((u) => (
              <button key={u.id} type="button" className={unit === u.id ? 'on' : ''} aria-pressed={unit === u.id} onClick={() => setUnit(u.id)}>
                {u.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <fieldset className="calc-field calc-dpi">
        <legend>Rozlišení (DPI)</legend>
        <div className="calc-seg">
          {DPIS.map((d) => (
            <button
              key={d}
              type="button"
              className={!parse(customDpi) && dpi === d ? 'on' : ''}
              aria-pressed={!parse(customDpi) && dpi === d}
              onClick={() => {
                setDpi(d);
                setCustomDpi('');
              }}
            >
              {d}
            </button>
          ))}
          <input
            className={parse(customDpi) ? 'on' : ''}
            inputMode="numeric"
            placeholder="vlastní"
            aria-label="Vlastní DPI"
            value={customDpi}
            onChange={(e) => setCustomDpi(e.target.value)}
          />
        </div>
      </fieldset>

      <div className="calc-out" aria-live="polite">
        {ok ? (
          <>
            <dl className="calc-grid">
              {rows.map((r) => (
                <div key={r.label} className={r.label === 'Pixely' ? 'main' : ''}>
                  <dt>{r.label}</dt>
                  <dd>
                    {num(r.label === 'Pixely' ? pxW : wMm * r.f, r.digits)} × {num(r.label === 'Pixely' ? pxH : hMm * r.f, r.digits)}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="calc-note">
              {unit === 'px'
                ? `Při 300 DPI se tenhle obrázek kvalitně vytiskne do velikosti ${num(wMm * (effDpi / 300), 0)} × ${num(hMm * (effDpi / 300), 0)} mm.`
                : `Na kvalitní tisk tohoto rozměru (300 DPI) potřebujete obrázek aspoň ${num(at300(wMm))} × ${num(at300(hMm))} px.`}{' '}
              Celkem {num((pxW * pxH) / 1e6, 1)} Mpx.
            </p>
          </>
        ) : (
          <p className="calc-note">Zadejte šířku a výšku.</p>
        )}
      </div>
    </div>
  );
}
