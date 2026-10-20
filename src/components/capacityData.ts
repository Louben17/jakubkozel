// Aktuální vytíženost – po změně stačí commit a push do main (= nasazení)
export const CAPACITY = {
  load: 60, // vytíženost v % (0–100)
  from: '2026-11-01', // od kdy můžu začít nový projekt (ISO datum); minulé datum = „hned“
};

const MONTHS_GEN = ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];

// Dnešní datum jako YYYY-MM-DD v pražském čase – výsledek nesmí záviset na časovém pásmu
// prohlížeče (Googlebot renderuje v USA, server běží v UTC), jinak se HTML ze serveru
// a z prohlížeče liší a React hlásí chybu hydratace.
const PRAGUE_DAY = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Prague' });

/** Bez `now` (server a první vykreslení v prohlížeči) se počítá, že termín ještě nenastal. */
export function capacityInfo(now?: Date) {
  const { load } = CAPACITY;
  const [, month, day] = CAPACITY.from.split('-').map(Number);
  const status =
    load < 50
      ? { label: 'Volné kapacity', color: '#4ECDC4' }
      : load < 80
        ? { label: 'Mám místo na nový projekt', color: '#F2C14E' }
        : load < 100
          ? { label: 'Poslední volné místo', color: '#F29E4C' }
          : { label: 'Teď mám plno', color: '#FF6B73' };
  const started = now ? PRAGUE_DAY.format(now) >= CAPACITY.from : false;
  const start = started
    ? 'Můžu začít hned'
    : day === 1
      ? `Nové projekty od ${MONTHS_GEN[month - 1]}`
      : `Nové projekty od ${day}. ${month}.`;
  return { load, status, start };
}
