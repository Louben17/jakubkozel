import Link from 'next/link';
import { Callout } from './parts';

// Barevné tečky pro názorné srovnání RGB a CMYK
function Swatches() {
  return (
    <figure className="diagram swatches">
      <div>
        <p className="swatch-label">RGB: světlo z obrazovky</p>
        <div className="swatch-row">
          <span style={{ background: '#ff0000' }}>R</span>
          <span style={{ background: '#00ff00', color: '#1d1d24' }}>G</span>
          <span style={{ background: '#0000ff' }}>B</span>
        </div>
      </div>
      <div>
        <p className="swatch-label">CMYK: inkoust na papíře</p>
        <div className="swatch-row">
          <span style={{ background: '#00a0e3', color: '#1d1d24' }}>C</span>
          <span style={{ background: '#e5007e' }}>M</span>
          <span style={{ background: '#ffed00', color: '#1d1d24' }}>Y</span>
          <span style={{ background: '#1d1d1b' }}>K</span>
        </div>
      </div>
      <figcaption>Inkousty CMYK ukazuje obrazovka jen přibližně. Zářivé barvy RGB naopak na papír nevytisknete.</figcaption>
    </figure>
  );
}

export default function RgbVsCmyk() {
  return (
    <>
      <h2 id="rozdil">Světlo versus inkoust</h2>
      <p>
        Monitor, telefon i televize barvy vyzařují. Skládají je ze tří světel: červeného, zeleného
        a modrého (<strong>RGB</strong>). Když svítí všechna naplno, vznikne bílá. Papír naopak světlo jen odráží
        a barvu na něm tvoří inkousty, které část světla pohltí. Tiskárny používají čtyři:
        azurovou, purpurovou, žlutou a černou (<strong>CMYK</strong>). Čím víc inkoustu, tím tmavší výsledek.
      </p>
      <Swatches />

      <h2 id="proc-bledsi">Proč jsou barvy v tisku bledší</h2>
      <p>
        Rozsah barev, které umí zobrazit monitor (gamut), je větší než rozsah, který se dá vytisknout. Nejvíc to je
        vidět na zářivých odstínech: neonově zelené, sytě oranžové, elektricky modré nebo tyrkysové. V CMYK se musí
        nahradit nejbližší tisknutelnou barvou a ta je vždy matnější.
      </p>
      <p>
        Roli hraje i papír. Na křídovém (natíraném) papíře zůstávají barvy sytější. Přírodní papír inkoust více vsákne
        a barvy ztlumí. Proto má každý typ papíru vlastní barevný profil.
      </p>

      <h2 id="kdy-co">Kdy použít který režim</h2>
      <div className="table-wrap">
        <table className="fmt-table">
          <thead>
            <tr>
              <th scope="col">RGB</th>
              <th scope="col">CMYK</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>web, e-shop, aplikace</td>
              <td>letáky, plakáty, brožury</td>
            </tr>
            <tr>
              <td>sociální sítě, newslettery</td>
              <td>vizitky, katalogy, knihy</td>
            </tr>
            <tr>
              <td>prezentace na projektoru</td>
              <td>obaly a etikety</td>
            </tr>
            <tr>
              <td>video, digitální reklama</td>
              <td>vše, co jde do ofsetové nebo digitální tiskárny</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="jak-ohlidat">Jak se vyhnout zklamání</h2>
      <ul>
        <li>
          <strong>Pracujte v CMYK od začátku</strong>, pokud vzniká tiskovina. Photoshop, Illustrator i InDesign umí
          náhled tisku (soft proof), ve kterém hned uvidíte, jak se barvy změní.
        </li>
        <li>
          <strong>Převeďte data sami</strong> s profilem od tiskárny. Automatický převod v tiskárně proběhne bez vaší
          kontroly.
        </li>
        <li>
          <strong>U firemních barev použijte Pantone.</strong> Přímá barva se míchá zvlášť a vždy vypadá stejně.
          Hodí se pro loga a obaly, kde na přesném odstínu záleží.
        </li>
        <li>
          <strong>Nevěřte nekalibrovanému monitoru.</strong> U důležitých zakázek si nechte udělat certifikovaný nátisk.
        </li>
      </ul>

      <Callout title="Sytá černá a 100 % K">
        <p>
          Černá jen ze 100 % K působí na velkých plochách mírně šedě. Pro sytou černou plochu se přidávají další barvy
          (třeba C 50 M 40 Y 40 K 100). Drobný text ale nechte jen ve 100 % K. Při nepatrném posunu tiskových desek by
          se jinak rozmazal. Další body najdete v článku{' '}
          <Link href="/poradna/tiskova-data">Jak připravit tisková data</Link>.
        </p>
      </Callout>
    </>
  );
}
