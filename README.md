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

- `src/app/` – stránky (`/`, `/grafika`, `/dtp`, `/webdesign`, `/tiskoviny`, `/o-mne`, `/kontakt`),
  API pro poptávku (`api/poptavka`), SEO (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`), styly
- `src/components/services.tsx` – obsah oborů (texty, dlaždice, galerie, FAQ) na jednom místě
- `src/components/home/` – sekce úvodní stránky a animované ilustrace
- `public/portfolio/` – fotky do galerií (WebP)

## Proměnné prostředí

Nastavují se ve Vercelu (lokálně v `.env.local`, který se necommituje):

- `RESEND_API_KEY` – odesílání poptávek přes Resend (povinné)
- `RESEND_FROM` – odesílatel, výchozí `onboarding@resend.dev` (po ověření domény např. `Poptávka <poptavka@jakubkozel.cz>`)
- `CONTACT_TO` – kam chodí poptávky, výchozí `jakubkozel@seznam.cz`
