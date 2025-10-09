// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Action = { href: string; label: string };

type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  kicker?: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
  align?: "left" | "center";
  overlay?: boolean;
  height?: 250 | 300 | 400;
  fullBleed?: boolean;
  actions?: Action[];
  children?: React.ReactNode;
};

export default function Hero({
  title,
  subtitle,
  kicker,
  imageSrc,
  imageAlt = "",
  align = "left",
  overlay = true,
  height = 300,
  fullBleed = false,
  actions = [],
  children,
}: Props) {
  const hClass =
    height === 400 ? "hero-h400" :
    height === 250 ? "hero-h250" : "hero-h300";
  const alignClass = align === "center" ? "hero-center" : "";
  const bleedClass = fullBleed ? "hero--full" : "";

  return (
    <section className={`hero ${hClass} ${bleedClass}`}>
      {/* media (ảnh nền) */}
      <div className="hero-media">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="hero-img"
        />
        {overlay && <div className="hero-overlay" />}
      </div>

      {/* nội dung */}
      <div className={`hero-content ${alignClass}`}>
        {kicker && <div className="hero-kicker reveal-1">{kicker}</div>}
        <h1 className="hero-title reveal-2">{title}</h1>
        {subtitle && <p className="hero-subtitle reveal-3">{subtitle}</p>}

        {actions.length > 0 && (
          <div className="hero-actions reveal-4">
            {actions.map((a) => (
              <Link key={a.href} className="btn primary" href={a.href}>
                {a.label}
              </Link>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
