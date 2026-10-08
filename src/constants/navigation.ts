export interface NavigationItem {
  label: string;
  path: string;
}

export const HEADER_NAVIGATION: NavigationItem[] = [
  { label: "Home", path: "/" },
  { label: "Browse", path: "/browse" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Sell", path: "/" },
];
