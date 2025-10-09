// app/lib/kcalc.ts
import type { Answers } from "@/app/store/kakulator";

/** Kết quả tổng theo nhóm lớn */
export type ResultBreakdown = {
  food: number;
  flight: number;
  car: number;           // carPersonal + commute
  heating: number;
  electricity: number;
  shopping: number;
  total: number;
};

/** Kết quả chi tiết khớp với câu hỏi wizard */
export type DetailedBreakdown = ResultBreakdown & {
  // ăn uống
  redMeat: number;
  fish: number;
  dairy: number;
  vegSavings: number;    // số kg CO2e giảm do ăn chay (âm)
  // di chuyển
  carPersonal: number;
  commute: number;
};

export const AVERAGE = {
  food: 1200,
  flight: 800,
  car: 1800,
  heating: 1200,
  electricity: 600,
  shopping: 700,
};

const EF_FOOD = {
  redMeatPerMeal: 3.0, // kg/bữa thịt đỏ
  fishPerMeal: 0.5,    // kg/bữa cá
  dairy: {
    low: 50,
    med: 120,
    high: 220,
  } as const,
  vegShareCut: {
    lt20: 0.0,
    "20to50": 0.05,
    gt50: 0.15,
  } as const,
};

const EF_FLY = { short: 90, medium: 130, long: 150 };

const EF_CAR_KM = { ev: 0.05, hybrid: 0.12, gasoline: 0.18 } as const;
const EF_COMMUTE_KM = { bike: 0.0, bus: 0.08, train: 0.04, car: 0.18 } as const;

const HEAT_DEMAND = { apartment: 70, house: 100 } as const; // kWh/m²/năm
const EF_HEAT_SYS = { heatpump: 0.05, direct: 0.15, district: 0.09, gas: 0.22 } as const;

const GRID_EF = 0.15;         // kg/kWh
const WORK_WEEKS = 48;

export function computeAnnual(a: Answers): DetailedBreakdown {
  // ===== Food (chi tiết) =====
  const redMeatMealsYear = (a.redMeatMealsPerWeek ?? 0) * 52;
  const fishMealsYear = (a.fishMealsPerWeek ?? 0) * 52;

  const redMeat = redMeatMealsYear * EF_FOOD.redMeatPerMeal;
  const fish = fishMealsYear * EF_FOOD.fishPerMeal;
  const dairy = EF_FOOD.dairy[a.dairyLevel ?? "low"];

  const baseFood = redMeat + fish + dairy;

  const cutPct = EF_FOOD.vegShareCut[a.vegShare ?? "lt20"];
  const vegSavings = round(-(baseFood * cutPct)); // âm (tiết kiệm)
  const food = round(baseFood + vegSavings);

  // ===== Flight =====
  const rf = a.flyHours?.rf19 ? 1.9 : 1.0;
  const flight = round(
    ((a.flyHours?.short ?? 0) * EF_FLY.short +
      (a.flyHours?.medium ?? 0) * EF_FLY.medium +
      (a.flyHours?.long ?? 0) * EF_FLY.long) * rf
  );

  // ===== Car & commute (tách) =====
  const commuteKm =
    (a.commute?.roundTripKm ?? 0) * (a.commute?.daysPerWeek ?? 0) * WORK_WEEKS;
  const commuteEF = EF_COMMUTE_KM[a.commute?.mode ?? "bike"];
  const commute = round(commuteKm * commuteEF);

  let carPersonal = 0;
  if (a.car?.has) {
    const kmYear = a.car.kmPerYear ?? 0;
    const type = a.car.type ?? "gasoline";
    carPersonal = kmYear * EF_CAR_KM[type];
  }
  carPersonal = round(carPersonal);

  const car = round(carPersonal + commute);

  // ===== Heating =====
  const homeType = a.home?.type ?? "apartment";
  const area = a.home?.areaM2 ?? 60;
  const demand = HEAT_DEMAND[homeType] * area;
  const heatSys = a.heating?.system ?? "direct";
  const heating = round(demand * EF_HEAT_SYS[heatSys]);

  // ===== Electricity =====
  const kwhTotal = Math.max(
    0,
    (a.electricity?.kwhYear ?? 0) - (a.electricity?.pvKwhYear ?? 0)
  );
  const greenShare = Math.min(100, Math.max(0, a.electricity?.greenShare ?? 0)) / 100;
  const electricity = round(kwhTotal * GRID_EF * (1 - greenShare));

  // ===== Shopping =====
  let shopping = 0;
  shopping += a.clothing === "high" ? 200 : a.clothing === "med" ? 120 : 60;
  if (a.electronics?.phone) shopping += 55;
  if (a.electronics?.laptop) shopping += 200;
  if (a.electronics?.tv) shopping += 300;
  shopping = round(shopping);

  const total = round(food + flight + car + heating + electricity + shopping);

  return {
    // nhóm lớn (giữ tương thích)
    food, flight, car, heating, electricity, shopping, total,
    // chi tiết cho tóm tắt theo câu hỏi
    redMeat: round(redMeat),
    fish: round(fish),
    dairy: round(dairy),
    vegSavings,           // âm nếu có tiết kiệm
    carPersonal, commute,
  };
}

function round(n: number): number {
  return Math.round(n);
}
