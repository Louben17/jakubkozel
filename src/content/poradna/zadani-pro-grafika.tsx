import Link from 'next/link';
import BriefBuilder from '@/components/poradna/BriefBuilder';
import { Callout, Photo } from './parts';

export default function ZadaniProGrafika() {
  return (
    <>
      <ul className="toc" aria-label="Obsah článku">
        <li>
          <a href="#co-patri">Co do zadání patří</a>
        </li>
        <li>
          <a href="#pruvodce">Průvodce zadáním</a>
        </li>
        <li>
          <a href="#libi-se-mi">Jak popsat, co se vám líbí</a>
        </li>
        <li>
          <a href="#logo">Zadání na logo</a>
        </li>
        <li>
          <a href="#tiskoviny">Zadání na tiskoviny</a>
        </li>
        <li>
          <a href="#chyby">Časté chyby</a>
        </li>
      </ul>

      <p>
        Grafik nezná vaši firmu, vaše zákazníky ani to, co jste si představovali, když jste o novém logu přemýšleli ve
        sprše. Všechno, co ví, ví ze zadání. Když je zadání krátké nebo obecné, grafik si chybějící místa domyslí
        a první návrh pak spíš zjišťuje, co nechcete. S dobrým zadáním odpadne část kol úprav, a s nimi i čas a peníze.
      </p>
      <p>
        Nemusí to být dlouhý dokument. Stačí jedna strana, která odpoví na otázky níže. Pokud se vám nechce psát od nuly,
        vyplňte <a href="#pruvodce">průvodce zadáním</a>, který z odpovědí složí hotový text.
      </p>

      <h2 id="co-patri">Co do zadání patří</h2>
      <ol className="checklist">
        <li>
          <p>
            <strong>Co přesně potřebujete.</strong> „Logo a vizitky“ je lepší než „nějakou grafiku“. Napište i to, kde se
            výsledek použije: na webu, na autě, na krabičce, na výšivce, na Instagramu.
          </p>
        </li>
        <li>
          <p>
            <strong>Kdo jste a čím se zabýváte.</strong> Dvě tři věty, jako byste to vysvětlovali známému. Přidejte, čím se
            lišíte od konkurence, pokud to víte.
          </p>
        </li>
        <li>
          <p>
            <strong>Pro koho to je.</strong> Logo pro dětskou herničku a logo pro účetní kancelář cílí na jiné lidi a podle
            toho vypadá. Čím konkrétněji popíšete zákazníky, tím líp.
          </p>
        </li>
        <li>
          <p>
            <strong>Jaký dojem má výsledek dělat.</strong> Vyberte nejvýš tři přídavná jména, třeba „přátelský, poctivý,
            moderní“. Když jich vyberete deset, grafikovi neřeknou nic.
          </p>
        </li>
        <li>
          <p>
            <strong>Co se vám líbí a co ne.</strong> Odkazy na weby, loga nebo tiskoviny, ke každému jedna věta proč. Stejně
            užitečné je napsat, co nechcete.
          </p>
        </li>
        <li>
          <p>
            <strong>Jaké podklady máte.</strong> Současné logo (ideálně ve vektoru), texty, fotky, firemní barvy. U textů
            uveďte, jestli jsou hotové, nebo je ještě budete psát.
          </p>
        </li>
        <li>
          <p>
            <strong>Termín a rozpočet.</strong> Pevný termín, třeba veletrh nebo otevření provozovny, napište hned na
            začátek. Rozpočet nemusí být přesný, ale i rozpětí pomůže navrhnout řešení, které do něj vejde.
          </p>
        </li>
        <li>
          <p>
            <strong>Kdo bude rozhodovat.</strong> Pokud o výsledku rozhoduje víc lidí, domluvte se mezi sebou předem
            a posílejte grafikovi jednu sjednocenou zpětnou vazbu.
          </p>
        </li>
      </ol>

      <h2 id="pruvodce">Průvodce zadáním</h2>
      <p>
        Vyplňte, co víte, a zbytek nechte prázdný. Hotový text si můžete zkopírovat do e-mailu, nebo ho jedním tlačítkem
        vložit do mého poptávkového formuláře. Nic se neodesílá, dokud formulář sami neodešlete.
      </p>
      <BriefBuilder />

      <h2 id="libi-se-mi">Jak popsat, co se vám líbí</h2>
      <p>
        Slova jako „moderní“, „čisté“ nebo „ať to má šmrnc“ si každý představí jinak. Mnohem víc řekne pár ukázek.
        Uložte si obrázky, weby a obaly, které se vám líbí, i když jsou z úplně jiného oboru, a ke každé ukázce připište,
        co přesně vás na ní zaujalo: barva, písmo, hodně volného místa, fotky lidí, ručně kreslené prvky.
      </p>
      <Photo
        src="/poradna/zadani-pro-grafika-2.webp"
        alt="Moodboard na bílé stěně: fotky interiérů, vzorky látek a papírů, korálové a broskvové barevné vzorky a ukázky vizitek"
        caption="Moodboard nemusí být hezký. Stačí sdílená složka nebo nástěnka na Pinterestu s poznámkami."
      />
      <p>
        Pomůže i seznam konkurentů, ať grafik ví, od koho se máte odlišit. Netvrďte ale, že chcete „něco jako má
        konkurence, jen lepší“. Pak vznikne druhá verze cizí značky.
      </p>
      <Callout title="Antireference">
        <p>
          Ukázky toho, co nechcete, jsou stejně cenné. „Žádné zlaté barvy, žádné klipartové ikony, nechci to mít jako
          banka“ ušetří grafikovi slepou uličku a vám jedno kolo připomínek.
        </p>
      </Callout>

      <h2 id="logo">Zadání na logo</h2>
      <p>
        U loga je nejdůležitější vědět, kde všude se bude používat. Logo, které má fungovat na výšivce na tričku, v razítku
        a jako ikona aplikace, musí být jednoduché a čitelné i v malé velikosti. Logo, které se objeví jen na webu a na
        tabuli nad vchodem, si může dovolit víc detailů.
      </p>
      <ul>
        <li>Napište přesný název, jak se má v logu objevit, včetně velkých písmen a případného podtitulu.</li>
        <li>Uveďte, jestli máte barvy, které chcete zachovat, nebo naopak takové, kterým se chcete vyhnout.</li>
        <li>
          Pokud logo přebudováváte, pošlete to současné a napište, co se vám na něm líbí a co ne. Někdy stačí logo
          vyčistit a nemusí vznikat úplně nové.
        </li>
        <li>
          Zeptejte se, v jakých formátech logo dostanete. Vysvětlení, k čemu je SVG, PDF nebo PNG, najdete v článku{' '}
          <Link href="/poradna/formaty-loga">Formáty loga</Link>.
        </li>
      </ul>
      <Photo
        src="/poradna/zadani-pro-grafika-3.webp"
        alt="Skicák s tužkovými skicami jednoduchých log z kruhů a listů, jedna skica zakroužkovaná korálovou fixou, vedle pauzovací papír a tužka"
        caption="Z dobrého zadání vzniká víc použitelných skic a méně slepých uliček."
      />

      <h2 id="tiskoviny">Zadání na tiskoviny</h2>
      <p>
        U letáků, vizitek a katalogů rozhodují technické údaje. Bez nich nejde připravit tisková data, a pokud se zjistí
        až na konci, grafika se předělává.
      </p>
      <ul>
        <li>
          Rozměr a orientace. Přehled běžných rozměrů najdete v článku{' '}
          <Link href="/poradna/formaty-papiru">Formáty papíru</Link>, u vizitek v článku{' '}
          <Link href="/poradna/rozmer-vizitky">Rozměr vizitky</Link>.
        </li>
        <li>Počet stran a jestli jde o jednostranný, nebo oboustranný tisk.</li>
        <li>Náklad, tedy kolik kusů se bude tisknout. Ovlivní, jestli se vyplatí digitální, nebo ofsetový tisk.</li>
        <li>
          Papír, pokud ho máte vybraný. Pomůže článek <Link href="/poradna/gramaz-papiru">Gramáž papíru</Link>.
        </li>
        <li>Kdo zajišťuje tisk. Když máte vlastní tiskárnu, pošlete její technické požadavky na data.</li>
        <li>Hotové a zkontrolované texty. Přepisování textů v hotové sazbě je nejčastější důvod, proč se zakázka protáhne.</li>
      </ul>

      <h2 id="chyby">Časté chyby v zadání</h2>
      <ul>
        <li>
          <strong>„Udělejte něco hezkého, uvidíme.“</strong> Grafik pak navrhuje naslepo a vy vybíráte z možností, které
          možná vůbec nemíří tam, kam potřebujete.
        </li>
        <li>
          <strong>Texty „dodám později“.</strong> Návrh s vymyšleným textem vypadá jinak než s tím skutečným. Dlouhý název
          nebo tři odstavce místo jedné věty můžou celou kompozici rozbít.
        </li>
        <li>
          <strong>Logo stažené z webu.</strong> Malý obrázek PNG nebo JPG se do tisku nehodí. Zkuste najít původní soubory
          od toho, kdo logo dělal. Pokud neexistují, logo se dá překreslit do vektoru.
        </li>
        <li>
          <strong>Připomínky od pěti lidí zvlášť.</strong> Každý chce něco jiného a grafik neví, čí názor platí. Sepište
          připomínky dohromady a rozhodněte rozpory dřív, než je pošlete.
        </li>
        <li>
          <strong>Změna zadání po prvním návrhu.</strong> Když se ukáže, že potřebujete něco jiného, je to v pořádku, jen
          počítejte s tím, že jde o novou práci, ne o úpravu.
        </li>
      </ul>
      <p>
        Když si nevíte rady s některou z otázek, nevadí. Pošlete, co máte, a zbytek doladíme spolu. Po přečtení zadání se
        doptám na to, co mi chybí, a pak vám pošlu nabídku.
      </p>
    </>
  );
}
