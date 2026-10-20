"use client";

import { useState } from 'react';
import { A_FORMATS, B_FORMATS, OTHER_FORMATS, mmToPx, num, type Format } from '@/content/paper';

const FORMATS: Format[] = [
  ...A_FORMATS,
  ...B_FORMATS.filter((f) => ['B4', 'B5', 'B6'].includes(f.name)),
  ...OTHER_FORMATS.filter((f) => f.name === 'DL (leták)' || f.name === 'Vizitka'),
];

const DPIS: { dpi: number; label: string }[] = [
  { dpi: 300, label: '300 · tisk' },
  { dpi: 150, label: '150 · plakát' },
  { dpi: 96, label: '96 · Word, Canva' },
  { dpi: 72, label: '72 · PDF body' },
];

const BLEED = 3;

// Vybraný formát → rozměr v pixelech při zvoleném DPI, na výšku i na šířku, volitelně se spadávkou
export default function FormatPx() {
  const [name, setName] = useState('A4');
  const [dpi, setDpi] = useState(300);
  const [landscape, setLandscape] = useState(false);
  const [bleed, setBleed] = useState(false);
  const [copied, setCopied] = useState(false);

  const f = FORMATS.find((x) => x.name === name)!;
  const add = bleed ? 2 * BLEED : 0;
  const [wMm, hMm] = landscape ? [f.h + add, f.w + add] : [f.w + add, f.h + add];
  const w = mmToPx(wMm, dpi);
  const h = mmToPx(hMm, dpi);
  const px = `${w} × ${h} px`;

  const copy = () => {
    navigator.clipboard?.writeText(px).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="calc">
      <div className="calc-presets" role="group" aria-label="Formát">
        {FORMATS.map((x) => (
          <button
            key={x.name}
            type="button"
            className={`calc-chip ${x.name === name ? 'on' : ''}`}
            aria-pressed={x.name === name}
            onClick={() => setName(x.name)}
          >
            {x.name.replace(' (leták)', '')}
          </button>
        ))}
      </div>

      <fieldset className="calc-field">
        <legend>Rozlišení (DPI)</legend>
        <div className="calc-seg">
          {DPIS.map((d) => (
            <button key={d.dpi} type="button" className={dpi === d.dpi ? 'on' : ''} aria-pressed={dpi === d.dpi} onClick={() => setDpi(d.dpi)}>
              {d.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="calc-inputs">
        <fieldset className="calc-field">
          <legend>Orientace</legend>
          <div className="calc-seg">
            <button type="button" className={!landscape ? 'on' : ''} aria-pressed={!landscape} onClick={() => setLandscape(false)}>
              na výšku
            </button>
            <button type="button" className={landscape ? 'on' : ''} aria-pressed={landscape} onClick={() => setLandscape(true)}>
              na šířku
            </button>
          </div>
        </fieldset>
        <label className="typo-toggle fpx-bleed">
          <input type="checkbox" checked={bleed} onChange={(e) => setBleed(e.target.checked)} />
          se spadávkou 3 mm
        </label>
      </div>

      <div className="calc-out" aria-live="polite">
        <dl className="calc-grid fpx-grid">
          <div className="main">
            <dt>
              {f.name.replace(' (leták)', '')} při {dpi} DPI
            </dt>
            <dd>{px}</dd>
          </div>
          <div>
            <dt>Milimetry</dt>
            <dd>
              {num(wMm, 1)} × {num(hMm, 1)}
            </dd>
          </div>
          <div>
            <dt>Megapixely</dt>
            <dd>{num((w * h) / 1e6, 1)} Mpx</dd>
          </div>
        </dl>
        <div className="brief-actions">
          <button type="button" className="calc-chip brief-btn solid" onClick={copy}>
            {copied ? 'Zkopírováno' : 'Zkopírovat rozměr'}
          </button>
        </div>
        <p className="calc-note">
          {bleed
            ? `Rozměr včetně spadávky ${BLEED} mm na každé straně. Čistý formát je ${num(f.w, 1)} × ${num(f.h, 1)} mm.`
            : f.note
              ? `${f.name.replace(' (leták)', '')}: ${f.note}.`
              : `Formát ${f.name}.`}
        </p>
      </div>
    </div>
  );
}
