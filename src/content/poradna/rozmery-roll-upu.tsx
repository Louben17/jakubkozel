import Link from 'next/link';
import RollupPlanner from '@/components/poradna/RollupPlanner';
import { AnimFigure, RollupAnim } from '@/components/poradna/ArticleAnims';
import { Callout, Photo } from './parts';

const SIZES = [
  { size: '60 × 160 cm', use: 'Malé prostory, pult v obchodě, recepce' },
  { size: '80 × 200 cm', use: 'Levnější varianta standardu' },
  { size: '85 × 200 cm', use: 'Nejběžnější rozměr, veletrhy, konference, prodejny' },
  { size: '100 × 200 cm', use: 'Když je potřeba víc místa pro text nebo fotku' },
  { size: '120 × 200 cm', use: 'Pozadí za řečníkem, fotostěna pro jednoho' },
  { size: '150 × 200 cm', use: 'Velká plocha, ale těžší kazeta a vyšší cena' },
];

export default function RozmeryRollUpu() {
  return (
    <>
      <ul className="toc" aria-label="Obsah článku">
        <li>
          <a href="#rozmery">Rozměry</a>
        </li>
        <li>
          <a href="#data">Tisková data</a>
        </li>
        <li>
          <a href="#planovac">Plánovač</a>
        </li>
        <li>
          <a href="#rozvrzeni">Kam dát logo a text</a>
        </li>
        <li>
          <a href="#pismo">Velikost písma</a>
        </li>
        <li>
          <a href="#material">Materiál a kazeta</a>
        </li>
      </ul>

      <p>
        Nejčastější roll-up má viditelnou plochu <strong>85 × 200 cm</strong>. Dál se běžně prodávají šířky 60, 80, 100,
        120 a 150 cm, výška bývá 200 cm. Tisková data jsou ale většinou vyšší než to, co je vidět, protože spodní kus
        grafiky zůstane schovaný v kazetě. A dolní polovinu roll-upu často zakryje stůl nebo lidé, kteří před ním stojí.
      </p>

      <AnimFigure caption="Roll-up má dva metry, ale dobře vidět je hlavně horní třetina. Spodek zakryje kazeta, stůl nebo lidé.">
        <RollupAnim />
      </AnimFigure>

      <h2 id="rozmery">Rozměry roll-upů</h2>
      <p>Rozměr se udává jako šířka × výška viditelné grafiky v centimetrech.</p>
      <div className="table-wrap">
        <table className="fmt-table">
          <caption>Běžné rozměry roll-upů</caption>
          <thead>
            <tr>
              <th scope="col">Rozměr</th>
              <th scope="col">Kdy se hodí</th>
            </tr>
          </thead>
          <tbody>
            {SIZES.map((s) => (
              <tr key={s.size}>
                <th scope="row">{s.size}</th>
                <td>{s.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Některé roll-upy mají teleskopickou tyč a výšku jde nastavit, obvykle mezi 160 a 220 cm. Existují také
        oboustranné roll-upy s grafikou z obou stran a stolní roll-upy ve formátu A4 nebo A3.
      </p>

      <h2 id="data">Jaký rozměr mají tisková data</h2>
      <p>
        Tady se tiskárny liší, takže vždycky začněte šablonou té, u které budete tisknout. Obecně platí:
      </p>
      <ul>
        <li>
          Spodní část grafiky zajede do kazety, podle jejího typu 5 až 15 cm. Některé tiskárny tenhle
          přesah chtějí v datech (u 85 × 200 cm pak dostanete rozměr třeba 850 × 2100 mm), jiné si ho přidají samy.
        </li>
        <li>
          Nahoře je lišta, která zakryje 1 až 3 cm grafiky. K hornímu okraji proto nedávejte text ani logo.
        </li>
        <li>
          Spadávku chce část tiskáren kolem dokola 3 až 5 mm, jiné žádnou. Co to je, vysvětluje
          článek <Link href="/poradna/spadavka">Spadávka</Link>.
        </li>
      </ul>
      <p>
        Grafiku připravte v měřítku 1 : 1 v milimetrech a v barvách CMYK. Roll-up se čte z dálky, takže fotkám stačí 100
        až 150 DPI ve finální velikosti. Roll-up 85 × 200 cm má při 150 DPI 5020 × 11 811 px. Při 300 DPI by soubor
        zbytečně narostl a rozdíl by nikdo nepoznal. Výstup je PDF. Na co si v něm dát pozor, shrnuje článek{' '}
        <Link href="/poradna/tiskova-data">Jak připravit tisková data</Link>.
      </p>
      <Photo
        src="/poradna/rozmery-roll-upu-2.webp"
        alt="Detail hliníkové kazety roll-upu na podlaze, grafika s oranžovou a tyrkysovou plochou mizí ve štěrbině kazety"
        caption="Spodní kus grafiky zůstane v kazetě. Kolik to je, záleží na typu kazety."
      />

      <h2 id="planovac">Plánovač roll-upu</h2>
      <p>
        Vyberte rozměr a přesah do kazety podle tiskárny. Nákres ukáže roll-up v měřítku vedle postavy vysoké 175 cm,
        výšku očí a místo, které zakryje stůl.
      </p>
      <RollupPlanner />

      <h2 id="rozvrzeni">Kam dát logo a hlavní sdělení</h2>
      <p>
        Lidé kolem roll-upu většinou jen procházejí a podívají se na něj na pár vteřin. Za tu dobu mají pochopit, kdo
        jste a co nabízíte. Proto:
      </p>
      <ul>
        <li>
          Logo a hlavní sdělení patří do horní třetiny, mezi 140 a 200 cm nad zemí. Tam se dívají oči
          dospělého člověka a nezakryje to ani stůl, ani dav.
        </li>
        <li>
          Nadpis zkraťte na 5 až 7 slov. Delší věta se v chůzi nepřečte. Raději napište, co člověk získá, než
          výčet služeb.
        </li>
        <li>
          Kontakt, web a QR kód dejte doprostřed, zhruba 100 až 140 cm nad zemí. Kód úplně dole nikdo
          skenovat nebude, musel by si dřepnout. Jak velký QR kód zvolit, spočítáte v článku{' '}
          <Link href="/poradna/velikost-qr-kodu">Velikost QR kódu</Link>.
        </li>
        <li>
          Pod 80 cm dávejte jen pozadí: barvu, vzor nebo fotku, kterou nevadí zakrýt.
        </li>
      </ul>
      <Photo
        src="/poradna/rozmery-roll-upu-3.webp"
        alt="Stánek na veletrhu: roll-up s oranžovou a tyrkysovou grafikou stojí za bílým pultem s brožurami, vedle stojí usměvavá žena"
        caption="Pult před roll-upem zakryje spodní třetinu grafiky. Všechno důležité musí být nad ním."
      />

      <h2 id="pismo">Jak velké písmo na roll-up</h2>
      <p>
        Roll-up se čte ze dvou až pěti metrů, takže písmo musí být mnohem větší než na letáku. Orientačně:
      </p>
      <ul>
        <li>
          nadpis 200 až 300 bodů, velká písmena pak mají 5 až 7 cm,
        </li>
        <li>
          text a odrážky 36 až 60 bodů (pod 30 bodů se z dálky nečte),
        </li>
        <li>
          web a telefon aspoň 48 bodů.
        </li>
      </ul>
      <p>
        Přesné hodnoty pro libovolnou vzdálenost spočítá kalkulačka v článku{' '}
        <Link href="/poradna/velikost-pisma">Velikost písma v tisku</Link>. Před tiskem si zmenšenou grafiku prohlédněte
        na monitoru z několika kroků a zkontrolujte, jestli nadpis přečtete.
      </p>

      <h2 id="material">Materiál a kazeta</h2>
      <p>
        Grafika se tiskne na fólii nebo pevnou plachtovinu, která se po rozvinutí nekroutí. Dobrá fólie má šedou nebo
        černou zadní vrstvu, aby přes ni neprosvítalo světlo zezadu, třeba z okna. Na veletrhy pod silnými světly je
        lepší matný povrch. Lesklý odráží světla a grafika se v odlescích ztrácí.
      </p>
      <p>
        Kazety se liší hlavně stabilitou a tím, jestli jde grafika vyměnit. Nejlevnější kazeta vydrží pár akcí a výměna
        grafiky se nevyplatí. Pokud roll-up používáte často nebo budete obměňovat grafiku, vyplatí se dražší kazeta
        s výměnnou lištou. Novou grafiku pak koupíte samostatně.
      </p>
      <Callout title="Než roll-up pošlete do tisku">
        <ul>
          <li>Máte šablonu tiskárny a rozměr dat podle ní, včetně přesahu do kazety a spadávky?</li>
          <li>Je logo i hlavní sdělení v horní třetině a nic důležitého v posledních 80 cm?</li>
          <li>Přečtete nadpis na zmenšeném náhledu z několika kroků?</li>
          <li>Jsou fotky v rozlišení aspoň 100 DPI ve finální velikosti a barvy v CMYK?</li>
        </ul>
      </Callout>
    </>
  );
}
