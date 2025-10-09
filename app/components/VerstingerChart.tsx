// app/components/VerstingerChart.tsx
"use client";
import type { Country } from "@/app/lib/countries";

export default function VerstingerChart({ data }: { data: Country[] }) {
  const max = Math.max(...data.map((d) => d.perCapita));

  const pct = (val: number) => {
    const p = (val / max) * 100;
    if (!Number.isFinite(p)) return 0;
    return Math.max(0, Math.min(100, Math.round(p * 10) / 10));
  };

  return (
    <div className="v-bars">
      {data.map((c, i) => {
        const percent = pct(c.perCapita);

        return (
          <div key={c.code} className="v-bars-row">
            <div className="v-rank">{i + 1}</div>

            <div className="v-info">
              <div className="v-label">
                {c.name} <span className="code muted">({c.code})</span>
              </div>

              <div className="v-track">
                <svg
                  className="v-svg"
                  width="100%"
                  height="22"
                  aria-hidden="true"
                  shapeRendering="geometricPrecision"
                >
                  <rect className="v-bg" x="0" y="0" width="100%" height="22" rx="11" />
                  <rect
                    className="v-bar"
                    x="0"
                    y="0"
                    width={`${percent}%`}
                    height="22"
                    rx="11"
                  />
                </svg>

                <span className="v-val">{c.perCapita.toFixed(1)} t</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
