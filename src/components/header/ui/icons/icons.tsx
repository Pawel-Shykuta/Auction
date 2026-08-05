import styles from "./icons.module.scss";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { BiBell } from "react-icons/bi";
import { useHeaderStore } from "@/store/useHeaderStore";
import MessageMenu from "../messageMenu/messageMenu";

export default function Icons() {
  const { changeShowMessage, showMessage } = useHeaderStore();

  const changeLikedMenuOpen = useHeaderStore(
    (state) => state.changeLikedMenuOpen,
  );
  const likedMenuOpen = useHeaderStore((state) => state.likedMenuOpen);

  return (
    <div className={styles.iconsContainer}>
      <span className={styles.iconsWrapper}>
        {likedMenuOpen ? (
          <FaHeart
            className={styles.heartIcon}
            onClick={() => changeLikedMenuOpen()}
          />
        ) : (
          <FaRegHeart
            className={styles.heartIcon}
            onClick={() => changeLikedMenuOpen()}
          />
        )}

        <p>Favorites</p>
      </span>

      <span className={styles.iconsWrapper}>
        <BiBell
          className={styles.bellIcon}
          onClick={() => changeShowMessage()}
        />
        <p>Notifications</p>
        {showMessage && <MessageMenu />}
      </span>
    </div>
  );
}
