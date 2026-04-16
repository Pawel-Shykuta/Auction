import { useState } from "react";
import styles from "./filterPanel.module.scss";

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

  return (
    <ul className={styles.filter_panel}>
      {filters.map((el, i) => (
        <li
          key={i}
          className={active === i ? styles.active : ""}
          onClick={() => setActive(i)}
        >
          {el}
        </li>
      ))}
    </ul>
  );
}
