import type { ComponentType, ReactNode } from 'react';
import {
  FaBook, FaBoxOpen, FaBullhorn, FaFileAlt, FaFont, FaIdCard, FaLaptopCode, FaLayerGroup, FaMobileAlt,
  FaNewspaper, FaPalette, FaPenNib, FaPrint, FaRocket, FaSearch, FaShoppingCart, FaSwatchbook, FaUsers,
} from 'react-icons/fa';
import { DtpAnim, GrafikaAnim, PrintAnim, WebAnim } from './home/Illustrations';

export type Tile = { title: string; description: string; icon: ReactNode };

export type Photo = { src: string; alt: string; caption: string };

export type Faq = { q: string; a: string };

export type Service = {
  slug: 'grafika' | 'dtp' | 'webdesign' | 'tiskoviny';
  no: string;
  label: string; // krátký název do menu
  title: string;
  lead: string;
  items: string[];
  href: string;
  cta: string;
  bg: string;
  accent: string;
  Anim: ComponentType;
  tiles: Tile[];
  gallery?: Photo[];
  faq: Faq[];
};

// Jeden zdroj pravdy pro homepage, menu i podstránky oborů
export const SERVICES: Service[] = [
  {
    slug: 'grafika',
    no: '01',
    label: 'Grafika',
    title: 'Grafika',
    lead: 'Loga a vizuální identity, které si lidé zapamatují. Od první skici po manuál značky.',
    items: ['Loga', 'Vizuální identity', 'Firemní materiály', 'Plakáty'],
    href: '/grafika',
    cta: 'Více o grafice',
    bg: '#FFE3E0',
    accent: '#FF6B73',
    Anim: GrafikaAnim,
    tiles: [
      { title: 'Loga', description: 'Unikátní loga, která zanechají dojem.', icon: <FaPenNib /> },
      { title: 'Vizuální identity', description: 'Kompletní branding pro vaši značku.', icon: <FaPalette /> },
      { title: 'Firemní tiskoviny', description: 'Vizitky, hlavičkové papíry a další.', icon: <FaFileAlt /> },
      { title: 'Plakáty', description: 'Poutavé plakáty pro akce i kampaně.', icon: <FaBullhorn /> },
      { title: 'Print design', description: 'Kvalitní tiskoviny na míru.', icon: <FaPrint /> },
      { title: 'Katalogy', description: 'Profesionální katalogy a brožury.', icon: <FaBook /> },
    ],
    gallery: [
      {
        src: '/portfolio/grafika-1.webp',
        alt: 'Vizuální identita – vizitky, hlavičkový papír, obálka a zápisník se stejným logem',
        caption: 'Vizuální identita',
      },
      {
        src: '/portfolio/grafika-2.webp',
        alt: 'Skici a konstrukce loga na pauzovacím papíře se vzorníkem barev',
        caption: 'Od skici k logu',
      },
      {
        src: '/portfolio/grafika-3.webp',
        alt: 'Sítotiskový plakát s abstraktními tvary na zdi ateliéru',
        caption: 'Plakát',
      },
    ],
    faq: [
      {
        q: 'Co všechno dostanu k novému logu?',
        a: 'Logo v barevné, černobílé i inverzní verzi, ve formátech pro tisk (PDF, SVG) i pro web (PNG, SVG). Na přání připravím i jednoduchý manuál s barvami a písmy.',
      },
      {
        q: 'Kolik návrhů loga uvidím?',
        a: 'Připravím několik odlišných směrů a ten vybraný pak společně dolaďujeme. Počet kol úprav domluvíme předem v nabídce, abyste věděli, na čem jste.',
      },
      {
        q: 'Jak dlouho tvorba loga trvá?',
        a: 'Záleží na rozsahu a na tom, jak rychle si předáváme zpětnou vazbu. Konkrétní termín dostanete spolu s nabídkou ještě před zahájením práce.',
      },
      {
        q: 'Můžete navázat na moje stávající logo?',
        a: 'Ano. Stávající logo umím převést do vektorů, citlivě modernizovat nebo k němu dotvořit zbytek vizuální identity.',
      },
    ],
  },
  {
    slug: 'dtp',
    no: '02',
    label: 'DTP',
    title: 'DTP & sazba',
    lead: 'Knihy, časopisy a katalogy sázené s citem pro typografii — připravené přesně pro tiskárnu.',
    items: ['Sazba knih', 'Časopisy', 'Katalogy', 'Výroční zprávy'],
    href: '/dtp',
    cta: 'Více o DTP',
    bg: '#E4E8FA',
    accent: '#6C7BD0',
    Anim: DtpAnim,
    tiles: [
      { title: 'Sazba knih', description: 'Profesionální sazba knih s důrazem na typografii.', icon: <FaBook /> },
      { title: 'Časopisy', description: 'Kompletní sazba časopisů a periodik.', icon: <FaNewspaper /> },
      { title: 'Katalogy', description: 'Atraktivní katalogy produktů a služeb.', icon: <FaLayerGroup /> },
      { title: 'Brožury', description: 'Informační brožury a prezentační materiály.', icon: <FaFileAlt /> },
      { title: 'Výroční zprávy', description: 'Reprezentativní zpracování výročních zpráv.', icon: <FaPrint /> },
      { title: 'Typografie', description: 'Odborná úprava textu a typografické řešení.', icon: <FaFont /> },
    ],
    gallery: [
      {
        src: '/portfolio/dtp-1.webp',
        alt: 'Balíky čerstvě vytištěných časopisů z tiskárny, jeden rozbalený',
        caption: 'Časopis z tiskárny',
      },
      {
        src: '/portfolio/dtp-2.webp',
        alt: 'Otevřená brožura s fotografií a sazbou textu na mramorovém stolku v kavárně',
        caption: 'Brožura',
      },
      {
        src: '/portfolio/dtp-3.webp',
        alt: 'Typografický nátisk s písmem Aa, sazebním rastrem a lupou',
        caption: 'Typografie a sazba',
      },
    ],
    faq: [
      {
        q: 'V jakém formátu mám dodat texty a obrázky?',
        a: 'Texty stačí ve Wordu nebo Google Docs, obrázky v co nejvyšším rozlišení – ideálně originály z fotoaparátu nebo od fotografa. Když si nejste jistí, pošlete, co máte, a domluvíme se.',
      },
      {
        q: 'Připravíte data přímo pro tiskárnu?',
        a: 'Ano. Připravím tiskové PDF podle požadavků konkrétní tiskárny – se spadávkou, ořezovými značkami a správně převedenými barvami.',
      },
      {
        q: 'Co když je potřeba text upravit až po sazbě?',
        a: 'Korektury jsou běžnou součástí práce. Opravy zapracuji do sazby a pošlu nový náhled ke schválení.',
      },
      {
        q: 'Pomůžete s výběrem papíru a vazby?',
        a: 'Rád poradím s papírem, vazbou i povrchovou úpravou podle toho, k čemu tiskovina slouží a kolik kusů potřebujete.',
      },
    ],
  },
  {
    slug: 'webdesign',
    no: '03',
    label: 'Weby',
    title: 'Stavba webů',
    lead: 'Rychlé, moderní a responzivní weby, které dobře vypadají na mobilu i na monitoru.',
    items: ['Responzivní weby', 'UI/UX design', 'E-shopy', 'SEO'],
    href: '/webdesign',
    cta: 'Více o webech',
    bg: '#DDF5EC',
    accent: '#2BB39A',
    Anim: WebAnim,
    tiles: [
      { title: 'Responzivní weby', description: 'Weby, které perfektně fungují na všech zařízeních.', icon: <FaLaptopCode /> },
      { title: 'UI/UX design', description: 'Intuitivní rozhraní zaměřené na uživatele.', icon: <FaUsers /> },
      { title: 'E-commerce', description: 'Online obchody, které skutečně prodávají.', icon: <FaShoppingCart /> },
      { title: 'Landing pages', description: 'Stránky s vysokou mírou konverze.', icon: <FaRocket /> },
      { title: 'Mobilní optimalizace', description: 'Perfektní zobrazení na mobilních zařízeních.', icon: <FaMobileAlt /> },
      { title: 'SEO optimalizace', description: 'Weby připravené pro vyhledávače.', icon: <FaSearch /> },
    ],
    gallery: [
      {
        src: '/portfolio/weby-1.webp',
        alt: 'Stejný web na notebooku, tabletu a mobilu – responzivní design',
        caption: 'Responzivní web',
      },
      {
        src: '/portfolio/weby-2.webp',
        alt: 'Moderní web otevřený na notebooku na dřevěném stole',
        caption: 'Web na míru',
      },
      {
        src: '/portfolio/weby-3.webp',
        alt: 'Ručně kreslené wireframy webu a hotová mobilní verze na telefonu',
        caption: 'Od skici k webu',
      },
    ],
    faq: [
      {
        q: 'Budu si moct web upravovat sám?',
        a: 'Podle toho, co vám vyhovuje. Web může mít jednoduchou administraci, nebo ho spravuji já a změny mi jen pošlete e-mailem.',
      },
      {
        q: 'Bude web fungovat i na mobilu?',
        a: 'Ano. Každý web navrhuji responzivně, takže se přizpůsobí mobilu, tabletu i velkému monitoru.',
      },
      {
        q: 'Postaráte se o doménu a hosting?',
        a: 'Poradím s výběrem a pomůžu vše nastavit tak, aby web běžel rychle a spolehlivě.',
      },
      {
        q: 'Bude web vidět ve vyhledávačích?',
        a: 'Web dostane technický základ pro SEO: rychlé načítání, správnou strukturu nadpisů, popisy stránek, mapu webu a strukturovaná data pro Google.',
      },
    ],
  },
  {
    slug: 'tiskoviny',
    no: '04',
    label: 'Tiskoviny',
    title: 'Tiskoviny',
    lead: 'Vizitky, letáky, plakáty i obaly. Hlídám data, ořezy a barvy, aby tisk dopadl na jedničku.',
    items: ['Vizitky', 'Letáky', 'Plakáty', 'Obaly a etikety'],
    href: '/tiskoviny',
    cta: 'Více o tiskovinách',
    bg: '#FFEBD6',
    accent: '#F29E4C',
    Anim: PrintAnim,
    tiles: [
      { title: 'Vizitky', description: 'Vizitky, které se neztratí v šuplíku.', icon: <FaIdCard /> },
      { title: 'Letáky a brožury', description: 'Přehledné letáky, skládačky a brožury.', icon: <FaFileAlt /> },
      { title: 'Plakáty', description: 'Velké formáty, které je vidět zdálky.', icon: <FaBullhorn /> },
      { title: 'Obaly a etikety', description: 'Obaly, visačky a etikety na produkty.', icon: <FaBoxOpen /> },
      { title: 'Firemní tiskoviny', description: 'Hlavičkové papíry, obálky, formuláře.', icon: <FaSwatchbook /> },
      { title: 'Tisková data', description: 'Spadávka, ořezové značky a správné barvy pro tiskárnu.', icon: <FaPrint /> },
    ],
    gallery: [
      {
        src: '/portfolio/tiskoviny-1.webp',
        alt: 'Obal, sklenice s etiketami a visačky v jednotném designu na polici',
        caption: 'Obaly a etikety',
      },
      {
        src: '/portfolio/tiskoviny-2.webp',
        alt: 'Stoh silných vizitek s barevnou ořízkou a slepotiskem na rubu',
        caption: 'Vizitky',
      },
      {
        src: '/portfolio/tiskoviny-3.webp',
        alt: 'Oříznuté letáky v tiskárně vedle řezačky, odřezky s ořezovými značkami a CMYK pruhem',
        caption: 'Letáky z tiskárny',
      },
    ],
    faq: [
      {
        q: 'Jaká data potřebuje tiskárna?',
        a: 'Nejčastěji tiskové PDF v barevném prostoru CMYK se spadávkou (obvykle 3 mm) a ořezovými značkami. Připravím je přesně podle požadavků vaší tiskárny.',
      },
      {
        q: 'Proč barvy na monitoru a na papíře vypadají jinak?',
        a: 'Monitor světlo vyzařuje (RGB), papír ho odráží (CMYK). Při přípravě dat barvy převádím a hlídám, aby výsledek odpovídal návrhu co nejvěrněji.',
      },
      {
        q: 'Můžu tisknout ve své tiskárně?',
        a: 'Samozřejmě. Data připravím podle jejích technických požadavků a případné detaily s ní rád doladím.',
      },
      {
        q: 'Pomůžete s výběrem papíru?',
        a: 'Ano. Doporučím papír i povrchovou úpravu podle účelu – jinak se chová vizitka, jinak leták nebo obal.',
      },
    ],
  },
];
