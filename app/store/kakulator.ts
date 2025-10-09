// app/store/kakulator.ts
"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Answers = {
  // ĂN UỐNG
  redMeatMealsPerWeek: number; // bữa thịt đỏ/tuần
  fishMealsPerWeek: number;     // bữa cá/tuần
  dairyLevel: "low" | "med" | "high"; // mức sữa
  vegShare: "lt20" | "20to50" | "gt50"; // tỉ lệ bữa chay

  // BAY
  flyHours: { short: number; medium: number; long: number; rf19: boolean };

  // Ô TÔ/DI LẠI
  car: {
    has: boolean;
    type: "ev" | "hybrid" | "gasoline";
    efficiency: number; // kWh/100km (EV) hoặc L/100km (ICE/Hybrid)
    kmPerYear: number;
  };
  commute: {
    mode: "bike" | "bus" | "train" | "car";
    roundTripKm: number;
    daysPerWeek: number;
  };

  // NHÀ/CHI TIÊU NĂNG LƯỢNG
  home: { type: "apartment" | "house"; areaM2: number; people: number };
  heating: { system: "heatpump" | "direct" | "district" | "gas" };
  electricity: { kwhYear: number; greenShare: number; pvKwhYear: number };

  // MUA SẮM
  clothing: "low" | "med" | "high";
  electronics: { phone: boolean; laptop: boolean; tv: boolean };
};

/** Baseline = 0: không bay/không lái xe/điện & sưởi = 0.
 *  Gợi ý: trong computeAnnual, map dairy "low" và vegShare "gt50"
 *  về footprint tối thiểu (thậm chí 0 nếu bạn muốn). */
export const ZERO_ANSWERS: Answers = {
  redMeatMealsPerWeek: 0,
  fishMealsPerWeek: 0,
  dairyLevel: "low",
  vegShare: "gt50",

  flyHours: { short: 0, medium: 0, long: 0, rf19: true },

  car: { has: false, type: "ev", efficiency: 0, kmPerYear: 0 },
  commute: { mode: "bike", roundTripKm: 0, daysPerWeek: 0 },

  home: { type: "apartment", areaM2: 0, people: 1 },
  heating: { system: "heatpump" },
  electricity: { kwhYear: 0, greenShare: 0, pvKwhYear: 0 },

  clothing: "low",
  electronics: { phone: false, laptop: false, tv: false },
};

type Store = {
  answers: Answers;
  setAll: (a: Answers) => void;
  reset: () => void;
};

export const useKalkulator = create<Store>()(
  persist(
    (set) => ({
      answers: ZERO_ANSWERS,
      setAll: (a) => set({ answers: { ...a } }),
      reset: () => set({ answers: ZERO_ANSWERS }),
    }),
    {
      name: "klima-kalkulator-zustand",
      version: 1,
    }
  )
);
