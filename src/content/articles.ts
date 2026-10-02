import type { Faq, Service } from '@/components/services';

export type Article = {
  slug: string;
  title: string; // <title> a nadpis
  short: string; // krátký název do karet a drobečkové navigace
  description: string; // meta description
  lead: string;
  service: Service['slug']; // obor, ke kterému článek patří (barvy, odkazy, CTA)
  published: string; // ISO datum
  updated?: string;
  minutes: number;
  faq?: Faq[];
};

// Poradna – jen metadata (těla článků jsou v ./poradna/*.tsx, ať se nenačítají do podstránek oborů)
export const ARTICLES: Article[] = [
  {
    slug: 'formaty-papiru',
    title: 'Formáty papíru A, B, C a DL – rozměry v mm i pixelech',
    short: 'Formáty papíru',
    description:
      'Přehledná tabulka formátů papíru A0–A8, B0–B6, C4–C6 a DL: rozměry v milimetrech a v pixelech pro 300, 150 i 72 DPI. Kolik pixelů má A4 a jak velký soubor připravit pro tisk.',
    lead: 'Kolik milimetrů má A5, kolik pixelů potřebujete na plakát A2 a čím se liší B a C. Všechno v jedné tabulce.',
    service: 'tiskoviny',
    published: '2026-10-02',
    minutes: 4,
    faq: [
      {
        q: 'Kolik pixelů má A4?',
        a: 'Pro kvalitní tisk při 300 DPI má A4 (210 × 297 mm) rozměr 2480 × 3508 px. Při 150 DPI je to 1240 × 1754 px a při 72 DPI 595 × 842 px.',
      },
      {
        q: 'Jaký je rozměr A5?',
        a: 'A5 měří 148 × 210 mm, tedy přesně polovinu A4. Pro tisk při 300 DPI odpovídá 1748 × 2480 px.',
      },
      {
        q: 'Jaký rozměr má formát DL?',
        a: 'Obálka DL má 110 × 220 mm. Leták nebo pozvánka ve formátu DL, která se do ní vejde, má 99 × 210 mm, tedy třetinu A4.',
      },
    ],
  },
  {
    slug: 'prevod-px-na-mm',
    title: 'Převod pixelů na milimetry a zpět – kalkulačka px / mm s DPI',
    short: 'Převod px na mm',
    description:
      'Online kalkulačka pro převod pixelů na milimetry, centimetry a palce a zpět. Zjistěte, kolik pixelů potřebujete pro tisk při 300 DPI a jak velký obrázek se dá kvalitně vytisknout.',
    lead: 'Zadejte rozměr v pixelech nebo milimetrech a hned uvidíte, jak velký bude v tisku. Pod kalkulačkou vysvětluji, co znamená DPI a kolik ho opravdu potřebujete.',
    service: 'tiskoviny',
    published: '2026-10-02',
    minutes: 4,
    faq: [
      {
        q: 'Kolik pixelů je 1 mm?',
        a: 'Záleží na rozlišení. Při 300 DPI je 1 mm přibližně 11,8 px, při 150 DPI asi 5,9 px a při 72 DPI asi 2,8 px. Obecně platí px = mm ÷ 25,4 × DPI.',
      },
      {
        q: 'Jaké rozlišení potřebuji pro tisk?',
        a: 'Pro letáky, vizitky, brožury a knihy 300 DPI ve výsledné velikosti. Velké plakáty, na které se díváte z dálky, stačí kolem 150 DPI, billboardy i méně.',
      },
      {
        q: 'Zlepší se fotka, když jí v Photoshopu zvýším DPI?',
        a: 'Ne. Pokud přidáte pixely převzorkováním, program si je jen dopočítá a ostrost nepřibude. Změna DPI bez převzorkování jen určí, jak velký bude obrázek v tisku.',
      },
    ],
  },
  {
    slug: 'rozmer-vizitky',
    title: 'Rozměr vizitky: 90 × 50 nebo 85 × 55 mm? Jak připravit data pro tisk',
    short: 'Rozměr vizitky',
    description:
      'Jaký je standardní rozměr vizitky v Česku, jak velká data poslat do tiskárny se spadávkou, kolik pixelů má vizitka při 300 DPI a jaký papír vybrat.',
    lead: 'Vizitka je malá, ale chyb se na ní dá udělat hodně. Shrnul jsem rozměry, spadávku, bezpečný okraj i výběr papíru.',
    service: 'tiskoviny',
    published: '2026-10-02',
    minutes: 5,
    faq: [
      {
        q: 'Jaký je standardní rozměr vizitky?',
        a: 'V Česku je nejběžnější 90 × 50 mm. Často se tiskne také 85 × 55 mm (evropský rozměr) a 85 × 54 mm, tedy velikost platební karty.',
      },
      {
        q: 'Jak velká data poslat do tiskárny?',
        a: 'K čistému formátu přidejte spadávku, u vizitek obvykle 2 nebo 3 mm na každou stranu. Vizitka 90 × 50 mm má pak data 94 × 54 mm, nebo 96 × 56 mm. Přesnou hodnotu si ověřte u tiskárny.',
      },
      {
        q: 'Kolik pixelů má vizitka?',
        a: 'Vizitka 90 × 50 mm má při 300 DPI 1063 × 591 px. Se spadávkou 2 mm (94 × 54 mm) je to 1110 × 638 px.',
      },
    ],
  },
  {
    slug: 'spadavka',
    title: 'Spadávka: co to je a jak ji nastavit (InDesign, Illustrator, Canva, Word)',
    short: 'Spadávka',
    description:
      'Co je spadávka v tisku, proč je potřeba, jak velkou ji nastavit (obvykle 3 mm) a kde ji najdete v InDesignu, Illustratoru, Affinity, Canvě i ve Wordu.',
    lead: 'Bílé proužky na okraji vytištěného letáku mají skoro vždy stejnou příčinu: chybí spadávka. Ukážu, co to je a jak ji nastavit.',
    service: 'tiskoviny',
    published: '2026-10-02',
    minutes: 5,
    faq: [
      {
        q: 'Jak velká má být spadávka?',
        a: 'Nejčastěji 3 mm na každou stranu. U vizitek tiskárny někdy chtějí 2 mm, u velkých formátů a knižních obálek i 5 mm a víc. Vždy rozhodují technické podmínky konkrétní tiskárny.',
      },
      {
        q: 'Potřebuji spadávku, když má leták bílé okraje?',
        a: 'Pokud nic nesahá až k okraji, spadávka se nevyužije, ale většina tiskáren ji v datech chce i tak. Nastavte ji, nic nezkazíte.',
      },
      {
        q: 'Jaký je rozdíl mezi spadávkou a bezpečným okrajem?',
        a: 'Spadávka je přesah za hranu formátu, který se odřízne. Bezpečný okraj je pruh uvnitř formátu (obvykle 3–5 mm), do kterého nedávejte texty ani loga, aby je řezačka neuřízla.',
      },
    ],
  },
  {
    slug: 'tiskova-data',
    title: 'Jak připravit tisková data: checklist PDF pro tiskárnu',
    short: 'Tisková data',
    description:
      'Kontrolní seznam pro přípravu tiskového PDF: formát a spadávka, CMYK, rozlišení 300 DPI, písma, černá barva, ořezové značky a PDF/X. Aby tiskárna data nevrátila.',
    lead: 'Deset bodů, které si projdu u každé zakázky, než data odešlu do tiskárny. Když je splníte, tiskárna nebude mít důvod data vracet.',
    service: 'dtp',
    published: '2026-10-02',
    minutes: 6,
    faq: [
      {
        q: 'V jakém formátu poslat data do tiskárny?',
        a: 'Nejbezpečnější je tiskové PDF, ideálně ve standardu PDF/X-1a nebo PDF/X-4, se spadávkou, vloženými písmy a barvami v CMYK.',
      },
      {
        q: 'Můžu poslat do tiskárny JPG nebo PNG?',
        a: 'U jednoduchých tiskovin to někdy jde, ale přicházíte o ostré texty a kontrolu nad barvami. PDF z grafického programu je vždy lepší volba.',
      },
      {
        q: 'Co je PDF/X?',
        a: 'Norma pro výměnu tiskových dat. Zaručuje, že PDF obsahuje všechno potřebné (písma, obrázky, barevný profil) a nic, co by tisku vadilo.',
      },
    ],
  },
  {
    slug: 'rgb-vs-cmyk',
    title: 'RGB vs. CMYK: proč tisk vypadá jinak než na monitoru',
    short: 'RGB vs. CMYK',
    description:
      'Rozdíl mezi barevnými prostory RGB a CMYK jednoduše. Proč jsou vytištěné barvy bledší než na obrazovce, kdy použít který režim a jak se vyhnout zklamání z tisku.',
    lead: 'Na monitoru zářivě tyrkysová, z tiskárny šedivě modrá. Proč se to děje a jak to ohlídat ještě před tiskem.',
    service: 'tiskoviny',
    published: '2026-10-02',
    minutes: 5,
    faq: [
      {
        q: 'Mám logo navrhovat v RGB, nebo v CMYK?',
        a: 'Logo by mělo mít definované obě verze, ideálně ještě přímou barvu Pantone. RGB se používá pro web a sociální sítě, CMYK pro běžný tisk.',
      },
      {
        q: 'Převede tiskárna RGB do CMYK sama?',
        a: 'Většinou ano, ale automaticky a bez vaší kontroly. Výsledek pak může být jiný, než čekáte. Lepší je převést data předem a zkontrolovat je.',
      },
      {
        q: 'Proč je černá v tisku šedivá?',
        a: 'Černá jen ze 100 % K je na velkých plochách mírně šedá. Pro sytější plochy se používá takzvaná bohatá černá s příměsí dalších barev. Malý text ale nechte jen ve 100 % K.',
      },
    ],
  },
  {
    slug: 'formaty-loga',
    title: 'Formáty loga: SVG, PDF, EPS, PNG nebo JPG? Kdy použít který',
    short: 'Formáty loga',
    description:
      'Jaké formáty loga byste měli dostat od grafika a kdy který použít: vektorové SVG, PDF a EPS pro tisk a web, PNG s průhledností pro dokumenty a sociální sítě.',
    lead: 'Grafik vám pošle složku s deseti soubory a vy nevíte, který dát do Wordu, který na web a který do tiskárny. Tady je přehled.',
    service: 'grafika',
    published: '2026-10-02',
    minutes: 4,
    faq: [
      {
        q: 'Jaký formát loga poslat do tiskárny?',
        a: 'Vektorový: PDF, SVG, EPS nebo AI. Vektor se dá zvětšit na jakoukoli velikost bez ztráty kvality, od vizitky po billboard.',
      },
      {
        q: 'Jaký formát loga dát na web?',
        a: 'Ideálně SVG, které je ostré na každém displeji a má malou velikost. Kde SVG nejde nahrát, použijte PNG s průhledným pozadím.',
      },
      {
        q: 'Mám logo jen jako JPG. Dá se to napravit?',
        a: 'Ano, logo se dá překreslit do vektoru. Výsledkem je ostré logo ve všech formátech, které se hodí pro tisk i web.',
      },
    ],
  },
];

export const articleBySlug = (slug: string) => ARTICLES.find((a) => a.slug === slug);
