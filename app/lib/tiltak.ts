import { ALL_TILTAK } from "@/app/tiltak/(content)";

export type Tiltak = {
  id: string;
  title: string;
  excerpt: string;
  img: string;
};

export const TILTAK: Tiltak[] = ALL_TILTAK;

export function getTiltakMeta(id: string) {
  return TILTAK.find(t => t.id === id);
}
