// app/kalkulator/summary/page.tsx
"use client";

import { useMemo } from "react";
import { useKalkulator } from "@/app/store/kakulator";
import { AVERAGE, computeAnnual } from "@/app/lib/kcalc";

export default function SummaryPage() {
  const { answers, reset } = useKalkulator();
  const calc = useMemo(() => computeAnnual(answers), [answers]);

  const avgTotal =
    AVERAGE.food + AVERAGE.flight + AVERAGE.car + AVERAGE.heating + AVERAGE.electricity + AVERAGE.shopping;

  // Liệt kê chi tiết bám theo câu hỏi wizard
  const rows = [
    { label: "Thịt đỏ", you: calc.redMeat },
    { label: "Cá", you: calc.fish },
    { label: "Sữa", you: calc.dairy },
    // (tùy chọn) hiển thị tiết kiệm do ăn chay nếu có
    ...(calc.vegSavings < 0 ? [{ label: "Tiết kiệm nhờ bữa chay", you: calc.vegSavings }] : []),
    { label: "Bay", you: calc.flight },
    { label: "Ô tô (cá nhân)", you: calc.carPersonal },
    { label: "Đi làm (commute)", you: calc.commute },
    { label: "Sưởi", you: calc.heating },
    { label: "Điện", you: calc.electricity },
    { label: "Mua sắm", you: calc.shopping },
  ];

  const verdict = useMemo(() => {
    const diff = calc.total - avgTotal;
    const dir = diff > 0 ? "cao hơn" : diff < 0 ? "thấp hơn" : "bằng";
    const abs = Math.abs(diff);
    // tìm mục cao nhất theo hàng đã hiển thị (bỏ qua mục “tiết kiệm” âm)
    const positiveRows = rows.filter(r => r.you >= 0);
    const top = positiveRows.slice().sort((a,b) => b.you - a.you)[0];
    const low = positiveRows.slice().sort((a,b) => a.you - b.you)[0];

    return `Tổng phát thải của bạn ${dir} trung bình ${abs} kg CO₂e/năm. Mục cao nhất: ${top.label} (${top.you} kg). Mục thấp nhất: ${low.label} (${low.you} kg).`;
  }, [calc.total, avgTotal, rows]);

  return (
    <section className="container">
      <h1>Tóm tắt & so sánh</h1>
      <p className="paragraph">Bảng dưới đây bám đúng các câu hỏi trong khảo sát (A/B/C/D).</p>

      <div className="kk-card" role="region" aria-label="Tổng quan">
        <div className="kk-total">
          <span>Tổng của bạn</span>
          <strong>{calc.total} kg CO₂e/năm</strong>
        </div>
        <div className="kk-total">
          <span>Trung bình tham khảo</span>
          <strong>{avgTotal} kg CO₂e/năm</strong>
        </div>
      </div>

      <div className="card v-table-wrap mt12">
        <table className="v-simple-table">
          <thead>
            <tr>
              <th>Hạng mục</th>
              <th className="value">Bạn (kg/năm)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <td>{r.label}</td>
                <td className="value strong">{r.you}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="paragraph mt12">{verdict}</p>

      <div className="kk-actions kk-actions-row mt12">
        <a className="btn" href="/kalkulator">Quay lại chỉnh sửa</a>
        <button
          className="btn"
          onClick={() => { reset(); location.href = "/kalkulator"; }}
        >
          Xóa dữ liệu & làm lại
        </button>
      </div>
    </section>
  );
}
