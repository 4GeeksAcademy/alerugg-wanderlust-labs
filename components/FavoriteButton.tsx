"use client";

import { useFavorites } from "@/context/FavoritesContext";

export default function FavoriteButton({ id }: { id: number }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const selected = isFavorite(id);
  const label = selected ? "Quitar de favoritos" : "Añadir a favoritos";

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={selected}
      title={label}
      onClick={() => (selected ? removeFavorite(id) : addFavorite(id))}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-rose-700 shadow-sm transition-colors hover:bg-rose-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
    >
      <span aria-hidden="true">{selected ? "\u2665" : "\u2661"}</span>
    </button>
  );
}