import { notFound } from "next/navigation";
import { REGISTRY, ALL_TILTAK } from "@/app/tiltak/(content)";

export function generateStaticParams() {
  return ALL_TILTAK.map(t => ({ id: t.id }));
}

export default function TiltakDetail({ params }: { params: { id: string } }) {
  const row = (REGISTRY as any)[params.id];
  if (!row) return notFound();

  const { Component } = row;
  return <Component />;
}
