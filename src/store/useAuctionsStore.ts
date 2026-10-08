import { create } from "zustand";
import type { Auction } from "@/entities/auction/auction.types";
import { auctions as initialAuctions } from "@/entities/auction/auction.data";
import { useBalanceStore } from "@/store/useBalanceStore";

import { validateBid } from "@/features/auction-bidding/model/validateBid";

export type PlaceBidResult =
  | { success: true; auction: Auction }
  | {
      success: false;
      reason: "NOT_FOUND" | "FINISHED" | "TOO_LOW" | "INSUFFICIENT_FUNDS";
    };

interface AuctionsState {
  auctions: Auction[];
  placeBid: (id: string, bid: number, bidderName?: string) => PlaceBidResult;
  resetAuctions: () => void;
}

export const useAuctionsStore = create<AuctionsState>()((set, get) => ({
  auctions: structuredClone(initialAuctions),

  placeBid: (id, bid, bidderName = "Me") => {
    const auction = get().auctions.find((item) => item.id === id);

    if (!auction) {
      return { success: false, reason: "NOT_FOUND" };
    }

    const validationResult = validateBid(auction, bid);

    if (!validationResult.valid) {
      return {
        success: false,
        reason: validationResult.reason,
      };
    }

    if (!useBalanceStore.getState().payment(bid)) {
      return { success: false, reason: "INSUFFICIENT_FUNDS" };
    }

    const updatedAuction: Auction = {
      ...auction,
      currentBid: bid,
      totalBids: auction.totalBids + 1,
      bidHistory: [
        {
          id: String(Date.now()),
          bidderName,
          amount: bid,
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

  resetAuctions: () => set({ auctions: structuredClone(initialAuctions) }),
}));
