"use client";

import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-serif text-3xl font-semibold text-stone-950">Perfil</h1>
      <div className="mt-8 border-t border-stone-200 py-6">
        <p className="text-sm font-medium text-emerald-800">Viajero</p>
        <h2 className="mt-2 text-xl font-semibold text-stone-950">Alex Morgan</h2>
        <p className="mt-2 text-stone-600">Amante de los viajes</p>
        <Link href="/favorites" className="mt-6 inline-block font-medium text-emerald-800 underline">
          {favoriteIds.length} experiencias favoritas
        </Link>
      </div>
    </main>
  );
}