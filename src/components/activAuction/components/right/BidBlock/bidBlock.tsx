import { useActiveAuction } from "@/hooks/useActiveAuction";
import { useAuctionsStore } from "@/store/useAuctionsStore";
import styles from "./bidBlock.module.scss";
import Input from "@/components/ui/input";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { useMessageStore } from "@/store/useMessageStore";

function BidInput({
  currentBid,
  bidInput,
  setBidInput,
}: {
  currentBid: number;
  bidInput: string;
  setBidInput: (value: string) => void;
}) {
  const MIN_STEP = 50;
  const minRequiredBid = currentBid + MIN_STEP;
  const formattedMinBid = `$ ${minRequiredBid.toLocaleString()}`;

  const value = Number(bidInput) > 0 ? `$ ${bidInput}` : "";
  const item = useActiveAuction();
  const placeBid = useAuctionsStore((state) => state.placeBid);

  const { addMessage } = useMessageStore();

  const bid = () => {
    const bidAmount = Number(bidInput);

    if (!item?.id) {
      return;
    }

    const result = placeBid(item.id, bidAmount);

    if (!result.success) {
      if (result.reason === "FINISHED") {
        alert("This auction has already ended.");
      } else if (result.reason === "TOO_LOW") {
        alert(`Your bid must be at least $${minRequiredBid.toLocaleString()}.`);
      }
      return;
    }

    setBidInput("");

    const newMessage = {
      id: Math.floor(Math.random() * 100000),
      auctionId: Number(item.id),
      Name: "New Bet",
      title: item.description,
      date: "2 hours ago",
      link: "",
    };

    addMessage(newMessage);
  };

  return (
    <div className={styles.bid_input}>
      <label>Your bid (minimum {formattedMinBid})</label>

      <div className={styles.input_controls}>
        <Input
          type="text"
          placeholder={formattedMinBid}
          className={styles.input}
          onChange={(e) => {
            const onlyDigits = e.target.value.replace(/[^\d]/g, "");
            setBidInput(onlyDigits);
          }}
          value={value}
        />
        <Button
          text="Bid"
          className={`${styles.bid_BTN} ${Number(bidInput) < minRequiredBid ? styles.bid_disabled : ""}`}
          onClick={bid}
        />
      </div>
    </div>
  );
}

function QuickBids({
  currentBid,
  setBidInput,
}: {
  currentBid: number;
  setBidInput: (value: string) => void;
}) {
  const increments = [50, 150, 300, 550];

  return (
    <div className={styles.bid_input}>
      <label>Quick bids</label>

      <ul className={styles.quick_bids}>
        {increments.map((inc) => (
          <li
            key={inc}
            onClick={() => setBidInput((currentBid + inc).toString())}
          >
            $ {(currentBid + inc).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BidHistory() {
  const item = useActiveAuction();

  return (
    <div className={styles.bid_history}>
      <h1>Bids History</h1>

      <ul>
        {item?.bidHistory.map((el) => (
          <li key={el.id}>
            <span>
              <GoPerson className={styles.icon} /> {el.name}
            </span>
            ${el.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

const BidBlock = () => {
  const item = useActiveAuction();
  const currentBid = item?.currentBid || 0;
  const [bidInput, setBidInput] = useState("");

  return (
    <section className={styles.bid_block}>
      <BidInput
        currentBid={currentBid}
        bidInput={bidInput}
        setBidInput={setBidInput}
      />
      <QuickBids currentBid={currentBid} setBidInput={setBidInput} />
      <BidHistory />
    </section>
  );
};

export default BidBlock;
