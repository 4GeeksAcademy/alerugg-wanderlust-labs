import { Suspense } from "react";
import ExperienceCatalog from "@/components/ExperienceCatalog";
import { localizedExperiences as experiences } from "@/data/localizedExperiences";

export default function ExperiencesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-serif text-3xl font-semibold text-stone-950">Experiencias</h1>
      <p className="mb-8 mt-2 text-stone-600">Descubre algo nuevo en cualquier lugar del mundo.</p>
      <Suspense fallback={<p>Cargando experiencias...</p>}>
        <ExperienceCatalog experiences={experiences} />
      </Suspense>
    </main>
  );
}