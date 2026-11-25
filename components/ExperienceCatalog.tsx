"use client";

import { useSearchParams } from "next/navigation";
import ExperienceFilters from "@/components/ExperienceFilters";
import ExperienceGrid from "@/components/ExperienceGrid";
import { useExperiences, type ExperienceFilters as Filters } from "@/hooks/useExperiences";
import type { Experience } from "@/types/experience";

export default function ExperienceCatalog({ experiences }: { experiences: Experience[] }) {
  const searchParams = useSearchParams();
  const filters = {
    query: searchParams.get("q") ?? "",
    category: searchParams.get("category") ?? "",
    destination: searchParams.get("destination") ?? "",
  };
  const filtered = useExperiences(experiences, filters);
  const categories = [...new Set(experiences.map((experience) => experience.category))].sort();
  const destinations = [...new Set(experiences.map((experience) => experience.destination))].sort();

  function updateFilter(field: keyof Filters, value: string) {
    const url = new URL(window.location.href);
    const parameter = field === "query" ? "q" : field;
    if (value) url.searchParams.set(parameter, value);
    else url.searchParams.delete(parameter);
    if (url.href !== window.location.href) window.history.pushState(null, "", url);
  }

  return (
    <>
      <ExperienceFilters filters={filters} categories={categories} destinations={destinations} onChange={updateFilter} />
      <p className="my-6 text-sm text-stone-600" aria-live="polite">{filtered.length} experiencias</p>
      {filtered.length > 0 ? (
        <ExperienceGrid experiences={filtered} />
      ) : (
        <p className="border-t border-stone-200 py-10 text-stone-600">No hay experiencias que coincidan con tu búsqueda.</p>
      )}
    </>
  );
}