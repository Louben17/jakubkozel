# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Malé firmy a živnostníci** z celé ČR, kteří nemají vlastního grafika. Potřebují logo, vizitky, letáky, web nebo jinou tiskovinu, často poprvé. Na web přicházejí z vyhledávání (Google, Seznam), hlavně přes články v Poradně, a rozhodují se, komu zakázku svěří.
- **Agentury a tiskárny**, které hledají spolehlivého subdodavatele grafiky a DTP. Rozhoduje pro ně, že data projdou kontrolou tiskárny napoprvé a že domluva je rychlá.

Spolupráce probíhá na dálku po celé ČR. Konkrétní město se zatím neuvádí.

## Product Purpose

Osobní web grafického designéra Jakuba Kozla (přes 10 let praxe). Prezentuje čtyři obory (grafika a vizuální identita, DTP a sazba, stavba webů, tiskoviny) a vede k nezávazné poptávce přes formulář, e-mail nebo telefon. Úspěch = poptávky od nových klientů, ideálně získaných organicky z vyhledávání.

## Positioning

- **Precizní sazba a tisková data:** typografie a data připravená tak, aby je tiskárna nevrátila. Praktické know-how ukazuje Poradna (spadávka, gramáž, formáty, tisková data).
- **Osobní přístup:** klient komunikuje přímo s grafikem, který zakázku dělá, bez prostředníků a přeposílání.

## Operating Context

- Návštěvník přichází nejčastěji z vyhledávání na konkrétní dotaz (např. „DL rozměry“, „A4 v pixelech“), dostane odpověď v článku a od něj pokračuje na obor nebo poptávku.
- Poptávkový formulář (`/kontakt#poptavka`) odesílá přes Resend na `jakubkozel@seznam.cz`. Obsahuje obor, jméno, e-mail, telefon, zprávu, rozpočet a termín.
- Ukazatel vytíženosti (`src/components/capacityData.ts`) veřejně ukazuje aktuální kapacitu a termín volna. Mění ho ručně Jakub, zastaralý údaj je horší než žádný.
- Jakub sleduje dotazy v Google Search Console a Seznam Webmasteru a podle nich se doplňuje obsah Poradny.

## Capabilities and Constraints

- Stránky: úvod, 4 obory (`/grafika`, `/dtp`, `/webdesign`, `/tiskoviny`), Poradna (`/poradna`, články s interaktivními prvky), O mně, Kontakt, 404.
- Obsah oborů na jednom místě v `src/components/services.tsx`, články v `src/content/`.
- Next.js 15 na Vercelu, push do `main` = produkce. Klíč Resend jen v proměnných prostředí, nikdy v kódu ani ve výstupu.
- Google Analytics (GA4) se načte až po souhlasu v cookie liště.
- Podpis v úvodu se kreslí jen jednou za návštěvu (výslovné přání).
- **Neurčeno:** ceník a orientační ceny, lhůty dodání a odpovědi, město nebo region. Nevymýšlet, dodá je Jakub.

## Brand Commitments

- Jméno **Jakub Kozel**, logo = ručně psaný podpis (`public/logo.svg`), portrét `public/jakub-kozel.webp`.
- Hlas: česky, první osoba jednotného čísla, vykání, věcně a srozumitelně, bez marketingových superlativů a bez slibů, které Jakub nepotvrdil.
- Česká typografie je součást značky: jednopísmenné předložky se nezalamují na konec řádku (komponenta `Vlna`), správné uvozovky, pomlčky a mezery v číslech.

## Evidence on Hand

- Fotky v galeriích oborů (`public/portfolio/`) a v Poradně (`public/poradna/`) jsou **AI ilustrace**, ne skutečné zakázky.
- **Chybí:** reálné reference, případové studie, citace klientů, loga klientů a čísla o výsledcích. Nic z toho nevymýšlet. Až je Jakub dodá, mají přednost před ilustracemi.
- Fakta, která platí: přes 10 let praxe, nástroje Photoshop, Illustrator, InDesign, Figma.

## Product Principles

1. **Hodnota dřív než prodej:** návštěvník dostane úplnou odpověď (tabulky, kalkulačky, ukázky) a teprve pak nabídku spolupráce.
2. **Precizní v detailu:** web sám dokazuje řemeslo, takže typografie, data a čísla musí být přesná a ověřená.
3. **Pravdivost:** žádné vymyšlené reference, ceny ani termíny. Volatilní údaje (ceny programů apod.) s datem „stav k …“.
4. **Jeden člověk, jasný kontakt:** cesta k poptávce je vždy krátká a přímá.

## Accessibility & Inclusion

- Kontrast textu aspoň 4,5:1 (WCAG AA), včetně tmavých sekcí a formuláře.
- Respektovat systémové „omezit pohyb“ (animace se vypnou nebo zjednoduší).
- Dotykové cíle na mobilu dostatečně velké, ovládání z klávesnice s viditelným fokusem.
