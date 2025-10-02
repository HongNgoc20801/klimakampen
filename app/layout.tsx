// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import { IBM_Plex_Sans } from "next/font/google";

const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400","500","700"] });

export const metadata: Metadata = {
  title: "Klimakampen",
  description: "Tiltak, verstinger og klimakalkulator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body className={plex.className}>
        <Header />
        <main className="mx-auto max-w-6xl px-6 py-6">{children}</main>
      </body>
    </html>
  );
}
