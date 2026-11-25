
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import FavoriteButton from "@/components/FavoriteButton";
import {
  categoryLabels,
  localizedExperiences as experiences,
} from "@/data/localizedExperiences";

export function generateStaticParams() {
  return experiences.map((experience) => ({
    id: String(experience.id),
  }));
}

async function ExperienceDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experience = experiences.find((item) => String(item.id) === id);

  if (!experience) notFound();

  const price = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(experience.price);

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Navegación */}
      <Link
        href="/experiences"
        className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-emerald-800"
      >
        <span aria-hidden="true">←</span>
        Volver a experiencias
      </Link>

      {/* Cabecera */}
      <header className="mt-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
            {categoryLabels[experience.category]}
          </span>

          <h1 className="mt-4 max-w-4xl font-serif text-3xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-4xl lg:text-5xl">
            {experience.title}
          </h1>

          <p className="mt-4 flex items-center gap-2 text-sm text-stone-500 sm:text-base">
            <svg
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-emerald-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {experience.destination}
          </p>
        </div>

        <div className="self-start sm:self-end">
          <FavoriteButton id={experience.id} />
        </div>
      </header>

      {/* Imagen principal */}
      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-stone-100 shadow-sm lg:aspect-[2/1]">
        <Image
          src={experience.imageUrl}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Información y precio */}
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px] lg:gap-16">
        {/* Descripción */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            Descubre la experiencia
          </p>

          <h2 className="mt-3 font-serif text-2xl font-semibold text-stone-950 sm:text-3xl">
            Una experiencia para recordar
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
            {experience.description}
          </p>

          {/* Ubicación */}
          <div className="mt-10 rounded-xl border border-stone-200 bg-stone-50 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-stone-950">
                  Dónde vivir esta experiencia
                </h3>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  {experience.destination}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(experience.destination)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:text-emerald-600"
                >
                  Consultar ubicación
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tarjeta de precio */}
        <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:sticky lg:top-8">
          <p className="text-sm font-medium text-stone-500">
            Tu próxima aventura
          </p>

          <div className="mt-3">
            <span className="text-3xl font-bold tracking-tight text-stone-950">
              {price}
            </span>
            <span className="ml-1 text-sm text-stone-500">
              / persona
            </span>
          </div>

          <div className="mt-5 flex items-center gap-2 border-y border-stone-100 py-4">
            <span className="text-xl text-amber-500" aria-hidden="true">
              ★
            </span>
            <span className="font-semibold text-stone-900">
              {experience.rating.toFixed(1)}
            </span>
            <span className="text-sm text-stone-500">
              de 5 puntos
            </span>
          </div>

          <div className="mt-5 space-y-3 text-sm text-stone-600">
            <p className="flex items-center gap-2">
              <span className="text-emerald-700">✓</span>
              Experiencia seleccionada
            </p>
            <p className="flex items-center gap-2">
              <span className="text-emerald-700">✓</span>
              Descubre nuevos destinos
            </p>
          </div>

          <Link
            href="/experiences"
            className="mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
          >
            Explorar más experiencias
            <span aria-hidden="true">→</span>
          </Link>

          <p className="mt-4 text-center text-xs leading-5 text-stone-400">
            Proyecto educativo · Sin reservas reales
          </p>
        </aside>
      </div>
    </main>
  );
}

export default function ExperiencePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm text-stone-500">Cargando experiencia...</p>
        </main>
      }
    >
      <ExperienceDetails params={params} />
    </Suspense>
  );
}
