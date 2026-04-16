import { IoMdTime } from "react-icons/io";
import styles from "../auctions.module.scss";
import type { Auctions } from "@/data/auctions";
import Timer from "./timer";

interface ActionBidSectionProp {
  el: Auctions;
  now: number;
}

const ActionBidSection = ({ el, now }: ActionBidSectionProp) => {
  return (
    <div className={styles.BidSection}>
      <h3>
        Current Bid <span>${el.currentBid.toLocaleString("ru-RU")}</span>
      </h3>

      <h3>
        {el.totalBids} bids
        <span className={styles.timer}>
          <IoMdTime className={styles.timer_Icon} />
          <Timer endTime={new Date(el.endTime)} now={now} />
        </span>
      </h3>
    </div>
  );
};

export default ActionBidSection;
