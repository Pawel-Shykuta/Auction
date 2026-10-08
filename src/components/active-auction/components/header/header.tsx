import Button from "@/components/ui/Button";
import styles from "./header.module.scss";
import { useAuctionDetailsStore } from "@/store/useAuctionDetailsStore";

const Header = () => {
  const closeWindow = useAuctionDetailsStore((state) => state.clearActiveItem);

  return (
    <div className={styles.header}>
      <h3>Auction Details</h3>
      <Button
        aria-label="Close auction"
        text="X"
        className={styles.close_button}
        onClick={closeWindow}
      />
    </div>
  );
};

export default Header;
