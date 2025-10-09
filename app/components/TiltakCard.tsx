"use client";

import Link from "next/link";
import Image from "next/image";
import type { Tiltak } from "@/app/lib/tiltak";

export default function TiltakCard({ item }: { item: Tiltak }) {
  return (
    <article className="card" aria-labelledby={`tiltak-${item.id}`}>
      <div className="card-thumb">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="card-img"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="card-body">
        <h3 id={`tiltak-${item.id}`} className="card-title">{item.title}</h3>
        <p className="card-text">{item.excerpt}</p>

        {/* Cách 1: href là chuỗi tới route động */}
        <Link
          className="btn primary"
          href={`/tiltak/${item.id}`}
          aria-label={`Les mer om: ${item.title}`}
        >
          Se mer
        </Link>
      </div>
    </article>
  );
}
