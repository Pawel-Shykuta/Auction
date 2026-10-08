import { useMemo } from "react";

import { useAuctionFiltersStore } from "@/store/useAuctionFiltersStore";
import { useAuctionsStore } from "@/store/useAuctionsStore";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import {
  filterLikedAuctions,
  selectVisibleAuctions,
} from "@/features/auction-filter/model/auctionFilters";

export const useFilteredAuctions = () => {
  const auctions = useAuctionsStore((state) => state.auctions);

  const filter = useAuctionFiltersStore((state) => state.filter);
  const sortBy = useAuctionFiltersStore((state) => state.sortBy);
  const priceMin = useAuctionFiltersStore((state) => state.priceMin);
  const priceMax = useAuctionFiltersStore((state) => state.priceMax);
  const searchText = useAuctionFiltersStore((state) => state.searchText);

  const likedIds = useFavoritesStore((state) => state.likedIds);
  const likedMenuOpen = useFavoritesStore((state) => state.likedMenuOpen);

  return useMemo(() => {
    const likedAuctions = filterLikedAuctions(auctions, likedIds);

    return selectVisibleAuctions(auctions, likedAuctions, likedMenuOpen, {
      category: filter,
      sortBy,
      priceMin,
      priceMax,
      searchText,
    });
  }, [
    auctions,
    filter,
    sortBy,
    priceMin,
    priceMax,
    searchText,
    likedIds,
    likedMenuOpen,
  ]);
};
