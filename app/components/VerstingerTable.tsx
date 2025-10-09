"use client";
import type { Country } from "@/app/lib/countries";

export default function VerstingerTable({ data }: { data: Country[] }) {
  return (
    <div className="card v-table-wrap">
      <table className="v-simple-table">
        <thead>
          <tr>
            <th className="rank">#</th>
            <th>Land</th>
            <th className="value">t CO₂e / pers</th>
          </tr>
        </thead>
        <tbody>
          {data.map((c, i) => (
            <tr key={c.code}>
              <td className="muted">{i + 1}</td>
              <td>
                {c.name} <span className="code muted">({c.code})</span>
              </td>
              <td className="value strong">{c.perCapita.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
