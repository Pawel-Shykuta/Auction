import { create } from "zustand";

interface AuctionDetailsState {
  activeItemId: string | null;
  setActiveItemId: (id: string | null) => void;
  clearActiveItem: () => void;
}

export const useAuctionDetailsStore = create<AuctionDetailsState>()((set) => ({
  activeItemId: null,

  setActiveItemId: (id) => set({ activeItemId: id }),

  clearActiveItem: () => set({ activeItemId: null }),
}));
