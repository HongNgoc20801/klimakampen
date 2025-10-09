// app/kalkulator/page.tsx
"use client";

import { useMemo, useState } from "react";
import { useKalkulator, ZERO_ANSWERS, type Answers } from "@/app/store/kakulator";
import { computeAnnual } from "@/app/lib/kcalc";

/** Một option A/B/C/D – khi chọn sẽ apply(next) -> Answers mới */
type Opt = {
  key: "A" | "B" | "C" | "D";
  label: string;
  apply: (cur: Answers) => Answers;
};
type Q = { id: string; title: string; desc?: string; options: Opt[] };

/** clone an toàn cho draft */
function clone(a: Answers): Answers {
  return JSON.parse(JSON.stringify(a));
}

/** Danh sách câu hỏi wizard – A/B/C/D */
function buildQuestions(_a: Answers): Q[] {
  return [
    {
      id: "diet-red",
      title: "Bạn ăn thịt đỏ mỗi tuần bao nhiêu bữa?",
      options: [
        { key: "A", label: "0 bữa", apply: (c) => ({ ...c, redMeatMealsPerWeek: 0 }) },
        { key: "B", label: "1–2 bữa", apply: (c) => ({ ...c, redMeatMealsPerWeek: 2 }) },
        { key: "C", label: "3–4 bữa", apply: (c) => ({ ...c, redMeatMealsPerWeek: 4 }) },
        { key: "D", label: "5+ bữa", apply: (c) => ({ ...c, redMeatMealsPerWeek: 6 }) },
      ],
    },
    {
      id: "diet-fish",
      title: "Bạn ăn cá mỗi tuần bao nhiêu bữa?",
      options: [
        { key: "A", label: "0 bữa", apply: (c) => ({ ...c, fishMealsPerWeek: 0 }) },
        { key: "B", label: "1 bữa", apply: (c) => ({ ...c, fishMealsPerWeek: 1 }) },
        { key: "C", label: "2–3 bữa", apply: (c) => ({ ...c, fishMealsPerWeek: 3 }) },
        { key: "D", label: "4+ bữa", apply: (c) => ({ ...c, fishMealsPerWeek: 4 }) },
      ],
    },
    {
      id: "diet-dairy",
      title: "Mức tiêu thụ sữa/ngày của bạn?",
      options: [
        { key: "A", label: "Ít (hiếm khi)", apply: (c) => ({ ...c, dairyLevel: "low" }) },
        { key: "B", label: "Vừa (1–2 khẩu phần)", apply: (c) => ({ ...c, dairyLevel: "med" }) },
        { key: "C", label: "Nhiều (3–4 khẩu phần)", apply: (c) => ({ ...c, dairyLevel: "high" }) },
        { key: "D", label: "Rất nhiều (≥5)", apply: (c) => ({ ...c, dairyLevel: "high" }) },
      ],
    },
    {
      id: "diet-veg",
      title: "Tỷ lệ bữa chay trong tuần?",
      options: [
        { key: "A", label: "≤20%", apply: (c) => ({ ...c, vegShare: "lt20" }) },
        { key: "B", label: "20–50%", apply: (c) => ({ ...c, vegShare: "20to50" }) },
        { key: "C", label: ">50%", apply: (c) => ({ ...c, vegShare: "gt50" }) },
        { key: "D", label: "Thuần chay", apply: (c) => ({ ...c, vegShare: "gt50" }) },
      ],
    },
    {
      id: "fly",
      title: "Bạn bay mỗi năm khoảng bao lâu?",
      options: [
        { key: "A", label: "Không bay", apply: (c) => ({ ...c, flyHours: { short:0, medium:0, long:0, rf19:true } }) },
        { key: "B", label: "Ngắn (≤10 giờ)", apply: (c) => ({ ...c, flyHours: { short: 10, medium: 0, long: 0, rf19:true } }) },
        { key: "C", label: "Vừa (≈30 giờ)", apply: (c) => ({ ...c, flyHours: { short: 10, medium: 15, long: 5, rf19:true } }) },
        { key: "D", label: "Nhiều (≥60 giờ)", apply: (c) => ({ ...c, flyHours: { short: 20, medium: 20, long: 20, rf19:true } }) },
      ],
    },
    {
      id: "car-has",
      title: "Bạn có sử dụng ô tô cá nhân không?",
      options: [
        { key: "A", label: "Không", apply: (c) => ({ ...c, car: { ...c.car, has:false, kmPerYear:0 } }) },
        { key: "B", label: "Có – EV", apply: (c) => ({ ...c, car: { has:true, type:"ev", efficiency:17, kmPerYear:6000 } }) },
        { key: "C", label: "Có – Hybrid", apply: (c) => ({ ...c, car: { has:true, type:"hybrid", efficiency:4.5, kmPerYear:8000 } }) },
        { key: "D", label: "Có – Xăng/Diesel", apply: (c) => ({ ...c, car: { has:true, type:"gasoline", efficiency:7.5, kmPerYear:12000 } }) },
      ],
    },
    {
      id: "commute",
      title: "Đi làm hằng ngày chủ yếu bằng gì?",
      options: [
        { key: "A", label: "Đi bộ/xe đạp", apply: (c) => ({ ...c, commute: { mode:"bike", roundTripKm:4, daysPerWeek:4 } }) },
        { key: "B", label: "Xe buýt", apply: (c) => ({ ...c, commute: { mode:"bus", roundTripKm:12, daysPerWeek:4 } }) },
        { key: "C", label: "Tàu/Tram", apply: (c) => ({ ...c, commute: { mode:"train", roundTripKm:20, daysPerWeek:4 } }) },
        { key: "D", label: "Ô tô", apply: (c) => ({ ...c, commute: { mode:"car", roundTripKm:18, daysPerWeek:4 } }) },
      ],
    },
    {
      id: "home",
      title: "Nhà ở của bạn?",
      options: [
        { key: "A", label: "Căn hộ nhỏ (~50 m², 1–2 người)", apply: (c) => ({ ...c, home:{...c.home, type:"apartment", areaM2:50, people:2} }) },
        { key: "B", label: "Căn hộ vừa (~80 m², 2–3 người)", apply: (c) => ({ ...c, home:{...c.home, type:"apartment", areaM2:80, people:3} }) },
        { key: "C", label: "Nhà riêng nhỏ (~120 m²)", apply: (c) => ({ ...c, home:{...c.home, type:"house", areaM2:120, people:3} }) },
        { key: "D", label: "Nhà riêng lớn (≥160 m²)", apply: (c) => ({ ...c, home:{...c.home, type:"house", areaM2:170, people:4} }) },
      ],
    },
    {
      id: "heat",
      title: "Hệ sưởi chính?",
      options: [
        { key: "A", label: "Bơm nhiệt (Heat pump)", apply: (c) => ({ ...c, heating:{ system:"heatpump" } }) },
        { key: "B", label: "Điện trở trực tiếp", apply: (c) => ({ ...c, heating:{ system:"direct" } }) },
        { key: "C", label: "Nhiệt đô thị (district heat)", apply: (c) => ({ ...c, heating:{ system:"district" } }) },
        { key: "D", label: "Gas/Dầu", apply: (c) => ({ ...c, heating:{ system:"gas" } }) },
      ],
    },
    {
      id: "elec",
      title: "Điện năng/năm & 'điện xanh'?",
      options: [
        { key: "A", label: "≈2000 kWh & 100% xanh", apply: (c) => ({ ...c, electricity:{ kwhYear:2000, greenShare:100, pvKwhYear:0 } }) },
        { key: "B", label: "≈3000 kWh & 50% xanh", apply: (c) => ({ ...c, electricity:{ kwhYear:3000, greenShare:50, pvKwhYear:0 } }) },
        { key: "C", label: "≈4500 kWh & 0% xanh", apply: (c) => ({ ...c, electricity:{ kwhYear:4500, greenShare:0, pvKwhYear:0 } }) },
        { key: "D", label: "≈4500 kWh + PV 1500 kWh", apply: (c) => ({ ...c, electricity:{ kwhYear:4500, greenShare:50, pvKwhYear:1500 } }) },
      ],
    },
    {
      id: "shop",
      title: "Mua sắm/năm",
      options: [
        { key: "A", label: "Quần áo ít, không sắm điện tử", apply: (c) => ({ ...c, clothing:"low",  electronics:{ phone:false, laptop:false, tv:false } }) },
        { key: "B", label: "Quần áo vừa, 1 điện thoại",    apply: (c) => ({ ...c, clothing:"med",  electronics:{ phone:true,  laptop:false, tv:false } }) },
        { key: "C", label: "Quần áo nhiều, laptop",       apply: (c) => ({ ...c, clothing:"high", electronics:{ phone:false, laptop:true,  tv:false } }) },
        { key: "D", label: "Cả điện thoại + TV",          apply: (c) => ({ ...c, clothing:"high", electronics:{ phone:true,  laptop:false, tv:true  } }) },
      ],
    },
  ];
}

export default function KalkulatorWizard() {
  const { setAll, reset } = useKalkulator();
  // 🔹 Khởi tạo từ ZERO_ANSWERS để baseline = 0
  const [draft, setDraft] = useState<Answers>(() => ZERO_ANSWERS);
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<"A"|"B"|"C"|"D"|null>(null);

  const questions = useMemo(() => buildQuestions(draft), [draft]);
  const q = questions[step];
  const progress = Math.round((step / questions.length) * 100);
  const calc = useMemo(() => computeAnnual(draft), [draft]);

  function applyChoice(k: "A"|"B"|"C"|"D") {
    const opt = q.options.find(o => o.key === k)!;
    const next = opt.apply(draft);
    setDraft(next);
    setPicked(k);
  }
  function goNext() {
    if (!picked) return;
    setPicked(null);
    if (step < questions.length - 1) setStep(step + 1);
  }
  function goBack() {
    if (step === 0) return;
    setPicked(null);
    setStep(step - 1);
  }
  function finish() {
    setAll(draft);               // Persist answers
    window.location.href = "/kalkulator/summary";
  }
  function handleReset() {
    reset();
    setDraft(ZERO_ANSWERS);
    setStep(0);
    setPicked(null);
  }

  return (
    <section className="container">
      <h1>Khảo sát trắc nghiệm (wizard)</h1>
      <p className="paragraph">Chọn A/B/C/D cho mỗi câu. Khi hoàn tất, hệ thống sẽ tính CO₂ dựa trên câu trả lời.</p>

      <div className="kk-card" aria-label="Tiến độ">
        <div className="wiz-topline">Câu {step + 1}/{questions.length}</div>
        {/* dùng progress, style đã có trong globals.css */}
        <progress className="wiz-progress" value={progress} max={100} aria-hidden />
      </div>

      <fieldset className="kk-card kk-fieldset mt12">
        <legend className="kk-legend-title">{q.title}</legend>
        {q.desc && <p className="paragraph">{q.desc}</p>}

        <div className="kk-choices kk-choices--grid" role="radiogroup" aria-label={q.title}>
          {q.options.map((o) => {
            const checked = picked === o.key;
            return (
              <label key={o.key} className={`kk-choice wiz-choice ${checked ? "is-checked" : ""}`}>
                <input
                  type="radio"
                  name={q.id}
                  checked={checked}
                  onChange={() => applyChoice(o.key)}
                />
                <span className="wiz-key">{o.key}</span>
                <span>{o.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="kk-actions kk-actions-row mt12">
        <button className="btn" disabled={step === 0} onClick={goBack}>◀ Quay lại</button>
        {step < questions.length - 1 ? (
          <button className="btn primary" disabled={!picked} onClick={goNext}>Tiếp tục ▶</button>
        ) : (
          <>
            <button className="btn primary" disabled={!picked} onClick={finish}>Tính & xem tóm tắt</button>
            <button className="btn" onClick={handleReset}>Đặt lại</button>
          </>
        )}
      </div>

      {/* Preview chỉ hiện ở bước cuối (tuỳ chọn) */}
      {step === questions.length - 1 && (
        <aside className="kk-card mt12" role="region" aria-label="Kết quả sơ bộ">
          <ul className="kk-list">
            <li>Ăn uống: {calc.food} kg CO₂e/năm</li>
            <li>Bay: {calc.flight} kg CO₂e/năm</li>
            <li>Ô tô & đi làm: {calc.car} kg CO₂e/năm</li>
            <li>Sưởi: {calc.heating} kg CO₂e/năm</li>
            <li>Điện: {calc.electricity} kg CO₂e/năm</li>
            <li>Mua sắm: {calc.shopping} kg CO₂e/năm</li>
          </ul>
          <div className="kk-total">
            <span>Tổng ước tính</span><strong>{calc.total} kg CO₂e/năm</strong>
          </div>
        </aside>
      )}
    </section>
  );
}
