import type {
  AuctionCategory,
  AuctionSort,
} from "@/entities/auction/auction.types";

export const CATEGORIES: AuctionCategory[] = [
  "All",
  "Watches",
  "Technology",
  "Art",
  "Vehicles",
  "Fashion",
  "Jewelry",
  "Photography",
];

export const SORT_OPTIONS: AuctionSort[] = [
  "Ending Soon",
  "Price: Low to High",
  "Price: High to Low",
  "Most Recent",
];

export const LOCALE = "en-US";
