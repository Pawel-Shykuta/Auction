import { useEffect, useState } from "react";
import styles from "./itemPrice.module.scss";
import { useItemStore } from "@/store/useItemStore";
import { IoMdTime } from "react-icons/io";
import Timer from "@/pages/home/components/auctions/components/timer";

export default function ItemPrice() {
  const [now, setNow] = useState(() => Date.now());
  const item = useItemStore((state) => state.activeItem);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.item_price_time_container}>
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
