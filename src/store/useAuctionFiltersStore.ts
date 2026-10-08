import { create } from "zustand";

import type {
  AuctionCategory,
  AuctionSort,
} from "@/entities/auction/auction.types";

interface AuctionFiltersState {
  filter: AuctionCategory | null;
  sortBy: AuctionSort | null;
  priceMax: number | null;
  priceMin: number | null;
  searchText: string;

  setFilter: (filter: AuctionCategory | null) => void;
  setSortBy: (sortBy: AuctionSort | null) => void;
  setPriceMin: (priceMin: number | null) => void;
  setPriceMax: (priceMax: number | null) => void;
  setSearchText: (searchText: string) => void;
}

export const useAuctionFiltersStore = create<AuctionFiltersState>()((set) => ({
  filter: null,
  sortBy: null,
  priceMax: null,
  priceMin: null,
  searchText: "",

  setFilter: (filter) => set({ filter }),
  setSortBy: (sortBy) => set({ sortBy }),
  setPriceMin: (priceMin) => set({ priceMin }),
  setPriceMax: (priceMax) => set({ priceMax }),
  setSearchText: (searchText) => set({ searchText }),
}));
