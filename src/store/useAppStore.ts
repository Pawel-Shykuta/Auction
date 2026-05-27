import { create } from "zustand";

interface AppState {
  filter: string | null;
  sortBy: string | null;
  priceMax: number | null;
  priceMin: number | null;
  setFilter: (el: string | null) => void;
  setSortBy: (el: string | null) => void;
  setPriceMin: (el: number | null) => void;
  setPriceMax: (el: number | null) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  filter: null,
  sortBy: null,
  priceMin: null,
  priceMax: null,

  setSortBy: (el) => set({ sortBy: el }),
  setFilter: (el) => set({ filter: el }),
  setPriceMin: (el) => set({ priceMin: el }),
  setPriceMax: (el) => set({ priceMax: el }),
}));
