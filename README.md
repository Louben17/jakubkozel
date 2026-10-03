# jakubkozel.cz

Osobní web Jakuba Kozla – grafika, DTP, stavba webů a tiskoviny.
Next.js 15 (App Router) + framer-motion, nasazeno na Vercelu (push do `main` = produkce).

## Vývoj

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produkční build
```

## Struktura

- `src/app/` – stránky (`/`, `/grafika`, `/dtp`, `/webdesign`, `/tiskoviny`, `/poradna`, `/o-mne`, `/kontakt`),
  API pro poptávku (`api/poptavka`), SEO (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`), styly
- `src/components/services.tsx` – obsah oborů (texty, dlaždice, galerie, FAQ) na jednom místě
- `src/components/home/` – sekce úvodní stránky a animované ilustrace
- `src/components/capacityData.ts` – **aktuální vytíženost** (`load` v %, `from` = od kdy můžu začít); ukazatel je v tmavé výzvě na konci stránek a na /kontakt
- `public/portfolio/` – fotky do galerií (WebP)
- `src/content/articles.ts` – seznam článků poradny (`/poradna/*`): názvy, popisy, obor, FAQ
- `src/content/poradna/` – těla článků; nový článek = záznam v `articles.ts` + soubor zde + řádek v `poradna/index.ts`

## Proměnné prostředí

Nastavují se ve Vercelu (lokálně v `.env.local`, který se necommituje):

- `RESEND_API_KEY` – odesílání poptávek přes Resend (povinné)
- `RESEND_FROM` – odesílatel, výchozí `onboarding@resend.dev` (po ověření domény např. `Poptávka <poptavka@jakubkozel.cz>`)
- `CONTACT_TO` – kam chodí poptávky, výchozí `jakubkozel@seznam.cz`
