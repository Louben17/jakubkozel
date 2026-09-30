import type { ComponentType, ReactNode } from 'react';
import {
  FaBook, FaBoxOpen, FaBullhorn, FaFileAlt, FaFont, FaIdCard, FaLaptopCode, FaLayerGroup, FaMobileAlt,
  FaNewspaper, FaPalette, FaPenNib, FaPrint, FaRocket, FaSearch, FaShoppingCart, FaSwatchbook, FaUsers,
} from 'react-icons/fa';
import { DtpAnim, GrafikaAnim, PrintAnim, WebAnim } from './home/Illustrations';

export type Tile = { title: string; description: string; icon: ReactNode };

export type Photo = { src: string; alt: string; caption: string };

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
  },
];
