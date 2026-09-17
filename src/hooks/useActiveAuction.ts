import { useAuctionsStore } from "@/store/useAuctionsStore";
import { useItemStore } from "@/store/useItemStore";

export const useActiveAuction = () => {
  const activeItemId = useItemStore((state) => state.activeItemId);
  const auctions = useAuctionsStore((state) => state.auctions);

  return auctions.find((auction) => auction.id === activeItemId) ?? null;
};
