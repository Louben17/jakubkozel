import { NextResponse } from 'next/server';

// Poptávkový formulář → e-mail přes Resend (klíč jen v proměnných prostředí, nikdy v kódu)
const TO = process.env.CONTACT_TO ?? 'jakubkozel@seznam.cz';
// dokud není v Resendu ověřená doména jakubkozel.cz, posílá se z testovací adresy Resendu
const FROM = process.env.RESEND_FROM ?? 'Poptávka z webu <onboarding@resend.dev>';

const SERVICES = ['Grafika', 'DTP', 'Weby', 'Tiskoviny'];
const BUDGETS = ['do 10 000 Kč', '10–30 000 Kč', '30–80 000 Kč', 'nad 80 000 Kč', 'nevím'];
const DEADLINES = ['spěchá', 'do měsíce', 'do 3 měsíců', 'bez termínu'];

// jednoduchý limit proti zahlcení: max 5 odeslání za 10 minut z jedné IP (v rámci jedné instance)
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: 'Odesílání není nastavené.' }, { status: 500 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Neplatná data.' }, { status: 400 });
  }

  // honeypot – pole, které člověk nevidí; když je vyplněné, jde o robota (tváříme se, že vše prošlo)
  if (str(body.web, 200)) return NextResponse.json({ ok: true });

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (limited(ip)) return NextResponse.json({ error: 'Příliš mnoho pokusů, zkuste to prosím za chvíli.' }, { status: 429 });

  const name = str(body.name, 120);
  const email = str(body.email, 160);
  const phone = str(body.phone, 40);
  const message = str(body.message, 5000);
  const services = Array.isArray(body.services) ? body.services.filter((s): s is string => SERVICES.includes(s as string)) : [];
  const budget = BUDGETS.includes(body.budget as string) ? (body.budget as string) : '';
  const deadline = DEADLINES.includes(body.deadline as string) ? (body.deadline as string) : '';

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return NextResponse.json({ error: 'Vyplňte prosím jméno, platný e-mail a pár slov o projektu.' }, { status: 400 });
  }

  const rows: [string, string][] = [
    ['Jméno', name],
    ['E-mail', email],
    ['Telefon', phone || '—'],
    ['Obor', services.join(', ') || '—'],
    ['Rozpočet', budget || '—'],
    ['Termín', deadline || '—'],
  ];

  const html = `
  <div style="font-family:-apple-system,Segoe UI,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1d1d24">
    <div style="height:6px;border-radius:6px;background:linear-gradient(90deg,#F66F76,#E665EC,#5C62E0,#56D2CA)"></div>
    <h1 style="font-size:22px;margin:24px 0 16px">Nová poptávka z webu</h1>
    <table style="width:100%;border-collapse:collapse;font-size:15px">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:8px 0;color:#5d6070;width:110px;vertical-align:top">${k}</td><td style="padding:8px 0;font-weight:600">${esc(v)}</td></tr>`,
        )
        .join('')}
    </table>
    <div style="margin-top:20px;padding:18px 20px;border-radius:14px;background:#F4F4F8;font-size:15px;line-height:1.6;white-space:pre-wrap">${esc(message)}</div>
    <p style="margin-top:20px;font-size:13px;color:#9a9dab">Odpovědět můžete rovnou na tento e-mail – odpověď půjde na ${esc(email)}.</p>
  </div>`;

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${message}`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Poptávka: ${services.join(', ') || 'obecná'} – ${name}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text());
    return NextResponse.json({ error: 'Zprávu se nepodařilo odeslat. Napište mi prosím přímo na e-mail.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
