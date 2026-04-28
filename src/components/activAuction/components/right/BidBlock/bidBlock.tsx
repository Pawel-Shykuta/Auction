import { useItemStore } from "@/store/useItemStore";
import styles from "./bidBlock.module.scss";
import Input from "@/components/ui/input";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { GoPerson } from "react-icons/go";

function BidInput({ currentBid }: { currentBid: number }) {
  const [bidInput, setBidInput] = useState("");

  return (
    <div className={styles.bid_input}>
      <label>Your bid (minimum ${(currentBid + 50).toLocaleString()})</label>

      <div className={styles.input_controls}>
        <Input
          type="text"
          placeholder={`$ ${(currentBid + 50).toLocaleString()}`}
          className={styles.input}
          onChange={(e) => {
            const onlyDigits = e.target.value.replace(/[^\d]/g, "");
            setBidInput(onlyDigits);
          }}
          value={
            Number(bidInput) > 0 ? `$ ${Number(bidInput).toLocaleString()}` : ""
          }
        />
        <Button text="Bid" className={styles.bid_BTN} />
      </div>
    </div>
  );
}

function QuickBids({ currentBid }: { currentBid: number }) {
  const increments = [50, 150, 300, 550];

  return (
    <div className={styles.bid_input}>
      <label>Quick bids</label>

      <ul className={styles.quick_bids}>
        {increments.map((inc) => (
          <li key={inc}>$ {(currentBid + inc).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
}

function BidHistory() {
  return (
    <div className={styles.bid_history}>
      <h1>Bids History</h1>

      <ul>
        <li>
          <span>
            <GoPerson className={styles.icon} /> name
          </span>
          $3 200
        </li>
        <li>
          <span>
            <GoPerson className={styles.icon} /> name
          </span>
          $3 200
        </li>
        <li>
          <span>
            <GoPerson className={styles.icon} /> name
          </span>
          $3 200
        </li>
      </ul>
    </div>
  );
}

const BidBlock = () => {
  const item = useItemStore((state) => state.activeItem);

  const currentBid = item?.currentBid || 0;

  return (
    <section className={styles.bid_block}>
      <BidInput currentBid={currentBid} />
      <QuickBids currentBid={currentBid} />
      <BidHistory />
    </section>
  );
};

export default BidBlock;
