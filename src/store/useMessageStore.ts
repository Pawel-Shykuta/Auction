import { create } from "zustand";

export interface Message {
  id: number;
  auctionId: string;
  heading: string;
  description: string;
  date: string;
  link: string;
}

interface MessageStore {
  messages: Message[];
  addMessage: (message: Message) => void;
}

export const useMessageStore = create<MessageStore>()((set) => ({
  messages: [
    {
      id: 1,
      auctionId: "1",
      heading: "You've been outbid",
      description: "Someone placed a higher bid",
      date: "2 hours ago",
      link: "",
    },
    {
      id: 2,
      auctionId: "2",
      heading: "Auction ending in 30 min",
      description: "Rolex Submariner",
      date: "30 min",
      link: "",
    },
    {
      id: 3,
      auctionId: "3",
      heading: "You won the auction!",
      description: "Rolex Submariner — $15,750",
      date: "Yesterday",
      link: "",
    },
  ],

  addMessage: (message) =>
    set((state) => ({
      messages: [message, ...state.messages],
    })),
}));
