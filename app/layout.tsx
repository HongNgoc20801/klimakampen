// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import "./components/Hero.css";  


export const metadata: Metadata = {
  title: "Klimakampen",
  description: "Eksamen – Klimatiltak, Verstinger, Kalkulator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body>
        <Header />
        {/* menu mobile – phải nằm NGAY SAU header để selector :has hoạt động */}
        <nav id="menu" className="kl-menu container">
          <a href="/">Klimatiltak</a>
          <a href="/verstinger">Klima-verstinger</a>
          <a href="/kalkulator">Klimakalkulator</a>
        </nav>

        <main className="kl-main container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
