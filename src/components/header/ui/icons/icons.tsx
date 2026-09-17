import styles from "./icons.module.scss";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { BiBell } from "react-icons/bi";
import { useHeaderStore } from "@/store/useHeaderStore";
import MessageMenu from "../messageMenu/messageMenu";
import { useEffect, useRef } from "react";

function MessageButton() {
  const { changeShowMessage, closeShowMessage, showMessage } = useHeaderStore();

  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeMessageWindow = (event: MouseEvent) => {
      if (
        windowRef.current &&
        !windowRef.current.contains(event.target as Node)
      ) {
        closeShowMessage();
      }
    };

    const closeScroll = (event: Event) => {
      if (
        windowRef.current &&
        !windowRef.current.contains(event?.target as Node)
      ) {
        closeShowMessage();
      }
    };

    document.addEventListener("mousedown", closeMessageWindow);
    window.addEventListener("scroll", closeScroll);

    return () => {
      document.removeEventListener("mousedown", closeMessageWindow);
      window.removeEventListener("scroll", closeScroll);
    };
  }, [closeShowMessage]);

  return (
    <div
      className={styles.iconsWrapper}
      ref={windowRef}
      onClick={() => changeShowMessage()}
    >
      <span>
        <BiBell className={styles.bellIcon} />
        <p>Notifications</p>
      </span>

      {showMessage && <MessageMenu />}
    </div>
  );
}

export default function Icons() {
  const { changeLikedMenuOpen, likedMenuOpen } = useHeaderStore();

  return (
    <div className={styles.iconsContainer}>
      <span
        className={styles.iconsWrapper}
        onClick={() => changeLikedMenuOpen()}
      >
        {likedMenuOpen ? (
          <FaHeart className={styles.heartIcon} />
        ) : (
          <FaRegHeart className={styles.heartIcon} />
        )}

        <p>Favorites</p>
      </span>

      <MessageButton />
    </div>
  );
}
