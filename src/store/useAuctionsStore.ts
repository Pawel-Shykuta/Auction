import { create } from "zustand";
import type { Auctions, bidHistory } from "@/data/auctions";
import { auctions as initialAuctions } from "@/data/auctions";

interface AuctionsState {
  auctions: Auctions[];
  updateBid: (id: string, bid: number, bidderName?: string) => Auctions | null;
  resetAuctions: () => void;
}

export const useAuctionsStore = create<AuctionsState>()((set, get) => ({
  auctions: JSON.parse(JSON.stringify(initialAuctions)),

  updateBid: (id, bid, bidderName = "Me") => {
    let updatedAuction: Auctions | null = null;
    set((state) => {
      const auctionsCopy = state.auctions.map((auction) => {
        if (auction.id === id && bid > auction.currentBid) {
          const updated = {
            ...auction,
            currentBid: bid,
            totalBids: auction.totalBids + 1,
            bidHistory: [
              {
                id: Date.now(),
                name: bidderName,
                price: String(bid),
              },
              ...auction.bidHistory,
            ],
          };
          updatedAuction = updated;
          return updated;
        }
        return auction;
      });
      return { auctions: auctionsCopy };
    });
    return updatedAuction;
  },

  resetAuctions: () =>
    set({ auctions: JSON.parse(JSON.stringify(initialAuctions)) }),
}));
