import styles from "./burgerMenu.module.scss";
import { useHeader } from "../../../../context/HeaderContext";

export default function BurgerMenu() {
  const { headerIsOpen, changeHeaderIsOpen } = useHeader();

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
