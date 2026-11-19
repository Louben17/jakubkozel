"use client";

import { useState } from 'react';
import { num } from '@/content/paper';

const PT_MM = 25.4 / 72; // 1 bod = 0,3528 mm
const CAP = 0.7; // výška verzálky ≈ 70 % kuželky (u běžných písem 0,65–0,72)

const PLACES = [
  { label: 'V ruce', cm: 35 },
  { label: 'Na stole', cm: 60 },
  { label: 'Nástěnka', cm: 150 },
  { label: 'Roll-up', cm: 300 },
  { label: 'Výloha', cm: 500 },
  { label: 'Billboard', cm: 2000 },
];

// poměr vzdálenost : výška velkého písmene
const LEVELS = [
  { key: 'min', label: 'Ještě přečtete', ratio: 300, note: 'drobné písmo, poznámky' },
  { key: 'text', label: 'Pohodlný text', ratio: 120, note: 'odstavce, kontakty' },
  { key: 'head', label: 'Nadpis', ratio: 40, note: 'zaujme na první pohled' },
];

const roundPt = (pt: number) => (pt < 20 ? Math.round(pt * 2) / 2 : pt < 100 ? Math.round(pt) : Math.round(pt / 5) * 5);

const fmtLen = (mm: number) => (mm < 10 ? `${num(mm, 1)} mm` : `${num(mm / 10, 1)} cm`);

// Vzdálenost čtení → výška velkého písmene a velikost písma v bodech pro tři úrovně textu
export default function TypeDistance() {
  const [cm, setCm] = useState(35);
  const rows = LEVELS.map((l) => {
    const cap = (cm * 10) / l.ratio;
    return { ...l, cap, pt: roundPt(cap / CAP / PT_MM) };
  });

  return (
    <div className="calc">
      <fieldset className="calc-field">
        <legend>Odkud se čte</legend>
        <div className="calc-presets">
          {PLACES.map((p) => (
            <button key={p.label} type="button" className={`calc-chip ${p.cm === cm ? 'on' : ''}`} aria-pressed={p.cm === cm} onClick={() => setCm(p.cm)}>
              {p.label} · {p.cm < 100 ? `${p.cm} cm` : `${num(p.cm / 100, 1)} m`}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="calc-inputs">
        <label className="calc-field">
          <span>Vzdálenost (cm)</span>
          <input type="number" min={10} max={5000} value={cm} onChange={(e) => setCm(Math.min(5000, Math.max(0, Number(e.target.value) || 0)))} />
        </label>
      </div>

      <div className="calc-out" aria-live="polite">
        <dl className="calc-grid tsd-grid">
          {rows.map((r) => (
            <div key={r.key} className={r.key === 'text' ? 'main' : undefined}>
              <dt>{r.label}</dt>
              <dd>
                {num(r.pt, 1)} b
                <small>velké písmeno {fmtLen(r.cap)}</small>
              </dd>
            </div>
          ))}
        </dl>
        <div className="tsd-bars" aria-hidden="true">
          {rows.map((r) => (
            <div key={r.key}>
              <span style={{ height: `${Math.max(4, (r.cap / rows[2].cap) * 100)}%` }} />
              <i>{r.note}</i>
            </div>
          ))}
        </div>
        <p className="calc-note">
          Body počítají s písmem, jehož velká písmena mají 70 % velikosti v bodech. U písma s drobnou kresbou
          (Garamond, Didot) přidejte asi 10 %, u tenkých řezů a bílého textu na tmavém podkladu také.
        </p>
      </div>
    </div>
  );
}
