"use client";

import { useMemo, useState } from 'react';
import { num } from '@/content/paper';

type Ecc = 'L' | 'M' | 'Q' | 'H';

// Kapacita QR kódu v bajtech (bajtový režim, jak kódují odkazy běžné generátory) pro verze 1–20
const CAP: Record<Ecc, number[]> = {
  L: [17, 32, 53, 78, 106, 134, 154, 192, 230, 271, 321, 367, 425, 458, 520, 586, 644, 718, 792, 858],
  M: [14, 26, 42, 62, 84, 106, 122, 152, 180, 213, 251, 287, 331, 362, 412, 450, 504, 560, 624, 666],
  Q: [11, 20, 32, 46, 60, 74, 86, 108, 130, 151, 177, 203, 241, 258, 292, 322, 364, 394, 442, 482],
  H: [7, 14, 24, 34, 44, 58, 64, 84, 98, 119, 137, 155, 177, 194, 220, 250, 280, 310, 338, 382],
};

const ECCS: { id: Ecc; label: string; note: string }[] = [
  { id: 'L', label: 'L · 7 %', note: 'nejméně čtverečků, ale nesnese poškození' },
  { id: 'M', label: 'M · 15 %', note: 'výchozí volba většiny generátorů' },
  { id: 'Q', label: 'Q · 25 %', note: 'na obaly a místa, kde se kód odře' },
  { id: 'H', label: 'H · 30 %', note: 'když má mít uprostřed logo' },
];

const PLACES = [
  { label: 'Vizitka', cm: 25 },
  { label: 'Leták, menu', cm: 35 },
  { label: 'Stojánek na stole', cm: 60 },
  { label: 'Plakát na nástěnce', cm: 100 },
  { label: 'Výloha, roll-up', cm: 200 },
  { label: 'Plachta na plotě', cm: 500 },
];

const MODULE_MIN = 0.5; // mm – menší čtvereček telefon na papíře spolehlivě nerozliší
const SIZE_MIN = 20; // mm
const QUIET = 4; // ochranná zóna v modulech

// jednoduchý deterministický hash → stejný náhled na serveru i v prohlížeči
function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function Preview({ n, seed }: { n: number; seed: number }) {
  const rects = useMemo(() => {
    let st = seed || 1;
    const rnd = () => {
      st ^= st << 13;
      st ^= st >>> 17;
      st ^= st << 5;
      return (st >>> 0) / 4294967296;
    };
    const finder = (x: number, y: number) => x >= 0 && y >= 0 && x < 8 && y < 8;
    const out: string[] = [];
    for (let y = 0; y < n; y++)
      for (let x = 0; x < n; x++) {
        if (finder(x, y) || finder(n - 1 - x, y) || finder(x, n - 1 - y)) continue;
        const timing = (x === 6 || y === 6) && (x + y) % 2 === 0;
        if (timing || rnd() < 0.47) out.push(`M${x + QUIET} ${y + QUIET}h1v1h-1Z`);
      }
    return out.join('');
  }, [n, seed]);
  const total = n + 2 * QUIET;
  const fp = (x: number, y: number) =>
    `M${x} ${y}h7v7h-7Z M${x + 1} ${y + 1}v5h5v-5Z M${x + 2} ${y + 2}h3v3h-3Z`;
  return (
    <svg viewBox={`0 0 ${total} ${total}`} width={168} height={168} role="img" aria-label={`Náhled hustoty kódu ${n} × ${n} čtverečků`}>
      <rect width={total} height={total} fill="#fff" />
      <rect x={0.15} y={0.15} width={total - 0.3} height={total - 0.3} fill="none" stroke="var(--accent)" strokeWidth={0.3} strokeDasharray="1 0.8" />
      <path
        d={`${fp(QUIET, QUIET)} ${fp(QUIET + n - 7, QUIET)} ${fp(QUIET, QUIET + n - 7)} ${rects}`}
        fillRule="evenodd"
        fill="#1d1d24"
        shapeRendering="crispEdges"
      />
    </svg>
  );
}

// Odkaz + korekce chyb + vzdálenost → verze kódu, hustota a minimální tisková velikost
export default function QrSize() {
  const [text, setText] = useState('https://www.mojefirma.cz/kontakt');
  const [ecc, setEcc] = useState<Ecc>('M');
  const [cm, setCm] = useState(35);

  const bytes = useMemo(() => new TextEncoder().encode(text).length, [text]);
  const v = CAP[ecc].findIndex((c) => c >= bytes) + 1; // 0 = nevejde se do verze 20
  const n = 17 + 4 * v;

  const byDistance = cm; // mm: desetina vzdálenosti (cm × 10 / 10)
  const byModules = n * MODULE_MIN;
  const size = Math.ceil(Math.max(byDistance, byModules, SIZE_MIN));
  const withQuiet = Math.ceil((size * (n + 2 * QUIET)) / n);
  const limit = byModules > byDistance && byModules > SIZE_MIN ? 'hustota' : byDistance >= SIZE_MIN ? 'vzdálenost' : 'minimum';

  return (
    <div className="calc">
      <label className="calc-field brief-field">
        <span>Odkaz nebo text v kódu</span>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} spellCheck={false} inputMode="url" />
        <small>
          {num(bytes)} znaků{bytes !== text.length ? ' (diakritika zabírá víc místa)' : ''}
        </small>
      </label>

      <fieldset className="calc-field">
        <legend>Kde bude kód</legend>
        <div className="calc-presets">
          {PLACES.map((p) => (
            <button key={p.label} type="button" className={`calc-chip ${p.cm === cm ? 'on' : ''}`} aria-pressed={p.cm === cm} onClick={() => setCm(p.cm)}>
              {p.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="calc-inputs">
        <label className="calc-field">
          <span>Vzdálenost (cm)</span>
          <input type="number" min={10} max={2000} value={cm} onChange={(e) => setCm(Math.min(2000, Math.max(0, Number(e.target.value) || 0)))} />
        </label>
        <fieldset className="calc-field">
          <legend>Korekce chyb</legend>
          <div className="calc-seg">
            {ECCS.map((x) => (
              <button key={x.id} type="button" className={ecc === x.id ? 'on' : ''} aria-pressed={ecc === x.id} onClick={() => setEcc(x.id)}>
                {x.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="calc-out qr-out" aria-live="polite">
        {v === 0 ? (
          <p className="calc-note">
            Takhle dlouhý text se do rozumně velkého QR kódu nevejde. Zkraťte odkaz, nebo ho přesměrujte přes krátkou
            adresu na vlastním webu.
          </p>
        ) : (
          <>
            <figure className="qr-fig">
              <Preview n={n} seed={hash(text + ecc)} />
              <figcaption>náhled hustoty, kód nejde naskenovat</figcaption>
            </figure>
            <div className="qr-info">
              <dl className="calc-grid qr-grid">
                <div className="main">
                  <dt>Nejmenší velikost</dt>
                  <dd>
                    {num(size / 10, 1)} × {num(size / 10, 1)} cm
                  </dd>
                </div>
                <div>
                  <dt>S ochrannou zónou</dt>
                  <dd>
                    {num(withQuiet / 10, 1)} × {num(withQuiet / 10, 1)} cm
                  </dd>
                </div>
                <div>
                  <dt>Verze kódu</dt>
                  <dd>
                    {v} · {n} × {n}
                  </dd>
                </div>
                <div>
                  <dt>Jeden čtvereček</dt>
                  <dd>{num(size / n, 2)} mm</dd>
                </div>
              </dl>
              <p className="calc-note">
                {limit === 'hustota'
                  ? `Velikost tu určuje délka odkazu: kód má ${n} čtverečků na stranu a každý musí mít aspoň ${num(MODULE_MIN, 1)} mm. Kratší odkaz = menší kód.`
                  : limit === 'vzdálenost'
                    ? `Velikost určuje vzdálenost: ze ${num(cm)} cm potřebuje telefon kód o straně aspoň ${num(byDistance / 10, 1)} cm.`
                    : `Menší než 2 × 2 cm kód netiskněte, i když by se z téhle vzdálenosti dal načíst.`}{' '}
                {ECCS.find((x) => x.id === ecc)!.note.replace(/^./, (c) => c.toUpperCase())}.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
