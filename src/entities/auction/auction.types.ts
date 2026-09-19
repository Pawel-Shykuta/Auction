export interface BidHistory {
  id: number;
  name: string;
  price: string;
}

export interface Auctions {
  id: string;
  title: string;
  description: string;
  image: string;
  currentBid: number;
  startingBid: number;
  totalBids: number;
  endTime: Date | string | number;
  category: string;
  seller: string;
  condition: string;
  bidHistory: BidHistory[];
}
