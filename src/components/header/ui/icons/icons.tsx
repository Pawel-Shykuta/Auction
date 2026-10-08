import styles from "./icons.module.scss";

import FavoriteButton from "./FavoriteButton";
import NotificationButton from "./NotificationButton";

export default function Icons() {
  return (
    <div className={styles.iconsContainer}>
      <FavoriteButton />

      <NotificationButton />
    </div>
  );
}
