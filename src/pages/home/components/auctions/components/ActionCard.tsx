import styles from "../auctions.module.scss";
import type { Auctions } from "@/data/auctions";
import ActionBidSection from "./BidSection";
import ActionTitle from "./actionTitle";
import Button from "@/components/ui/Button/Button";

interface ActionCardProp {
  el: Auctions;
  now: number;
}

const ActionCard = ({ el, now }: ActionCardProp) => {
  return (
    <div key={Number(el.id)} className={styles.auction_card}>
      <div className={styles.image_container}>
        <img src={el.image} alt="" />
      </div>
      <div className={styles.content_section}>
        <ActionTitle el={el} />
        <ActionBidSection el={el} now={now} />
      </div>

      <Button text="Bid Now" className={styles.Auction_BTN} />
    </div>
  );
};
export default ActionCard;
