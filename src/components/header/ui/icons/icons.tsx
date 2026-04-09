import styles from "./icons.module.scss";

import { FaRegHeart } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import { useState } from "react";

export default function Icons() {
  // const [newMassages, setNewMassages] = useState([]);s

  const [massagesWindowOpen, setMassagesWindowOpen] = useState(false);
  const [onlyLickeds, setOnlyLickeds] = useState(false);

  return (
    <div className={styles.iconsContainer}>
      <span className={styles.iconsWrapper}>
        <FaRegHeart
          className={styles.heartIcon}
          onClick={() => setOnlyLickeds(!onlyLickeds)}
        />
        <p>Favorites</p>
      </span>

      <span className={styles.iconsWrapper}>
        <BiBell
          className={styles.bellIcon}
          onClick={() => setMassagesWindowOpen(!massagesWindowOpen)}
        />
        <p>Notifications</p>
      </span>
    </div>
  );
}
