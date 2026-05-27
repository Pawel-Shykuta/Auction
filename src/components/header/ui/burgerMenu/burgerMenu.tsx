import styles from "./burgerMenu.module.scss";
import { useHeaderStore } from "@/store/useHeaderStore";

export default function BurgerMenu() {
  const { headerIsOpen, changeHeaderIsOpen } = useHeaderStore();

  return (
    <div
      className={[styles.burger_menu, headerIsOpen && styles.open].join(" ")}
      onClick={changeHeaderIsOpen}
    >
      <span className={styles.burger_line}></span>
      <span className={styles.burger_line}></span>
      <span className={styles.burger_line}></span>
    </div>
  );
}
