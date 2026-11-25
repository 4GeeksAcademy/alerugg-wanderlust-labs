"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/experiences", label: "Experiencias" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/profile", label: "Perfil" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-stone-200 bg-white text-stone-950">
      <div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link
          href="/"
          className="w-fit py-4 text-lg font-bold tracking-normal text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 md:py-5"
        >
          Wanderlust <span className="text-stone-600">Labs</span>
        </Link>
        <nav aria-label="Navegación principal" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <ul className="flex min-w-max items-center gap-4 sm:gap-8">
            {navigation.map(({ href, label }) => {
              const isActive =
                pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block border-b-2 pb-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 md:py-5 ${
                      isActive
                        ? "border-emerald-700 text-emerald-900"
                        : "border-transparent text-stone-600 hover:border-stone-300 hover:text-stone-950"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}