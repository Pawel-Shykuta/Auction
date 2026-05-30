import styles from "./auctions.module.scss";

import { auctions } from "@/data/auctions";
import { useEffect, useMemo, useState } from "react";
import ActionCard from "./components/ActionCard";
import { useAppStore } from "@/store/useAppStore";
import { useHeaderStore } from "@/store/useHeaderStore";

export const Auctions = () => {
  const [now, setNow] = useState(() => Date.now());
  const filter = useAppStore((state) => state.filter);
  const sortBy = useAppStore((state) => state.sortBy);
  const priceMin = useAppStore((state) => state.priceMin);
  const priceMax = useAppStore((state) => state.priceMax);
  const searchingText = useHeaderStore((state) => state.searchingText);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.auctions_container}>
      {searchedItems.length > 0 ? (
        searchedItems.map((el) => <ActionCard key={el.id} el={el} now={now} />)
      ) : (
        <h1>There are currently no active auctions.</h1>
      )}
    </section>
  );
};
