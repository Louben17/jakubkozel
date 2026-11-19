import Link from 'next/link';
import TypeDistance from '@/components/poradna/TypeDistance';
import { AnimFigure, TypeSizeAnim } from '@/components/poradna/ArticleAnims';
import { Callout, Photo } from './parts';
import { num } from '../paper';

const PT_MM = 25.4 / 72;
const POINTS = [6, 7, 8, 9, 10, 11, 12, 14, 18, 24, 36, 48, 72];

const USES = [
  { what: 'Vizitka', text: '7–9 b', head: 'jméno 9–12 b' },
  { what: 'Leták A5, DL', text: '9–11 b', head: '18–36 b' },
  { what: 'Brožura, katalog', text: '9–11 b', head: '14–24 b' },
  { what: 'Kniha', text: '10–12 b', head: '14–24 b' },
  { what: 'Text pro seniory, návod', text: '12–14 b', head: '18–28 b' },
  { what: 'Drobné písmo (podmínky, tiráž)', text: '6–7 b', head: '–' },
  { what: 'Plakát A3', text: '14–24 b', head: '60–120 b' },
  { what: 'Roll-up', text: '36–60 b', head: '200–300 b' },
];

export default function VelikostPisma() {
  return (
    <>
      <ul className="toc" aria-label="Obsah článku">
        <li>
          <a href="#bod">Kolik mm má bod</a>
        </li>
        <li>
          <a href="#tiskoviny">Velikost pro tiskoviny</a>
        </li>
        <li>
          <a href="#x-vyska">Proč 10 bodů není jako 10 bodů</a>
        </li>
        <li>
          <a href="#vzdalenost">Podle vzdálenosti</a>
        </li>
        <li>
          <a href="#citelnost">Co dál ovlivní čitelnost</a>
        </li>
      </ul>

      <p>
        Běžný text v tiskovinách se sází ve velikosti <strong>9 až 12 bodů</strong>. Knihy obvykle v 10 až 12 bodech,
        letáky a katalogy v 9 až 11, kontakty na vizitce v 7 až 9. Kolik to je v milimetrech, se ale z bodů přímo
        vyčíst nedá. Velikost v bodech totiž neudává výšku písmen.
      </p>

      <AnimFigure caption="Body měří kuželku, tedy výšku pomyslného obdélníku kolem písmene. Samotná písmena jsou menší a v každém písmu jinak.">
        <TypeSizeAnim />
      </AnimFigure>

      <h2 id="bod">Kolik milimetrů má jeden bod</h2>
      <p>
        Grafické programy, Word i tiskárny počítají v bodech DTP: <strong>1 bod = 1/72 palce = 0,353 mm</strong>. Písmo
        ve velikosti 12 bodů má tedy kuželku vysokou 4,23 mm. Kuželka je prostor od nejvyššího do nejnižšího místa písma
        včetně kousku navíc. Velké písmeno H je vysoké jen asi 70 % kuželky, u 12 bodů zhruba 3 mm.
      </p>
      <div className="table-wrap">
        <table className="fmt-table nums">
          <caption>Velikost písma v bodech a milimetrech</caption>
          <thead>
            <tr>
              <th scope="col">Body</th>
              <th scope="col">Kuželka</th>
              <th scope="col">Velké písmeno (≈ 70 %)</th>
              <th scope="col">Na webu</th>
            </tr>
          </thead>
          <tbody>
            {POINTS.map((p) => (
              <tr key={p}>
                <th scope="row">{p} b</th>
                <td>{num(p * PT_MM, 2)} mm</td>
                <td>{num(p * PT_MM * 0.7, 1)} mm</td>
                <td>{num((p * 96) / 72, 1)} px</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Poslední sloupec platí pro web a obrazovky, kde se počítá s 96 pixely na palec: 12 bodů je 16 px, výchozí velikost
        písma v prohlížeči. Proč se body a pixely liší, vysvětluje článek{' '}
        <Link href="/poradna/prevod-px-na-mm">Převod pixelů na milimetry</Link>.
      </p>

      <h2 id="tiskoviny">Jakou velikost písma zvolit pro tiskoviny</h2>
      <p>
        Hodnoty v tabulce berte jako výchozí bod pro běžné písmo, například Arial, Calibri, Roboto nebo Georgia. U písma
        s nízkými malými písmeny, jako je Garamond, přidejte bod navíc.
      </p>
      <div className="table-wrap">
        <table className="fmt-table">
          <caption>Doporučená velikost písma podle tiskoviny</caption>
          <thead>
            <tr>
              <th scope="col">Tiskovina</th>
              <th scope="col">Text</th>
              <th scope="col">Nadpis</th>
            </tr>
          </thead>
          <tbody>
            {USES.map((u) => (
              <tr key={u.what}>
                <th scope="row">{u.what}</th>
                <td>{u.text}</td>
                <td>{u.head}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Na vizitce bývá nejvíc textu na nejmenší ploše, proto se tam velikost nejčastěji podceňuje. Kontakty pod 7 bodů
        už mnoho lidí bez brýlí nepřečte. Další rady k vizitkám najdete v článku{' '}
        <Link href="/poradna/rozmer-vizitky">Rozměr vizitky</Link>.
      </p>
      <Photo
        src="/poradna/velikost-pisma-2.webp"
        alt="Ruce drží leták s oranžovým nadpisem a fotkou moře, v pozadí světlý obývací pokoj s pohovkou"
        caption="Leták se čte z 30 až 40 cm. Text v 9 až 11 bodech tam přečte každý bez námahy."
      />
      <Callout title="Píšete pro starší čtenáře?">
        <p>
          Přidejte 2 body k obvyklé velikosti, tedy 12 až 14 bodů, a vynechte tenké a úzké řezy písma. Pomůže i větší
          řádkování a tmavý text místo šedého. Totéž platí pro návody, příbalové letáky a cokoli, co se čte při horším
          světle.
        </p>
      </Callout>

      <h2 id="x-vyska">Proč 10 bodů v jednom písmu vypadá větší než v jiném</h2>
      <p>
        Velikost v bodech udává jen výšku kuželky. Jak velká písmena v ní budou, rozhodl autor písma. Nejvíc je to vidět
        na malých písmenech, tedy na takzvané <strong>x-výšce</strong>. Verdana nebo Roboto mají malá písmena vysoká, a
        působí proto větší. Garamond nebo Baskerville je mají nízká a ve stejné velikosti vypadají o bod až dva menší.
      </p>
      <p>
        Když tedy měníte písmo, neporovnávejte čísla. Vysázejte stejný odstavec v obou písmech, vytiskněte ho ve
        skutečné velikosti a srovnejte. Na monitoru se to posoudit nedá, protože obrazovka text zvětšuje i zmenšuje podle
        zoomu.
      </p>
      <Photo
        src="/poradna/velikost-pisma-3.webp"
        alt="Detail vizitky s drobnými řádky textu vedle ocelového pravítka a mosazné lupy na bílém stole"
        caption="Drobné písmo vždycky zkontrolujte na vytištěném nátisku, ne na monitoru."
      />

      <h2 id="vzdalenost">Jak velké písmo podle vzdálenosti</h2>
      <p>
        U plakátů, roll-upů a cedulí se velikost písma určuje podle toho, odkud se na ně lidé dívají. Pro pohodlné čtení
        má být velké písmeno vysoké asi <strong>1/120 vzdálenosti</strong>, tedy zhruba 8 mm na každý metr. Nadpis, který
        má zaujmout v chůzi, potřebuje asi trojnásobek. Spodní hranice, kdy se text ještě přečíst dá, je kolem 1/300
        vzdálenosti.
      </p>
      <TypeDistance />
      <p>
        Prakticky to znamená, že plakát A3 na nástěnce, ke kterému lidé přijdou na metr, potřebuje text aspoň kolem 14
        bodů a nadpis kolem 100. Na roll-upu, který vidí návštěvníci veletrhu ze tří metrů, má nadpis 200 a víc bodů. Jak
        rozvrhnout plochu roll-upu, popisuje článek <Link href="/poradna/rozmery-roll-upu">Rozměry roll-upu</Link>.
      </p>

      <h2 id="citelnost">Co dál ovlivní čitelnost</h2>
      <ul>
        <li>
          Řádkování nastavte u běžného textu na 120 až 145 % velikosti písma. Text v 10 bodech tedy dostane řádkování 12
          až 14,5 bodu.
        </li>
        <li>Nejlépe se čte řádek se 45 až 75 znaky. Delší řádek rozdělte do sloupců.</li>
        <li>Světle šedý text na bílé vypadá elegantně, ale čte se špatně, zvlášť v malé velikosti.</li>
        <li>
          Bílé písmo na tmavém podkladu se v tisku trochu „zalije“ barvou. Zvolte o stupeň tučnější řez a nepoužívejte
          ho pod 8 bodů.
        </li>
        <li>
          Text pod 10 bodů dejte do tiskových dat jen v čisté černé (100 % K), ne skládaný ze čtyř barev. Jinak se při
          sebemenším posunu barev rozmaže. Víc v článku <Link href="/poradna/rgb-vs-cmyk">RGB vs. CMYK</Link>.
        </li>
      </ul>
      <p>
        Na čitelnost má vliv i správná typografie: mezery, uvozovky a pomlčky. Nejčastější chyby shrnuje článek{' '}
        <Link href="/poradna/typograficke-chyby">Česká typografie</Link>.
      </p>
    </>
  );
}
