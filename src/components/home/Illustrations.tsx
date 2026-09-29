"use client";

import { useLoop, ramp, env, easeOut, easeBack, easeInOut, lerp, clamp } from './loop';

const INK = '#1d1d24';

/* ------------------------------------------------------------------ */
/* 01 GRAFIKA – konstrukce loga: kružnice, kotevní body, výplň, paleta */
/* ------------------------------------------------------------------ */
export function GrafikaAnim() {
  const [ref, t] = useLoop<SVGSVGElement>(7.5, 0.7);
  const out = 1 - ramp(t, 0.9, 0.97);

  const draw = (a: number, b: number, len: number) => ({
    strokeDasharray: len,
    strokeDashoffset: len * (1 - easeInOut(ramp(t, a, b))),
  });

  const C = 2 * Math.PI * 70;
  const lens = easeBack(ramp(t, 0.3, 0.42));
  const crescent = easeOut(ramp(t, 0.38, 0.5));
  const anchors = env(t, 0.14, 0.2, 0.42, 0.48);
  const word = easeOut(ramp(t, 0.48, 0.6));
  const swatches = ['#FF6B73', '#4ECDC4', '#FFE66D', INK];

  return (
    <svg ref={ref} viewBox="0 0 400 300" className="illu" aria-hidden="true">
      <g opacity={out}>
        {/* mřížka */}
        <g stroke={INK} strokeOpacity={0.07 * env(t, 0, 0.08, 0.5, 0.7) + 0.02}>
          {Array.from({ length: 11 }, (_, i) => (
            <line key={`v${i}`} x1={20 + i * 30} y1={10} x2={20 + i * 30} y2={290} />
          ))}
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`h${i}`} x1={10} y1={15 + i * 30} x2={330} y2={15 + i * 30} />
          ))}
        </g>

        {/* konstrukční linky */}
        <g stroke="#6C7BD0" strokeWidth={1} fill="none" opacity={1 - ramp(t, 0.5, 0.62) * 0.8}>
          <line x1={60} y1={125} x2={340} y2={125} style={draw(0, 0.14, 280)} />
          <line x1={200} y1={30} x2={200} y2={220} style={draw(0.03, 0.16, 190)} />
          <circle cx={170} cy={125} r={70} style={draw(0.04, 0.22, C)} />
          <circle cx={230} cy={125} r={70} style={draw(0.1, 0.28, C)} />
          <circle cx={200} cy={125} r={100} strokeDasharray="3 5" opacity={env(t, 0.18, 0.28, 0.45, 0.55)} />
        </g>

        {/* výplně značky */}
        <g transform="translate(200 125)">
          <g transform={`scale(${0.7 + 0.3 * crescent})`} opacity={crescent}>
            <circle cx={-30} cy={0} r={70} fill="#4ECDC4" fillOpacity={0.9} />
          </g>
          <g transform={`scale(${lens})`}>
            <path d="M0 -63.2 A70 70 0 0 1 0 63.2 A70 70 0 0 1 0 -63.2 Z" fill="#FF6B73" />
          </g>
        </g>

        {/* kotevní body pera */}
        <g opacity={anchors}>
          {[[200, 61.8], [200, 188.2], [240, 125], [160, 125]].map(([x, y], i) => (
            <g key={i}>
              <line x1={x - 22} y1={y} x2={x + 22} y2={y} stroke="#6C7BD0" strokeWidth={0.8} opacity={i < 2 ? 1 : 0} />
              <line x1={x} y1={y - 22} x2={x} y2={y + 22} stroke="#6C7BD0" strokeWidth={0.8} opacity={i >= 2 ? 1 : 0} />
              <rect x={x - 4} y={y - 4} width={8} height={8} fill="#fff" stroke="#6C7BD0" strokeWidth={1.4} />
            </g>
          ))}
        </g>

        {/* wordmark */}
        <text
          x={200}
          y={258}
          textAnchor="middle"
          fontSize={22}
          fontWeight={800}
          fill={INK}
          opacity={word}
          style={{ letterSpacing: `${lerp(18, 6, word)}px` }}
        >
          ZNAČKA
        </text>

        {/* paleta */}
        {swatches.map((c, i) => {
          const p = easeBack(ramp(t, 0.58 + i * 0.04, 0.66 + i * 0.04));
          return (
            <g key={c} transform={`translate(365 ${70 + i * 45}) scale(${p})`}>
              <circle r={15} fill={c} stroke="#fff" strokeWidth={3} />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 02 DTP – dvoustrana: účaří, okraje, iniciála, sazba řádků, obrázek  */
/* ------------------------------------------------------------------ */
export function DtpAnim() {
  const [ref, t] = useLoop<SVGSVGElement>(8, 0.8);
  const out = 1 - ramp(t, 0.9, 0.97);
  const pageIn = easeOut(ramp(t, 0, 0.08));
  const grid = env(t, 0.04, 0.12, 0.72, 0.82);
  const guides = env(t, 0.06, 0.14, 0.72, 0.82);

  // levá strana – sazba do bloku, poslední řádek odstavce kratší
  const leftLines = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const lastInPara = new Set([4, 10]);

  return (
    <svg ref={ref} viewBox="0 0 400 300" className="illu" aria-hidden="true">
      <defs>
        <linearGradient id="dtp-spine" x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="0.5" stopColor="#000" stopOpacity="0.12" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="dtp-img" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#C7CEEA" />
          <stop offset="1" stopColor="#FFB7B2" />
        </linearGradient>
      </defs>
      <g opacity={out} transform={`translate(0 ${(1 - pageIn) * 16})`}>
        <rect x={28} y={24} width={344} height={252} rx={4} fill="#000" opacity={0.08 * pageIn} transform="translate(4 6)" />
        <rect x={28} y={24} width={172} height={252} fill="#fff" opacity={pageIn} />
        <rect x={200} y={24} width={172} height={252} fill="#fff" opacity={pageIn} />
        <rect x={186} y={24} width={28} height={252} fill="url(#dtp-spine)" opacity={pageIn} />

        {/* účaří */}
        <g stroke="#4ECDC4" strokeWidth={0.6} opacity={grid * 0.7}>
          {Array.from({ length: 17 }, (_, i) => (
            <line key={i} x1={28} y1={62 + i * 12} x2={372} y2={62 + i * 12} />
          ))}
        </g>
        {/* okraje (magenta jako v InDesignu) */}
        <g fill="none" stroke="#E0569B" strokeWidth={0.8} opacity={guides}>
          <rect x={46} y={42} width={136} height={214} />
          <rect x={218} y={42} width={136} height={214} />
        </g>

        {/* titulek kapitoly */}
        <g opacity={easeOut(ramp(t, 0.12, 0.2))} transform={`translate(${(1 - easeOut(ramp(t, 0.12, 0.2))) * -10} 0)`}>
          <text x={46} y={56} fontSize={8} fontWeight={700} fill="#6C7BD0" style={{ letterSpacing: 2 }}>KAPITOLA 1</text>
          <rect x={46} y={63} width={110} height={11} rx={2} fill={INK} />
        </g>

        {/* iniciála */}
        <text
          x={46}
          y={112}
          fontSize={36}
          fontWeight={800}
          fill="#FF6B73"
          fontFamily="Georgia, serif"
          opacity={easeOut(ramp(t, 0.2, 0.26))}
        >
          V
        </text>

        {/* řádky sazby vlevo */}
        {leftLines.map((i) => {
          const y = 86 + i * 12;
          const indent = i < 3 ? 30 : 0;
          const full = 136 - indent;
          const w = lastInPara.has(i) ? full * 0.55 : full;
          const p = easeOut(ramp(t, 0.22 + i * 0.025, 0.27 + i * 0.025));
          return <rect key={i} x={46 + indent} y={y + (i > 4 ? 12 : 0)} width={w * p} height={4.5} rx={1} fill="#9aa0b4" />;
        })}

        {/* obrázek vpravo – nejdřív rámeček s křížem, pak výplň */}
        <g>
          <rect x={218} y={42} width={136} height={94} fill="none" stroke="#9aa0b4" strokeWidth={1} opacity={env(t, 0.28, 0.32, 0.42, 0.46)} />
          <g stroke="#9aa0b4" strokeWidth={1} opacity={env(t, 0.28, 0.32, 0.42, 0.46)}>
            <line x1={218} y1={42} x2={354} y2={136} />
            <line x1={354} y1={42} x2={218} y2={136} />
          </g>
          <g opacity={easeOut(ramp(t, 0.42, 0.5))}>
            <rect x={218} y={42} width={136} height={94} fill="url(#dtp-img)" />
            <circle cx={320} cy={70} r={12} fill="#fff" opacity={0.8} />
            <path d="M218 136 L262 92 L292 118 L312 100 L354 136 Z" fill="#fff" opacity={0.55} />
          </g>
          <text x={218} y={148} fontSize={6.5} fill="#9aa0b4" fontStyle="italic" opacity={easeOut(ramp(t, 0.5, 0.55))}>
            Obr. 1 — popisek
          </text>
        </g>

        {/* dva sloupce vpravo */}
        {[0, 1].map((col) =>
          Array.from({ length: 8 }, (_, i) => {
            const k = col * 8 + i;
            const p = easeOut(ramp(t, 0.5 + k * 0.014, 0.55 + k * 0.014));
            const w = i === 7 ? 36 : 64;
            return <rect key={k} x={218 + col * 72} y={158 + i * 12} width={w * p} height={4.5} rx={1} fill="#9aa0b4" />;
          })
        )}

        {/* paginace */}
        <g fontSize={7} fill="#9aa0b4" opacity={easeOut(ramp(t, 0.7, 0.76))}>
          <text x={46} y={268}>12</text>
          <text x={354} y={268} textAnchor="end">13</text>
        </g>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 03 WEB – wireframe → obsah → klik → responzivní přeskupení na mobil */
/* ------------------------------------------------------------------ */
export function WebAnim() {
  const [ref, t] = useLoop<SVGSVGElement>(9, 0.45);
  const out = 1 - ramp(t, 0.93, 0.99);
  const winIn = easeOut(ramp(t, 0, 0.07));
  const wire = ramp(t, 0.06, 0.22); // postupné vykreslení wireframu
  const fill = easeOut(ramp(t, 0.22, 0.34));
  const m = easeInOut(ramp(t, 0.6, 0.7)) * (1 - easeInOut(ramp(t, 0.84, 0.92))); // 0 desktop → 1 mobil

  const W = lerp(360, 150, m);
  const X = 200 - W / 2;
  const H = lerp(260, 262, m);
  const Y = 20;
  const pad = lerp(18, 12, m);
  const inner = W - pad * 2;

  const block = (i: number) => clamp(wire * 6 - i); // i-tý blok se objeví postupně
  const stroke = (i: number) => ({ opacity: block(i), strokeDasharray: '4 3', strokeOpacity: 1 - fill });

  // hero
  const heroY = Y + 44;
  const titleW = lerp(inner * 0.62, inner, m);
  // tlačítko + klik
  const btnX = X + pad;
  const btnY = heroY + lerp(46, 58, m);
  const click = ramp(t, 0.49, 0.53);
  const press = click > 0 && click < 1 ? 0.92 : 1;
  const ripple = ramp(t, 0.5, 0.58);

  // karty: desktop 3 v řadě, mobil pod sebou
  const cardsTop = btnY + lerp(44, 34, m);
  const gap = 10;
  const cardWd = (inner - gap * 2) / 3;
  const cards = [0, 1, 2].map((i) => ({
    x: lerp(X + pad + i * (cardWd + gap), X + pad, m),
    y: lerp(cardsTop, cardsTop + i * 48, m),
    w: lerp(cardWd, inner, m),
    h: lerp(90, 40, m),
  }));
  const cardColors = ['#FFB7B2', '#B5EAD7', '#C7CEEA'];

  // kurzor
  const cur = easeInOut(ramp(t, 0.36, 0.48));
  const curX = lerp(330, btnX + 30, cur);
  const curY = lerp(250, btnY + 10, cur);
  const curOp = env(t, 0.34, 0.38, 0.56, 0.6);

  return (
    <svg ref={ref} viewBox="0 0 400 300" className="illu" aria-hidden="true">
      <defs>
        <clipPath id="web-clip">
          <rect x={X} y={Y} width={W} height={H} rx={lerp(10, 18, m)} />
        </clipPath>
      </defs>
      <g opacity={out * winIn} transform={`translate(0 ${(1 - winIn) * 14})`}>
        <rect x={X + 4} y={Y + 8} width={W} height={H} rx={lerp(10, 18, m)} fill="#000" opacity={0.08} />
        <g clipPath="url(#web-clip)">
          <rect x={X} y={Y} width={W} height={H} fill="#fff" />
          {/* lišta prohlížeče */}
          <rect x={X} y={Y} width={W} height={22} fill="#f1f1f4" />
          <g opacity={1 - m}>
            {['#FF6B73', '#FFD166', '#4ECDC4'].map((c, i) => (
              <circle key={c} cx={X + 14 + i * 12} cy={Y + 11} r={4} fill={c} />
            ))}
            <rect x={X + 60} y={Y + 6} width={W - 120} height={10} rx={5} fill="#fff" />
          </g>
          <rect x={200 - 20} y={Y + 8} width={40} height={6} rx={3} fill={INK} opacity={m} />

          {/* navigace */}
          <rect x={X + pad} y={Y + 30} width={36} height={8} rx={4} fill={fill > 0 ? '#FF6B73' : 'none'} stroke="#9aa0b4" {...stroke(0)} fillOpacity={fill} />
          <g opacity={(1 - m) * block(0)}>
            {[0, 1, 2].map((i) => (
              <rect key={i} x={X + W - pad - 100 + i * 34} y={Y + 32} width={26} height={4} rx={2} fill="#c5c8d4" />
            ))}
          </g>
          <g opacity={m} stroke={INK} strokeWidth={1.6} strokeLinecap="round">
            <line x1={X + W - pad - 14} y1={Y + 31} x2={X + W - pad} y2={Y + 31} />
            <line x1={X + W - pad - 14} y1={Y + 36} x2={X + W - pad} y2={Y + 36} />
          </g>

          {/* hero */}
          <rect x={X + pad} y={heroY} width={titleW} height={12} rx={3} fill={INK} fillOpacity={fill} stroke="#9aa0b4" {...stroke(1)} />
          <rect x={X + pad} y={heroY + 18} width={titleW * 0.7} height={12} rx={3} fill={INK} fillOpacity={fill} stroke="#9aa0b4" {...stroke(1)} />
          <rect x={X + pad} y={heroY + 36} width={lerp(inner * 0.5, inner * 0.9, m)} height={5} rx={2} fill="#c5c8d4" fillOpacity={fill} stroke="#9aa0b4" {...stroke(2)} opacity={m > 0.5 ? 0 : block(2)} />
          <g transform={`translate(${btnX + 36} ${btnY + 9}) scale(${press}) translate(${-(btnX + 36)} ${-(btnY + 9)})`}>
            <rect x={btnX} y={btnY} width={72} height={18} rx={9} fill="#4ECDC4" fillOpacity={fill} stroke="#9aa0b4" {...stroke(3)} />
            <rect x={btnX + 16} y={btnY + 7} width={40} height={4} rx={2} fill="#fff" opacity={fill} />
          </g>
          <circle cx={btnX + 36} cy={btnY + 9} r={10 + ripple * 40} fill="none" stroke="#4ECDC4" strokeWidth={2} opacity={ripple > 0 && ripple < 1 ? 1 - ripple : 0} />

          {/* ilustrace v hero – jen desktop */}
          <g opacity={(1 - m) * block(2)}>
            <circle cx={X + W - pad - 40} cy={heroY + 26} r={30} fill="#FFE66D" fillOpacity={fill} stroke="#9aa0b4" strokeDasharray="4 3" />
            <rect x={X + W - pad - 58} y={heroY + 8} width={36} height={36} rx={6} fill="#FF6B73" fillOpacity={fill * 0.9} transform={`rotate(${12 * fill} ${X + W - pad - 40} ${heroY + 26})`} />
          </g>

          {/* karty */}
          {cards.map((c, i) => (
            <g key={i}>
              <rect x={c.x} y={c.y} width={c.w} height={c.h} rx={8} fill={cardColors[i]} fillOpacity={fill} stroke="#9aa0b4" {...stroke(4 + i * 0.5)} />
              <rect x={c.x + 8} y={c.y + c.h - 16} width={c.w * 0.5} height={5} rx={2} fill={INK} opacity={fill * 0.6} />
            </g>
          ))}
        </g>

        {/* kurzor */}
        <g transform={`translate(${curX} ${curY}) scale(${press})`} opacity={curOp}>
          <path d="M0 0 L0 17 L4.5 13 L8 20.5 L11 19 L7.5 11.8 L13 11.8 Z" fill={INK} stroke="#fff" strokeWidth={1.2} />
        </g>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 04 TISKOVINY – plakát, leták, vizitka s otočkou, ořezky, CMYK       */
/* ------------------------------------------------------------------ */
export function PrintAnim() {
  const [ref, t] = useLoop<SVGSVGElement>(8, 0.55);
  const out = 1 - ramp(t, 0.9, 0.97);

  const poster = easeOut(ramp(t, 0, 0.12));
  const flyer = easeOut(ramp(t, 0.06, 0.18));
  const cardIn = easeBack(ramp(t, 0.14, 0.26));
  // otočka vizitky: 0 = líc, 1 = rub
  const flip = easeInOut(ramp(t, 0.4, 0.5)) * (1 - easeInOut(ramp(t, 0.74, 0.84)));
  const sx = Math.cos(flip * Math.PI);
  const showBack = sx < 0;
  const marks = ramp(t, 0.26, 0.36);
  const cmyk = ['#00AEEF', '#EC008C', '#FFF200', '#231F20'];

  const cx = 200;
  const cy = 170;
  const cw = 150;
  const ch = 86;

  return (
    <svg ref={ref} viewBox="0 0 400 300" className="illu" aria-hidden="true">
      <g opacity={out}>
        {/* plakát */}
        <g transform={`translate(${lerp(-60, 0, poster)} 0) rotate(-9 95 130)`} opacity={poster}>
          <rect x={40} y={36} width={112} height={158} fill="#fff" />
          <rect x={40} y={36} width={112} height={158} fill="#000" opacity={0.06} transform="translate(3 5)" />
          <circle cx={96} cy={96} r={38} fill="#FF6B73" />
          <circle cx={118} cy={80} r={20} fill="#FFE66D" style={{ mixBlendMode: 'multiply' }} />
          <rect x={52} y={146} width={70} height={10} fill={INK} />
          <rect x={52} y={162} width={50} height={5} fill="#9aa0b4" />
          <rect x={52} y={172} width={58} height={5} fill="#9aa0b4" />
        </g>

        {/* leták */}
        <g transform={`translate(${lerp(60, 0, flyer)} 0) rotate(7 305 120)`} opacity={flyer}>
          <rect x={252} y={44} width={106} height={150} fill="#fff" />
          <rect x={252} y={44} width={106} height={62} fill="#4ECDC4" />
          <path d="M252 106 Q305 78 358 106 Z" fill="#fff" />
          <rect x={264} y={118} width={60} height={8} fill={INK} />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={264} y={134 + i * 10} width={i === 3 ? 44 : 80} height={4} fill="#c5c8d4" />
          ))}
        </g>

        {/* ořezové značky kolem vizitky */}
        <g stroke={INK} strokeWidth={0.8} opacity={marks * (1 - ramp(t, 0.86, 0.9))}>
          {[
            [cx - cw / 2, cy - ch / 2, -1, -1],
            [cx + cw / 2, cy - ch / 2, 1, -1],
            [cx - cw / 2, cy + ch / 2, -1, 1],
            [cx + cw / 2, cy + ch / 2, 1, 1],
          ].map(([x, y, dx, dy], i) => {
            const L = 14 * easeOut(marks);
            return (
              <g key={i}>
                <line x1={x + dx * 6} y1={y} x2={x + dx * (6 + L)} y2={y} />
                <line x1={x} y1={y + dy * 6} x2={x} y2={y + dy * (6 + L)} />
              </g>
            );
          })}
        </g>

        {/* vizitka */}
        <g transform={`translate(${cx} ${cy + (1 - cardIn) * 40}) scale(${sx * cardIn} ${cardIn})`} opacity={clamp(cardIn * 2)}>
          <rect x={-cw / 2 + 3} y={-ch / 2 + 6} width={cw} height={ch} rx={5} fill="#000" opacity={0.12} />
          {!showBack ? (
            <g>
              <rect x={-cw / 2} y={-ch / 2} width={cw} height={ch} rx={5} fill="#fff" />
              <circle cx={-cw / 2 + 24} cy={-ch / 2 + 24} r={10} fill="#FF6B73" />
              <circle cx={-cw / 2 + 32} cy={-ch / 2 + 24} r={10} fill="#4ECDC4" style={{ mixBlendMode: 'multiply' }} />
              <rect x={-cw / 2 + 16} y={4} width={76} height={8} rx={1} fill={INK} />
              <rect x={-cw / 2 + 16} y={18} width={52} height={4} rx={1} fill="#9aa0b4" />
              <rect x={-cw / 2 + 16} y={27} width={62} height={4} rx={1} fill="#9aa0b4" />
            </g>
          ) : (
            <g transform="scale(-1 1)">
              <rect x={-cw / 2} y={-ch / 2} width={cw} height={ch} rx={5} fill="#FF6B73" />
              <text x={0} y={9} textAnchor="middle" fontSize={26} fontWeight={800} fill="#fff" style={{ letterSpacing: 2 }}>
                JK
              </text>
            </g>
          )}
        </g>

        {/* CMYK pruh + soutisková značka */}
        <g>
          {cmyk.map((c, i) => {
            const p = easeOut(ramp(t, 0.3 + i * 0.04, 0.38 + i * 0.04));
            return <rect key={c} x={132 + i * 26} y={262} width={22 * p} height={14} fill={c} />;
          })}
          <g
            transform={`translate(252 269) rotate(${t * 360})`}
            opacity={easeOut(ramp(t, 0.44, 0.52))}
            stroke={INK}
            strokeWidth={1}
            fill="none"
          >
            <circle r={6} />
            <line x1={-10} y1={0} x2={10} y2={0} />
            <line x1={0} y1={-10} x2={0} y2={10} />
          </g>
        </g>
      </g>
    </svg>
  );
}
