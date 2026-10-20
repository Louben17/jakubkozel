import Link from 'next/link';
import EnvelopePicker from '@/components/poradna/EnvelopePicker';
import { AnimFigure, EnvelopeAnim } from '@/components/poradna/ArticleAnims';
import { Callout, Photo } from './parts';

const ENVELOPES: [string, string, string][] = [
  ['C4', '229 × 324', 'A4 nepřeložené'],
  ['C5', '162 × 229', 'A5, A4 přeložené napůl'],
  ['C6', '114 × 162', 'A6, A4 přeložené dvakrát napůl'],
  ['DL', '110 × 220', 'A4 přeložené na třetiny, leták DL'],
  ['C6/5', '114 × 229', 'A4 přeložené na třetiny, s větší rezervou'],
  ['B4', '250 × 353', 'silnější obsah A4, katalogy'],
  ['B5', '176 × 250', 'silnější obsah A5, brožury'],
  ['B6', '125 × 176', 'silnější obsah A6, přání s vložkou'],
];

export default function RozmeryObalek() {
  return (
    <>
      <ul className="toc" aria-label="Obsah článku">
        <li>
          <a href="#tabulka">Tabulka obálek</a>
        </li>
        <li>
          <a href="#vyber">Jakou obálku na co</a>
        </li>
        <li>
          <a href="#dl">Obálka DL</a>
        </li>
        <li>
          <a href="#okenko">Obálky s okénkem</a>
        </li>
        <li>
          <a href="#zavirani">Zavírání a papír</a>
        </li>
        <li>
          <a href="#potisk">Potisk obálek</a>
        </li>
      </ul>

      <p>
        Rozměry obálek vychází z formátů papíru. Obálka C5 je navržená na list A5, obálka C4 na A4 a tak dál. Obálka je
        vždycky o něco větší než papír, který se do ní vkládá, aby šel obsah zasunout bez mačkání. Nejčastější obálka
        v kanceláři, DL, měří <strong>110 × 220 mm</strong> a vejde se do ní A4 přeložená na třetiny.
      </p>

      <h2 id="tabulka">Rozměry obálek</h2>
      <div className="table-wrap">
        <table className="fmt-table nums">
          <caption>Rozměry obálek v milimetrech</caption>
          <thead>
            <tr>
              <th scope="col">Obálka</th>
              <th scope="col">Rozměr (mm)</th>
              <th scope="col">Co se do ní vejde</th>
            </tr>
          </thead>
          <tbody>
            {ENVELOPES.map(([name, size, fits]) => (
              <tr key={name}>
                <th scope="row">{name}</th>
                <td>{size}</td>
                <td>{fits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Obálky řady C mají stejný poměr stran jako papír řady A, takže se do nich obsah vejde i po přeložení napůl: A4
        přeložená napůl je A5 a ta se vejde do C5. Obálky řady B jsou o kus větší a používají se na silnější obsah,
        kterému by v obálce C chybělo místo na tloušťku. Rozměry samotných papírů najdete v článku{' '}
        <Link href="/poradna/formaty-papiru">Formáty papíru</Link>, řadu B podrobněji v článku{' '}
        <Link href="/poradna/formaty-b">Formáty B</Link>.
      </p>

      <h2 id="vyber">Jakou obálku na co</h2>
      <p>Vyberte, co posíláte. Nákres ukazuje obsah v obálce ve skutečném poměru velikostí.</p>
      <EnvelopePicker />

      <h2 id="dl">Obálka DL: rozměr 110 × 220 mm</h2>
      <p>
        DL je zkratka z německého DIN lang, „dlouhý DIN“. Obálka DL měří 110 × 220 mm a je určená na list A4 přeložený
        na třetiny, tedy na rozměr 99 × 210 mm. Stejný rozměr má leták DL, který se do obálky vejde bez skládání.
      </p>
      <AnimFigure caption="List A4 přeložený na třetiny má 99 × 210 mm a vejde se do obálky DL 110 × 220 mm. Adresa na dopise se objeví v okénku.">
        <EnvelopeAnim />
      </AnimFigure>
      <p>
        Rozdíl mezi obálkou a letákem si lidé často pletou. Pokud navrhujete leták nebo pozvánku do obálky DL, data
        připravte na <strong>99 × 210 mm</strong>, ne na 110 × 220 mm. Jinak se leták do obálky nevejde. Jak se A4 skládá
        do DL, do Z nebo do C, si můžete vyzkoušet na interaktivní ukázce v článku{' '}
        <Link href="/poradna/formaty-papiru#skladacka-dl">Formáty papíru</Link>.
      </p>
      <Photo
        src="/poradna/rozmery-obalek-2.webp"
        alt="Ruce vkládají dopis A4 přeložený na třetiny do dlouhé obálky DL s okénkem"
        caption="Dopis A4 přeložený na třetiny má 99 × 210 mm a do obálky DL zajede s pár milimetry rezervy."
      />
      <p>
        Pokud potřebujete do obálky vložit víc listů nebo silnější papír, sáhněte po obálce C6/5 (114 × 229 mm). Je jen
        o trochu větší, ale na tloušťku obsahu má víc místa.
      </p>

      <h2 id="okenko">Obálky s okénkem</h2>
      <p>
        Obálka s okénkem ušetří psaní adresy, protože adresa se vytiskne přímo na dopis. Okénko bývá vlevo nebo vpravo.
        U obálek DL je nejčastější okénko 90 × 45 mm umístěné 20 mm od levého okraje a 15 mm od spodního.
      </p>
      <ul>
        <li>Před velkou zakázkou si změřte konkrétní obálky. Výrobci se v detailech liší.</li>
        <li>
          Adresu v dopise umístěte tak, aby byla v okénku vidět celá i ve chvíli, kdy dopis v obálce trochu sjede.
          Vyzkoušejte to na jednom vytištěném kusu.
        </li>
        <li>Do okénka nesmí koukat nic jiného než adresa, třeba část textu dopisu nebo logo.</li>
      </ul>

      <h2 id="zavirani">Zavírání a papír</h2>
      <p>
        Obálky se liší i tím, jak se zavírají. Nejčastější jsou samolepicí s krycí páskou, kterou před zalepením
        strhnete. Samolepicí obálky bez pásky mají dvě lepicí plochy, které se slepí stisknutím, a hodí se hlavně pro
        strojové obálkování. Lepidlo na navlhčení dnes najdete spíš u levných obálek.
      </p>
      <p>
        Běžné obálky jsou z bílého papíru 80–100 g/m². Na katalogy a silnější zásilky se používá hnědý kraftový papír,
        u větších obálek bývá zesílený. Na reprezentativní korespondenci, třeba pozvánky, jsou obálky z barevných
        a strukturovaných papírů. Víc o gramážích v článku <Link href="/poradna/gramaz-papiru">Gramáž papíru</Link>.
      </p>
      <Photo
        src="/poradna/rozmery-obalek-3.webp"
        alt="Ruce vkládají oranžovou brožuru do velké hnědé kraftové obálky, vedle stohy obálek a přání"
        caption="Na katalogy a brožury se hodí pevnější kraftové obálky."
      />

      <h2 id="potisk">Potisk obálek</h2>
      <p>
        Firemní obálky s logem a zpáteční adresou se obvykle tisknou na hotové obálky. Na tom záleží při návrhu:
      </p>
      <ul>
        <li>
          Na hotovou obálku nejde tisknout do kraje, protože se po tisku už neořezává. Nechte kolem grafiky volný okraj
          několik milimetrů. Přesnou hodnotu vám řekne tiskárna.
        </li>
        <li>
          Logo a zpáteční adresa patří do levého horního rohu. Pravá horní část zůstává volná pro známku nebo
          výplatní otisk a střed pro adresu.
        </li>
        <li>
          Velká barevná plocha přes celou obálku se dá vyrobit, ale obálka se pak musí vyrobit na zakázku z potištěného
          archu. Vyjde to dráž a vyplatí se až u větších nákladů.
        </li>
      </ul>
      <Callout title="Leták do obálky">
        <p>
          Když posíláte leták poštou v obálce, navrhněte ho rovnou na formát, který se do obálky vejde bez skládání,
          nejčastěji DL nebo A5. Tisk i obálkování pak vyjdou levněji. Data na tisk připravte podle{' '}
          <Link href="/poradna/tiskova-data">checklistu tiskových dat</Link>.
        </p>
      </Callout>
    </>
  );
}
