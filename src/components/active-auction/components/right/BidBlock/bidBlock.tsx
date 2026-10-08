import { useActiveAuction } from "@/hooks/useActiveAuction";
import styles from "./bidBlock.module.scss";
import { useState } from "react";
import BidHistory from "./BidHistory";
import QuickBids from "./QuickBids";
import BidForm from "./BidForm";

const BidBlock = () => {
  const item = useActiveAuction();
  const currentBid = item?.currentBid || 0;
  const [bidInput, setBidInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <section className={styles.bid_block}>
      <BidForm
        currentBid={currentBid}
        bidInput={bidInput}
        setBidInput={setBidInput}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      <QuickBids currentBid={currentBid} setBidInput={setBidInput} />
      <BidHistory />
    </section>
  );
};

export default BidBlock;
