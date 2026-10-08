import { create } from "zustand";

interface HeaderState {
  headerIsOpen: boolean;
  changeHeaderIsOpen: () => void;
  setHeaderIsOpen: (isOpen: boolean) => void;
}

export const useHeaderStore = create<HeaderState>()((set) => ({
  headerIsOpen: false,

  setHeaderIsOpen: (isOpen) => set({ headerIsOpen: isOpen }),
  changeHeaderIsOpen: () =>
    set((state) => ({ headerIsOpen: !state.headerIsOpen })),
}));
