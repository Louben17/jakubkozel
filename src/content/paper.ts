// Formáty papíru podle ISO 216 (A, B), ISO 269 (C, DL) a běžné tiskoviny
export type Format = { name: string; w: number; h: number; note?: string };

export const A_FORMATS: Format[] = [
  { name: 'A0', w: 841, h: 1189, note: 'velký plakát' },
  { name: 'A1', w: 594, h: 841, note: 'plakát' },
  { name: 'A2', w: 420, h: 594, note: 'plakát' },
  { name: 'A3', w: 297, h: 420, note: 'menší plakát, výkres' },
  { name: 'A4', w: 210, h: 297, note: 'kancelářský papír, leták' },
  { name: 'A5', w: 148, h: 210, note: 'leták, brožura' },
  { name: 'A6', w: 105, h: 148, note: 'pohlednice, flyer' },
  { name: 'A7', w: 74, h: 105, note: 'kupon, vstupenka' },
  { name: 'A8', w: 52, h: 74 },
];

export const B_FORMATS: Format[] = [
  { name: 'B0', w: 1000, h: 1414 },
  { name: 'B1', w: 707, h: 1000, note: 'plakát' },
  { name: 'B2', w: 500, h: 707, note: 'plakát' },
  { name: 'B3', w: 353, h: 500 },
  { name: 'B4', w: 250, h: 353 },
  { name: 'B5', w: 176, h: 250, note: 'kniha' },
  { name: 'B6', w: 125, h: 176, note: 'kniha (paperback)' },
];

export const C_FORMATS: Format[] = [
  { name: 'C4', w: 229, h: 324, note: 'obálka na nepřeložené A4' },
  { name: 'C5', w: 162, h: 229, note: 'obálka na A5 / A4 přeložené napůl' },
  { name: 'C6', w: 114, h: 162, note: 'obálka na A6 / A4 přeložené na čtvrtiny' },
  { name: 'DL', w: 110, h: 220, note: 'obálka na A4 přeložené na třetiny' },
];

export const OTHER_FORMATS: Format[] = [
  { name: 'DL (leták)', w: 99, h: 210, note: 'třetina A4, vejde se do obálky DL' },
  { name: 'Vizitka', w: 90, h: 50, note: 'nejběžnější v Česku' },
  { name: 'Vizitka EU', w: 85, h: 55 },
  { name: 'Platební karta', w: 85.6, h: 54 },
];

export const MM_PER_INCH = 25.4;

export const mmToPx = (mm: number, dpi: number) => Math.round((mm / MM_PER_INCH) * dpi);
export const pxToMm = (px: number, dpi: number) => (px / dpi) * MM_PER_INCH;

/** Číslo v českém zápisu (desetinná čárka, mezera mezi tisíci) */
export const num = (n: number, digits = 0) =>
  n.toLocaleString('cs-CZ', { minimumFractionDigits: 0, maximumFractionDigits: digits });
