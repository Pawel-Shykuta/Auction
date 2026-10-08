import { useActiveAuction } from "@/hooks/useActiveAuction";
import { useAuctionsStore } from "@/store/useAuctionsStore";
import { useMessageStore } from "@/store/useMessageStore";
import { MIN_BID_STEP } from "@/features/auction-bidding/model/validateBid";

import styles from "./bidBlock.module.scss";
import Input from "@/components/ui/input";
import Button from "@/components/ui/Button";

interface BidFormProps {
  currentBid: number;
  bidInput: string;
  setBidInput: (value: string) => void;
  errorMessage: string;
  setErrorMessage: (message: string) => void;
}

const BidForm = ({
  currentBid,
  bidInput,
  setBidInput,
  errorMessage,
  setErrorMessage,
}: BidFormProps) => {
  const minRequiredBid = currentBid + MIN_BID_STEP;
  const formattedMinBid = `$ ${minRequiredBid.toLocaleString()}`;
  const value = Number(bidInput) > 0 ? `$ ${bidInput}` : "";

  const item = useActiveAuction();
  const placeBid = useAuctionsStore((state) => state.placeBid);
  const addMessage = useMessageStore((state) => state.addMessage);

  const placeBidHandler = () => {
    const bidAmount = Number(bidInput);

    setErrorMessage("");

    if (!item?.id) {
      return;
    }

    const result = placeBid(item.id, bidAmount);

    if (!result.success) {
      if (result.reason === "FINISHED") {
        setErrorMessage("This auction has already ended.");
      } else if (result.reason === "TOO_LOW") {
        setErrorMessage(
          `Your bid must be at least $${minRequiredBid.toLocaleString()}.`,
        );
      } else if (result.reason === "INSUFFICIENT_FUNDS") {
        setErrorMessage("Not enough funds on the balance.");
      } else {
        setErrorMessage("Unable to place the bid.");
      }

      return;
    }

    setBidInput("");

    addMessage({
      id: Date.now(),
      auctionId: item.id,
      heading: "New bid",
      description: item.description,
      date: "Just now",
      link: "",
    });
  };

  return (
    <div className={styles.bid_input}>
      <label>Your bid (minimum {formattedMinBid})</label>

      <div className={styles.input_controls}>
        <Input
          type="text"
          placeholder={formattedMinBid}
          className={styles.input}
          onChange={(event) => {
            const onlyDigits = event.target.value.replace(/[^\d]/g, "");
            setBidInput(onlyDigits);
          }}
          value={value}
        />

        <Button
          text="Bid"
          className={`${styles.bid_BTN} ${
            Number(bidInput) < minRequiredBid ? styles.bid_disabled : ""
          }`}
          onClick={placeBidHandler}
        />
      </div>

      {errorMessage && (
        <p className={styles.error_message} role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default BidForm;
