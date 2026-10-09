import Link from 'next/link';
import WebChecklist, { type CheckGroup } from '@/components/poradna/WebChecklist';
import { Callout, Photo } from './parts';

const CHECKLIST: CheckGroup[] = [
  {
    title: 'Povinné a právní',
    items: [
      'Jméno nebo firma, sídlo a IČO',
      'Údaj o zápisu v živnostenském nebo obchodním rejstříku',
      'Informace o zpracování osobních údajů u formuláře',
      'Analytické a reklamní cookies až po souhlasu',
      'U e-shopu obchodní podmínky a poučení o odstoupení od smlouvy',
    ],
  },
  {
    title: 'Pro zákazníky',
    items: [
      'Na první obrazovce je jasné, co děláte a kde',
      'Telefon a e-mail na každé stránce, telefon jde vytočit klepnutím',
      'Fotky skutečné práce, ne jen fotobanka',
      'Ceny, nebo aspoň orientační rozpětí',
      'Web se dobře ovládá v telefonu',
    ],
  },
  {
    title: 'Technické',
    items: [
      'Doména registrovaná na vás',
      'Máte přístupy k doméně, hostingu a správě webu',
      'Web běží přes HTTPS',
      'Stránky se načítají rychle i na mobilních datech',
      'Firemní profil na Googlu a na Firmy.cz se stejnými údaji jako web',
    ],
  },
];

export default function WebProZivnostnika() {
  return (
    <>
      <ul className="toc" aria-label="Obsah článku">
        <li>
          <a href="#povinne-udaje">Povinné údaje</a>
        </li>
        <li>
          <a href="#gdpr">Formulář a GDPR</a>
        </li>
        <li>
          <a href="#cookies">Cookies</a>
        </li>
        <li>
          <a href="#e-shop">E-shop a přístupnost</a>
        </li>
        <li>
          <a href="#zakaznici">Co hledají zákazníci</a>
        </li>
        <li>
          <a href="#domena">Doména a přístupy</a>
        </li>
        <li>
          <a href="#checklist">Kontrolní seznam</a>
        </li>
      </ul>

      <p>
        Web malé firmy nemusí být velký. Musí ale rychle odpovědět na otázky, se kterými na něj lidé přicházejí: co
        děláte, kde, za kolik a jak se vám ozvat. K tomu má pár zákonných povinností, které se při stavbě webu snadno
        přehlédnou. Projděte si obojí a na konci si odškrtejte, co už máte.
      </p>
      <Callout title="Než začnete">
        <p>
          Nejsem právník. Popisuji, co při stavbě webů pro živnostníky a malé firmy řeším v praxi. U e-shopu a u čehokoli
          nejasného doporučuji obchodní podmínky a nastavení zpracování osobních údajů konzultovat s advokátem.
        </p>
      </Callout>

      <h2 id="povinne-udaje">Povinné údaje podnikatele</h2>
      <p>
        Podle § 435 občanského zákoníku musí každý podnikatel na svém webu uvést tyto údaje:
      </p>
      <ul>
        <li>jméno a příjmení, nebo název firmy,</li>
        <li>sídlo (u živnostníka místo podnikání, které má zapsané v živnostenském rejstříku),</li>
        <li>IČO, pokud ho má přidělené,</li>
        <li>
          údaj o zápisu do rejstříku. U firmy v obchodním rejstříku i soud, oddíl a vložku. Živnostník uvede zápis
          v živnostenském rejstříku.
        </li>
      </ul>
      <div className="table-wrap">
        <table className="fmt-table">
          <thead>
            <tr>
              <th scope="col">Kdo</th>
              <th scope="col">Vzor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Živnostník</th>
              <td>Jan Novák, Lipová 12, 602 00 Brno, IČO 12345678, zapsán v živnostenském rejstříku</td>
            </tr>
            <tr>
              <th scope="row">s. r. o.</th>
              <td>
                Novák a syn s. r. o., Lipová 12, 602 00 Brno, IČO 12345678, zapsaná v obchodním rejstříku vedeném Krajským
                soudem v Brně, oddíl C, vložka 12345
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Nejčastěji se údaje dávají do patičky nebo na stránku Kontakt. DIČ zákon na webu nevyžaduje, uvádí se hlavně
        na fakturách. Pokud nechcete zveřejnit domácí adresu, řešením je virtuální sídlo. Pak ale musí být zapsané
        i v rejstříku.
      </p>

      <h2 id="gdpr">Kontaktní formulář a GDPR</h2>
      <p>
        Jakmile web sbírá osobní údaje, třeba jméno, e-mail a telefon z poptávkového formuláře, musíte lidem říct, kdo
        údaje zpracovává, k čemu, jak dlouho je uchováte a jaká mají práva. Obvykle to řeší stránka Zásady zpracování
        osobních údajů a odkaz na ni přímo u formuláře.
      </p>
      <ul>
        <li>
          Na odpověď na poptávku souhlas nepotřebujete. Zpracování je nutné, abyste mohli nabídku vůbec poslat. Zaškrtávací
          políčko „souhlasím se zpracováním“ proto není povinné, a pokud ho máte, nesmí být předem zaškrtnuté.
        </li>
        <li>
          Na rozesílání newsletteru lidem, kteří u vás nenakoupili, souhlas potřebujete. Ten se uděluje zvlášť a musí jít
          kdykoli odvolat.
        </li>
        <li>Ve formuláři chtějte jen to, co opravdu potřebujete. Rodné číslo nebo adresu u poptávky nikdo vyplňovat nechce.</li>
      </ul>

      <h2 id="cookies">Cookies a cookie lišta</h2>
      <p>
        Od 1. 1. 2022 platí v Česku pro cookies takzvaný opt-in. Analytické a reklamní cookies (Google Analytics, Meta
        Pixel a podobné) se smí spustit až poté, co návštěvník souhlasí. Technicky nezbytné cookies, například pro košík
        nebo přihlášení, souhlas nepotřebují.
      </p>
      <ul>
        <li>Lišta musí umožnit souhlas odmítnout stejně snadno, jako ho udělit. Odmítnutí schované až v „Nastavení“ tohle nesplňuje.</li>
        <li>Měřicí kódy se nesmí načíst dřív, než návštěvník klikne na souhlas.</li>
        <li>Souhlas musí jít později změnit, obvykle odkazem v patičce.</li>
        <li>Pokud web žádné nepovinné cookies nepoužívá, lištu nepotřebuje.</li>
      </ul>
      <p>
        Na tomhle webu to funguje stejně: Google Analytics se načte až po kliknutí na Přijmout a volbu jde změnit
        v patičce.
      </p>
      <Photo
        src="/poradna/web-pro-zivnostnika-3.webp"
        alt="Notebook s jednoduchým webem a cookie lištou se dvěma tlačítky dole na obrazovce, vedle sešit s odškrtaným seznamem a mátovou propiskou"
        caption="Cookie lišta má dvě rovnocenná tlačítka a měření se spustí až po souhlasu."
      />

      <h2 id="e-shop">E-shop, rezervace a přístupnost</h2>
      <p>
        Když přes web prodáváte spotřebitelům, přibývá povinností. E-shop potřebuje obchodní podmínky, poučení o právu
        odstoupit od smlouvy do 14 dnů včetně formuláře pro odstoupení, informace o reklamacích, konečné ceny včetně DPH
        a informaci, že spory jde řešit mimosoudně u České obchodní inspekce. Tady se vyplatí šablona od právníka, ne
        text zkopírovaný z cizího e-shopu.
      </p>
      <p>
        Od 28. června 2025 platí také zákon č. 424/2023 Sb. o požadavcích na přístupnost. E-shopy podle něj musí být
        použitelné i pro lidi se zdravotním postižením, například pro nevidomé se čtečkou obrazovky. Výjimku mají
        mikropodniky, tedy firmy s méně než 10 zaměstnanci a s ročním obratem nebo bilanční sumou do 2 milionů eur. Dozor
        vykonává Česká obchodní inspekce.
      </p>
      <p>
        I když se vás zákon netýká, základy přístupnosti se vyplatí: dostatečný kontrast textu, popisky obrázků,
        formulář ovladatelný z klávesnice a písmo, které se dá zvětšit. Takový web se líp používá všem, i lidem na
        slunci s telefonem v ruce.
      </p>

      <h2 id="zakaznici">Co na webu hledají zákazníci</h2>
      <p>
        Zákonné náležitosti zákazníky nepřivedou, to je práce obsahu. U malých firem se mi osvědčilo pohlídat hlavně
        tohle:
      </p>
      <ul>
        <li>
          Na první obrazovce je napsané, co děláte a v jaké oblasti. „Truhlářství Novák, kuchyně a vestavěné skříně na míru,
          Brno a okolí“ řekne víc než „Vítejte na našich stránkách“.
        </li>
        <li>
          Kontakt je vidět na každé stránce. Telefon je odkaz, který jde v mobilu vytočit jedním klepnutím, a e-mail se
          dá zkopírovat.
        </li>
        <li>
          Fotky jsou z vaší dílny, provozovny nebo hotových zakázek. Fotobanka nic nedokazuje. Pár skutečných fotek
          z telefonu je lepší než sterilní obrázek, který má na webu sto dalších firem.
        </li>
        <li>
          Ceny, nebo aspoň „od“ a příklad, kolik stála běžná zakázka. Kdo cenu nenajde, snadno odejde ke konkurenci, která ji
          uvádí.
        </li>
        <li>Recenze od skutečných zákazníků se jménem. Vymyšlené reference se poznají a škodí víc než žádné.</li>
      </ul>
      <Photo
        src="/poradna/web-pro-zivnostnika-2.webp"
        alt="Ruka drží telefon s mobilním webem truhlářství: fotka dřevěného stolu, velké mátové tlačítko pro zavolání a mapa, v pozadí dílna"
        caption="V telefonu musí být tlačítko pro zavolání na očích, ne schované v menu."
      />
      <p>
        Hodně lidí web otevře v telefonu, často přímo z výsledků hledání nebo z mapy. Vyzkoušejte si ho proto na
        vlastním mobilu na datech, ne na rychlé Wi-Fi v kanceláři. Rychlost změří zdarma{' '}
        <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">
          PageSpeed Insights
        </a>
        . Google považuje za dobrý web, kde se hlavní obsah vykreslí do 2,5 sekundy (LCP), stránka reaguje na klepnutí do
        200 ms (INP) a obsah při načítání neposkakuje (CLS do 0,1).
      </p>

      <h2 id="domena">Doména, hosting a přístupy</h2>
      <p>
        Častý problém se objeví, až firma chce změnit dodavatele webu. Doména je registrovaná na agenturu nebo na
        bývalého kolegu, přístupy k hostingu nikdo nemá a web nejde přesunout.
      </p>
      <ul>
        <li>
          Doménu mějte registrovanou na sebe jako držitele. U domén .cz si to ověříte zdarma ve vyhledávání WHOIS na webu
          sdružení CZ.NIC.
        </li>
        <li>
          Uschovejte si přístupy k doméně, hostingu, administraci webu a účtům Google (Analytics, Search Console, firemní
          profil). Dodavatel vám je může spravovat, ale vlastníkem byste měli být vy.
        </li>
        <li>Web musí běžet přes HTTPS. Certifikát dnes většina hostingů nabízí zdarma.</li>
        <li>
          Založte si Firemní profil na Googlu a záznam na Firmy.cz. Lidé vás často
          najdou v mapách dřív než na webu. Název, adresa a telefon by měly být všude stejné.
        </li>
      </ul>

      <h2 id="checklist">Kontrolní seznam</h2>
      <p>Odškrtejte, co už máte. Seznam se nikam neukládá, slouží jen vám.</p>
      <WebChecklist groups={CHECKLIST} />
      <p>
        Pokud vám ve výsledku zbývá víc než pár položek, nebo stavíte nový web, ozvěte se. Projdu současný web a navrhnu,
        co upravit. Jak se připravit na spolupráci s grafikem, popisuje článek{' '}
        <Link href="/poradna/zadani-pro-grafika">Zadání pro grafika</Link>.
      </p>
    </>
  );
}
