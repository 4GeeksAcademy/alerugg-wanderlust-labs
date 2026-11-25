
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import { categoryLabels } from "@/data/localizedExperiences";
import type { Experience } from "@/types/experience";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const price = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(experience.price);

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-stone-200/80 bg-white text-stone-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
      {/* Imagen */}
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Link
          href={`/experiences/${experience.id}`}
          aria-label={`Ver ${experience.title}`}
          className="block h-full w-full"
        >
          <Image
            src={experience.imageUrl}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <div className="absolute right-3 top-3">
          <FavoriteButton id={experience.id} />
        </div>

        <div className="absolute bottom-3 left-3">
          <span className="rounded-full border border-white/40 bg-white/95 px-3 py-1.5 text-xs font-semibold text-emerald-900 shadow-sm backdrop-blur-sm">
            {categoryLabels[experience.category]}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-5">
        {/* Valoración */}
        <div className="flex items-center gap-1.5 text-sm">
          <span className="text-amber-500" aria-hidden="true">
            ★
          </span>
          <span
            className="font-semibold text-stone-800"
            aria-label={`Valoración: ${experience.rating} de 5`}
          >
            {experience.rating.toFixed(1)}
          </span>
          <span className="text-stone-400">/ 5</span>
        </div>

        {/* Título */}
        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-stone-900 transition-colors group-hover:text-emerald-800">
          <Link href={`/experiences/${experience.id}`}>
            {experience.title}
          </Link>
        </h3>

        {/* Destino */}
        <p className="mt-2 flex items-center gap-1.5 text-sm text-stone-500">
          <svg
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-emerald-700"
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

        {/* Descripción */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-stone-600">
          {experience.description}
        </p>

        {/* Precio y acción */}
        <div className="mt-auto flex items-end justify-between gap-3 border-t border-stone-100 pt-4">
          <div>
            <p className="text-xs text-stone-500">Precio por persona</p>
            <p className="mt-0.5 text-xl font-bold tracking-tight text-stone-950">
              {price}
            </p>
          </div>

          <Link
            href={`/experiences/${experience.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 transition-colors hover:text-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
          >
            Descubrir
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
