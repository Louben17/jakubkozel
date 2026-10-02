import Link from 'next/link';
import { A_FORMATS, B_FORMATS, C_FORMATS, OTHER_FORMATS } from '../paper';
import { Callout, FormatTable } from './parts';

export default function FormatyPapiru() {
  return (
    <>
      <h2 id="rada-a">Formáty řady A</h2>
      <p>
        Řada A podle normy ISO 216 je ta, kterou znáte z kanceláře. Základem je A0 o ploše přesně jednoho metru
        čtverečního. Každý další formát vznikne přeložením předchozího napůl, takže A4 je polovina A3 a A5 je polovina
        A4. Poměr stran zůstává stále stejný (1 : √2), proto se dá cokoli zmenšit nebo zvětšit o formát bez ořezu.
      </p>
      <FormatTable caption="Rozměry formátů A0–A8" formats={A_FORMATS} />

      <h2 id="rada-b">Formáty řady B</h2>
      <p>
        Řada B leží velikostí mezi formáty A. B5 je tedy větší než A5, ale menší než A4. Používá se hlavně u knih,
        plakátů a v tiskárnách jako formát archů.
      </p>
      <FormatTable caption="Rozměry formátů B0–B6" formats={B_FORMATS} />

      <h2 id="obalky">Obálky: formáty C a DL</h2>
      <p>
        Řada C (ISO 269) je o něco větší než A, aby se do obálky vešel papír odpovídajícího formátu. Nejčastější je
        obálka DL na A4 přeložené na třetiny.
      </p>
      <FormatTable caption="Rozměry obálek C4–C6 a DL" formats={C_FORMATS} />

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
