import { create } from "zustand";

interface ItemState {
  activeItemId: string | null;
  likedIds: string[];

  setActiveItemId: (id: string | null) => void;
  clearActiveItem: () => void;
  addLiked: (id: string) => void;
  removeLiked: (id: string) => void;
}

export const useItemStore = create<ItemState>()((set) => ({
  activeItemId: null,
  likedIds: [],

  addLiked: (id) =>
    set((state) =>
      state.likedIds.includes(id)
        ? state
        : { likedIds: [...state.likedIds, id] },
    ),

  removeLiked: (id) =>
    set((state) => ({
      likedIds: state.likedIds.filter((likedId) => likedId !== id),
    })),

  setActiveItemId: (id) => set({ activeItemId: id }),
  clearActiveItem: () => set({ activeItemId: null }),
}));
