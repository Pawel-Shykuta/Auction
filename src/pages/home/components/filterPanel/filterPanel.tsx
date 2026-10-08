import { useState } from "react";
import styles from "./filterPanel.module.scss";
import { useAuctionFiltersStore } from "@/store/useAuctionFiltersStore";
import { CATEGORIES } from "@/constants/filters";
import type { AuctionCategory } from "@/entities/auction/auction.types";

export default function FilterPanel() {
  const [active, setActive] = useState(0);
  const setFilter = useAuctionFiltersStore((state) => state.setFilter);

  const changeFilter = (el: AuctionCategory, i: number) => {
    if (active === i) return;
    setActive(i);
    setFilter(el);
  };

  return (
    <ul className={styles.filter_panel}>
      {CATEGORIES.map((el, i) => (
        <li
          key={el}
          className={active === i ? styles.active : ""}
          onClick={() => changeFilter(el, i)}
        >
          {el}
        </li>
      ))}
    </ul>
  );
}
