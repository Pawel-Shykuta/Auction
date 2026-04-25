import type { Auctions } from "@/data/auctions";
import { create } from "zustand";

interface ItemState {
  activeItem: Auctions | null;
  setActiveItem: (el: Auctions | null) => void;
  clearActiveItem: () => void;
}

export const useItemStore = create<ItemState>()((set) => ({
  activeItem: null,
  setActiveItem: (el) => set({ activeItem: el }),
  clearActiveItem: () => set({ activeItem: null }),
}));
