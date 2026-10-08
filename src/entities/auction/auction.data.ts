import type { Auction } from "@/entities/auction/auction.types";

export const auctions: Auction[] = [
  // 1. Роскошные часы Rolex
  {
    id: "1",
    title: "Luxury Rolex Submariner Watch",
    description:
      "Automatic stainless steel watch in impeccable condition. Includes original box and authenticity papers.",
    image:
      "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NTk4NjcyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    currentBid: 15750,
    startingBid: 12000,
    totalBids: 23,
    endTime: new Date(Date.now() + 1 * 60 * 60 * 1000).toISOString(),
    category: "Watches",
    seller: "LuxuryTime",
    condition: "Excellent",
    bidHistory: [
      {
        id: "1-3",
        bidderName: "User 3",
        amount: 15750,
      },
      {
        id: "1-2",
        bidderName: "User 2",
        amount: 15000,
      },
      {
        id: "1-1",
        bidderName: "User 1",
        amount: 14000,
      },
    ],
  },

  // 2. Винтажная камера Leica
  {
    id: "2",
    title: "Vintage Leica M3 Camera",
    description:
      "Classic 35mm film camera. Fully functional with Summicron 50mm f/2 lens.",
    image:
      "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FtZXJhfGVufDF8fHx8MTc1OTkzOTQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    currentBid: 3200,
    startingBid: 2500,
    totalBids: 15,
    endTime: new Date(Date.now() + 5 * 60 * 60 * 1000).toISOString(),
    category: "Photography",
    seller: "VintageGear",
    condition: "Very Good",
    bidHistory: [
      {
        id: "2-3",
        bidderName: "User 3",
        amount: 3200,
      },
      {
        id: "2-2",
        bidderName: "User 2",
        amount: 2900,
      },
      {
        id: "2-1",
        bidderName: "User 1",
        amount: 2600,
      },
    ],
  },

  // 3. Ferrari 488 GTB
  {
    id: "3",
    title: "Ferrari 488 GTB 2018",
    description:
      "High-performance sports car with twin-turbo V8 engine. Only 8,500 km, full service history.",
    image:
      "https://images.unsplash.com/photo-1541348263662-e068662d82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzU5ODY5NTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    currentBid: 285000,
    startingBid: 250000,
    totalBids: 47,
    endTime: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
    category: "Vehicles",
    seller: "ExoticCars",
    condition: "Like New",
    bidHistory: [
      {
        id: "3-3",
        bidderName: "User 3",
        amount: 285000,
      },
      {
        id: "3-2",
        bidderName: "User 2",
        amount: 280000,
      },
      {
        id: "3-1",
        bidderName: "User 1",
        amount: 270000,
      },
    ],
  },

  // 4. MacBook Pro
  {
    id: "4",
    title: 'MacBook Pro 16" M3 Max',
    description:
      "Latest generation professional laptop. 64GB RAM, 2TB SSD. Sealed, unopened.",
    image:
      "https://images.unsplash.com/photo-1754928864131-21917af96dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3B8ZW58MXx8fHwxNzU5OTU0Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    currentBid: 3850,
    startingBid: 3200,
    totalBids: 31,
    endTime: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(),
    category: "Technology",
    seller: "TechDeals",
    condition: "New",
    bidHistory: [
      {
        id: "4-3",
        bidderName: "User 3",
        amount: 3850,
      },
      {
        id: "4-2",
        bidderName: "User 2",
        amount: 3600,
      },
      {
        id: "4-1",
        bidderName: "User 1",
        amount: 3400,
      },
    ],
  },

  // 5. Louis Vuitton сумка
  {
    id: "5",
    title: "Louis Vuitton Neverfull MM Bag",
    description:
      "Authentic designer bag in monogram canvas. Includes certificate of authenticity.",
    image:
      "https://images.unsplash.com/photo-1601924928357-22d3b3abfcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWd8ZW58MXx8fHwxNzU5OTE0NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    currentBid: 1450,
    startingBid: 1200,
    totalBids: 19,
    endTime: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(),
    category: "Fashion",
    seller: "LuxuryBags",
    condition: "Excellent",
    bidHistory: [
      {
        id: "5-3",
        bidderName: "User 3",
        amount: 1450,
      },
      {
        id: "5-2",
        bidderName: "User 2",
        amount: 1350,
      },
      {
        id: "5-1",
        bidderName: "User 1",
        amount: 1250,
      },
    ],
  },

  // 6. Картина маслом
  {
    id: "6",
    title: "Original Artwork - Oil Painting",
    description:
      "Contemporary abstract landscape, 120x90cm. Signed by renowned artist.",
    image:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBwYWludGluZ3xlbnwxfHx8fDE3NTk5MDc5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    currentBid: 5800,
    startingBid: 4500,
    totalBids: 12,
    endTime: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(),
    category: "Art",
    seller: "ModernGallery",
    condition: "New",
    bidHistory: [
      {
        id: "6-3",
        bidderName: "User 3",
        amount: 5800,
      },
      {
        id: "6-2",
        bidderName: "User 2",
        amount: 5400,
      },
      {
        id: "6-1",
        bidderName: "User 1",
        amount: 5000,
      },
    ],
  },

  // 7. Бриллиантовое кольцо
  {
    id: "7",
    title: "2.5 Carat Diamond Ring",
    description:
      "18k white gold engagement ring with certified diamond. Brilliant cut.",
    image:
      "https://images.unsplash.com/photo-1589674668791-4889d2bba4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZ3xlbnwxfHx8fDE3NTk5Mjc1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    currentBid: 18500,
    startingBid: 15000,
    totalBids: 28,
    endTime: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
    category: "Jewelry",
    seller: "DiamondElite",
    condition: "New",
    bidHistory: [
      {
        id: "7-3",
        bidderName: "User 3",
        amount: 18500,
      },
      {
        id: "7-2",
        bidderName: "User 2",
        amount: 17500,
      },
      {
        id: "7-1",
        bidderName: "User 1",
        amount: 16000,
      },
    ],
  },

  // 8. PlayStation 5 Pro
  {
    id: "8",
    title: "PlayStation 5 Pro Limited Edition",
    description:
      "Next-gen console with exclusive design. Includes 2 controllers and 5 games.",
    image:
      "https://images.unsplash.com/photo-1580234797602-22c37b2a6230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlfGVufDF8fHx8MTc1OTk1NDc4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    currentBid: 720,
    startingBid: 600,
    totalBids: 42,
    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    category: "Technology",
    seller: "GamersParadise",
    condition: "New",
    bidHistory: [
      {
        id: "8-3",
        bidderName: "User 3",
        amount: 720,
      },
      {
        id: "8-2",
        bidderName: "User 2",
        amount: 680,
      },
      {
        id: "8-1",
        bidderName: "User 1",
        amount: 620,
      },
    ],
  },
];
