import Link from 'next/link';
import { Callout } from './parts';

const FORMATS: { name: string; kind: string; use: string }[] = [
  { name: 'SVG', kind: 'vektor', use: 'web, e-shop, aplikace, ale i předání grafikovi nebo do tiskárny' },
  { name: 'PDF', kind: 'vektor', use: 'tiskárna, reklamní výroba, předání dalším dodavatelům' },
  { name: 'EPS', kind: 'vektor', use: 'starší formát pro tisk a reklamní techniku (polepy, výšivky, gravírování)' },
  { name: 'AI', kind: 'vektor', use: 'zdrojový soubor z Adobe Illustratoru, pro grafiky' },
  { name: 'PNG', kind: 'bitmapa', use: 'Word, PowerPoint, sociální sítě, e-mailový podpis; umí průhledné pozadí' },
  { name: 'JPG', kind: 'bitmapa', use: 'jen tam, kde nic jiného nejde; neumí průhlednost a ztrácí kvalitu' },
];

export default function FormatyLoga() {
  return (
    <>
      <h2 id="vektor-bitmapa">Vektor, nebo bitmapa</h2>
      <p>
        <strong>Vektorové</strong> logo je popsané matematicky, křivkami a body. Dá se zvětšit na vizitku stejně jako
        na billboard a zůstane dokonale ostré. <strong>Bitmapa</strong> (rastr) se skládá z pixelů. Při zvětšení se
        rozpadne na čtverečky nebo rozmaže. Logo by proto vždy mělo vzniknout a být předané ve vektoru. Bitmapové verze
        jsou jen odvozené kopie pro konkrétní použití.
      </p>

      <h2 id="prehled">Přehled formátů</h2>
      <div className="table-wrap">
        <table className="fmt-table">
          <thead>
            <tr>
              <th scope="col">Formát</th>
              <th scope="col">Typ</th>
              <th scope="col">Kdy použít</th>
            </tr>
          </thead>
          <tbody>
            {FORMATS.map((f) => (
              <tr key={f.name}>
                <th scope="row">{f.name}</th>
                <td>{f.kind}</td>
                <td>{f.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="balicek">Co by měl obsahovat balíček s logem</h2>
      <ul>
        <li>
          <strong>Varianty:</strong> hlavní (barevná), černobílá, inverzní (bílá na tmavé pozadí), případně zjednodušená
          značka nebo ikona pro malé velikosti.
        </li>
        <li>
          <strong>Barevné verze:</strong> CMYK pro tisk, RGB pro obrazovky, případně Pantone. Rozdíl vysvětluji v článku{' '}
          <Link href="/poradna/rgb-vs-cmyk">RGB vs. CMYK</Link>.
        </li>
        <li>
          <strong>Formáty:</strong> PDF a SVG (vektor), PNG s průhledností v několika velikostech.
        </li>
        <li>
          <strong>Barvy a písma:</strong> kódy barev (CMYK, RGB, HEX, Pantone) a názvy použitých písem. Ideálně
          v jednoduchém manuálu se základními pravidly použití.
        </li>
      </ul>

      <h2 id="kam-co">Který soubor kam</h2>
      <ul>
        <li>
          <strong>Do tiskárny a reklamní výrobě</strong> pošlete PDF nebo SVG, případně EPS, pokud ho výslovně chtějí.
        </li>
        <li>
          <strong>Na web</strong> SVG. Pokud ho redakční systém neumí, PNG aspoň ve dvojnásobné velikosti, než jakou
          bude mít na stránce (kvůli ostrým displejům).
        </li>
        <li>
          <strong>Do Wordu, PowerPointu a e-mailového podpisu</strong> PNG s průhledným pozadím.
        </li>
        <li>
          <strong>Na sociální sítě</strong> PNG, u profilového obrázku zjednodušenou značku, protože se zobrazuje malá
          a ořízne se do kruhu.
        </li>
      </ul>

      <Callout title="Máte logo jen jako obrázek?">
        <p>
          Logo často existuje jen jako JPG z webu nebo z dokumentu a do tisku nebo na velkou plochu se pak nedá
          kvalitně použít. Pomůže překreslení do vektoru. Logo vypadá stejně, ale je ostré v jakékoli velikosti
          a dostanete ho ve všech formátech z tabulky výše. S tím vám rád pomůžu.
        </p>
      </Callout>
    </>
  );
}
