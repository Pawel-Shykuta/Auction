import { useAuctionsStore } from "@/store/useAuctionsStore";
import { useAuctionDetailsStore } from "@/store/useAuctionDetailsStore";
export const useActiveAuction = () => {
  const activeItemId = useAuctionDetailsStore((state) => state.activeItemId);
  const auctions = useAuctionsStore((state) => state.auctions);

  return auctions.find((auction) => auction.id === activeItemId) ?? null;
};
