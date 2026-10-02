import Link from 'next/link';
import { Callout } from './parts';

// Schéma: čistý formát, spadávka a bezpečný okraj
function BleedDiagram() {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 360 240" role="img" aria-labelledby="bleed-title">
        <title id="bleed-title">Schéma spadávky: barevná plocha přesahuje za ořez, texty zůstávají uvnitř bezpečného okraje</title>
        <rect x="20" y="20" width="320" height="200" rx="4" fill="#FFD9B0" />
        <rect x="40" y="40" width="280" height="160" fill="#F29E4C" />
        <rect x="40" y="40" width="280" height="160" fill="none" stroke="#1d1d24" strokeWidth="1.5" />
        <rect x="62" y="62" width="236" height="116" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="5 5" />
        <text x="180" y="116" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="700">texty a logo</text>
        <text x="180" y="136" textAnchor="middle" fill="#fff" fontSize="12">uvnitř bezpečného okraje</text>
        <text x="180" y="34" textAnchor="middle" fill="#A3570C" fontSize="11" fontWeight="700">spadávka 3 mm</text>
        <text x="180" y="213" textAnchor="middle" fill="#A3570C" fontSize="11" fontWeight="700">ořez (čistý formát)</text>
      </svg>
      <figcaption>
        Světlý pruh je spadávka, černá čára hrana ořezu, přerušovaná čára bezpečný okraj.
      </figcaption>
    </figure>
  );
}

export default function Spadavka() {
  return (
    <>
      <h2 id="co-je">Co je spadávka</h2>
      <p>
        Spadávka (anglicky <em>bleed</em>) je přesah grafiky za hranu výsledného formátu. Tiskovina se tiskne na větší
        arch a pak se ořízne. Řezačka ale nikdy neřízne úplně přesně, odchylka bývá kolem milimetru. Kdyby barevná
        plocha končila přesně na hraně, po ořezu by na okraji mohl zůstat tenký bílý proužek. Spadávka zajistí, že se
        řeže „do barvy“.
      </p>
      <BleedDiagram />

      <h2 id="kolik">Jak velká má spadávka být</h2>
      <ul>
        <li>
          <strong>3 mm</strong> na každou stranu: standard pro letáky, plakáty, brožury a většinu tiskovin.
        </li>
        <li>
          <strong>2 mm</strong>: některé tiskárny u vizitek a malých formátů.
        </li>
        <li>
          <strong>5 mm a víc</strong>: velkoformátový tisk, knižní obálky, obaly a polepy.
        </li>
      </ul>
      <p>
        Leták A4 (210 × 297 mm) se spadávkou 3 mm má tedy data o rozměru <strong>216 × 303 mm</strong>. Vždy ale
        rozhodují technické podmínky tiskárny, které najdete na jejím webu.
      </p>

      <h2 id="bezpecny-okraj">Bezpečný okraj</h2>
      <p>
        Opačná strana téže mince. Stejně jako může řez ujet ven, může ujet i dovnitř. Texty, loga, čísla stránek a
        QR kódy proto držte aspoň 3–5 mm od hrany čistého formátu. U brožur s vazbou V1 (sešité skobami) počítejte
        s větším okrajem, vnitřní listy se při ořezu mírně posouvají.
      </p>

      <h2 id="nastaveni">Jak spadávku nastavit v programech</h2>
      <ul>
        <li>
          <strong>Adobe InDesign:</strong> při vytváření dokumentu v části Spadávka a popisové pole. U hotového
          dokumentu přes Soubor → Nastavení dokumentu. Při exportu PDF zaškrtněte „Použít nastavení spadávky
          z dokumentu“ a přidejte ořezové značky.
        </li>
        <li>
          <strong>Adobe Illustrator:</strong> Soubor → Nastavení dokumentu → Spadávka. Při ukládání PDF v sekci
          Značky a spadávka zapněte totéž.
        </li>
        <li>
          <strong>Affinity Publisher a Designer:</strong> v nastavení dokumentu vyplňte spadávku a při exportu PDF zapněte
          její zahrnutí do souboru.
        </li>
        <li>
          <strong>Canva:</strong> v menu Soubor → Nastavení zapněte zobrazení spadávky pro tisk. Při stahování
          jako PDF pro tisk zaškrtněte volbu ořezových značek a spadávky.
        </li>
        <li>
          <strong>Word a PowerPoint:</strong> spadávku nastavit neumí. Pomůže zvětšit formát stránky o spadávku
          (u A4 na 216 × 303 mm) a obsah posunout o 3 mm dovnitř. Pro tisk je ale lepší svěřit data grafikovi.
        </li>
      </ul>

      <Callout title="Nejčastější chyby">
        <ul>
          <li>Spadávka je nastavená v dokumentu, ale pozadí do ní nesahá. Výsledek je stejný, jako by chyběla.</li>
          <li>Spadávka se při exportu PDF nezapnula a soubor má jen čistý formát.</li>
          <li>Do spadávky se „roztáhl“ celý obsah, včetně textů. Spadávka se přidává, formát se nezvětšuje.</li>
          <li>Text nebo logo leží těsně u hrany a po ořezu chybí kus písmene.</li>
        </ul>
      </Callout>

      <p>
        Spadávka je jen jeden z bodů, které tiskárna kontroluje. Celý postup najdete v článku{' '}
        <Link href="/poradna/tiskova-data">Jak připravit tisková data: checklist</Link>.
      </p>
    </>
  );
}
