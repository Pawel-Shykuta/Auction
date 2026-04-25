import { useState } from "react";
import styles from "./filterPanel.module.scss";
import { useAppStore } from "@/store/useAppStore";

export default function FilterPanel() {
  const filters = [
    "All",
    "Watches",
    "Technology",
    "Art",
    "Vehicles",
    "Fashion",
    "Jewelry",
    "Photography",
  ];

  const [active, setActive] = useState(0);
  const setFilter = useAppStore((state) => state.setFilter);

  const changeFilter = (el: string, i: number) => {
    if (active === i) return;
    setActive(i);
    setFilter(el);
  };

  return (
    <ul className={styles.filter_panel}>
      {filters.map((el, i) => (
        <li
          key={i}
          className={active === i ? styles.active : ""}
          onClick={() => changeFilter(el, i)}
        >
          {el}
        </li>
      ))}
    </ul>
  );
}
