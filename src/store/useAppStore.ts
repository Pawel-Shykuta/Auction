import { create } from "zustand";

interface AppState {
  filter: string | null;
  setFilter: (el: string | null) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  filter: null,

  setFilter: (el) => set({ filter: el }),
}));
