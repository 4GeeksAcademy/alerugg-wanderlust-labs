"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface FavoritesContextValue {
  favoriteIds: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  function addFavorite(id: number) {
    setFavoriteIds((current) =>
      current.includes(id) ? current : [...current, id],
    );
  }

  function removeFavorite(id: number) {
    setFavoriteIds((current) => current.filter((favoriteId) => favoriteId !== id));
  }

  function isFavorite(id: number) {
    return favoriteIds.includes(id);
  }

  return (
    <FavoritesContext.Provider
      value={{ favoriteIds, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return context;
}