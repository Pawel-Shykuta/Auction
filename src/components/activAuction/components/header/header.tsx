import Button from "@/components/ui/Button/Button";
import styles from "./header.module.scss";
import { useItemStore } from "@/store/useItemStore";

const Header = () => {
  const closeWindow = useItemStore((state) => state.clearActiveItem);

  return (
    <div className={styles.header}>
      <h3>Auction Details</h3>
      <Button text="X" className={styles.close_button} onClick={closeWindow} />
    </div>
  );
};

export default Header;
