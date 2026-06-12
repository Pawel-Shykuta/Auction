import { useAppStore } from "@/store/useAppStore";
import { useHeaderStore } from "@/store/useHeaderStore";
import { useItemStore } from "@/store/useItemStore";
import { useMemo } from "react";
import { auctions } from "@/data/auctions";

export const useFilteredAuctions = () => {
  const filter = useAppStore((state) => state.filter);
  const sortBy = useAppStore((state) => state.sortBy);
  const priceMin = useAppStore((state) => state.priceMin);
  const priceMax = useAppStore((state) => state.priceMax);
  const searchingText = useHeaderStore((state) => state.searchingText);
  const liked = useItemStore((state) => state.liked);
  const likedMenuOpen = useHeaderStore((state) => state.likedMenuOpen);

  const filtredItems = useMemo(() => {
    if (!filter || filter === "All") return auctions;
    return auctions.filter((el) => el.category === filter);
  }, [filter]);

  const sortedItems = useMemo(() => {
    const itemsCopy = [...filtredItems];

    if (!sortBy || sortBy === "Most Recent") return itemsCopy;

    if (sortBy === "Price: Low to High") {
      return itemsCopy.sort((a, b) => a.currentBid - b.currentBid);
    }

    if (sortBy === "Price: High to Low") {
      return itemsCopy.sort((a, b) => b.currentBid - a.currentBid);
    }

    if (sortBy === "Ending Soon") {
      return itemsCopy.sort((a, b) => Number(a.endTime) - Number(b.endTime));
    }

    return itemsCopy;
  }, [filtredItems, sortBy]);

  const sortedPrices = useMemo(() => {
    if (priceMin === null && priceMax === null) return sortedItems;

    return sortedItems.filter(
      (el) =>
        el.currentBid >= (priceMin ?? 0) &&
        el.currentBid <= (priceMax ?? Infinity),
    );
  }, [sortedItems, priceMin, priceMax]);

  const searchedItems = useMemo(() => {
    if (!searchingText) return sortedPrices;

    return sortedPrices.filter((el) =>
      el.title.toLowerCase().includes(searchingText.toLowerCase()),
    );
  }, [sortedPrices, searchingText]);

  const visibleItems = useMemo(() => {
    return likedMenuOpen ? liked : searchedItems;
  }, [likedMenuOpen, liked, searchedItems]);

  return visibleItems;
};
