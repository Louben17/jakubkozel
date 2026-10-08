import Link from 'next/link';
import { Callout, Photo } from './parts';

const USES: { use: string; weight: string; paper: string }[] = [
  { use: 'Kancelářský tisk, hlavičkový papír', weight: '80–100 g/m²', paper: 'ofsetový (nenatíraný)' },
  { use: 'Letáky', weight: '115–170 g/m²', paper: 'křídový matný nebo lesklý' },
  { use: 'Skládačky (zalomené letáky)', weight: '135–170 g/m²', paper: 'křídový, od 170 g/m² bigovat' },
  { use: 'Plakáty do interiéru', weight: '135–170 g/m²', paper: 'křídový, často lesklý' },
  { use: 'Brožury a katalogy (vnitřek)', weight: '115–150 g/m²', paper: 'křídový matný' },
  { use: 'Brožury a katalogy (obálka)', weight: '250–300 g/m²', paper: 'křídový, ideálně s laminací' },
  { use: 'Knihy (vnitřek)', weight: '80–100 g/m²', paper: 'ofsetový nebo objemový' },
  { use: 'Pohlednice, pozvánky', weight: '300–350 g/m²', paper: 'křídový nebo strukturovaný' },
  { use: 'Vizitky', weight: '300–400 g/m²', paper: 'křídový matný, přírodní, designový' },
  { use: 'Krabičky, visačky, obaly', weight: '300–400 g/m²', paper: 'kartón' },
];

export default function GramazPapiru() {
  return (
    <>
      <h2 id="co-je">Co je gramáž</h2>
      <p>
        Gramáž udává, kolik váží jeden metr čtvereční papíru, a zapisuje se v g/m². Běžný kancelářský
        papír má 80 g/m². List A4 je šestnáctina metru čtverečního, takže váží zhruba 5 gramů. Vizitka na papíře
        350 g/m² je na stejné ploše víc než čtyřikrát těžší.
      </p>
      <p>
        Gramáž ale není totéž co tloušťka. Papíry se stejnou gramáží můžou být různě silné. Nenatíraný (ofsetový)
        papír je nadýchanější a působí silněji než hladký křídový. Takzvané <strong>objemové papíry</strong> jsou
        vyrobené tak, aby byly při stejné hmotnosti ještě tlustší. Proto se používají u knih, které pak působí
        objemněji a přitom nejsou těžké.
      </p>

      <h2 id="tabulka">Jakou gramáž na co</h2>
      <div className="table-wrap">
        <table className="fmt-table">
          <thead>
            <tr>
              <th scope="col">Tiskovina</th>
              <th scope="col">Gramáž</th>
              <th scope="col">Papír</th>
            </tr>
          </thead>
          <tbody>
            {USES.map((u) => (
              <tr key={u.use}>
                <th scope="row">{u.use}</th>
                <td style={{ whiteSpace: 'nowrap' }}>{u.weight}</td>
                <td>{u.paper}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Hodnoty berte jako výchozí bod. Leták, který se rozdává na ulici a hned skončí v koši, klidně zvládne 115 g/m².
        Leták, který má působit draze a zůstat na stole, si zaslouží 170 g/m² nebo víc. Rozměry vizitek a spadávku
        najdete v článku <Link href="/poradna/rozmer-vizitky">Rozměr vizitky</Link>.
      </p>

      <h2 id="druhy">Druhy papíru</h2>
      <ul>
        <li>
          <strong>Křídový (natíraný) papír</strong> má hladký povrch s nátěrem. Barvy na něm zůstávají syté a fotky
          ostré, proto je nejčastější volbou pro letáky, brožury a katalogy. Vyrábí se v několika úpravách:
          <ul>
            <li>
              <strong>lesklý:</strong> nejsytější barvy, ale odlesky, hodí se pro fotky a plakáty,
            </li>
            <li>
              <strong>matný:</strong> elegantní, dobře čitelný, bez odlesků,
            </li>
            <li>
              <strong>hedvábný (silk):</strong> kompromis mezi oběma.
            </li>
          </ul>
        </li>
        <li>
          <strong>Ofsetový (nenatíraný) papír</strong> je ten „obyčejný“. Je přirozeně matný, dobře se na něj píše
          a nelesknou se na něm písmena. Proto se používá pro knihy, hlavičkové papíry, formuláře a bloky. Barvy na
          něm vychází tlumenější, protože papír inkoust víc vsákne.
        </li>
        <li>
          <strong>Recyklovaný papír</strong> má jemně šedý nebo béžový tón a přírodní charakter. Dobře podpoří
          ekologickou značku, jen počítejte s méně zářivými barvami.
        </li>
        <li>
          <strong>Designové papíry</strong> mají strukturu plátna, ručního papíru nebo metalický povrch. Jsou dražší,
          ale vizitka nebo pozvánka na nich zaujme na dotek.
        </li>
      </ul>

      <Photo
        src="/poradna/gramaz-papiru-2.webp"
        alt="Detail vzorků papíru vedle sebe: lesklý a matný křídový, nenatíraný ofsetový a strukturovaný designový papír"
        caption="Stejný motiv na lesklém, matném, nenatíraném a strukturovaném papíru."
      />

      <Callout title="Lesk, nebo mat?">
        <p>
          Lesklý papír zvýrazní fotky, ale na světle se odráží a text na něm se čte hůř. Matný působí klidněji a
          dráž. Pokud tiskovina obsahuje hodně textu, nebo na ni lidé budou psát, volte mat. Rozdíl mezi barvami na
          různých papírech vysvětluji v článku <Link href="/poradna/rgb-vs-cmyk">RGB vs. CMYK</Link>.
        </p>
      </Callout>

      <h2 id="bigovani">Silný papír a skládání: bigování</h2>
      <p>
        Čím silnější papír, tím hůř se ohýbá. Zhruba od 170 g/m² by se papír před skládáním měl <strong>bigovat</strong>:
        stroj do něj vytlačí rýhu, podle které se pak přehne čistě a rovně. Bez bigu se papír v lomu láme a barva na
        hraně popraská. Je to vidět hlavně na tmavých plochách, kde vykoukne bílý papír.
      </p>
      <Photo
        src="/poradna/gramaz-papiru-3.webp"
        alt="Ruce přehýbají silnou skládačku s tyrkysovou a oranžovou plochou, vedle kostěná skládačka a stoh složených letáků"
        caption="Silný papír se podle vybigované rýhy přehne čistě a barva v lomu nepopraská."
      />
      <ul>
        <li>
          <strong>Směr vlákna</strong> (u papíru se mu říká léta) rozhoduje, jak dobře se papír ohne. Po směru vlákna
          se skládá snadno, proti němu hůř. U knih by vlákno mělo vést souběžně s hřbetem, jinak se stránky vlní.
        </li>
        <li>
          <strong>Laminace</strong> obálku zpevní a ochrání tisk v lomu. U brožur a katalogů s tmavou obálkou je to
          nejlepší pojistka proti popraskání.
        </li>
      </ul>

      <h2 id="jak-vybrat">Jak si vybrat</h2>
      <ol>
        <li>
          <strong>Řiďte se účelem, ne pocitem „čím těžší, tím lepší“.</strong> Vyšší gramáž znamená vyšší cenu, těžší
          zásilku a obtížnější skládání.
        </li>
        <li>
          <strong>Vyžádejte si vzorník.</strong> Většina tiskáren pošle vzorky papírů zdarma. Na dotek se rozdíl mezi
          135 a 170 g/m² pozná líp než z tabulky.
        </li>
        <li>
          <strong>U zásilek hlídejte hmotnost.</strong> Pár gramů navíc na každém kusu může u hromadné rozesílky posunout
          cenu poštovného do vyšší kategorie.
        </li>
        <li>
          <strong>Papír určete dřív, než začne grafika.</strong> Na nenatíraném papíře vychází barvy jinak než na
          křídě a data se na to připravují.
        </li>
      </ol>
      <p>
        Až budete mít papír vybraný, projděte si ještě <Link href="/poradna/tiskova-data">checklist tiskových dat</Link>,
        aby tiskárna neměla důvod data vracet.
      </p>
    </>
  );
}
