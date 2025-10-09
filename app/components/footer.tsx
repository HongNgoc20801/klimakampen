// components/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="kl-footer" role="contentinfo">
      <div className="kl-footer-row container">
        <div className="kl-footer-left">
          <span className="brand">Klimakampen</span>
          <span aria-hidden="true" className="sep">•</span>
          <span> {year}</span>
        </div>

        <nav className="kl-footer-links" aria-label="Bunnmeny">
          <Link href="/">Klimatiltak</Link>
          <Link href="/verstinger">Klima-verstinger</Link>
          <Link href="/kalkulator">Klimakalkulator</Link>
        </nav>

        
      </div>
    </footer>
  );
}
