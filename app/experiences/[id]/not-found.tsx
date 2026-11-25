import Link from "next/link";

export default function ExperienceNotFound() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-3xl font-semibold text-stone-950">Experiencia no encontrada</h1>
      <p className="mt-3 text-stone-600">No hemos encontrado esa experiencia.</p>
      <Link href="/experiences" className="mt-6 inline-block font-medium text-emerald-800 underline">Volver a experiencias</Link>
    </main>
  );
}