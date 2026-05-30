import { create } from "zustand";

interface HeaderState {
  headerIsOpen: boolean;
  searchingText: string;
  setSearchingText: (text: string) => void;
  setHeaderIsOpen: (el: boolean) => void;
  changeHeaderIsOpen: () => void;
}

export const useHeaderStore = create<HeaderState>()((set) => ({
  headerIsOpen: false,
  searchingText: "",

  setSearchingText: (text: string) => set({ searchingText: text }),
  setHeaderIsOpen: (isOpen: boolean) => set({ headerIsOpen: isOpen }),
  changeHeaderIsOpen: () =>
    set((state) => ({ headerIsOpen: !state.headerIsOpen })),
}));
