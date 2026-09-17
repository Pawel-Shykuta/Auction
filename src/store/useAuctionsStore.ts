import { create } from "zustand";
import type { Auctions } from "@/data/auctions";
import { auctions as initialAuctions } from "@/data/auctions";
import { useBalanceStore } from "@/store/useBalanceStore";

const MIN_BID_STEP = 50;

export type PlaceBidResult =
  | { success: true; auction: Auctions }
  | {
      success: false;
      reason: "NOT_FOUND" | "FINISHED" | "TOO_LOW" | "INSUFFICIENT_FUNDS";
    };

interface AuctionsState {
  auctions: Auctions[];
  placeBid: (
    id: string,
    bid: number,
    bidderName?: string,
  ) => PlaceBidResult;
  resetAuctions: () => void;
}

export const useAuctionsStore = create<AuctionsState>()((set, get) => ({
  auctions: JSON.parse(JSON.stringify(initialAuctions)),

  placeBid: (id, bid, bidderName = "Me") => {
    const auction = get().auctions.find((item) => item.id === id);

    if (!auction) {
      return { success: false, reason: "NOT_FOUND" };
    }

    if (new Date(auction.endTime).getTime() <= Date.now()) {
      return { success: false, reason: "FINISHED" };
    }

    if (!Number.isFinite(bid) || bid < auction.currentBid + MIN_BID_STEP) {
      return { success: false, reason: "TOO_LOW" };
    }

    if (!useBalanceStore.getState().payment(bid)) {
      return { success: false, reason: "INSUFFICIENT_FUNDS" };
    }

    const updatedAuction: Auctions = {
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

    set((state) => ({
      auctions: state.auctions.map((item) =>
        item.id === id ? updatedAuction : item,
      ),
    }));

    return { success: true, auction: updatedAuction };
  },

  resetAuctions: () =>
    set({ auctions: JSON.parse(JSON.stringify(initialAuctions)) }),
}));
