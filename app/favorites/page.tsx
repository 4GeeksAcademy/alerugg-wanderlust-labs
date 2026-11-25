"use client";

import Link from "next/link";
import ExperienceGrid from "@/components/ExperienceGrid";
import { useFavorites } from "@/context/FavoritesContext";
import { localizedExperiences as experiences } from "@/data/localizedExperiences";

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const favorites = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-serif text-3xl font-semibold text-stone-950">Favoritos</h1>
      <p className="mb-8 mt-2 text-stone-600">Tus experiencias guardadas.</p>
      {favorites.length > 0 ? (
        <ExperienceGrid experiences={favorites} />
      ) : (
        <div className="border-t border-stone-200 py-10">
          <p className="text-stone-600">Todavía no tienes experiencias favoritas.</p>
          <Link href="/experiences" className="mt-4 inline-block font-medium text-emerald-800 underline">Explorar experiencias</Link>
        </div>
      )}
    </main>
  );
}