import styles from "../auctions.module.scss";
import type { Auctions } from "@/data/auctions";
import ActionBidSection from "./BidSection";
import ActionTitle from "./ActionTitle";
import Button from "@/components/ui/Button";
import { useItemStore } from "@/store/useItemStore";

interface ActionCardProp {
  el: Auctions;
  now: number;
}

const ActionCard = ({ el, now }: ActionCardProp) => {
  const setActiveItem = useItemStore((state) => state.setActiveItem);

  return (
    <div
      key={Number(el.id)}
      className={styles.auction_card}
      onClick={() => setActiveItem(el)}
    >
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
