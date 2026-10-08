import Link from 'next/link';
import ProgramPicker from '@/components/poradna/ProgramPicker';
import { Callout, Photo } from './parts';

const QUICK: [string, string][] = [
  ['Občas potřebuji příspěvek na sítě nebo jednoduchý leták', 'Canva (zdarma)'],
  ['Chci profesionální nástroje a nechci platit', 'Affinity'],
  ['Dělám grafiku pro klienty a spolupracuji s tiskárnami', 'Adobe Creative Cloud'],
  ['Navrhuji weby a aplikace', 'Figma'],
  ['Mám Mac a chci levnou náhradu Photoshopu', 'Pixelmator Pro'],
  ['Kreslím a ilustruji na iPadu', 'Procreate'],
  ['Chci open source, třeba na Linuxu', 'GIMP, Inkscape a Krita'],
];

export default function GrafickeProgramy() {
  return (
    <>
      <ul className="toc" aria-label="Obsah článku">
        <li>
          <a href="#rychle">Rychlé doporučení</a>
        </li>
        <li>
          <a href="#pruvodce">Průvodce výběrem</a>
        </li>
        <li>
          <a href="#placene">Placené programy</a>
        </li>
        <li>
          <a href="#zdarma">Programy zdarma</a>
        </li>
        <li>
          <a href="#ai">AI funkce</a>
        </li>
        <li>
          <a href="#vyplati">Co se vyplatí</a>
        </li>
      </ul>

      <h2 id="rychle">Rychlé doporučení</h2>
      <div className="table-wrap">
        <table className="fmt-table">
          <thead>
            <tr>
              <th scope="col">Když…</th>
              <th scope="col">Sáhněte po</th>
            </tr>
          </thead>
          <tbody>
            {QUICK.map(([when, what]) => (
              <tr key={when}>
                <th scope="row">{when}</th>
                <td>
                  <strong>{what}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="pruvodce">Průvodce výběrem programu</h2>
      <p>
        Vyberte, co chcete dělat, kolik chcete platit a na čem pracujete. Zůstanou jen programy, které se pro vás hodí.
      </p>
      <ProgramPicker />
      <p className="pg-note">
        Ceny jsou orientační v amerických dolarech bez DPH podle oficiálních ceníků k říjnu 2026. V Česku se účtuje
        v eurech nebo korunách včetně DPH, takže částka bude jiná. Před nákupem si ji ověřte u výrobce.
      </p>

      <h2 id="placene">Placené programy</h2>
      <h3 className="art-sub">Adobe Creative Cloud</h3>
      <p>
        Photoshop, Illustrator a InDesign jsou průmyslový standard. Pracují v nich agentury, tiskárny i většina
        grafiků, takže soubory od vás otevře každý. Adobe dnes nabízí dvě hlavní varianty celého balíku:
      </p>
      <ul>
        <li>
          <strong>Creative Cloud Standard</strong> obsahuje všechny aplikace pro počítač, ale jen 25 AI kreditů měsíčně.
          Na občasné generativní vyplnění to stačí.
        </li>
        <li>
          <strong>Creative Cloud Pro</strong> je zhruba o 15 dolarů dražší a má 4 000 kreditů, prémiové AI pro video a
          zvuk a plný přístup k mobilním a webovým aplikacím.
        </li>
        <li>
          <strong>Samostatná aplikace</strong> (třeba jen Photoshop) se vyplatí, když opravdu potřebujete jeden program.
        </li>
      </ul>
      <p>
        Předplatné se platí s ročním závazkem. Měsíční varianta bez závazku je zhruba o polovinu dražší a předčasné
        zrušení ročního plánu se platí.
      </p>

      <h3 className="art-sub">CorelDRAW, Pixelmator Pro a Figma</h3>
      <ul>
        <li>
          <strong>CorelDRAW Graphics Suite</strong> je jeden z mála profesionálních programů, který jde pořád koupit
          jednorázově. V Česku se drží hlavně v reklamní výrobě, u polepů a řezacích plotrů. Verze 2026 přidala AI
          generování a úpravu obrázků.
        </li>
        <li>
          <strong>Pixelmator Pro</strong> je rychlý editor fotek a grafiky pro Mac a nově i iPad. Koupíte ho jednorázově,
          nebo v předplatném Apple Creator Studio spolu s Final Cut Pro a Logic Pro.
        </li>
        <li>
          <strong>Figma</strong> je jasná volba pro návrh webů a aplikací. Běží v prohlížeči, v týmu se v ní pracuje
          současně a základní verze je zdarma.
        </li>
      </ul>

      <h2 id="zdarma">Programy zdarma</h2>
      <p>
        Affinity je od podzimu 2025 zdarma. Canva, která ho koupila, sloučila Affinity Photo, Designer a Publisher do
        jedné aplikace pro Windows a Mac a uvolnila ji bez poplatku. Dostanete
        profesionální úpravy fotek, vektorovou grafiku i sazbu s podporou CMYK. Platí se jen za AI nástroje, které jsou
        součástí předplatného Canva Pro.
      </p>
      <ul>
        <li>
          <strong>Canva</strong> je nejrychlejší cesta k příspěvku nebo prezentaci ze šablony. Na jednoduché tiskoviny
          stačí, ale nad přípravou tiskových dat nemáte takovou kontrolu jako v profesionálním programu.
        </li>
        <li>
          <strong>GIMP 3</strong> je zralý editor fotek zdarma. Verze 3 konečně přinesla nedestruktivní filtry a lepší
          práci s vrstvami.
        </li>
        <li>
          <strong>Inkscape</strong> je vektorový editor zdarma, výborný na ikony, SVG pro web a jednodušší loga.
        </li>
        <li>
          <strong>Photopea</strong> běží v prohlížeči, vypadá skoro jako Photoshop a otevře i jeho soubory PSD.
        </li>
        <li>
          <strong>Krita</strong> (zdarma) a <strong>Procreate</strong> (za pár set korun jednorázově na iPad) jsou
          programy pro kreslení. Procreate generativní AI odmítá a staví na ruční práci.
        </li>
      </ul>
      <Photo
        src="/poradna/graficke-programy-3.webp"
        alt="Ruka s perem kreslí korálovou ilustraci na tabletu, vedle otevřený skicák s náčrty a pastelky"
        caption="Na kreslení stačí Procreate za pár stovek, Krita je dokonce zdarma."
      />

      <h2 id="ai">AI funkce: co opravdu pomáhá</h2>
      <p>
        Generativní AI je dnes ve skoro každém placeném programu. Nejvíc času ušetří u rutinní práce:
      </p>
      <ul>
        <li>
          <strong>Odstranění pozadí a objektů</strong>: dřív půlhodina pečlivého výběru, dnes pár vteřin.
        </li>
        <li>
          <strong>Rozšíření fotky</strong>: když fotka nemá správný formát pro banner nebo leták, AI ji domaluje do stran.
        </li>
        <li>
          <strong>Zvětšení rozlišení</strong>: zachrání menší fotku pro tisk. Zázraky ale nedělá, viz článek{' '}
          <Link href="/poradna/prevod-px-na-mm">o DPI a pixelech</Link>.
        </li>
        <li>
          <strong>Retuš</strong>: drobné nečistoty, kabely nebo lidi v pozadí.
        </li>
      </ul>
      <Photo
        src="/poradna/graficke-programy-2.webp"
        alt="Monitor s fotografií horské krajiny s jezerem, kterou AI rozšiřuje do stran, nové části jsou označené přerušovaným výběrem"
        caption="Generativní rozšíření: AI domaluje fotku do formátu, který potřebujete."
      />
      <Callout title="Na co si dát u AI pozor">
        <ul>
          <li>AI funkce se většinou platí kredity. Levnější plány jich mají málo a další se dokupují.</li>
          <li>
            U loga nebo ilustrace vygenerované AI nemáte jistotu originality ani autorských práv. Značku, kterou chcete
            chránit, je bezpečnější nechat nakreslit.
          </li>
          <li>
            AI umí přesvědčivé detaily, ale o vaší značce ani o tiskových datech nic neví. Výstup je potřeba zkontrolovat
            a doladit.
          </li>
        </ul>
      </Callout>

      <h2 id="vyplati">Co se vyplatí</h2>
      <ul>
        <li>
          <strong>Podnikatel, který si občas dělá grafiku sám:</strong> Canva zdarma, případně Pro kvůli odstranění
          pozadí a značkovým šablonám. Logo a vizuální identitu si ale nechte udělat. Vrátí se to v každém dalším
          materiálu.
        </li>
        <li>
          <strong>Začínající grafik:</strong> Affinity a Figma zdarma. Až budete pracovat pro klienty, počítejte
          s Adobe, protože ho bude chtít většina spolupracovníků.
        </li>
        <li>
          <strong>Profesionál:</strong> Adobe Creative Cloud. Plán Standard většině stačí, Pro se vyplatí, jen když
          AI používáte denně nebo děláte i video.
        </li>
        <li>
          <strong>Reklamní výroba a polepy:</strong> CorelDRAW, ideálně s jednorázovou licencí.
        </li>
      </ul>
      <p>
        Já pracuji v Adobe (Photoshop, Illustrator a InDesign) a ve Figmě. Klientům předávám data ve formátech, které
        otevře každý. Jaké soubory s logem byste měli dostat, popisuji v článku{' '}
        <Link href="/poradna/formaty-loga">Formáty loga</Link>.
      </p>
    </>
  );
}
