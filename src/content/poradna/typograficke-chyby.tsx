import Link from 'next/link';
import TypoChecker from '@/components/poradna/TypoChecker';
import { Callout, Photo } from './parts';

const ROWS: [string, string, string][] = [
  ['Praha - Brno', 'Praha–Brno', 'trasa: pomlčka bez mezer'],
  ['otevřeno 9-17 h', 'otevřeno 9–17 h', 'rozsah: pomlčka bez mezer'],
  ['Přijďte - čekáme vás', 'Přijďte – čekáme vás', 've větě: pomlčka s mezerami'],
  ['"Dobrý den"', '„Dobrý den“', 'české uvozovky'],
  ['12.10.2026', '12. 10. 2026', 'mezery za tečkami'],
  ['1.500 Kč, 1500,- Kč', '1 500 Kč', 'tisíce mezerou, bez „,-“'],
  ['sleva 20%', 'sleva 20 % / 20% sleva', 'procenta vs. procentní'],
  ['90x50mm', '90 × 50 mm', 'znak krát, mezera před jednotkou'],
  ['Novák s.r.o.', 'Novák s. r. o.', 'mezery ve zkratce'],
  ['a pak...', 'a pak…', 'výpustka je jeden znak'],
  ['Jak Vybrat Logo', 'Jak vybrat logo', 'v češtině velké jen první písmeno'],
];

const KEYS: [string, string, string, string][] = [
  ['pomlčka –', 'Alt + 0150', 'Ctrl + − na numerické klávesnici', 'Alt + −'],
  ['uvozovky „ “', 'Alt + 0132 a Alt + 0147', 'automaticky podle jazyka', 'podle jazyka v Předvolbách → Slovník'],
  ['výpustka …', 'Alt + 0133', 'automaticky ze tří teček', 'Alt + ;'],
  ['krát ×', 'Alt + 0215', 'Vložení → Symbol', 'Glyfy'],
  ['nezlomitelná mezera', 'Alt + 0160', 'Ctrl + Shift + mezerník', 'Ctrl + Alt + X'],
];

export default function TypografickeChyby() {
  return (
    <>
      <ul className="toc" aria-label="Obsah článku">
        <li>
          <a href="#kontrola">Kontrola textu</a>
        </li>
        <li>
          <a href="#prehled">Přehled chyb</a>
        </li>
        <li>
          <a href="#pomlcka">Pomlčka a spojovník</a>
        </li>
        <li>
          <a href="#uvozovky">Uvozovky</a>
        </li>
        <li>
          <a href="#cisla">Čísla, datum, měna</a>
        </li>
        <li>
          <a href="#mezery">Nezlomitelné mezery</a>
        </li>
        <li>
          <a href="#klavesnice">Jak znaky napsat</a>
        </li>
      </ul>

      <p>
        Většina lidí typografické chyby vědomě nevidí. Text s anglickými uvozovkami, spojovníkem místo pomlčky a předložkou
        „v“ na konci řádku ale působí neuspořádaně, i když čtenář neumí říct proč. Na letáku nebo v katalogu firmy je to
        stejné jako pomačkaná košile na schůzce.
      </p>
      <p>
        Pravidla české typografie shrnuje norma ČSN 01 6910 a{' '}
        <a href="https://prirucka.ujc.cas.cz/" target="_blank" rel="noopener noreferrer">
          Internetová jazyková příručka
        </a>{' '}
        Ústavu pro jazyk český. Tady jsou ta, na která v textech od klientů narážím nejčastěji.
      </p>

      <h2 id="kontrola">Zkontrolujte svůj text</h2>
      <p>
        Vložte text z letáku, webu nebo e-mailu. Kontrola opraví běžné chyby a opravená místa zvýrazní. Zvládne jen to, co
        se dá poznat podle tvaru textu. Smysl vět a pravopis nekontroluje.
      </p>
      <TypoChecker />

      <h2 id="prehled">Přehled nejčastějších chyb</h2>
      <div className="table-wrap">
        <table className="fmt-table">
          <thead>
            <tr>
              <th scope="col">Špatně</th>
              <th scope="col">Správně</th>
              <th scope="col">Pravidlo</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([bad, good, rule]) => (
              <tr key={bad}>
                <td className="typo-bad">{bad}</td>
                <th scope="row">{good}</th>
                <td>{rule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="pomlcka">Pomlčka, nebo spojovník?</h2>
      <p>
        Na klávesnici je jen krátká čárka, spojovník (-). Patří dovnitř slov: e-mail, česko-anglický, Frýdek-Místek.
        Pomlčka (–) je delší a používá se ve třech situacích:
      </p>
      <ul>
        <li>
          Ve větě, kde odděluje vsuvku nebo připojuje dovětek. Píše se s mezerami z obou stran: „Přijďte – čekáme vás.“
        </li>
        <li>V rozsahu čísel a časů bez mezer: 9–17 h, 5–10 let, s. 12–18.</li>
        <li>Ve významu „až“ nebo „mezi“ u trasy nebo vztahu, také bez mezer: Praha–Brno, zápas Sparta–Slavia.</li>
      </ul>
      <p>
        Pokud jsou ale na jedné straně rozsahu víceslovné výrazy, mezery se vrátí: 1. 1. – 31. 12. 2026. Dlouhá anglická
        pomlčka (—) se v české sazbě nepoužívá.
      </p>
      <Photo
        src="/poradna/typograficke-chyby-2.webp"
        alt="Kovové literky pro knihtisk: uvozovky, krátké spojovníky a delší pomlčky různé šířky a mezerníky vedle sazítka"
        caption="V sazečské kase měl spojovník i pomlčka každý svou přihrádku. Na klávesnici je jen jeden z nich."
      />

      <h2 id="uvozovky">Uvozovky</h2>
      <p>
        České uvozovky vypadají jako „99 dole a 66 nahoře“. Rovné uvozovky (&quot;…&quot;) jsou pozůstatek psacího stroje
        a anglické (“…”) patří do anglického textu. Když potřebujete uvozovky uvnitř uvozovek, použijte jednoduché:
        „Řekl mi: ‚Pošlete to dnes.‘“
      </p>
      <p>
        V knihách a časopisech se můžete setkat i s francouzskými uvozovkami »…«, které míří hroty dovnitř. Jsou správně,
        jen je v jednom textu nemíchejte s „…“.
      </p>

      <h2 id="cisla">Čísla, datum, měna a jednotky</h2>
      <ul>
        <li>
          Tisíce se oddělují mezerou, nikoli tečkou ani čárkou: 12 500, 1 250 000. U čtyřmístných čísel je mezera
          nepovinná, takže 1500 i 1 500 jsou správně. Desetinná je čárka: 3,5 m.
        </li>
        <li>
          Za tečkou v datu je mezera: 12. 10. 2026. Mezinárodní zápis 2026-10-12 je také správně, jen se do běžného textu
          moc nehodí.
        </li>
        <li>
          Celé koruny stačí napsat jako 1 500 Kč. Zápis 1 500,- Kč se spojovníkem je chyba. Norma připouští 1 500,– Kč
          s pomlčkou, ale jednodušší je pomlčku vynechat.
        </li>
        <li>
          Mezi číslem a jednotkou je mezera: 50 mm, 300 DPI, 20 °C. Výjimkou jsou stupně úhlu (90°) a tvary, kde číslo
          s jednotkou tvoří přídavné jméno: 5% roztok, 3× týdně.
        </li>
        <li>
          Procenta: 20 % s mezerou čtěte „dvacet procent“, 20% bez mezery „dvacetiprocentní“. Proto je správně „sleva
          20 %“ i „20% sleva“.
        </li>
        <li>
          Rozměr se píše se znakem krát, ne s písmenem x: 90 × 50 mm.
        </li>
        <li>Telefonní čísla se dělí po trojicích: +420 728 890 062.</li>
      </ul>

      <h2 id="mezery">Nezlomitelné mezery</h2>
      <p>
        Nezlomitelná mezera vypadá jako obyčejná, ale nedovolí rozdělit sousední slova na dva řádky. Používá se tam, kde
        by rozdělení působilo nepatřičně nebo by mátlo:
      </p>
      <ul>
        <li>za jednopísmennými předložkami a spojkami k, s, v, z, o, u, a, i,</li>
        <li>mezi číslem a jednotkou nebo měnou (50 mm, 1 500 Kč),</li>
        <li>uvnitř data, telefonního čísla a čísla rozděleného po tisících,</li>
        <li>za zkratkami titulů (Ing. Novák) a uvnitř zkratek jako s. r. o.,</li>
        <li>mezi znakem paragrafu a číslem (§ 435).</li>
      </ul>
      <p>
        Ve Wordu a v InDesignu se dá nezlomitelná mezera vkládat ručně nebo hromadně přes Najít a nahradit. Na webu se do
        kódu píše jako <code>&amp;nbsp;</code>. Tenhle web vkládá nezlomitelné mezery za jednopísmenná slova automaticky.
      </p>

      <Callout title="Velká písmena v nadpisech">
        <p>
          V angličtině se v nadpisech píše každé slovo s velkým písmenem. V češtině ne: „Jak vybrat logo“, nikoli „Jak
          Vybrat Logo“. Totéž platí pro tlačítka na webu a položky menu.
        </p>
      </Callout>

      <h2 id="klavesnice">Jak znaky napsat na klávesnici</h2>
      <p>
        Na Windows fungují kódy přes Alt: držte levý Alt a na numerické klávesnici napište čísla. Word některé znaky
        nahrazuje sám, pokud máte zapnuté automatické opravy a nastavenou češtinu.
      </p>
      <div className="table-wrap">
        <table className="fmt-table">
          <thead>
            <tr>
              <th scope="col">Znak</th>
              <th scope="col">Windows</th>
              <th scope="col">Word</th>
              <th scope="col">InDesign (Windows)</th>
            </tr>
          </thead>
          <tbody>
            {KEYS.map(([sign, win, word, indd]) => (
              <tr key={sign}>
                <th scope="row">{sign}</th>
                <td>{win}</td>
                <td>{word}</td>
                <td>{indd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Na Macu otevřete prohlížeč znaků zkratkou Ctrl + Cmd + mezerník a znak vyhledejte podle názvu. V InDesignu na Macu
        nahraďte Ctrl za Cmd a Alt za Option.
      </p>

      <h2 id="kde-na-tom-zalezi">Kde na tom záleží nejvíc</h2>
      <p>
        U krátkého e-mailu kolegovi typografii nikdo řešit nemusí. U textu, který se vytiskne v nákladu několika tisíc
        kusů nebo bude roky viset na webu, se vyplatí. Knihy, katalogy a výroční zprávy sázím tak, aby tyhle chyby
        neobsahovaly, a texty před sazbou čistím. Opravit chybu ve Wordu stojí pár vteřin, po vytištění celý náklad. Na co si dát pozor před odesláním do tiskárny, shrnuje{' '}
        <Link href="/poradna/tiskova-data">checklist tiskových dat</Link>.
      </p>
      <Photo
        src="/poradna/typograficke-chyby-3.webp"
        alt="Otevřená kniha v modrofialové vazbě se stužkou, s pečlivě vysázeným textem do bloku, vedle šálek čaje a brýle"
        caption="Text vysázený se správnými znaky a mezerami se čte bez zadrhávání."
      />
    </>
  );
}
