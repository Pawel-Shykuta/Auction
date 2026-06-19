import styles from "./icons.module.scss";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { BiBell } from "react-icons/bi";
import { useState } from "react";
import { useHeaderStore } from "@/store/useHeaderStore";

export default function Icons() {
  const [massagesWindowOpen, setMassagesWindowOpen] = useState(false);

  const cahngeLikedMenuOpen = useHeaderStore(
    (state) => state.changeLikedMenuOpen,
  );
  const likedMenuOpen = useHeaderStore((state) => state.likedMenuOpen);

  return (
    <div className={styles.iconsContainer}>
      <span className={styles.iconsWrapper}>
        {likedMenuOpen ? (
          <FaHeart
            className={styles.heartIcon}
            onClick={() => cahngeLikedMenuOpen()}
          />
        ) : (
          <FaRegHeart
            className={styles.heartIcon}
            onClick={() => cahngeLikedMenuOpen()}
          />
        )}

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
