import { create } from "zustand";

interface HeaderState {
  headerIsOpen: boolean;
  searchingText: string;
  likedMenuOpen: boolean;

  setSearchingText: (text: string) => void;
  setHeaderIsOpen: (el: boolean) => void;
  changeHeaderIsOpen: () => void;
  changeLikedMenuOpen: () => void;
}

export const useHeaderStore = create<HeaderState>()((set) => ({
  headerIsOpen: false,
  searchingText: "",

  likedMenuOpen: false,

  setSearchingText: (text: string) => set({ searchingText: text }),
  setHeaderIsOpen: (isOpen: boolean) => set({ headerIsOpen: isOpen }),
  changeHeaderIsOpen: () =>
    set((state) => ({ headerIsOpen: !state.headerIsOpen })),
  changeLikedMenuOpen: () =>
    set((state) => ({ likedMenuOpen: !state.likedMenuOpen })),
}));
