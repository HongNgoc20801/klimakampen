"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const headerLinks = [
  { href: "/", label: "Tiltak" },
  { href: "/verstinger", label: "Klima-verstinger" },
  { href: "/kalkulator", label: "Klimakalkulator" },
];

export default function Header() {
  const pathname = usePathname();

  // Active khi đúng path hoặc route con, ví dụ /tiltak/abc
  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  const linkStyle = (path: string) =>
    `relative px-3 py-2 text-sm md:text-base font-medium transition-colors ${
      isActive(path)
        ? "text-zinc-50 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-emerald-400"
        : "text-zinc-300 hover:text-zinc-100"
    }`;

  return (
    <header>
      <nav className="bg-zinc-900/95 backdrop-blur border-b border-zinc-800 w-full">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-4 items-center px-6 py-3">
          {/* Logo tối giản, chữ thường, nghiêm túc */}
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div
              aria-hidden="true"
              className="h-8 w-8 rounded-md bg-emerald-500 inline-flex items-center justify-center text-zinc-900 font-extrabold"
              title="Klimakampen"
            >
              K
            </div>
            <span className="text-lg md:text-xl font-semibold text-zinc-100 tracking-tight">
              Klimakampen
            </span>
          </div>

          {/* Links */}
          <div className="flex justify-center sm:justify-end flex-wrap gap-2 md:gap-4">
            {headerLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={linkStyle(href)}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
