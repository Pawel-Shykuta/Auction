import { FaHeart, FaRegHeart } from "react-icons/fa";

import Button from "@/components/ui/Button";
import { useFavoritesStore } from "@/store/useFavoritesStore";

import styles from "./icons.module.scss";

const FavoriteButton = () => {
  const likedMenuOpen = useFavoritesStore((state) => state.likedMenuOpen);
  const changeLikedMenuOpen = useFavoritesStore(
    (state) => state.changeLikedMenuOpen,
  );

  return (
    <Button
      className={`${styles.iconsWrapper} ${styles.iconButton}`}
      onClick={changeLikedMenuOpen}
      aria-label="Favorites"
      aria-pressed={likedMenuOpen}
    >
      {likedMenuOpen ? (
        <FaHeart className={styles.heartIcon} />
      ) : (
        <FaRegHeart className={styles.heartIcon} />
      )}

      <p>Favorites</p>
    </Button>
  );
};

export default FavoriteButton;
