"use client";

import { useState } from 'react';
import { mmToPx, num } from '@/content/paper';

const SIZES = [
  { w: 60, h: 160 },
  { w: 80, h: 200 },
  { w: 85, h: 200 },
  { w: 100, h: 200 },
  { w: 120, h: 200 },
  { w: 150, h: 200 },
];
const EXTRA = [0, 5, 10, 15]; // cm grafiky, která zůstane v kazetě
const K = 1.15; // px nákresu na cm
const FLOOR = 250;
const CAS = 8; // výška kazety v cm

// Rozměr roll-upu → rozměr tiskových dat, pixely a nákres s výškou očí a stolem
export default function RollupPlanner() {
  const [i, setI] = useState(2);
  const [extra, setExtra] = useState(10);
  const [table, setTable] = useState(true);
  const s = SIZES[i];
  const wMm = s.w * 10;
  const hMm = (s.h + extra) * 10;

  const y = (cm: number) => FLOOR - cm * K; // výška nad zemí → y
  const bw = s.w * K;
  const bx = 40;
  const top = y(CAS + s.h);
  const svgW = bx + bw + 110;
  const eyeY = y(160);

  return (
    <div className="calc">
      <fieldset className="calc-field">
        <legend>Rozměr roll-upu (cm)</legend>
        <div className="calc-presets">
          {SIZES.map((x, k) => (
            <button key={x.w} type="button" className={`calc-chip ${k === i ? 'on' : ''}`} aria-pressed={k === i} onClick={() => setI(k)}>
              {x.w} × {x.h}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="calc-inputs">
        <fieldset className="calc-field">
          <legend>Přesah do kazety podle tiskárny</legend>
          <div className="calc-seg">
            {EXTRA.map((e) => (
              <button key={e} type="button" className={extra === e ? 'on' : ''} aria-pressed={extra === e} onClick={() => setExtra(e)}>
                {e === 0 ? 'žádný' : `${e} cm`}
              </button>
            ))}
          </div>
        </fieldset>
        <label className="typo-toggle fpx-bleed">
          <input type="checkbox" checked={table} onChange={(e) => setTable(e.target.checked)} />
          stojí za stolem
        </label>
      </div>

      <div className="calc-out ru-out" aria-live="polite">
        <figure className="ru-fig">
          <svg viewBox={`0 0 ${svgW} 262`} width={svgW} height={262} role="img" aria-label={`Roll-up ${s.w} × ${s.h} cm vedle postavy 175 cm, v měřítku`}>
            <line x1={0} y1={FLOOR} x2={svgW} y2={FLOOR} className="ru-floor" />
            <rect x={bx} y={top} width={bw} height={s.h * K} className="ru-banner" />
            {/* zóny: horní část v úrovni očí, střed, spodek */}
            <rect x={bx} y={top} width={bw} height={Math.max(0, y(140) - top)} className="ru-z1" />
            <rect x={bx} y={y(140)} width={bw} height={60 * K} className="ru-z2" />
            <rect x={bx + 4} y={top + 6} width={bw * 0.45} height={5} rx={2.5} className="ru-ink" />
            <rect x={bx + 4} y={top + 15} width={bw * 0.3} height={3.5} rx={1.75} className="ru-ink soft" />
            <rect x={bx - 2} y={top - 3} width={bw + 4} height={3} rx={1.5} className="ru-rail" />
            <rect x={bx - 4} y={y(CAS)} width={bw + 8} height={CAS * K} rx={2} className="ru-cas" />
            {table && <rect x={bx - 14} y={y(75)} width={bw + 28} height={75 * K} rx={2} className="ru-table" />}
            <line x1={bx - 6} y1={eyeY} x2={bx + bw + 46} y2={eyeY} className="ru-eye" />
            {/* postava 175 cm */}
            <g className="ru-person" transform={`translate(${bx + bw + 30} 0)`}>
              <circle cx={0} cy={y(164)} r={10} />
              <rect x={-14} y={y(150)} width={28} height={60 * K} rx={10} />
              <rect x={-11} y={y(93)} width={10} height={93 * K} rx={4} />
              <rect x={1} y={y(93)} width={10} height={93 * K} rx={4} />
            </g>
            <text x={bx + bw + 52} y={eyeY + 4} className="ru-label">
              oči
            </text>
          </svg>
          <figcaption>v měřítku, postava 175 cm</figcaption>
        </figure>
        <div className="ru-info">
          <dl className="calc-grid ru-grid">
            <div className="main">
              <dt>Tisková data</dt>
              <dd>
                {num(wMm)} × {num(hMm)} mm
              </dd>
            </div>
            <div>
              <dt>Při 150 DPI</dt>
              <dd>
                {num(mmToPx(wMm, 150))} × {num(mmToPx(hMm, 150))} px
              </dd>
            </div>
            <div>
              <dt>Při 100 DPI</dt>
              <dd>
                {num(mmToPx(wMm, 100))} × {num(mmToPx(hMm, 100))} px
              </dd>
            </div>
          </dl>
          <ul className="ru-legend">
            <li>
              <i className="ru-z1" /> 140 cm a výš: logo a hlavní sdělení
            </li>
            <li>
              <i className="ru-z2" /> 80–140 cm: text, kontakt, QR kód
            </li>
            <li>
              <i className="ru-banner" /> pod 80 cm: jen pozadí{table ? ', zakryje ho stůl' : ', zakryjí ho lidé'}
            </li>
          </ul>
          <p className="calc-note">
            {extra > 0
              ? `Spodních ${extra} cm grafiky zůstane v kazetě. Nedávejte tam nic důležitého.`
              : 'Bez přesahu: viditelná plocha se rovná rozměru dat.'}{' '}
            Spadávku a přesný rozměr vždycky ověřte v šabloně tiskárny.
          </p>
        </div>
      </div>
    </div>
  );
}
