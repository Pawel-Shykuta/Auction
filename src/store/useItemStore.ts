import type { Auctions } from "@/data/auctions";
import { create } from "zustand";

interface ItemState {
  activeItem: Auctions | null;
  liked: Auctions[];

  setActiveItem: (el: Auctions | null) => void;
  clearActiveItem: () => void;
  addLiked: (el: Auctions) => void;
  removeLiked: (id: string) => void;
  updateActiveItem: (el: Auctions) => void;
}

export const useItemStore = create<ItemState>()((set) => ({
  activeItem: null,
  liked: [],

  addLiked: (el) => set((state) => ({ liked: [...state.liked, el] })),

  removeLiked: (id) =>
    set((state) => ({ liked: state.liked.filter((item) => item.id !== id) })),

  setActiveItem: (el) => set({ activeItem: el }),
  clearActiveItem: () => set({ activeItem: null }),
  updateActiveItem: (el) => set({ activeItem: el }),
}));
