"use client";

import { useState, type CSSProperties } from 'react';

type Fold = 'z' | 'c';

// šířky dílů vnitřní strany zleva doprava (mm); u role je vnitřní záložka užší, aby se zasunula
const PANELS: Record<Fold, [number, number, number]> = { z: [99, 99, 99], c: [100, 100, 97] };

// popisky dílů: líc (strana, na kterou se díváme) a rub; sides = názvy obou stran archu
const FACES: Record<Fold, { sides: [string, string]; front: [string, string, string]; back: [string, string, string] }> = {
  z: { sides: ['Strana A', 'Strana B'], front: ['Strana A1', 'Strana A2', 'Zadní strana'], back: ['Titulní strana', 'Strana B2', 'Strana B3'] },
  c: { sides: ['Vnitřní strana', 'Vnější strana'], front: ['Vnitřní 1', 'Vnitřní 2', 'Záložka'], back: ['Titulní strana', 'Zadní strana', 'Vnější záložka'] },
};

const INFO: Record<Fold, { title: string; text: string }> = {
  z: {
    title: 'Do Z (leporelo)',
    text: 'Tři stejné díly po 99 mm se skládají střídavě jako harmonika. Leták se snadno otevře a hodí se pro ceníky, mapy a programy.',
  },
  c: {
    title: 'Do C (role)',
    text: 'Oba krajní díly se zalomí dovnitř. Díl, který se zasouvá, musí být o 2–3 mm užší, jinak se v lomu vlní a skládačka nedrží tvar.',
  },
};

// Plochý výkres: vnitřní a vnější strana s rozměry dílů, lomy a spadávkou
function Spec({ fold }: { fold: Fold }) {
  const inside = PANELS[fold];
  const outside = [...inside].reverse() as typeof inside;
  const k = 1.6; // px na mm ve výkresu
  const W = 297 * k;
  const H = 210 * k;
  const pad = 24;
  const bleed = 3 * k;
  const row = (y: number, widths: number[], label: string, names: string[]) => {
    let x = pad;
    return (
      <g>
        <text x={pad} y={y - 12} className="spec-label">
          {label}
        </text>
        <rect x={pad - bleed} y={y - bleed} width={W + 2 * bleed} height={H + 2 * bleed} className="spec-bleed" />
        <rect x={pad} y={y} width={W} height={H} className="spec-sheet" />
        {widths.map((w, i) => {
          const x0 = x;
          x += w * k;
          return (
            <g key={i}>
              {i > 0 && <line x1={x0} y1={y} x2={x0} y2={y + H} className="spec-fold" />}
              <rect x={x0 + 4 * k} y={y + 4 * k} width={w * k - 8 * k} height={H - 8 * k} className="spec-safe" />
              <text x={x0 + (w * k) / 2} y={y + H / 2 - 8} className="spec-name">
                {names[i]}
              </text>
              <text x={x0 + (w * k) / 2} y={y + H / 2 + 20} className="spec-mm">
                {w} mm
              </text>
            </g>
          );
        })}
      </g>
    );
  };
  const { sides, front, back } = FACES[fold];
  return (
    <svg viewBox={`0 0 ${W + pad * 2} ${H * 2 + 110}`} className="spec" role="img" aria-label={`Výkres skládačky ${INFO[fold].title}: ${sides[0]} ${inside.join(' + ')} mm, ${sides[1]} ${outside.join(' + ')} mm`}>
      {row(36, inside, sides[0], front)}
      {row(36 + H + 60, outside, sides[1], [...back].reverse())}
    </svg>
  );
}

// Interaktivní 3D skládačka A4 → DL
export default function FoldDemo() {
  const [fold, setFold] = useState<Fold>('c');
  const [folded, setFolded] = useState(false);
  const [l, m, r] = PANELS[fold];
  const f = FACES[fold];

  return (
    <div className="fold">
      <div className="fold-controls">
        <div className="calc-seg" role="group" aria-label="Typ skládání">
          {(['c', 'z'] as Fold[]).map((t) => (
            <button
              key={t}
              type="button"
              className={fold === t ? 'on' : ''}
              aria-pressed={fold === t}
              onClick={() => {
                setFolded(false);
                setFold(t);
              }}
            >
              {INFO[t].title}
            </button>
          ))}
        </div>
        <button type="button" className="svc-link fold-toggle" onClick={() => setFolded((v) => !v)}>
          {folded ? 'Rozložit' : 'Složit'} <span aria-hidden="true">{folded ? '↺' : '→'}</span>
        </button>
      </div>

      <div className="fold-stage" aria-hidden="true">
        <div
          className={`fold-sheet fold-${fold} ${folded ? 'is-folded' : ''}`}
          style={{ '--l': l / 297, '--m': m / 297, '--r': r / 297 } as CSSProperties}
        >
          <div className="fold-panel fold-left">
            <div className="fold-face front">
              <b>{f.front[0]}</b>
              <span>{l} mm</span>
            </div>
            <div className="fold-face back">
              <b>{f.back[0]}</b>
            </div>
          </div>
          <div className="fold-panel fold-mid">
            <div className="fold-face front">
              <b>{f.front[1]}</b>
              <span>{m} mm</span>
            </div>
          </div>
          <div className="fold-panel fold-right">
            <div className="fold-face front">
              <b>{f.front[2]}</b>
              <span>{r} mm</span>
            </div>
            <div className="fold-face back">
              <b>{f.back[2]}</b>
            </div>
          </div>
        </div>
      </div>

      <p className="fold-info">
        <strong>{INFO[fold].title}:</strong> {INFO[fold].text}{' '}
        {folded ? 'Složený leták má 99 × 210 mm a vejde se do obálky DL.' : 'Rozložená A4 má 297 × 210 mm.'}
      </p>

      <div className="fold-scroll">
        <Spec fold={fold} />
      </div>
      <p className="fold-legend">
        <span>
          <i className="lg-fold" /> lom
        </span>
        <span>
          <i className="lg-safe" /> bezpečná zóna (4 mm od lomu a okraje)
        </span>
        <span>
          <i className="lg-bleed" /> spadávka 3 mm
        </span>
      </p>
    </div>
  );
}
