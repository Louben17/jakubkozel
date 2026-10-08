import Link from 'next/link';
import { Callout } from './parts';

export default function RozmerVizitky() {
  return (
    <>
      <h2 id="rozmery">Standardní rozměry vizitek</h2>
      <div className="table-wrap">
        <table className="fmt-table">
          <thead>
            <tr>
              <th scope="col">Rozměr</th>
              <th scope="col">Kde se používá</th>
              <th scope="col">Data se spadávkou 2 mm</th>
              <th scope="col">Pixely při 300 DPI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">90 × 50 mm</th>
              <td>nejběžnější v Česku a na Slovensku</td>
              <td>94 × 54 mm</td>
              <td>1063 × 591 px</td>
            </tr>
            <tr>
              <th scope="row">85 × 55 mm</th>
              <td>evropský rozměr (Německo, Rakousko…)</td>
              <td>89 × 59 mm</td>
              <td>1004 × 650 px</td>
            </tr>
            <tr>
              <th scope="row">85 × 54 mm</th>
              <td>velikost platební karty, vejde se do peněženky</td>
              <td>89 × 58 mm</td>
              <td>1004 × 638 px</td>
            </tr>
            <tr>
              <th scope="row">89 × 51 mm</th>
              <td>USA a Kanada (3,5 × 2 palce)</td>
              <td>93 × 55 mm</td>
              <td>1051 × 602 px</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Pokud nemáte důvod jinak, zvolte <strong>90 × 50 mm</strong>. Vejde se do běžných stojánků a vizitkářů a umí ho
        každá tiskárna. Netradiční rozměry (čtverec, mini vizitka) zaujmou, ale počítejte s vyšší cenou a s tím, že se
        hůř ukládají.
      </p>

      <h2 id="data">Jak velká data poslat do tiskárny</h2>
      <p>
        Vizitky se tisknou na velký arch a pak se ořezávají. Řezačka má toleranci zhruba milimetr, proto musí
        grafika, která sahá až do kraje, pokračovat ještě kousek za hranu. Tomuto přesahu se říká{' '}
        <Link href="/poradna/spadavka">spadávka</Link>. U vizitek tiskárny většinou chtějí 2 mm, některé 3 mm.
      </p>
      <ul>
        <li>
          <strong>Čistý formát:</strong> 90 × 50 mm, tak bude vizitka vypadat po ořezu.
        </li>
        <li>
          <strong>Spadávka:</strong> +2 mm na každou stranu, data mají 94 × 54 mm (se 3 mm 96 × 56 mm).
        </li>
        <li>
          <strong>Bezpečný okraj:</strong> texty, logo a QR kód držte aspoň 3–4 mm od hrany čistého formátu.
        </li>
      </ul>

      <Callout title="Tenký rámeček kolem vizitky je past">
        <p>
          Rámeček těsně u okraje po ořezu skoro nikdy nevyjde rovnoměrně. Na jedné straně bude širší, na druhé užší
          a na první pohled to bude vypadat jako chyba. Pokud o rámeček stojíte, udělejte ho výrazně širší, nebo ho
          vynechte.
        </p>
      </Callout>

      <h2 id="papir">Jaký papír a úpravu zvolit</h2>
      <ul>
        <li>
          <strong>Gramáž 300–350 g/m²</strong> je standard. Vizitka je pevná a nemačká se. Od 400 g/m² působí luxusně.
        </li>
        <li>
          <strong>Křídový matný papír</strong> je univerzální volba, dá se na něj i psát propiskou.
        </li>
        <li>
          <strong>Přírodní (nenatíraný) papír</strong> má příjemnou strukturu, barvy jsou ale méně syté.
        </li>
        <li>
          <strong>Laminace</strong> (matná nebo lesklá) vizitku chrání a prodlouží jí život v peněžence.
        </li>
        <li>
          <strong>Ražba, slepotisk, parciální lak nebo barevná ořízka</strong> jsou efekty, kterými se vizitka odliší.
          Připravují se jako samostatná vrstva v datech, nejlépe to proberte předem s tiskárnou.
        </li>
      </ul>

      <h2 id="obsah">Co na vizitku napsat</h2>
      <p>
        Stačí jméno, pozice, telefon, e-mail a web. Adresu jen tehdy, když za vámi lidé opravdu chodí. Na rub
        se hodí logo nebo QR kód, třeba na váš web nebo s kontaktem ve formátu vCard. Text pod 7 bodů už je na vizitce
        špatně čitelný.
      </p>
      <p>
        Data připravte v CMYK a s rozlišením obrázků 300 DPI. Kompletní postup najdete v článku{' '}
        <Link href="/poradna/tiskova-data">Jak připravit tisková data</Link>.
      </p>
    </>
  );
}
