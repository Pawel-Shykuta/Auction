import { useEffect, useRef } from "react";
import { BiBell } from "react-icons/bi";

import Button from "@/components/ui/Button";
import { useNotificationsUiStore } from "@/store/useNotificationsUiStore";

import MessageMenu from "../messageMenu/messageMenu";
import styles from "./icons.module.scss";

const NotificationButton = () => {
  const showMessage = useNotificationsUiStore((state) => state.showMessage);
  const changeShowMessage = useNotificationsUiStore(
    (state) => state.changeShowMessage,
  );
  const closeShowMessage = useNotificationsUiStore(
    (state) => state.closeShowMessage,
  );

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

    const closeOnScroll = () => {
      closeShowMessage();
    };

    document.addEventListener("mousedown", closeMessageWindow);
    window.addEventListener("scroll", closeOnScroll);

    return () => {
      document.removeEventListener("mousedown", closeMessageWindow);
      window.removeEventListener("scroll", closeOnScroll);
    };
  }, [closeShowMessage]);

  return (
    <div className={styles.iconsWrapper} ref={windowRef}>
      <Button
        className={styles.iconButton}
        aria-label="Notifications"
        aria-expanded={showMessage}
        onClick={changeShowMessage}
      >
        <BiBell className={styles.bellIcon} />
        <p>Notifications</p>
      </Button>

      {showMessage && <MessageMenu />}
    </div>
  );
};

export default NotificationButton;
