// Aktuální vytíženost – po změně stačí commit a push do main (= nasazení)
export const CAPACITY = {
  load: 60, // vytíženost v % (0–100)
  from: '2026-11-01', // od kdy můžu začít nový projekt (ISO datum); minulé datum = „hned“
};

const MONTHS_GEN = ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];

export function capacityInfo(now = new Date()) {
  const { load } = CAPACITY;
  const from = new Date(CAPACITY.from);
  const status =
    load < 50
      ? { label: 'Volné kapacity', color: '#4ECDC4' }
      : load < 80
        ? { label: 'Mám místo na nový projekt', color: '#F2C14E' }
        : load < 100
          ? { label: 'Poslední volné místo', color: '#F29E4C' }
          : { label: 'Teď mám plno', color: '#FF6B73' };
  const start =
    from <= now
      ? 'Můžu začít hned'
      : from.getDate() === 1
        ? `Nové projekty od ${MONTHS_GEN[from.getMonth()]}`
        : `Nové projekty od ${from.getDate()}. ${from.getMonth() + 1}.`;
  return { load, status, start };
}
