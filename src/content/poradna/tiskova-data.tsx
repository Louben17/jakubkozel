import type { ReactNode } from 'react';
import Link from 'next/link';
import { Callout } from './parts';

const CHECKLIST: { title: string; body: ReactNode }[] = [
  {
    title: 'Správný formát a počet stran',
    body: (
      <>
        Dokument má čistý formát tiskoviny (třeba A5 = 148 × 210 mm), ne A4 se zmenšeným obsahem. U brožur sešitých
        skobami musí být počet stran dělitelný čtyřmi. Rozměry najdete v{' '}
        <Link href="/poradna/formaty-papiru">tabulce formátů papíru</Link>.
      </>
    ),
  },
  {
    title: 'Spadávka',
    body: (
      <>
        Všechno, co sahá do kraje, přesahuje formát o spadávku, obvykle 3 mm. Podrobně v článku{' '}
        <Link href="/poradna/spadavka">Spadávka</Link>.
      </>
    ),
  },
  {
    title: 'Bezpečný okraj',
    body: 'Texty, logo a důležité prvky jsou aspoň 3–5 mm od hrany ořezu. U knih a silnějších brožur počítejte i s vazbou: vnitřní okraj musí být větší.',
  },
  {
    title: 'Barvy v CMYK',
    body: (
      <>
        Obrázky i vektory jsou převedené do CMYK s profilem, který tiskárna doporučuje (např. Coated FOGRA39 nebo PSO
        Coated v3 pro křídový papír). Proč na tom záleží, vysvětluji v článku{' '}
        <Link href="/poradna/rgb-vs-cmyk">RGB vs. CMYK</Link>.
      </>
    ),
  },
  {
    title: 'Rozlišení obrázků 300 DPI',
    body: (
      <>
        Ve výsledné velikosti, ne v původní. Obrázek stažený z webu má většinou málo pixelů a v tisku bude rozmazaný.
        Ověřit si to můžete v <Link href="/poradna/prevod-px-na-mm">kalkulačce px ↔ mm</Link>.
      </>
    ),
  },
  {
    title: 'Písma vložená nebo převedená do křivek',
    body: 'PDF musí obsahovat všechna použitá písma. Jinak je tiskárna nahradí jiným a sazba se rozpadne. U log a krátkých nadpisů je bezpečné převést písmo do křivek.',
  },
  {
    title: 'Černá barva',
    body: 'Drobný text jen ve 100 % K (černá bez dalších barev), jinak se při nepřesném soutisku rozostří. Velké černé plochy můžou mít sytější „bohatou černou“, například C 50 M 40 Y 40 K 100. Celkové krytí by nemělo překročit limit tiskárny, obvykle kolem 300 %.',
  },
  {
    title: 'Tenké linky a malé písmo',
    body: 'Linky tenčí než 0,25 bodu (asi 0,1 mm) se v tisku můžou ztratit. Text menší než 6 bodů je špatně čitelný, zvlášť v negativu (světlý text na tmavém podkladu).',
  },
  {
    title: 'Přetisk a bílá barva',
    body: 'Zkontrolujte, že bílé objekty nemají nastavený přetisk (overprint). V tisku by úplně zmizely. Náhled přetisku umí Acrobat i InDesign.',
  },
  {
    title: 'Export do PDF/X',
    body: 'Tiskové PDF exportujte ve standardu PDF/X-1a nebo PDF/X-4 (podle tiskárny), s ořezovými značkami a spadávkou. Každá tiskovina v samostatném souboru, stránky jednotlivě, ne jako dvoustrany.',
  },
];

export default function TiskovaData() {
  return (
    <>
      <p>
        Tiskárna vám data skoro vždy zkontroluje (preflight) a s chybou je vrátí. To ale znamená zdržení a někdy
        i příplatek za opravu. Horší je, když se chyba nenajde a projeví se až na hotových výtiscích. Následující
        seznam pokrývá naprostou většinu problémů, které v praxi vidím.
      </p>

      <h2 id="checklist">Checklist tiskových dat</h2>
      <ol className="checklist">
        {CHECKLIST.map((c) => (
          <li key={c.title}>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </li>
        ))}
      </ol>

      <Callout title="Než odešlete objednávku">
        <p>
          Otevřete výsledné PDF v Acrobatu a projděte ho při zvětšení 100 %. Zkontrolujte, že se nic nepřesunulo,
          v textu nechybí písmena a obrázky jsou ostré. Hodně tiskáren nabízí i bezplatnou kontrolu dat nebo náhled
          (nátisk) před tiskem. U větších nákladů ho určitě využijte.
        </p>
      </Callout>

      <h2 id="programy">V čem data připravit</h2>
      <p>
        Profesionální tisková data vznikají v programech pro sazbu a grafiku: Adobe InDesign, Illustrator nebo Affinity.
        Jednoduchý leták se dá zvládnout i v Canvě, pokud hlídáte spadávku a stáhnete PDF pro tisk. Word,
        PowerPoint a podobné kancelářské programy pro tisk vhodné nejsou: pracují v RGB, neumí spadávku a písma
        nemusí správně vložit.
      </p>
    </>
  );
}
