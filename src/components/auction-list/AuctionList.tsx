import { useNow } from "@/hooks/useTimer";
import styles from "./AuctionList.module.scss";

import AuctionCard from "./components/AuctionCard";
import { useFilteredAuctions } from "@/hooks/useFilteredAuctions";

const AuctionList = () => {
  const now = useNow();
  const visibleItems = useFilteredAuctions();

  return (
    <section className={styles.auctions_container}>
      {visibleItems.length > 0 ? (
        visibleItems.map((auction) => (
          <AuctionCard key={auction.id} auction={auction} now={now} />
        ))
      ) : (
        <h1>There are currently no active auctions.</h1>
      )}
    </section>
  );
};

export default AuctionList;
