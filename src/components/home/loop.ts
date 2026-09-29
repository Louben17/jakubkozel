"use client";

import { useEffect, useRef, useState } from 'react';

// Animace ilustrací jsou čistou funkcí času t ∈ <0, 1): každý prvek si ze své
// časové osy spočítá polohu/průhlednost. Smyčka běží jen když je prvek vidět.

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const ramp = (t: number, a: number, b: number) => clamp((t - a) / (b - a));
export const easeOut = (x: number) => 1 - Math.pow(1 - x, 3);
export const easeInOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
export const easeBack = (x: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};
export const lerp = (a: number, b: number, x: number) => a + (b - a) * x;

/** Náběh v <a, b>, doběh v <c, d> – vrací 0..1 */
export const env = (t: number, a: number, b: number, c = 0.9, d = 0.97) =>
  easeOut(ramp(t, a, b)) * (1 - ramp(t, c, d));

/** Nekonečná smyčka délky `duration` s; `still` = snímek pro prefers-reduced-motion */
export function useLoop<T extends Element>(duration: number, still = 0.6) {
  const ref = useRef<T>(null);
  const [t, setT] = useState(still);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setT(still);
      return;
    }

    let raf = 0;
    let running = false;
    let elapsed = 0;
    let last = 0;

    const frame = (now: number) => {
      elapsed += Math.min(now - last, 64) / 1000;
      last = now;
      setT((elapsed / duration) % 1);
      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(frame);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [duration, still]);

  return [ref, t] as const;
}
