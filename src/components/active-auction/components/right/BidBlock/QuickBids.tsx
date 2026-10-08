import styles from "./bidBlock.module.scss";
import Button from "@/components/ui/Button";

interface QuickBidsProps {
  currentBid: number;
  setBidInput: (value: string) => void;
}

const QuickBids = ({ currentBid, setBidInput }: QuickBidsProps) => {
  const increments = [50, 150, 300, 550];

  return (
    <div className={styles.bid_input}>
      <label>Quick bids</label>

      <ul className={styles.quick_bids}>
        {increments.map((increment) => (
          <li key={increment}>
            <Button
              className={styles.quick_bid_button}
              onClick={() =>
                setBidInput((currentBid + increment).toString())
              }
            >
              $ {(currentBid + increment).toLocaleString()}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickBids;
