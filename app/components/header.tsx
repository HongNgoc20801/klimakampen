// components/Header.tsx
'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    // đóng menu khi điều hướng (pathname đổi)
    const cb = document.getElementById('cbklima') as HTMLInputElement | null;
    if (cb) cb.checked = false;
  }, [pathname]);

  return (
    <header className="kl-header">
      
      <Link className="brand" href="/">Klimakampen</Link>
      

      {/* Link desktop */}
      <nav className="kl-links" aria-label="Hovedmeny">
        <Link href="/">Klimatiltak</Link>
        <Link href="/verstinger">Klimaverstinger</Link>
        <Link href="/kalkulator">Klimakalkulator</Link>
      </nav>

      {/* for mobile */}
      <div className="kl-klima">
        <input type="checkbox" id="cbklima" aria-label="Åpne meny" />
        <label htmlFor="cbklima" id="lblklima" aria-hidden="true">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </div>
    </header>
  );
}
