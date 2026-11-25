import type { Experience } from "@/types/experience";

export interface ExperienceFilters {
  query: string;
  category: string;
  destination: string;
}

export function useExperiences(experiences: Experience[], filters: ExperienceFilters) {
  const query = filters.query.trim().toLocaleLowerCase();

  return experiences.filter((experience) =>
    experience.title.toLocaleLowerCase().includes(query) &&
    (!filters.category || experience.category === filters.category) &&
    (!filters.destination || experience.destination === filters.destination),
  );
}