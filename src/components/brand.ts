// Přechod značky: korálová → fialová → modrá → tyrkysová (přes fialovou, aby střed nezšedl)
export const brandColor = (k: number) => `hsl(${357 - 181 * k} ${88 - 30 * k}% ${70 - 12 * k}%)`;

export const BRAND_STOPS = [0, 0.33, 0.66, 1].map((k) => ({ offset: k, color: brandColor(k) }));
