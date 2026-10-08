import type { Auction } from "@/entities/auction/auction.types";
import styles from "../AuctionList.module.scss";

interface AuctionTitleProps {
  auction: Auction;
}

const AuctionTitle = ({ auction }: AuctionTitleProps) => {
  return (
    <div className={styles.title_container}>
      <h1>{auction.title}</h1>
      <p>{auction.description}</p>
    </div>
  );
};

export default AuctionTitle;
