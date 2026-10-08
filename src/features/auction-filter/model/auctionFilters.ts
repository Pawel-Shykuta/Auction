import type {
  Auction,
  AuctionCategory,
  AuctionSort,
} from "@/entities/auction/auction.types";

export interface AuctionFilterOptions {
  category: AuctionCategory | null;
  sortBy: AuctionSort | null;
  priceMin: number | null;
  priceMax: number | null;
  searchText: string;
}

export function filterByCategory(
  auctions: Auction[],
  category: AuctionCategory | null,
): Auction[] {
  if (!category || category === "All") {
    return auctions;
  }

  return auctions.filter((auction) => auction.category === category);
}

export function sortAuctions(
  auctions: Auction[],
  sortBy: AuctionSort | null,
): Auction[] {
  const sortedAuctions = [...auctions];

  if (!sortBy || sortBy === "Most Recent") {
    return sortedAuctions;
  }

  if (sortBy === "Price: Low to High") {
    return sortedAuctions.sort(
      (first, second) => first.currentBid - second.currentBid,
    );
  }

  if (sortBy === "Price: High to Low") {
    return sortedAuctions.sort(
      (first, second) => second.currentBid - first.currentBid,
    );
  }

  if (sortBy === "Ending Soon") {
    return sortedAuctions.sort(
      (first, second) =>
        new Date(first.endTime).getTime() - new Date(second.endTime).getTime(),
    );
  }

  return sortedAuctions;
}

export function filterByPrice(
  auctions: Auction[],
  priceMin: number | null,
  priceMax: number | null,
): Auction[] {
  if (priceMin === null && priceMax === null) {
    return auctions;
  }

  return auctions.filter(
    (auction) =>
      auction.currentBid >= (priceMin ?? 0) &&
      auction.currentBid <= (priceMax ?? Infinity),
  );
}

export function searchAuctions(
  auctions: Auction[],
  searchText: string,
): Auction[] {
  if (!searchText) {
    return auctions;
  }

  const normalizedSearchText = searchText.toLowerCase();

  return auctions.filter((auction) =>
    auction.title.toLowerCase().includes(normalizedSearchText),
  );
}

export function filterLikedAuctions(
  auctions: Auction[],
  likedIds: string[],
): Auction[] {
  return auctions.filter((auction) => likedIds.includes(auction.id));
}

export function selectVisibleAuctions(
  auctions: Auction[],
  likedAuctions: Auction[],
  likedMenuOpen: boolean,
  filters: AuctionFilterOptions,
): Auction[] {
  if (likedMenuOpen) {
    return likedAuctions;
  }

  const categoryFiltered = filterByCategory(auctions, filters.category);
  const sorted = sortAuctions(categoryFiltered, filters.sortBy);
  const priceFiltered = filterByPrice(
    sorted,
    filters.priceMin,
    filters.priceMax,
  );

  return searchAuctions(priceFiltered, filters.searchText);
}
