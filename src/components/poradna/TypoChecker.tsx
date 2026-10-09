"use client";

import { useMemo, useState } from 'react';

const NB = ' ';
// opravená místa se v náhledu zvýrazní; značky z privátní oblasti Unicode se před kopírováním odstraní
const M0 = '\uE000';
const M1 = '\uE001';
const mark = (s: string) => M0 + s + M1;
const strip = (s: string) => s.replace(/[\uE000\uE001]/g, '');

type Rule = {
  id: string;
  title: string;
  rule: string;
  fixes: [RegExp, (...m: string[]) => string][];
};

const UNITS = '(?:kg|mm|cm|km|ml|Kč|ks|px|DPI|dpi|MB|GB)';

// Pořadí má význam: např. „90x50mm“ nejdřív dostane znak krát, pak mezeru před jednotkou
const RULES: Rule[] = [
  {
    id: 'abbr',
    title: 'Zkratky s. r. o. a a. s.',
    rule: 'Mezi částmi zkratky patří mezera: s. r. o., a. s.',
    fixes: [
      [/\bs\.\s?r\.\s?o\./g, (m) => (/^s\.\sr\.\so\.$/.test(m) ? m : mark(`s.${NB}r.${NB}o.`))],
      [/\ba\.s\.(?=[\s,;]|$)/gm, () => mark(`a.${NB}s.`)],
    ],
  },
  {
    id: 'date',
    title: 'Datum bez mezer',
    rule: 'Za tečkou v datu se píše mezera: 12. 10. 2026.',
    fixes: [[/(?<![\d.])(\d{1,2})\.(\d{1,2})\.(\d{4})(?!\d)/g, (_, d, m, y) => mark(`${d}.${NB}${m}.${NB}${y}`)]],
  },
  {
    id: 'thousands',
    title: 'Tečka nebo čárka v tisících',
    rule: 'Tisíce se oddělují mezerou: 12 500. Desetinná je čárka: 3,5.',
    fixes: [[/(?<![\d,.])(\d{1,3})((?:\.\d{3})+)(?!\d|[.,]\d)/g, (_, a, b) => mark(a + b.replace(/\./g, NB))]],
  },
  {
    id: 'currency',
    title: 'Částka s „,-“',
    rule: 'Celé koruny stačí napsat bez desetinné části: 1 500 Kč.',
    fixes: [[/,-{1,2}\s?(?=Kč|€|EUR)/g, () => mark(NB)]],
  },
  {
    id: 'ellipsis',
    title: 'Tři tečky',
    rule: 'Výpustka je jeden znak (…), ne tři tečky.',
    fixes: [[/\.{3}/g, () => mark('…')]],
  },
  {
    id: 'dash',
    title: 'Spojovník místo pomlčky',
    rule: 'Mezi slovy ve větě patří pomlčka s mezerami ( – ). Spojovník (-) je jen uvnitř slov.',
    fixes: [
      [/(\S) (?:-{1,2}|—) (?=\S)/g, (_, a) => `${a}${NB}${mark('–')} `],
      [/([\p{L}])—(?=[\p{L}])/gu, (_, a) => `${a}${NB}${mark('–')} `],
    ],
  },
  {
    id: 'range',
    title: 'Rozsah se spojovníkem',
    rule: 'Rozsah se píše s pomlčkou bez mezer: 9–17 h, 5–10 let.',
    fixes: [[/(?<![\d.,\-–])(\d{1,4})-(\d{1,4})(?![\d\-])/g, (_, a, b) => a + mark('–') + b]],
  },
  {
    id: 'quotes',
    title: 'Anglické uvozovky',
    rule: 'České uvozovky vypadají jako 99 dole a 66 nahoře: „takto“.',
    fixes: [
      [/"([^"\n]*)"/g, (_, t) => `${mark('„')}${t}${mark('“')}`],
      [/“([^”\n]*)”/g, (_, t) => `${mark('„')}${t}${mark('“')}`],
    ],
  },
  {
    id: 'times',
    title: 'Písmeno x místo znaku krát',
    rule: 'Rozměry a násobky se píšou se znakem ×: 90 × 50 mm, 3× týdně.',
    fixes: [
      [/(\d)\s?[x×]\s?(?=\d)/g, (m, a) => (/^\d\s×\s$/.test(m) ? m : `${a}${NB}${mark('×')}${NB}`)],
      [/(\d)x(?=\s)/g, (_, a) => a + mark('×')],
    ],
  },
  {
    id: 'units',
    title: 'Číslo nalepené na jednotku',
    rule: 'Mezi číslo a jednotku patří mezera: 50 mm, 300 DPI, 150 Kč.',
    fixes: [
      [new RegExp(`(\\d)(${UNITS})(?![\\p{L}])`, 'gu'), (_, a, u) => a + mark(NB) + u],
      [/(\d)°C/g, (_, a) => `${a}${mark(NB)}°C`],
    ],
  },
  {
    id: 'punct',
    title: 'Mezery kolem interpunkce',
    rule: 'Před čárkou, tečkou, otazníkem a vykřičníkem mezera není, za čárkou ano.',
    fixes: [
      [/ +([,.!?;])(?=\s|$)/gm, (_, p) => mark(p)],
      [/([\p{Ll}]),(?=[\p{L}])/gu, (_, a) => `${a}${mark(', ')}`],
    ],
  },
  {
    id: 'spaces',
    title: 'Dvojité mezery',
    rule: 'Mezi slovy je vždy jen jedna mezera.',
    fixes: [[/ {2,}/g, () => mark(' ')]],
  },
  {
    id: 'nbsp',
    title: 'Nezlomitelné mezery',
    rule: 'Jednopísmenná slova, čísla s jednotkami, datum a telefon nesmí zůstat rozdělené na konci řádku.',
    fixes: [
      [/(?<=^|[\s(„"\uE001])([KkSsVvZzOoUuAaIi]) (?=\S)/gm, (_, a) => a + mark(NB)],
      [/(\d\uE001?) (?=(?:%|°C|€|Kč|kg|g|mm|cm|m|km|ks|l|ml|px|let|h|min)(?![\p{L}]))/gu, (_, a) => a + mark(NB)],
      [/(?<=(?<!\d)\d{1,2}\.) (?=\d)/g, () => mark(NB)],
      [/(?<=\d\uE001?) (?=\d{3}(?!\d))/g, () => mark(NB)],
      [/§ (?=\d)/g, () => '§' + mark(NB)],
    ],
  },
];

const SAMPLE =
  'Firma Novák s.r.o. pořádá 12.10.2026 den otevřených dveří - přijďte kdykoli v 9-17 hodin. ' +
  'Vstupné 150,- Kč, děti do 15 let zdarma. Na vizitky 90x50mm dáváme slevu 20%... ' +
  '"Těšíme se na vás," říká jednatel.';

function check(input: string) {
  let text = input;
  const found: { rule: Rule; count: number }[] = [];
  for (const rule of RULES) {
    let count = 0;
    for (const [re, fn] of rule.fixes) {
      text = text.replace(re, (...args) => {
        const m = args.slice(0, -2).filter((x) => typeof x === 'string' || x === undefined) as string[];
        const out = fn(...m);
        if (out !== m[0]) count++;
        return out;
      });
    }
    if (count) found.push({ rule, count });
  }
  const percent = (input.match(/\d%/g) ?? []).length;
  return { text, found, percent };
}

// Náhled: zvýrazní opravená místa, nezlomitelné mezery ukáže jako tečku
function Preview({ text, showNb }: { text: string; showNb: boolean }) {
  const parts = text.split(/(\uE000[^\uE001]*\uE001)/);
  const show = (s: string, k: string) =>
    showNb
      ? s.split(NB).flatMap((t, i) => (i ? [<span key={`${k}-${i}`} className="typo-nb">·</span>, t] : [t]))
      : s;
  return (
    <pre className="typo-preview">
      {parts.map((p, i) =>
        p.startsWith(M0) ? (
          <mark key={i}>{show(p.slice(1, -1), `m${i}`)}</mark>
        ) : (
          <span key={i}>{show(p, `t${i}`)}</span>
        ),
      )}
    </pre>
  );
}

export default function TypoChecker() {
  const [input, setInput] = useState(SAMPLE);
  const [showNb, setShowNb] = useState(true);
  const [copied, setCopied] = useState(false);
  const { text, found, percent } = useMemo(() => check(input), [input]);
  const total = found.reduce((n, f) => n + f.count, 0);

  const copy = () => {
    navigator.clipboard?.writeText(strip(text)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="calc typo">
      <label className="calc-field brief-field">
        <span>Váš text</span>
        <textarea rows={5} value={input} onChange={(e) => setInput(e.target.value)} spellCheck={false} />
      </label>

      <div className="calc-out" aria-live="polite">
        {input.trim() ? (
          <>
            <p className="typo-sum">
              {total ? `Opraveno ${total} ${total === 1 ? 'místo' : total < 5 ? 'místa' : 'míst'}` : 'Žádnou z běžných chyb jsem nenašel'}
            </p>
            {found.length > 0 && (
              <ul className="typo-list">
                {found.map(({ rule, count }) => (
                  <li key={rule.id}>
                    <strong>
                      {rule.title} <span className="typo-count">{count}×</span>
                    </strong>
                    {rule.rule}
                  </li>
                ))}
                {percent > 0 && (
                  <li className="typo-hint">
                    <strong>Procenta bez mezery: zkontrolujte</strong>
                    „20 %“ s mezerou znamená dvacet procent, „20%“ bez mezery dvacetiprocentní. Tohle za vás kontrola nerozhodne.
                  </li>
                )}
              </ul>
            )}
            <Preview text={text} showNb={showNb} />
            <div className="brief-actions">
              <button type="button" className="calc-chip brief-btn solid" onClick={copy}>
                {copied ? 'Zkopírováno' : 'Zkopírovat opravený text'}
              </button>
              <label className="typo-toggle">
                <input type="checkbox" checked={showNb} onChange={(e) => setShowNb(e.target.checked)} />
                Ukázat nezlomitelné mezery (·)
              </label>
            </div>
          </>
        ) : (
          <p className="calc-note">Vložte text, který chcete zkontrolovat.</p>
        )}
      </div>
    </div>
  );
}
