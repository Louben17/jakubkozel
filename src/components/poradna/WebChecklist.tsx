"use client";

import { useState } from 'react';

export type CheckGroup = { title: string; items: string[] };

// Kontrolní seznam s odškrtáváním a ukazatelem, kolik je hotovo
export default function WebChecklist({ groups }: { groups: CheckGroup[] }) {
  const [done, setDone] = useState<Set<string>>(new Set());
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  const pct = Math.round((done.size / total) * 100);

  const flip = (id: string) =>
    setDone((cur) => {
      const next = new Set(cur);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="calc webcheck">
      <div className="webcheck-head" aria-live="polite">
        <p className="typo-sum">
          Hotovo {done.size} z {total}
        </p>
        <div className="webcheck-bar" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done.size} aria-label="Splněno">
          <span style={{ width: `${pct}%` }} />
        </div>
        {done.size > 0 && (
          <button type="button" className="calc-chip" onClick={() => setDone(new Set())}>
            Začít znovu
          </button>
        )}
      </div>
      {groups.map((g) => (
        <fieldset key={g.title} className="webcheck-group">
          <legend>{g.title}</legend>
          {g.items.map((item) => {
            const id = `${g.title}:${item}`;
            return (
              <label key={id} className={`webcheck-item ${done.has(id) ? 'on' : ''}`}>
                <input type="checkbox" checked={done.has(id)} onChange={() => flip(id)} />
                <span>{item}</span>
              </label>
            );
          })}
        </fieldset>
      ))}
    </div>
  );
}
