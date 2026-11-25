
"use client";

import type { ExperienceFilters as Filters } from "@/hooks/useExperiences";
import { categoryLabels } from "@/data/localizedExperiences";
import type { Experience } from "@/types/experience";

interface ExperienceFiltersProps {
  filters: Filters;
  categories: Experience["category"][];
  destinations: string[];
  onChange: (field: keyof Filters, value: string) => void;
}

const categoryIcons: Record<Experience["category"], string> = {
  Adventure: "🏔️",
  Culture: "🎭",
  Food: "🍝",
  Wellness: "🧘",
  Nature: "🌿",
};

export default function ExperienceFilters({
  filters,
  categories,
  destinations,
  onChange,
}: ExperienceFiltersProps) {
  const controlClass =
    "mt-2 h-12 w-full rounded-xl border border-stone-200 bg-white px-4 text-sm text-stone-800 shadow-sm transition-all duration-200 hover:border-stone-300 focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-600/10";

  return (
    <section className="rounded-2xl border border-stone-200 bg-stone-50/80 p-5 shadow-sm sm:p-6">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Descubre algo diferente
        </p>

        <h2 className="mt-1 text-xl font-semibold tracking-tight text-stone-900">
          Encuentra tu próxima experiencia
        </h2>

        <p className="mt-1 text-sm text-stone-500">
          Explora actividades y encuentra algo que te inspire.
        </p>
      </div>

      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        {/* Buscador */}
        <label className="text-sm font-semibold text-stone-700">
          Buscar por título
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>

            <input
              className={`${controlClass} pl-11`}
              type="search"
              value={filters.query}
              onChange={(event) =>
                onChange("query", event.target.value)
              }
              placeholder="¿Qué te gustaría descubrir?"
            />
          </div>
        </label>

        {/* Destino */}
        <label className="text-sm font-semibold text-stone-700">
          Destino
          <select
            className={controlClass}
            value={filters.destination}
            onChange={(event) =>
              onChange("destination", event.target.value)
            }
          >
            <option value="">Todos los destinos</option>

            {destinations.map((destination) => (
              <option key={destination} value={destination}>
                {destination}
              </option>
            ))}
          </select>
        </label>

        {/* Categorías */}
        <div className="sm:col-span-2">
          <span className="text-sm font-semibold text-stone-700">
            Categoría
          </span>

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => onChange("category", "")}
              aria-pressed={!filters.category}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                !filters.category
                  ? "border-emerald-700 bg-emerald-700 text-white shadow-sm"
                  : "border-stone-200 bg-white text-stone-600 hover:border-emerald-600 hover:text-emerald-700"
              }`}
            >
              Todas
            </button>

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => onChange("category", category)}
                aria-pressed={filters.category === category}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  filters.category === category
                    ? "border-emerald-700 bg-emerald-700 text-white shadow-sm"
                    : "border-stone-200 bg-white text-stone-600 hover:border-emerald-600 hover:text-emerald-700"
                }`}
              >
                <span className="mr-1.5" aria-hidden="true">
                  {categoryIcons[category]}
                </span>

                {categoryLabels[category]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

