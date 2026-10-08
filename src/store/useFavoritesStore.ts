import { create } from "zustand";

interface FavoritesState {
  likedIds: string[];
  likedMenuOpen: boolean;

  addLiked: (id: string) => void;
  removeLiked: (id: string) => void;
  changeLikedMenuOpen: () => void;
}

export const useFavoritesStore = create<FavoritesState>()((set) => ({
  likedIds: [],
  likedMenuOpen: false,

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

  changeLikedMenuOpen: () =>
    set((state) => ({ likedMenuOpen: !state.likedMenuOpen })),
}));
