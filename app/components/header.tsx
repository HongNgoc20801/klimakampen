"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navheader() {
  const pathname = usePathname();

  useEffect(() => {
    // đóng menu khi điều hướng
    const cb = document.getElementById("cbklima") as HTMLInputElement | null;
    if (cb) cb.checked = false;
  }, [pathname]);

  return (
    <header className="kl-header">
      <Link className="brand" href="/">Klimakampen</Link>

      <nav className="kl-links" aria-label="Hovedmeny">
        <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>Klimatiltak</Link>
        <Link href="/verstinger" aria-current={pathname.startsWith("/verstinger") ? "page" : undefined}>Klima-verstinger</Link>
        <Link href="/kalkulator" aria-current={pathname.startsWith("/kalkulator") ? "page" : undefined}>Klimakalkulator</Link>
      </nav>

      {/* Burger (ẩn trên desktop qua CSS) */}
      <div className="kl-klima">
        <input type="checkbox" id="cbklima" aria-label="Åpne meny" />
        <label htmlFor="cbklima" id="lblklima" aria-hidden="true">
          <div></div><div></div><div></div>
        </label>
      </div>
    </header>
  );
}
