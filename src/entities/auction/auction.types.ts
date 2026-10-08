export type AuctionCategory =
  | "All"
  | "Watches"
  | "Technology"
  | "Art"
  | "Vehicles"
  | "Fashion"
  | "Jewelry"
  | "Photography";

export type AuctionSort =
  | "Most Recent"
  | "Price: Low to High"
  | "Price: High to Low"
  | "Ending Soon";

export interface Bid {
  id: string;
  bidderName: string;
  amount: number;
}

export interface Auction {
  id: string;
  title: string;
  description: string;
  image: string;
  currentBid: number;
  startingBid: number;
  totalBids: number;
  endTime: string;
  category: Exclude<AuctionCategory, "All">;
  seller: string;
  condition: string;
  bidHistory: Bid[];
}
