import TT1,  { meta as m1 }  from "./tt1";
import TT2,  { meta as m2 }  from "./tt2";
import TT3,  { meta as m3 }  from "./tt3";
import TT4,  { meta as m4 }  from "./tt4";
import TT5,  { meta as m5 }  from "./tt5";
import TT6,  { meta as m6 }  from "./tt6";
import TT7,  { meta as m7 }  from "./tt7";
import TT8,  { meta as m8 }  from "./tt8";
import TT9,  { meta as m9 }  from "./tt9";
import TT10, { meta as m10 } from "./tt10"; 

export const REGISTRY = {
  [m1.id]:  { Component: TT1,  meta: m1 },
  [m2.id]:  { Component: TT2,  meta: m2 },
  [m3.id]:  { Component: TT3,  meta: m3 },
  [m4.id]:  { Component: TT4,  meta: m4 },
  [m5.id]:  { Component: TT5,  meta: m5 },
  [m6.id]:  { Component: TT6,  meta: m6 },
  [m7.id]:  { Component: TT7,  meta: m7 },
  [m8.id]:  { Component: TT8,  meta: m8 },
  [m9.id]:  { Component: TT9,  meta: m9 },
  [m10.id]: { Component: TT10, meta: m10 }, 
} as const;

export const ALL_TILTAK = Object.values(REGISTRY).map(x => x.meta);
export type TiltakId = keyof typeof REGISTRY;
