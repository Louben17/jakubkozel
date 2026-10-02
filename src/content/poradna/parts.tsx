import type { ReactNode } from 'react';
import { mmToPx, num, type Format } from '../paper';

// Zvýrazněný tip nebo upozornění v článku
export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="callout">
      <p className="callout-title">{title}</p>
      {children}
    </aside>
  );
}

// Tabulka formátů s rozměry v mm a v pixelech pro běžná rozlišení
export function FormatTable({ caption, formats }: { caption: string; formats: Format[] }) {
  return (
    <div className="table-wrap">
      <table className="fmt-table nums">
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Formát</th>
            <th scope="col">Rozměr (mm)</th>
            <th scope="col">300 DPI (px)</th>
            <th scope="col">150 DPI (px)</th>
            <th scope="col">72 DPI (px)</th>
          </tr>
        </thead>
        <tbody>
          {formats.map((f) => (
            <tr key={f.name}>
              <th scope="row">
                {f.name}
                {f.note && <small>{f.note}</small>}
              </th>
              <td>
                {num(f.w, 1)} × {num(f.h, 1)}
              </td>
              {[300, 150, 72].map((dpi) => (
                <td key={dpi}>
                  {num(mmToPx(f.w, dpi))} × {num(mmToPx(f.h, dpi))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
