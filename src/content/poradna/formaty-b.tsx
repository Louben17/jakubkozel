import Link from 'next/link';
import FormatCompare from '@/components/poradna/FormatCompare';
import { B_FORMATS } from '../paper';
import { AnimFigure, FormatsAnim } from '@/components/poradna/ArticleAnims';
import { Callout, FormatTable, Photo } from './parts';

const JIS: [string, string, string][] = [
  ['B4', '250 × 353', '257 × 364'],
  ['B5', '176 × 250', '182 × 257'],
  ['B6', '125 × 176', '128 × 182'],
];

export default function FormatyB() {
  return (
    <>
      <ul className="toc" aria-label="Obsah článku">
        <li>
          <a href="#tabulka">Rozměry B0–B6</a>
        </li>
        <li>
          <a href="#porovnani">Porovnání s A</a>
        </li>
        <li>
          <a href="#k-cemu">K čemu se řada B používá</a>
        </li>
        <li>
          <a href="#plakaty">Plakáty B1 a B2</a>
        </li>
        <li>
          <a href="#jis">B5 (JIS) ve Wordu</a>
        </li>
      </ul>

      <p>
        Formáty řady B jsou o kus větší než stejně číslované formáty řady A. B5 měří <strong>176 × 250 mm</strong> a je
        tedy mezi A5 a A4. B1 má <strong>707 × 1000 mm</strong>, což je rozměr velkého plakátu. Řada B vychází ze stejné
        normy ISO 216 jako A4 a má stejný poměr stran, jen jiné velikosti.
      </p>

      <h2 id="tabulka">Rozměry formátů B0–B6</h2>
      <FormatTable caption="Rozměry formátů B0–B6 v mm a v pixelech" formats={B_FORMATS} />
      <p>
        Menší formáty pokračují stejně: B7 má 88 × 125 mm, což je například rozměr cestovního pasu, a B8 62 × 88 mm.
        Formáty řady A najdete v článku <Link href="/poradna/formaty-papiru">Formáty papíru</Link>, převod na pixely pro
        libovolné rozlišení v článku <Link href="/poradna/a4-v-pixelech">A4 v pixelech</Link>.
      </p>

      <h2 id="porovnani">Jak se řada B liší od A a C</h2>
      <p>
        Všechny tři řady mají poměr stran 1 : √2, takže se dají zmenšovat a zvětšovat bez ořezu. Liší se jen velikostí:
      </p>
      <ul>
        <li>Řada A vychází z A0, které má plochu 1 m². A4 je jeho šestnáctina.</li>
        <li>
          Řada B leží mezi sousedními formáty A. Strana B4 je geometrický průměr stran A4 a A3, proto je B4 větší než A4
          a menší než A3.
        </li>
        <li>
          Řada C leží mezi A a B a používá se pro obálky. C4 je o trochu větší než A4, takže se do něj A4 vejde. Víc
          v článku <Link href="/poradna/rozmery-obalek">Rozměry obálek</Link>.
        </li>
      </ul>
      <AnimFigure caption="Formáty A3 až A6 v měřítku. Pravé horní rohy leží na jedné přímce, protože všechny mají poměr stran 1 : √2. B4 a C4 se vejdou mezi A4 a A3.">
        <FormatsAnim />
      </AnimFigure>
      <p>Vyberte až čtyři formáty a porovnejte jejich velikost v měřítku:</p>
      <FormatCompare />

      <h2 id="k-cemu">K čemu se řada B používá</h2>
      <p>
        V kanceláři se s řadou B setkáte málokdy, protože tiskárny a kopírky počítají s A4. Častější je v tiskárnách
        a nakladatelstvích:
      </p>
      <ul>
        <li>
          B1 a B2 jsou běžné formáty plakátů. Jsou větší než A1 a A2, a přitom se ještě dobře tisknou a rozvážejí.
        </li>
        <li>B4, B5 a B6 se používají jako obálky na silnější obsah, třeba katalogy nebo brožury.</li>
        <li>
          B5 a B6 najdete u knih, sborníků a bloků. Kniha B5 je menší a skladnější než A4 a pořád nabídne dost místa na
          text i obrázky.
        </li>
      </ul>
      <Photo
        src="/poradna/formaty-b-2.webp"
        alt="Knihy a sešity různých velikostí položené na sobě na listu A4: malá oranžová kniha, krémová kniha a mátový kroužkový blok"
        caption="Knihy a bloky často využívají formáty mezi A5 a A4, třeba B5."
      />

      <h2 id="plakaty">Plakáty B1 a B2: 70 × 100 a 50 × 70 cm</h2>
      <p>
        Plakáty a rámy se v praxi prodávají v zaokrouhlených rozměrech 50 × 70 cm a 70 × 100 cm. Odpovídají formátům B2
        (500 × 707 mm) a B1 (707 × 1000 mm), jen bez pár milimetrů. Pokud plakát navrhujete do konkrétního rámu nebo
        na plakátovací plochu, zjistěte si přesný rozměr předem. Rozdíl 7 mm je u okraje rámu vidět.
      </p>
      <p>
        Plakát B1 se při běžném rozlišení 150 DPI vejde do 4175 × 5906 px. Na 300 DPI ho připravovat nemusíte, protože
        se na něj díváte z dálky a soubor by měl stovky megabajtů.
      </p>
      <Photo
        src="/poradna/formaty-b-3.webp"
        alt="Plakátovací sloup ve městě s nalepeným velkým plakátem s abstraktním oranžovým a tyrkysovým motivem"
        caption="Na výlepové plochy se často lepí plakáty A1 nebo B1. Přesný rozměr určuje provozovatel plochy."
      />

      <h2 id="jis">Pozor na B5 (JIS) ve Wordu a v tiskárně</h2>
      <p>
        Japonsko používá vlastní řadu B podle normy JIS. Její formáty jsou o pár milimetrů větší než mezinárodní ISO B.
        Word a ovladače tiskáren často nabízí obě varianty, takže se snadno vybere ta špatná.
      </p>
      <div className="table-wrap">
        <table className="fmt-table nums">
          <caption>Mezinárodní (ISO) a japonská (JIS) řada B</caption>
          <thead>
            <tr>
              <th scope="col">Formát</th>
              <th scope="col">ISO (mm)</th>
              <th scope="col">JIS (mm)</th>
            </tr>
          </thead>
          <tbody>
            {JIS.map(([name, iso, jis]) => (
              <tr key={name}>
                <th scope="row">{name}</th>
                <td>{iso}</td>
                <td>{jis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Proto kopírky nabízí zmenšení A4 na B5 na 86 %, což odpovídá japonskému B5. Pro mezinárodní B5 by to bylo 84 %.
      </p>
      <Callout title="Než pošlete data do tiskárny">
        <p>
          Když tiskárna nebo nakladatel chce „B5“, ověřte si rozměr v milimetrech. Data pro 182 × 257 mm se na 176 × 250
          mm nevejdou a naopak. Spadávku a ostatní náležitosti dat shrnuje{' '}
          <Link href="/poradna/tiskova-data">checklist tiskových dat</Link>.
        </p>
      </Callout>
    </>
  );
}
