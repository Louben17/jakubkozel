// Přechod značky: korálová → fialová → modrá → tyrkysová (přes fialovou, aby střed nezšedl)
export const brandColor = (k: number) => `hsl(${357 - 181 * k} ${88 - 30 * k}% ${70 - 12 * k}%)`;

export const BRAND_STOPS = [0, 0.33, 0.66, 1].map((k) => ({ offset: k, color: brandColor(k) }));

// Totéž v hex – pro generátor obrázků (next/og), který hsl() nezná
export const BRAND_STOPS_HEX = [{offset: 0, color: '#F66F76'}, {offset: 0.33, color: '#E665EC'}, {offset: 0.66, color: '#5C62E0'}, {offset: 1, color: '#56D2CA'}];
