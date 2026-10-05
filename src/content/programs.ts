// Grafické programy pro srovnání v poradně (ceny orientačně v USD bez DPH, stav říjen 2026)
export type Use = 'foto' | 'vektor' | 'sazba' | 'social' | 'ui' | 'kresba';
export type PriceType = 'free' | 'once' | 'sub';
export type Platform = 'win' | 'mac' | 'ipad' | 'linux' | 'web';

export type Program = {
  name: string;
  uses: Use[];
  price: string;
  priceTypes: PriceType[];
  ai: string;
  platforms: Platform[];
  best: string;
};

export const USES: { id: Use; label: string }[] = [
  { id: 'foto', label: 'Fotky' },
  { id: 'vektor', label: 'Loga a vektory' },
  { id: 'sazba', label: 'Sazba a tiskoviny' },
  { id: 'social', label: 'Sociální sítě' },
  { id: 'ui', label: 'Weby a aplikace' },
  { id: 'kresba', label: 'Kreslení' },
];

export const PRICE_TYPES: { id: PriceType; label: string }[] = [
  { id: 'free', label: 'Zdarma' },
  { id: 'once', label: 'Jednorázově' },
  { id: 'sub', label: 'Předplatné' },
];

export const PLATFORMS: { id: Platform; label: string }[] = [
  { id: 'win', label: 'Windows' },
  { id: 'mac', label: 'Mac' },
  { id: 'ipad', label: 'iPad' },
  { id: 'linux', label: 'Linux' },
  { id: 'web', label: 'Prohlížeč' },
];

export const PROGRAMS: Program[] = [
  {
    name: 'Adobe Creative Cloud',
    uses: ['foto', 'vektor', 'sazba', 'social', 'kresba'],
    price: 'Photoshop nebo Illustrator samostatně od $22.99/měs., celý balík Standard $54.99, Pro $69.99/měs. (roční závazek)',
    priceTypes: ['sub'],
    ai: 'Firefly: generativní vyplnění a rozšíření, odstranění objektů, text na vektor, přebarvení. Standard má 25 kreditů měsíčně, Pro 4 000.',
    platforms: ['win', 'mac', 'ipad', 'web'],
    best: 'Profesionálové, spolupráce s agenturami a tiskárnami. Průmyslový standard.',
  },
  {
    name: 'Affinity (od Canvy)',
    uses: ['foto', 'vektor', 'sazba'],
    price: 'Zdarma. AI nástroje jen s placenou Canvou.',
    priceTypes: ['free'],
    ai: 'S Canva Pro: generativní vyplnění a rozšíření, odstranění pozadí, zvětšení rozlišení.',
    platforms: ['win', 'mac'],
    best: 'Nejlepší profesionální program zdarma. Fotky, vektory i sazba v jedné aplikaci.',
  },
  {
    name: 'Canva',
    uses: ['social', 'sazba'],
    price: 'Zdarma, Pro kolem 2 600 Kč ročně',
    priceTypes: ['free', 'sub'],
    ai: 'Magic Studio: texty, obrázky, odstranění pozadí, změna formátu. Zdarma jen s malým měsíčním limitem.',
    platforms: ['web', 'win', 'mac', 'ipad'],
    best: 'Rychlé příspěvky, prezentace a jednoduché letáky ze šablon.',
  },
  {
    name: 'Figma',
    uses: ['ui', 'social'],
    price: 'Zdarma (omezeně), Professional $16/měs. za místo',
    priceTypes: ['free', 'sub'],
    ai: 'Figma AI a Make: návrhy obrazovek, prototypy, úpravy obrázků a textů. Platí se AI kredity.',
    platforms: ['web', 'win', 'mac'],
    best: 'Návrhy webů a aplikací, spolupráce v týmu.',
  },
  {
    name: 'CorelDRAW Graphics Suite',
    uses: ['vektor', 'sazba'],
    price: '$549 jednorázově, nebo $269 ročně',
    priceTypes: ['once', 'sub'],
    ai: 'Generování a úprava obrázků podle zadání, odstranění pozadí. 2 000 kreditů (předplatitelé měsíčně, jednorázová licence jednou).',
    platforms: ['win', 'mac'],
    best: 'Reklamní výroba, polepy, řezací plotry. V Česku stále rozšířený.',
  },
  {
    name: 'Pixelmator Pro',
    uses: ['foto', 'vektor'],
    price: '$49.99 jednorázově, nebo v Apple Creator Studio za $12.99/měs.',
    priceTypes: ['once', 'sub'],
    ai: 'Strojové vylepšení a zvětšení fotek, odstranění pozadí, chytrý výběr.',
    platforms: ['mac', 'ipad'],
    best: 'Uživatelé Macu, kteří chtějí levnou a rychlou náhradu Photoshopu.',
  },
  {
    name: 'Photopea',
    uses: ['foto', 'social'],
    price: 'Zdarma s reklamou, Premium $5/měs.',
    priceTypes: ['free', 'sub'],
    ai: 'S Premium: Magic Replace, generování obrázků, odstranění pozadí.',
    platforms: ['web'],
    best: 'Rychlá úprava v prohlížeči, otevře i soubory PSD z Photoshopu.',
  },
  {
    name: 'GIMP',
    uses: ['foto'],
    price: 'Zdarma (open source)',
    priceTypes: ['free'],
    ai: 'Bez vestavěné AI, jen doplňky třetích stran.',
    platforms: ['win', 'mac', 'linux'],
    best: 'Úpravy fotek zdarma a bez účtu. Verze 3.2 má nedestruktivní filtry.',
  },
  {
    name: 'Inkscape',
    uses: ['vektor'],
    price: 'Zdarma (open source)',
    priceTypes: ['free'],
    ai: 'Bez AI.',
    platforms: ['win', 'mac', 'linux'],
    best: 'Vektorová grafika a SVG zdarma, ikony, jednoduchá loga.',
  },
  {
    name: 'Krita',
    uses: ['kresba'],
    price: 'Zdarma (open source)',
    priceTypes: ['free'],
    ai: 'Bez generativní AI.',
    platforms: ['win', 'mac', 'linux'],
    best: 'Digitální malba a ilustrace na počítači s tabletem.',
  },
  {
    name: 'Procreate',
    uses: ['kresba'],
    price: '$12.99 jednorázově',
    priceTypes: ['once'],
    ai: 'Záměrně bez generativní AI.',
    platforms: ['ipad'],
    best: 'Kreslení a ilustrace na iPadu s Apple Pencil.',
  },
];
