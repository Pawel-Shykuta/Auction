import { IoMdTime } from "react-icons/io";
import styles from "../AuctionList.module.scss";
import type { Auction } from "@/entities/auction/auction.types";
import Timer from "./Timer";

interface AuctionBidSectionProps {
  auction: Auction;
  now: number;
}

const AuctionBidSection = ({ auction, now }: AuctionBidSectionProps) => {
  return (
    <div className={styles.BidSection}>
      <h3>
        Current Bid <span>${auction.currentBid.toLocaleString("ru-RU")}</span>
      </h3>

      <h3>
        {auction.totalBids} bids
        <span className={styles.timer}>
          <IoMdTime className={styles.timer_Icon} />
          <Timer endTime={new Date(auction.endTime)} now={now} />
        </span>
      </h3>
    </div>
  );
};

export default AuctionBidSection;
