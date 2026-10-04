import Link from 'next/link';
import { A_FORMATS, B_FORMATS, C_FORMATS, OTHER_FORMATS } from '../paper';
import FoldDemo from '@/components/poradna/FoldDemo';
import { Callout, FormatTable } from './parts';

const DL_ROWS: [string, string, string][] = [
  ['DL leták, pozvánka, kartička', '99 × 210 mm', 'třetina A4'],
  ['Data DL letáku se spadávkou 3 mm', '105 × 216 mm', 'tento rozměr posíláte do tiskárny'],
  ['DL v pixelech při 300 DPI', '1169 × 2480 px', 'se spadávkou 1240 × 2551 px'],
  ['DL v pixelech při 150 DPI', '585 × 1240 px', 'jen pro náhled, na tisk málo'],
  ['A4 skládačka na DL (rozložená)', '297 × 210 mm', 'data se spadávkou 303 × 216 mm'],
  ['Obálka DL', '110 × 220 mm', 'na leták DL i A4 přeložené na třetiny'],
  ['Obálka C6/5', '114 × 229 mm', 'o něco větší, víc vůle pro silnější papír'],
];

export default function FormatyPapiru() {
  return (
    <>
      <ul className="toc" aria-label="Obsah článku">
        <li>
          <a href="#rada-a">A4, A5 a řada A</a>
        </li>
        <li>
          <a href="#format-dl">Formát DL</a>
        </li>
        <li>
          <a href="#skladacka-dl">Skládačka do DL</a>
        </li>
        <li>
          <a href="#rada-b">Řada B</a>
        </li>
        <li>
          <a href="#obalky">Obálky</a>
        </li>
        <li>
          <a href="#pixely">Pixely a DPI</a>
        </li>
      </ul>

      <h2 id="rada-a">Formáty řady A</h2>
      <p>
        Řada A podle normy ISO 216 je ta, kterou znáte z kanceláře. Základem je A0 o ploše přesně jednoho metru
        čtverečního. Každý další formát vznikne přeložením předchozího napůl, takže A4 je polovina A3 a A5 je polovina
        A4. Poměr stran zůstává stále stejný (1 : √2), proto se dá cokoli zmenšit nebo zvětšit o formát bez ořezu.
      </p>
      <FormatTable caption="Rozměry formátů A0–A8" formats={A_FORMATS} />

      <h2 id="format-dl">Formát DL: rozměry letáku a obálky</h2>
      <p>
        DL je zkratka z německého <em>DIN lang</em>, tedy „dlouhý DIN“. Formát vznikl jako obálka na list A4 přeložený
        na třetiny. Dnes se tak říká i letákům, pozvánkám a menu v rozměru <strong>99 × 210 mm</strong>. Je to přesně
        třetina A4, takže se z jednoho archu A4 dají bez odpadu vyrobit tři kusy. DL se vejde do obálky DL
        (110 × 220 mm) i do běžných stojánků na letáky.
      </p>
      <div className="table-wrap">
        <table className="fmt-table">
          <caption>Všechny rozměry formátu DL</caption>
          <thead>
            <tr>
              <th scope="col">Co</th>
              <th scope="col">Rozměr</th>
              <th scope="col">Poznámka</th>
            </tr>
          </thead>
          <tbody>
            {DL_ROWS.map(([what, size, note]) => (
              <tr key={what}>
                <th scope="row">{what}</th>
                <td style={{ whiteSpace: 'nowrap' }}>{size}</td>
                <td>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Na co se DL hodí: letáky do stojanů a na recepci, menu, ceníky, pozvánky, programy akcí, dárkové poukazy
        a vstupenky. Úzký tvar se dobře drží v ruce a vejde se do kapsy saka.
      </p>

      <h2 id="skladacka-dl">Skládačka A4 do DL: do Z, nebo do C?</h2>
      <p>
        Nejčastější „DL leták“ je ve skutečnosti list A4 složený dvakrát. Způsob skládání ale mění rozměry dílů a
        tím i to, jak musíte připravit grafiku. Vyzkoušejte si oba způsoby:
      </p>
      <FoldDemo />
      <ul>
        <li>
          <strong>Do Z (leporelo):</strong> tři stejné díly po 99 mm. Titulní a zadní strana leží na opačných stranách
          archu.
        </li>
        <li>
          <strong>Do C (role):</strong> díly 100 + 100 + 97 mm. Užší je ten, který se zasouvá dovnitř. Na vnitřní
          straně je vpravo, na vnější vlevo. Titulní strana je na vnější straně vpravo.
        </li>
        <li>
          <strong>Data</strong> obou skládaček připravte jako dvě strany A4 na šířku (297 × 210 mm, se spadávkou
          303 × 216 mm). Vnější strana je vůči vnitřní zrcadlově prohozená: díl, který je uvnitř vpravo, je zvenku
          vlevo.
        </li>
      </ul>

      <Callout title="Nejčastější chyby u DL skládačky">
        <ul>
          <li>Rozdělit A4 na třikrát 99 mm i u skládání do C. Záložka se pak nevejde a leták se nafukuje.</li>
          <li>Text nebo obličej přímo v lomu. Držte důležité věci aspoň 4 mm od lomu.</li>
          <li>
            Silný papír bez bigu. Od 170 g/m² popraská barva v lomu, víc v článku{' '}
            <Link href="/poradna/gramaz-papiru">Gramáž papíru</Link>.
          </li>
        </ul>
      </Callout>

      <h2 id="rada-b">Formáty řady B</h2>
      <p>
        Řada B leží velikostí mezi formáty A. B5 je tedy větší než A5, ale menší než A4. Používá se hlavně u knih,
        plakátů a v tiskárnách jako formát archů.
      </p>
      <FormatTable caption="Rozměry formátů B0–B6" formats={B_FORMATS} />

      <h2 id="obalky">Obálky: formáty C a DL</h2>
      <p>
        Řada C (ISO 269) je o něco větší než A, aby se do obálky vešel papír odpovídajícího formátu. Nejčastější je
        obálka DL na A4 přeložené na třetiny, nebo na leták DL. Pro silnější skládačky je bezpečnější obálka C6/5.
      </p>
      <FormatTable caption="Rozměry obálek C4–C6, DL a C6/5" formats={C_FORMATS} />

      <h2 id="dalsi">Další běžné tiskoviny</h2>
      <FormatTable caption="Leták DL, vizitky a karta" formats={OTHER_FORMATS} />
      <p>
        Víc o vizitkách, včetně spadávky a výběru papíru, najdete v článku{' '}
        <Link href="/poradna/rozmer-vizitky">Rozměr vizitky</Link>.
      </p>

      <h2 id="pixely">Jak se počítají pixely</h2>
      <p>
        Formát papíru má pevný rozměr v milimetrech, ale počet pixelů záleží na rozlišení (DPI, tedy počtu bodů na
        palec). Vzorec je jednoduchý: <strong>px = mm ÷ 25,4 × DPI</strong>. Pro tisk letáků, brožur a vizitek
        počítejte s 300 DPI. Velké plakáty, na které se lidé dívají z dálky, zvládnou i 150 DPI. Hodnota 72 DPI je jen
        orientační pro obrazovku, na tisk nestačí.
      </p>
      <p>
        Jiný rozměr si přepočítáte v <Link href="/poradna/prevod-px-na-mm">kalkulačce px ↔ mm</Link>.
      </p>

      <Callout title="Nezapomeňte na spadávku">
        <p>
          Rozměry v tabulce jsou čisté formáty po ořezu. Když má tiskovina barvu nebo fotku až do kraje, musí data
          být na každé straně o spadávku větší, obvykle o 3 mm. A4 pak má data 216 × 303 mm. Víc v článku{' '}
          <Link href="/poradna/spadavka">Spadávka: co to je a jak ji nastavit</Link>.
        </p>
      </Callout>
    </>
  );
}
