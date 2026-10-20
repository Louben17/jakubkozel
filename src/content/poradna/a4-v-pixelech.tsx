import Link from 'next/link';
import FormatPx from '@/components/poradna/FormatPx';
import { A_FORMATS, mmToPx } from '../paper';
import { AnimFigure, PixelAnim } from '@/components/poradna/ArticleAnims';
import { Callout, Photo } from './parts';

const DPIS = [300, 150, 96, 72];
const ROWS = A_FORMATS.filter((f) => ['A3', 'A4', 'A5', 'A6'].includes(f.name));

export default function A4VPixelech() {
  return (
    <>
      <ul className="toc" aria-label="Obsah článku">
        <li>
          <a href="#tabulka">A4, A3, A5 v pixelech</a>
        </li>
        <li>
          <a href="#prevodnik">Převodník</a>
        </li>
        <li>
          <a href="#kolik-dpi">Kterou hodnotu použít</a>
        </li>
        <li>
          <a href="#spadavka">A4 se spadávkou</a>
        </li>
        <li>
          <a href="#fotka">Stačí fotka na A4?</a>
        </li>
        <li>
          <a href="#pomer">Poměr stran A4</a>
        </li>
      </ul>

      <p>
        A4 měří 210 × 297 mm. Kolik to je pixelů, záleží na rozlišení, ve kterém budete tisknout nebo pracovat. Pro
        kvalitní tisk při 300 DPI má A4 <strong>2480 × 3508 px</strong>. Ve Wordu, v Canvě v pixelech nebo v prohlížeči
        je to 794 × 1123 px, protože tam se počítá s 96 pixely na palec.
      </p>

      <AnimFigure caption="Stejný výřez listu A4 při 72, 150 a 300 DPI. Čím víc pixelů na palec, tím hladší hrana.">
        <PixelAnim />
      </AnimFigure>

      <h2 id="tabulka">A4, A3, A5 a A6 v pixelech</h2>
      <div className="table-wrap">
        <table className="fmt-table nums">
          <caption>Rozměry na výšku, šířka × výška v pixelech</caption>
          <thead>
            <tr>
              <th scope="col">Formát</th>
              {DPIS.map((d) => (
                <th key={d} scope="col">
                  {d} DPI
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((f) => (
              <tr key={f.name}>
                <th scope="row">
                  {f.name}
                  <small>
                    {f.w} × {f.h} mm
                  </small>
                </th>
                {DPIS.map((d) => (
                  <td key={d}>
                    {mmToPx(f.w, d)} × {mmToPx(f.h, d)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Na šířku stačí čísla prohodit: A4 na šířku má při 300 DPI 3508 × 2480 px. Rozměry všech formátů od A0 po A8
        v milimetrech najdete v článku <Link href="/poradna/formaty-papiru">Formáty papíru</Link>.
      </p>

      <h2 id="prevodnik">Převodník formátu na pixely</h2>
      <p>Vyberte formát a rozlišení. Rozměr si můžete rovnou zkopírovat do Photoshopu nebo jiného programu.</p>
      <FormatPx />

      <h2 id="kolik-dpi">Kterou hodnotu použít</h2>
      <p>
        Papír pixely nemá. Pixely vzniknou až ve chvíli, kdy určíte, kolik jich připadne na jeden palec (25,4 mm). Čím
        víc, tím jemnější tisk a tím větší soubor. Podrobněji to vysvětluje článek{' '}
        <Link href="/poradna/prevod-px-na-mm">Převod pixelů na milimetry</Link>.
      </p>
      <ul>
        <li>
          <strong>300 DPI</strong> je standard pro tisk letáků, brožur, fotek a všeho, co lidé drží v ruce. Na tohle
          rozlišení se připravují tisková data.
        </li>
        <li>
          <strong>150 DPI</strong> stačí na plakáty a velké formáty, na které se díváte z větší vzdálenosti. U A1 nebo A0
          by 300 DPI znamenalo zbytečně obří soubor.
        </li>
        <li>
          <strong>96 DPI</strong> používají Windows, Word, prohlížeče a Canva, když přepnete rozměr na pixely. Proto má A4
          v Canvě 794 × 1123 px. Pro tisk ale Canva exportuje PDF ve vyšším rozlišení, takže se toho bát nemusíte.
        </li>
        <li>
          <strong>72 DPI</strong> odpovídá typografickým bodům, ve kterých počítá PDF. Stránka A4 má v PDF 595 × 842
          bodů. Na kvalitu tisku tohle číslo nemá vliv.
        </li>
      </ul>
      <Photo
        src="/poradna/a4-v-pixelech-3.webp"
        alt="Notebook s grafickým programem a prázdnou plochou A4 na výšku, vedle tiskárna s vytištěnými listy A4 s oranžovou grafikou"
        caption="Nový dokument pro tisk zakládejte rovnou v milimetrech a při 300 DPI. Pixely se pak dopočítají samy."
      />
      <Callout title="Vejde se A4 na monitor?">
        <p>
          Na běžném Full HD monitoru (1920 × 1080 px) se A4 na výšku při 100 % celá nevejde, protože při 96 DPI má 1123 px
          na výšku. Proto ji prohlížeče PDF otevírají zmenšenou nebo přizpůsobenou šířce okna.
        </p>
      </Callout>

      <h2 id="spadavka">A4 se spadávkou v pixelech</h2>
      <p>
        Pokud má grafika barvu nebo fotku až do kraje, tiskárna chce data se spadávkou, obvykle 3 mm na každou stranu.
        A4 se spadávkou pak měří 216 × 303 mm, což je při 300 DPI <strong>2551 × 3579 px</strong>. V převodníku výše stačí
        zaškrtnout „se spadávkou“. Proč spadávka existuje a jak ji nastavit v různých programech, popisuje článek{' '}
        <Link href="/poradna/spadavka">Spadávka</Link>.
      </p>

      <h2 id="fotka">Stačí moje fotka na tisk A4?</h2>
      <p>
        Na A4 při 300 DPI potřebujete zhruba 8,7 megapixelu (2480 × 3508 px). Fotka z dnešního telefonu má obvykle 12
        megapixelů a víc, například 4000 × 3000 px. Při 300 DPI se vytiskne do velikosti asi 339 × 254 mm, takže na A4
        stačí s rezervou. Jen ji budete muset oříznout, protože fotky mají poměr 4 : 3 a A4 je protáhlejší.
      </p>
      <p>
        Pozor na fotky stažené z webu nebo poslané přes messenger. Ty bývají zmenšené na 1000–2000 px na delší straně
        a na A4 vyjdou rozmazaně. Vždycky si vyžádejte originál.
      </p>
      <Photo
        src="/poradna/a4-v-pixelech-2.webp"
        alt="Detail tisku pod lupou s kulatými rastrovými body vedle okraje displeje se stejným přechodem složeným ze čtvercových pixelů"
        caption="Tisk skládá obraz z rastrových bodů, obrazovka z pixelů. DPI určuje, kolik pixelů připadne na palec papíru."
      />

      <h2 id="pomer">Poměr stran A4</h2>
      <p>
        Všechny formáty řady A mají poměr stran 1 : √2, tedy přibližně 1 : 1,414. Když list přeložíte napůl, vznikne
        menší formát se stejným poměrem: z A4 je A5, z A5 je A6. Díky tomu jde leták A4 zmenšit na A5 bez ořezu a bez
        deformace. Formát A0 má plochu přesně 1 m², A4 je jeho šestnáctina.
      </p>
      <p>
        Obrazovky mají poměr 16 : 9 a fotky 4 : 3 nebo 3 : 2, proto se grafika pro web a pro tisk na A4 nedá jednoduše
        převést jedna na druhou bez ořezu nebo doplnění.
      </p>
      <div className="table-wrap">
        <table className="fmt-table nums">
          <caption>A4 v dalších jednotkách</caption>
          <tbody>
            <tr>
              <th scope="row">Milimetry</th>
              <td>210 × 297 mm</td>
            </tr>
            <tr>
              <th scope="row">Centimetry</th>
              <td>21 × 29,7 cm</td>
            </tr>
            <tr>
              <th scope="row">Palce</th>
              <td>8,27 × 11,69″</td>
            </tr>
            <tr>
              <th scope="row">Body (PDF)</th>
              <td>595 × 842 pt</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
