import styles from "./itemPrice.module.scss";
import { useActiveAuction } from "@/hooks/useActiveAuction";
import { IoMdTime } from "react-icons/io";
import Timer from "@/components/auction-list/components/Timer";
import { useNow } from "@/hooks/useTimer";

function PriceContainer() {
  const item = useActiveAuction();

  return (
    <div className={styles.price_container}>
      <div className={styles.info_container}>
        <p>Current Bid:</p>
        <h1>${item?.currentBid.toLocaleString()}</h1>
      </div>

      <div className={styles.info_container}>
        <p>{item?.totalBids} bids</p>
        <p>Starting price: ${item?.startingBid.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default function ItemPrice() {
  const item = useActiveAuction();
  const now = useNow();

  return (
    <div className={styles.item_price_time_container}>
      <PriceContainer />

      <span className={styles.line}></span>

      <div className={styles.item_time_container}>
        <h1>Time Remaining</h1>

        <div>
          <IoMdTime className={styles.timer_Icon} />
          <Timer
            endTime={item?.endTime ? new Date(item.endTime) : null}
            now={now}
          />
        </div>
      </div>
    </div>
  );
}
