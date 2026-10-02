import Link from 'next/link';
import PxCalculator from '@/components/poradna/PxCalculator';
import { Callout } from './parts';

export default function PrevodPxNaMm() {
  return (
    <>
      <PxCalculator />

      <h2 id="dpi">Co je DPI</h2>
      <p>
        Pixel nemá žádnou pevnou velikost. Jak velký bude v tisku, určuje teprve rozlišení: <strong>DPI</strong> (dots
        per inch) nebo <strong>PPI</strong> (pixels per inch) říká, kolik pixelů se vejde na jeden palec, tedy 25,4 mm.
        Obrázek široký 3000 px se při 300 DPI vytiskne na 254 mm. Při 150 DPI by byl dvakrát větší, ale méně ostrý.
      </p>
      <ul>
        <li>
          <strong>px → mm:</strong> mm = px ÷ DPI × 25,4
        </li>
        <li>
          <strong>mm → px:</strong> px = mm ÷ 25,4 × DPI
        </li>
      </ul>

      <h2 id="kolik-dpi">Kolik DPI potřebujete</h2>
      <div className="table-wrap">
        <table className="fmt-table">
          <thead>
            <tr>
              <th scope="col">Použití</th>
              <th scope="col">Doporučené rozlišení</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Vizitky, letáky, brožury, knihy, katalogy</th>
              <td>300 DPI</td>
            </tr>
            <tr>
              <th scope="row">Plakáty A2 a větší (čtou se z 1–2 metrů)</th>
              <td>150–200 DPI</td>
            </tr>
            <tr>
              <th scope="row">Roll-upy, bannery</th>
              <td>100–150 DPI</td>
            </tr>
            <tr>
              <th scope="row">Billboardy</th>
              <td>30–72 DPI</td>
            </tr>
            <tr>
              <th scope="row">Web a sociální sítě</th>
              <td>na DPI nezáleží, rozhoduje počet pixelů</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Hodnoty platí pro výslednou velikost v tisku. Fotka, která má 300 DPI ve velikosti 10 × 15 cm, bude mít při
        zvětšení na A4 už jen kolem 150 DPI.
      </p>

      <Callout title="Zvýšení DPI fotku nezlepší">
        <p>
          Když fotce v grafickém programu zvýšíte DPI a necháte ho dopočítat chybějící pixely (převzorkování), obrázek
          bude větší, ale ne ostřejší. Detaily, které fotoaparát nezachytil, se nedají vymyslet. Pokud máte malý
          obrázek, zkuste sehnat originál, nebo tiskovinu zmenšete.
        </p>
      </Callout>

      <h2 id="web">Na webu na DPI nezáleží</h2>
      <p>
        Obrazovka zobrazuje pixely, údaj o DPI v souboru ignoruje. Obrázek 1920 × 1080 px vypadá stejně, ať má v
        metadatech 72, nebo 300 DPI. Pro web proto hlídejte jen rozměr v pixelech a velikost souboru.
      </p>

      <p>
        Rozměry formátů A, B a C v pixelech najdete přehledně v článku{' '}
        <Link href="/poradna/formaty-papiru">Formáty papíru v mm i pixelech</Link>.
      </p>
    </>
  );
}
