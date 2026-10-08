---
name: Jakub Kozel
description: Osobní web grafika – grafika, DTP, weby a tiskoviny jako živý, barevný papír
colors:
  ink: "#1d1d24"
  ink-soft: "#5d6070"
  paper: "#ffffff"
  paper-mist: "#F4F4F8"
  hairline: "#ececf0"
  coral: "#FF6B73"
  teal: "#4ECDC4"
  gradient-coral: "#F66F76"
  gradient-orchid: "#E665EC"
  gradient-indigo: "#5C62E0"
  gradient-aqua: "#56D2CA"
  grafika-paper: "#FFE3E0"
  grafika-accent: "#FF6B73"
  grafika-ink: "#B8313B"
  dtp-paper: "#E4E8FA"
  dtp-accent: "#6C7BD0"
  dtp-ink: "#4957C0"
  dtp-button: "#8591DE"
  web-paper: "#DDF5EC"
  web-accent: "#2BB39A"
  web-ink: "#1D7968"
  print-paper: "#FFEBD6"
  print-accent: "#F29E4C"
  print-ink: "#A3570C"
  about-accent: "#B872D6"
  poradna-accent: "#E58AC8"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.6rem, 8vw, 6.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.2rem, 6vw, 4.2rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.075rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.18em"
rounded:
  pill: "999px"
  slab-xl: "32px"
  slab-lg: "28px"
  slab: "24px"
  inset: "16px"
spacing:
  gutter: "16px"
  gap: "1rem"
  section: "6rem"
  container: "1200px"
  reading: "760px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.25rem"
  button-service:
    backgroundColor: "{colors.grafika-accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.4rem"
  button-ghost:
    backgroundColor: "#ffffffb3"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.4rem"
  chip:
    backgroundColor: "#ffffff99"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.9rem"
  card-service:
    backgroundColor: "{colors.print-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.slab-xl}"
    padding: "clamp(1.5rem, 4vw, 3.5rem)"
  card-tile:
    backgroundColor: "{colors.paper-mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.slab}"
    padding: "1.75rem"
  input-dark:
    backgroundColor: "#ffffff0f"
    textColor: "{colors.paper}"
    rounded: "{rounded.inset}"
    padding: "0.95rem 1.1rem"
  panel-finale:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.slab}"
    padding: "7rem 16px 8rem"
---

# Design System: Jakub Kozel

## Overview

**Creative North Star: "Živý papír"**

Web se chová jako papír, který ožívá pod rukama grafika. Podpis se na úvodu kreslí tahem pera, karty oborů se při scrollu vrší jako archy na stole, skládačka DL se v Poradně skutečně složí a ořezové značky rámují úvod jako tiskový arch. Pohyb nikdy není ozdoba pro sebe. Vždy předvádí něco, co se s papírem v tiskárně opravdu děje.

Nálada je **hravá** a komponenty **sebevědomé a výrazné**. Velké, těžké nadpisy v Inter Extra Bold se staženými mezerami, plné pastelové plochy oborů, tlačítka jako barevné pilulky a každá stránka končí tmavou „finální“ deskou. Bílý papír nese obsah, barva patří oborům a přechod značky (korálová, orchidejová, indigová, tyrkysová) je podpis. Objevuje se střídmě, ale vždy viditelně.

Hustota je velkorysá: široké sekce, hodně vzduchu nad nadpisy, obsah v kontejneru 1200 px. V Poradně se tempo zklidní do čtecího sloupce 760 px s tabulkami a interaktivními nástroji.

**Key Characteristics:**
- Ručně psaný podpis jako logo a hlavní moment pohybu (kreslí se jednou za návštěvu)
- Čtyři obory = čtyři barevné papíry (pastelová plocha, sytý akcent, tmavý inkoust)
- Přechod značky jen pro podpis a jednu zdůrazněnou frázi
- Pilulková tlačítka, zaoblené desky 24–32 px
- Tmavá závěrečná deska s výzvou na konci každé stránky
- Česká typografie: vlna, tabulková čísla, správné uvozovky

## Colors

Bílý papír a grafitový inkoust jako základ, čtyři pastelové „papíry“ oborů a jeden živý přechod značky.

### Primary
- **Korálový inkoust** (coral): hlavní akcent celé značky. Fokus prstence, kurzor ve formulářích, aktivní tečky, barva oboru Grafika. Jako první stop přechodu nese osobní teplo podpisu.

### Secondary
- **Přechod podpisu** (gradient-coral → gradient-orchid → gradient-indigo → gradient-aqua): podpis, logo, jedna zdůrazněná fráze v nadpisu (např. „Pojďme ho udělat.“), velké číslo „10+“ a kód 404. Barvy se v kódu počítají v HSL (`brandColor()` v `src/components/brand.ts`, CSS `--brand-gradient`). Přechod jde přes fialovou, aby střed nezšedl.
- **Tyrkysová** (teal): druhý akcent k pohybu a hoveru na tmavých plochách.

### Tertiary
Každý obor má trojici papír / akcent / inkoust:
- **Grafika** – Růžový papír (grafika-paper), Korál (grafika-accent), Malinový inkoust (grafika-ink).
- **DTP a sazba** – Levandulový papír (dtp-paper), Barvínek (dtp-accent), Indigový inkoust (dtp-ink); tlačítko světlejší Barvínek (dtp-button) kvůli kontrastu tmavého textu.
- **Stavba webů** – Mátový papír (web-paper), Nefrit (web-accent), Lahvově zelený inkoust (web-ink).
- **Tiskoviny** – Meruňkový papír (print-paper), Pomeranč (print-accent), Karamelový inkoust (print-ink).
- **O mně** – Orchidej (about-accent), **Poradna** – Růžová pivoňka (poradna-accent): jen podtržení v menu.

### Neutral
- **Grafitová noc** (ink): text, tmavé desky (kontakt, O mně, závěrečná výzva), primární tlačítko.
- **Břidlicová šeď** (ink-soft): sekundární text, popisky, štítky nad sekcemi.
- **Bílý papír** (paper): pozadí všech stránek.
- **Mlhový papír** (paper-mist): neutrální karty a dlaždice v klidu, FAQ, karty článků.
- **Vlasová linka** (hairline): oddělovače, rámečky tabulek.

### Named Rules
**The Four Papers Rule.** Každá plocha patří jednomu oboru a používá jen jeho trojici papír, akcent a inkoust. Barvy dvou oborů se v jedné kartě nikdy nemíchají. Neutrální obsah (Poradna, FAQ) stojí na Mlhovém papíru a barvu oboru dostane až při hoveru.

**The Signature Gradient Rule.** Přechod značky je podpis, ne výplň. Na jedné obrazovce se objeví nejvýš jednou nebo dvakrát: logo nebo podpis a jedna fráze či číslo. Nikdy ne na odstavcovém textu, tlačítku ani pozadí karty.

**The Ink-On-Pastel Rule.** Text na pastelovém papíře je vždy Grafitová noc nebo inkoust oboru, nikdy šedá. Kontrast aspoň 4,5:1.

## Typography

**Display Font:** Inter (s fallbackem -apple-system, BlinkMacSystemFont, sans-serif)
**Body Font:** Inter
**Logo:** ručně psaný podpis jako SVG cesty (není to font)

**Character:** Jedna rodina, velký skok v síle. Extra Bold nadpisy se staženými mezerami působí jako sebevědomé titulky plakátu, tenká kurzíva Light (300) v pásu služeb a v rotujícím slovesu dodává hravost. Latin-ext pro českou diakritiku.

### Hierarchy
- **Display** (800, clamp(2.6rem, 8vw, 6.5rem), 1.02): závěrečná výzva, titulek kontaktu a O mně, často po písmenech animovaný.
- **Headline** (800, clamp(2.2rem, 6vw, 4.2rem), 1.02): nadpisy sekcí („Čtyři obory, jeden rukopis.“). Titulky oborů až clamp(2.8rem, 7vw, 5.2rem), článků clamp(2rem, 4vw, 3.3rem).
- **Title** (700–800, 1.1–1.35rem, 1.2): dlaždice, karty článků, FAQ otázky.
- **Body** (400, 1rem; v článcích 1.075rem / 1.75): sloupec článku nejvýš 760 px, odstavce s `text-wrap: pretty`.
- **Label** (700, 0.78rem, letter-spacing 0.18em, VERSALKY): štítky nad sekcemi a sloupce tabulek.

### Named Rules
**The Heavy Headline Rule.** Nadpisy jsou vždy 800 se staženým prostrkáním (-0.03 až -0.05em) a `text-wrap: balance`. Střední tloušťky do nadpisů nepatří, hierarchii nese velikost.

**The Czech Typesetter Rule.** Jednopísmenné předložky a spojky se nikdy nezalomí na konec řádku (komponenta `Vlna`). Čísla v tabulkách a měřidlech jsou tabulková (`font-variant-numeric: tabular-nums`), rozměry se píší s mezerou a znakem × („99 × 210 mm“).

## Layout

Kontejner 1200 px se 16px okraji, sekce oddělené 6–7rem vzduchu. Obory a karty v mřížce 3 → 2 → 1 sloupec (zlomy kolem 860 px a 560 px). Karty článků používají `auto-fit` s šířkou 280–376 px a centrují se, takže jedna nebo dvě karty nenechají prázdný sloupec.

Úvod je přes celou výšku (100svh) s ořezovými značkami v rozích, pod ním nekonečný pás služeb a „stoh“ čtyř karet oborů, které se při scrollu lepí a vrší (sticky). Podstránky oborů opakují kartu oboru jako hero (text vlevo, ilustrace vpravo, na mobilu ilustrace nahoře). Články mají hero kartu s fotkou 3:2 a čtecí sloupec 760 px. Fotky v textu na širokých obrazovkách lehce přesahují sloupec.

Tmavé desky (kontakt, O mně, závěrečná výzva) jsou odsazené 8–16 px od okrajů okna a mají velké zaoblení. Působí jako list položený na stránce.

## Elevation & Depth

Systém je převážně plochý a hloubku nese tónování (pastelový papír na bílém, Mlhový papír, tmavá deska). Stíny jsou měkké, s posunem dolů a záporným rozptylem. Objevují se jen jako reakce (hover, odscrollovaná lišta) nebo u vrstveného stohu.

### Shadow Vocabulary
- **Zvednutí při hoveru** (`box-shadow: 0 10px 24px -10px rgba(0,0,0,0.35)`): tlačítka oborů spolu s posunem o -2 px.
- **Plovoucí lišta** (`box-shadow: 0 10px 30px -18px rgba(30,30,50,0.35)`): menu po odscrollování, s rozostřením pozadí 18 px.
- **Stoh archů** (`box-shadow: 0 -10px 40px -20px rgba(30,30,50,0.25)`): karty oborů ve stohu, stín míří nahoru na předchozí arch.
- **Plovoucí dialog** (`box-shadow: 0 24px 60px -24px rgba(30,30,50,0.45)`): cookie lišta.

### Named Rules
**The Flat-Until-Touched Rule.** Plochy jsou v klidu ploché. Stín nebo posun přichází až s hoverem, scrollem nebo vrstvením. Nikdy barevná záře bez posunu.

## Shapes

Dvojí tvarosloví: **pilulky** pro vše, na co se kliká (tlačítka, čipy, filtry, odkazy v menu, 999 px), a **desky** pro obsah (karty oborů 32 px, panely nástrojů 28 px, dlaždice, karty a FAQ 22–24 px, fotky 18–22 px, pole formuláře 16 px). Kruhy patří tečkám oborů, šipkám v kartách a uzlům časové osy. Ostré rohy se nepoužívají kromě tiskových výkresů (tabulky, schémata), kde jde o přesnost.

## Components

### Buttons
Sebevědomé barevné pilulky, vždy se šipkou, která při hoveru poodjede.
- **Shape:** pilulka (999px)
- **Primary:** Grafitová noc s bílým textem, 600, padding 0.7rem 1.25rem (Kontakt v menu, „Odeslat poptávku“ v bílé inverzi na tmavé desce).
- **Service:** plná barva akcentu oboru s tmavým textem, padding 0.8rem 1.4rem. Hover: posun -2 px a měkký stín.
- **Ghost:** poloprůhledná bílá (70 %) na pastelovém papíru. Na tmavé desce tenký bílý obrys.
- **Magnetic (závěrečná výzva):** velké pilulky (1.1rem 2rem), které se lehce přisají ke kurzoru.

### Chips
- **Style:** pilulky 0.4rem 0.9rem s tenkým obrysem v akcentu oboru na poloprůhledné bílé (obory) nebo s tečkou oboru (formulář, kontakty).
- **State:** vybraný čip ve formuláři se vyplní akcentem a ztuční. Segmentové filtry v Poradně mají vybranou položku v Grafitové noci.

### Cards / Containers
- **Corner Style:** 24 px (dlaždice, karty článků), 32 px (karty oborů, hero článku)
- **Background:** Mlhový papír v klidu, pastelový papír oboru při hoveru nebo jako celá plocha karty oboru
- **Shadow Strategy:** viz Flat-Until-Touched. Při hoveru posun -4 px.
- **Internal Padding:** 1.75rem (dlaždice, karty), clamp(1.5rem, 4vw, 3.5rem) (karty oborů)

### Inputs / Fields
- **Style:** na tmavé desce poloprůhledná výplň (6 % bílé), obrys 14 % bílé, zaoblení 16 px, zástupný text 50 % bílé.
- **Focus:** obrys a výplň se zvýrazní, kurzor korálový.
- **Error:** korálový panel s jasným popisem problému.

### Navigation
- **Style:** pilulková lišta s logem (podpis) vlevo, odkazy oborů uprostřed a tmavým tlačítkem Kontakt vpravo. Aktivní odkaz má tučnější písmo a pod sebou tečku v barvě oboru.
- **Scroll:** po 24 px dostane mléčné sklo (bílá 80 %, rozostření 18 px), při scrollu dolů se schová a nahoru vrátí. Na tmavých stránkách je do odscrollování bílá.
- **Mobile:** burger otevře celoobrazovkové tmavé menu kruhovým odkrytím z rohu, odkazy obarvené podél přechodu značky.

### Signature: Podpis
Ručně psaný „jakub kozel“ jako SVG cesty vyplněné přechodem značky. Kreslí se čistým CSS (`stroke-dashoffset`) jednou za návštěvu (sessionStorage, třída `sig-seen`). Při omezeném pohybu se zobrazí rovnou hotový.

### Signature: Stoh oborů a závěrečná deska
Čtyři karty oborů se při scrollu lepí a vrší jako archy. Každá stránka končí tmavou deskou „Máte projekt? Pojďme ho udělat.“ s písmeny, která naskakují, ukazatelem vytíženosti (lišta z 10 dílků v přechodu značky) a magnetickými tlačítky kontaktu.

### Signature: Interaktivní nástroje Poradny
Kalkulačka px ↔ mm, 3D skládačka DL a průvodce výběrem programu: pastelová deska oboru (28 px), segmentové přepínače v pilulce a bílé výsledkové plochy s tabulkovými čísly.

## Do's and Don'ts

### Do:
- **Do** dávej každé nové ploše jeden obor a jeho trojici papír / akcent / inkoust (The Four Papers Rule).
- **Do** používej nadpisy 800 s prostrkáním -0.03 až -0.05em a `text-wrap: balance`.
- **Do** dělej klikací prvky jako pilulky (999px) a obsahové kontejnery jako desky (24–32px).
- **Do** animuj jako papír: kreslení, skládání, vrstvení, ořez. Easing `cubic-bezier(0.22, 1, 0.36, 1)`, vždy s variantou pro omezený pohyb.
- **Do** končí stránku tmavou deskou s výzvou a kontaktem.
- **Do** dodržuj českou sazbu: vlna, tabulková čísla, „99 × 210 mm“, uvozovky „…“.

### Don't:
- **Don't** používej přechod značky na odstavcích, tlačítkách nebo pozadích karet. Patří jen podpisu a jedné frázi.
- **Don't** dávej šedý text na pastelový papír. Použij inkoust oboru nebo Grafitovou noc.
- **Don't** míchej barvy dvou oborů v jedné kartě.
- **Don't** přidávej stíny bez posunu ani barevné záře. Hloubka vzniká tónem a reakcí na dotyk.
- **Don't** přehrávej kreslení podpisu znovu během jedné návštěvy.
- **Don't** používej ostré rohy mimo tiskové výkresy a tabulky.
