import { create } from "zustand";

interface HeaterState {
  headerIsOpen: boolean;
  setHeaderIsOpen: (el: boolean) => void;
  changeHeaderIsOpen: () => void;
}

export const useHeaderStore = create<HeaterState>()((set) => ({
  headerIsOpen: false,
  setHeaderIsOpen: (isOpen: boolean) => set({ headerIsOpen: isOpen }),
  changeHeaderIsOpen: () =>
    set((state) => ({ headerIsOpen: !state.headerIsOpen })),
}));
