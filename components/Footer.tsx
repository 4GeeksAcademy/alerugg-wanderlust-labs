import Link from "next/link";

const footerNav = [
  { href: "/", label: "Inicio" },
  { href: "/experiences", label: "Experiencias" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/profile", label: "Perfil" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-50 text-stone-700">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        {/* Brand & description */}
        <div className="max-w-xs">
          <Link
            href="/"
            className="text-lg font-bold tracking-normal text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
          >
            Wanderlust <span className="text-stone-600">Labs</span>
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-stone-500">
            Descubre experiencias de viaje únicas por todo el mundo. Explora,
            sueña y planifica tu próxima aventura.
          </p>
        </div>

        {/* Navigation links */}
        <nav aria-label="Enlaces del pie" className="shrink-0">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-500">
            Navegación
          </h3>
          <ul className="flex flex-col gap-2">
            {footerNav.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-stone-600 transition-colors hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-200 px-4 py-4 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-7xl text-center text-xs text-stone-400">
          &copy; 2026 Wanderlust Labs &mdash; Proyecto educativo sin
          fines comerciales. Datos simulados con fines de demostración.
        </p>
      </div>
    </footer>
  );
}