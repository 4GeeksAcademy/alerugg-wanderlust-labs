import ExperienceCard from "@/components/ExperienceCard";
import type { Experience } from "@/types/experience";

export default function ExperienceGrid({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}