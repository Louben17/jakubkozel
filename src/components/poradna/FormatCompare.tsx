"use client";

import { useState } from 'react';
import { A_FORMATS, B_FORMATS, C_FORMATS, type Format } from '@/content/paper';

const JIS: Format[] = [
  { name: 'B5 JIS', w: 182, h: 257 },
  { name: 'B6 JIS', w: 128, h: 182 },
];

const GROUPS: { label: string; formats: Format[] }[] = [
  { label: 'Řada A', formats: A_FORMATS.filter((f) => ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'].includes(f.name)) },
  { label: 'Řada B', formats: B_FORMATS.filter((f) => f.name !== 'B0') },
  { label: 'Obálky C', formats: C_FORMATS.filter((f) => ['C4', 'C5', 'C6'].includes(f.name)) },
  { label: 'Japonská B', formats: JIS },
];
const ALL = GROUPS.flatMap((g) => g.formats);

const COLORS = ['#F29E4C', '#2BB39A', '#6C7BD0', '#FF6B73'];
const MAX = 4;
const BOX = 300; // nejdelší strana největšího formátu v nákresu (px)

// Výběr až čtyř formátů a jejich překrytí v měřítku od levého dolního rohu
export default function FormatCompare() {
  const [picked, setPicked] = useState<string[]>(['A4', 'B5', 'A5']);
  const shown = picked.map((n) => ALL.find((f) => f.name === n)!).sort((a, b) => b.w * b.h - a.w * a.h);
  const maxSide = Math.max(...shown.map((f) => Math.max(f.w, f.h)), 1);
  const k = BOX / maxSide;
  const W = Math.max(...shown.map((f) => f.w), 1) * k + 8;
  const H = Math.max(...shown.map((f) => f.h), 1) * k + 8;

  const toggle = (n: string) =>
    setPicked((cur) => (cur.includes(n) ? cur.filter((x) => x !== n) : cur.length < MAX ? [...cur, n] : [...cur.slice(1), n]));

  return (
    <div className="calc">
      {GROUPS.map((g) => (
        <fieldset key={g.label} className="calc-field">
          <legend>{g.label}</legend>
          <div className="calc-seg">
            {g.formats.map((f) => (
              <button key={f.name} type="button" className={picked.includes(f.name) ? 'on' : ''} aria-pressed={picked.includes(f.name)} onClick={() => toggle(f.name)}>
                {f.name}
              </button>
            ))}
          </div>
        </fieldset>
      ))}

      <div className="calc-out cmp-out" aria-live="polite">
        {shown.length ? (
          <>
            <svg
              viewBox={`0 0 ${W} ${H}`}
              width={W}
              height={H}
              className="cmp-svg"
              role="img"
              aria-label={`Porovnání formátů v měřítku: ${shown.map((f) => f.name).join(', ')}`}
            >
              {shown.map((f) => {
                const c = COLORS[picked.indexOf(f.name) % COLORS.length];
                return (
                  <rect key={f.name} x={4} y={H - 4 - f.h * k} width={f.w * k} height={f.h * k} rx="2" fill={c} fillOpacity="0.16" stroke={c} strokeWidth="2" />
                );
              })}
            </svg>
            <ul className="cmp-legend">
              {shown.map((f) => (
                <li key={f.name}>
                  <i style={{ background: COLORS[picked.indexOf(f.name) % COLORS.length] }} />
                  <strong>{f.name}</strong> {f.w} × {f.h} mm
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="calc-note">Vyberte formáty, které chcete porovnat.</p>
        )}
        <p className="calc-note">Vybrat můžete až {MAX} formáty. Nákres je v měřítku, všechny listy začínají v levém dolním rohu.</p>
      </div>
    </div>
  );
}
