import { create } from "zustand";

export interface Message {
  id: number;
  Name: string;
  title: string;
  date: string;
  link: string;
  auctionId: number;
}

interface MessageStore {
  messages: Message[];
  addMessage: (message: Message) => void;
}

export const useMessageStore = create<MessageStore>()((set) => ({
  messages: [
    {
      id: 1,
      auctionId: 1,
      Name: "Youve been outbid",
      title: "Someone placed a higher bid",
      date: "2 hours ago",
      link: "",
    },
    {
      id: 2,
      auctionId: 2,
      Name: "Auction ending in 30 min",
      title: "Rolex Submariner",
      date: "30 min",
      link: "",
    },
    {
      id: 3,
      auctionId: 3,
      Name: "You won the auction!",
      title: "Rolex Submariner — $15,750",
      date: "Yesterday",
      link: "",
    },
  ],

  addMessage: (message) =>
    set((state) => ({
      messages: [message, ...state.messages],
    })),
}));
