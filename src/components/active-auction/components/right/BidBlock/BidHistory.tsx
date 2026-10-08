import { GoPerson } from "react-icons/go";

import { useActiveAuction } from "@/hooks/useActiveAuction";

import styles from "./bidBlock.module.scss";

const BidHistory = () => {
  const item = useActiveAuction();

  return (
    <div className={styles.bid_history}>
      <h1>Bids History</h1>

      <ul>
        {item?.bidHistory.map((bid) => (
          <li key={bid.id}>
            <span>
              <GoPerson className={styles.icon} /> {bid.bidderName}
            </span>
            ${bid.amount.toLocaleString("ru-RU")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BidHistory;
