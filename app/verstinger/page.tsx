"use client";

import { useMemo, useState } from "react";
import { TOP20_PER_CAPITA } from "@/app/lib/countries";
import VerstingerTable from "@/app/components/VerstingerTable";
import VerstingerChart from "@/app/components/VerstingerChart";

export default function VerstingerPage() {
  const [mode, setMode] = useState<"table" | "chart">("table");
  const data = useMemo(
    () => [...TOP20_PER_CAPITA].sort((a, b) => b.perCapita - a.perCapita),
    []
  );

  const isTable = mode === "table";
  const isChart = mode === "chart";

  return (
    <>
      <section className="container">
        <h1>Klima-verstinger (per capita)</h1>
        <p className="paragraph">
          Top 20 quốc gia có phát thải CO₂ theo đầu người (t/năm). Chuyển giữa Bảng và Biểu đồ.
        </p>

        {/* TABLIST (ARIA Tabs pattern) */}
        <div className="switch" role="tablist" aria-label="Visningsmodus">
          {/* TAB: TABLE */}
          {isTable ? (
            <button
              type="button"
              id="tab-table"
              role="tab"
              aria-selected="true"        // literal để né axe
              aria-controls="panel-table"
              tabIndex={0}
              className="btn primary"
              onClick={() => setMode("table")}
            >
              Bảng
            </button>
          ) : (
            <button
              type="button"
              id="tab-table"
              role="tab"
              aria-selected="false"       // literal để né axe
              aria-controls="panel-table"
              tabIndex={-1}
              className="btn"
              onClick={() => setMode("table")}
            >
              Bảng
            </button>
          )}

          {/* TAB: CHART */}
          {isChart ? (
            <button
              type="button"
              id="tab-chart"
              role="tab"
              aria-selected="true"        // literal để né axe
              aria-controls="panel-chart"
              tabIndex={0}
              className="btn primary"
              onClick={() => setMode("chart")}
            >
              Biểu đồ
            </button>
          ) : (
            <button
              type="button"
              id="tab-chart"
              role="tab"
              aria-selected="false"       // literal để né axe
              aria-controls="panel-chart"
              tabIndex={-1}
              className="btn"
              onClick={() => setMode("chart")}
            >
              Biểu đồ
            </button>
          )}
        </div>
      </section>

      {/* PANELS */}
      <section className="container mt12">
        <div
          id="panel-table"
          role="tabpanel"
          aria-labelledby="tab-table"
          hidden={!isTable}
        >
          {isTable && <VerstingerTable data={data} />}
        </div>

        <div
          id="panel-chart"
          role="tabpanel"
          aria-labelledby="tab-chart"
          hidden={!isChart}
        >
          {isChart && <VerstingerChart data={data} />}
        </div>
      </section>
    </>
  );
}
