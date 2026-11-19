import Link from 'next/link';
import QrSize from '@/components/poradna/QrSize';
import { AnimFigure, QrAnim } from '@/components/poradna/ArticleAnims';
import { Callout, Photo } from './parts';

const ROWS = [
  { where: 'Vizitka, štítek na výrobku', dist: '20–30 cm', size: '2–2,5 cm' },
  { where: 'Leták, jídelní lístek', dist: '30–40 cm', size: '3–4 cm' },
  { where: 'Stojánek na stole, obal', dist: '50–60 cm', size: '5–6 cm' },
  { where: 'Plakát A3 na nástěnce', dist: '1 m', size: '10 cm' },
  { where: 'Výloha, roll-up', dist: '2 m', size: '20 cm' },
  { where: 'Plachta na plotě', dist: '5 m', size: '50 cm' },
];

export default function VelikostQrKodu() {
  return (
    <>
      <ul className="toc" aria-label="Obsah článku">
        <li>
          <a href="#pravidlo">Pravidlo 10 : 1</a>
        </li>
        <li>
          <a href="#kalkulacka">Kalkulačka</a>
        </li>
        <li>
          <a href="#odkaz">Délka odkazu</a>
        </li>
        <li>
          <a href="#zona">Ochranná zóna</a>
        </li>
        <li>
          <a href="#barvy">Barvy a logo</a>
        </li>
        <li>
          <a href="#soubor">Soubor pro tisk</a>
        </li>
      </ul>

      <p>
        Nejmenší QR kód, který má smysl tisknout, měří <strong>2 × 2 cm</strong>. Tak velký stačí na vizitku, kterou
        držíte v ruce. Čím dál od kódu člověk stojí, tím větší musí být. Platí jednoduché pravidlo: strana kódu má být
        aspoň desetina vzdálenosti, ze které se skenuje. Kromě vzdálenosti rozhoduje i to, jak dlouhý odkaz v kódu je.
      </p>

      <AnimFigure caption="Když se telefon vzdálí dvakrát, kód musí být dvakrát větší. Na displeji pak zabírá pořád stejně místa.">
        <QrAnim />
      </AnimFigure>

      <h2 id="pravidlo">Pravidlo 10 : 1</h2>
      <p>
        Telefon potřebuje, aby kód zabral rozumný kus záběru. Když se vzdálenost zdvojnásobí, kód se v záběru zmenší na
        polovinu, a tak musí být i dvakrát větší. Z toho vychází poměr 10 : 1. Ze 30 centimetrů stačí 3 cm, z metru 10 cm
        a ze dvou metrů 20 cm.
      </p>
      <div className="table-wrap">
        <table className="fmt-table">
          <caption>Doporučená strana QR kódu podle místa</caption>
          <thead>
            <tr>
              <th scope="col">Kde</th>
              <th scope="col">Odkud se skenuje</th>
              <th scope="col">Strana kódu</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.where}>
                <th scope="row">{r.where}</th>
                <td>{r.dist}</td>
                <td>{r.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Rozměr v tabulce je bez bílého okraje kolem kódu. Ten se přidává navíc, viz{' '}
        <a href="#zona">ochranná zóna</a>. U plachty na plotě si navíc položte otázku, jestli tam někdo vůbec zastaví a
        vytáhne telefon. Často je lepší napsat krátkou adresu webu velkým písmem.
      </p>

      <h2 id="kalkulacka">Kalkulačka velikosti QR kódu</h2>
      <p>
        Vložte odkaz, který chcete do kódu dát, a vyberte, kde bude. Kalkulačka spočítá, kolik čtverečků bude kód mít
        a jak velký ho tisknout. Vybere větší ze dvou hodnot: desetinu vzdálenosti, nebo velikost, při které má jeden
        čtvereček aspoň půl milimetru.
      </p>
      <QrSize />

      <h2 id="odkaz">Proč záleží na délce odkazu</h2>
      <p>
        QR kód se skládá z malých čtverečků (modulů). Nejmenší kód, verze 1, jich má 21 × 21. Každá další verze přidá
        čtyři na šířku i na výšku. Krátký odkaz jako <em>mojefirma.cz</em> se vejde do verze 1 nebo 2. Odkaz se sledovacími
        parametry, které přidávají reklamní systémy a e-shopy, má snadno 120 znaků. Pak vyjde verze 7 se 45 × 45
        čtverečky.
      </p>
      <p>
        Na velkém plakátu to nevadí. Na vizitce ano: kód o straně 2 cm se 45 čtverečky na stranu má každý čtvereček menší
        než půl milimetru. Na tiskárně se slijí a starší telefon kód nepřečte.
      </p>
      <p>
        Pomůže kratší odkaz. Místo dlouhé adresy podstránky použijte krátkou, třeba <em>mojefirma.cz/menu</em>, a na
        webu ji přesměrujte, kam potřebujete. Cíl pak změníte kdykoli bez nového tisku. Když odkaz zkrátit nejde, musí
        být kód větší, aby čtverečky měly aspoň 0,5 mm.
      </p>
      <Callout title="Pozor na „dynamické“ QR kódy">
        <p>
          Online generátory často nabízejí dynamický kód, který vede přes jejich krátkou adresu. Po skončení zkušební doby
          nebo předplatného ale kód může přestat fungovat, a vytištěné letáky už nepřepíšete. Bezpečnější je přesměrování
          na vlastní doméně, které máte pod kontrolou.
        </p>
      </Callout>
      <Photo
        src="/poradna/velikost-qr-kodu-2.webp"
        alt="Vizitka, leták DL, stojánek na stůl, kulatá samolepka a sklenice s etiketou, každá tiskovina s QR kódem jiné velikosti"
        caption="Na každé tiskovině jinak velký kód. Rozhoduje, z jaké vzdálenosti po něm lidé sáhnou telefonem."
      />

      <h2 id="zona">Ochranná zóna kolem kódu</h2>
      <p>
        Kolem kódu musí zůstat volný okraj o šířce <strong>čtyř čtverečků</strong>. Podle něj telefon pozná, kde kód
        začíná. U malého kódu to dělá zhruba 3 až 4 mm na každé straně. Když text, ořez nebo barevná plocha zasáhnou až
        ke kódu, čtení se zpomalí nebo selže. Okraj nemusí být bílý, stačí, když je stejně světlý jako pozadí kódu.
      </p>
      <p>
        Pokud kód leží blízko kraje tiskoviny, počítejte i s ořezem. Mezi kódem a hranou listu nechte aspoň 3 mm
        bezpečné zóny, jinak může ochranná zóna padnout pod nůž. Víc o okrajích v článku{' '}
        <Link href="/poradna/spadavka">Spadávka</Link>.
      </p>

      <h2 id="barvy">Barvy, kontrast a logo uprostřed</h2>
      <p>
        QR kód nemusí být černobílý. Čtečka potřebuje hlavně kontrast: tmavé čtverečky na světlém podkladu. Tmavě modrá,
        hnědá nebo tmavě zelená fungují stejně dobře jako černá. Žlutá, světle oranžová nebo pastelové barvy na bílé
        nefungují.
      </p>
      <ul>
        <li>
          Negativ, tedy světlý kód na tmavém podkladu, přečte většina nových telefonů, některé starší čtečky ale ne.
          Pokud nemusíte, nedělejte ho.
        </li>
        <li>Kód přes fotku dejte vždycky do bílého nebo jednobarevného pole.</li>
        <li>
          Lesklá laminace na plakátu za výlohou odráží světlo. U kódů, které se skenují pod lampami nebo proti oknu, je
          lepší matný povrch.
        </li>
      </ul>
      <p>
        QR kód má zabudovanou opravu chyb. Úroveň L zvládne poškození asi 7 % plochy, M 15 %, Q 25 % a H 30 %. Díky tomu
        jde doprostřed kódu dát malé logo. Potřebujete ale úroveň H nebo Q, logo smí zakrýt nejvýš asi pětinu kódu a nesmí
        sahat na tři velké rohové čtverce. S vyšší úrovní opravy přibude čtverečků, takže kód s logem musí být o kus
        větší. V kalkulačce výše si to vyzkoušíte přepnutím na H.
      </p>

      <h2 id="soubor">V jakém formátu poslat QR kód do tisku</h2>
      <p>
        Nejlepší je vektor: <strong>SVG, PDF nebo EPS</strong>. Vektorový kód má ostré hrany v jakékoli velikosti a do
        grafiky ho vložíte jako logo. Většina generátorů SVG nabízí, jen to bývá schované pod tlačítkem „Další formáty“.
      </p>
      <p>
        Pokud máte jen PNG, musí být dost velké. Při tisku 300 DPI potřebuje kód o straně 3 cm aspoň 354 px. JPG
        nepoužívejte, komprese rozmaže hrany čtverečků. Malé PNG nezvětšujte, program při tom hrany vyhladí do
        neostra. Rozdíl mezi vektorem a bitmapou vysvětluje článek{' '}
        <Link href="/poradna/formaty-loga">Formáty loga</Link>.
      </p>
      <p>
        Kód v tiskových datech nechte jen v černé (100 % K), ne jako sytou černou skládanou ze všech čtyř barev. Při
        posunu barev by měl rozmazané hrany. Další kontroly před odesláním do tiskárny najdete v článku{' '}
        <Link href="/poradna/tiskova-data">Jak připravit tisková data</Link>.
      </p>
      <Photo
        src="/poradna/velikost-qr-kodu-3.webp"
        alt="Žena na ulici skenuje telefonem velký QR kód na plakátu ve výloze kavárny"
        caption="Plakát ve výloze se skenuje z chodníku. Ze dvou metrů potřebuje kód stranu kolem 20 cm."
      />
      <Callout title="Než to pošlete do tisku">
        <ul>
          <li>Vytiskněte nátisk ve skutečné velikosti a naskenujte ho ze skutečné vzdálenosti, ideálně dvěma telefony.</li>
          <li>Ověřte, že odkaz vede tam, kam má, a stránka se dobře zobrazí na mobilu.</li>
          <li>Ke kódu napište, co člověka čeká („Menu“, „Objednat online“), a pod něj i adresu pro ty, kdo neskenují.</li>
        </ul>
      </Callout>
    </>
  );
}
