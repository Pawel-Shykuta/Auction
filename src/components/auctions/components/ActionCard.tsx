import styles from "../auctions.module.scss";
import type { Auctions } from "@/data/auctions";
import { useItemStore } from "@/store/useItemStore";
import ActionBidSection from "./BidSection";
import ActionTitle from "./ActionTitle";
import Button from "@/components/ui/Button";

import { FaRegHeart, FaHeart } from "react-icons/fa";
import { memo } from "react";
import { useShallow } from "zustand/shallow";

interface ActionCardProp {
  el: Auctions;
  now: number;
}

const ActionCard = memo(({ el, now }: ActionCardProp) => {
  const isLiked = useItemStore((state) =>
    state.liked.some((item) => item.id === el.id),
  );

  const { addLiked, removeLiked, setActiveItem } = useItemStore(
    useShallow((state) => ({
      addLiked: state.addLiked,
      removeLiked: state.removeLiked,
      setActiveItem: state.setActiveItem,
    })),
  );

  const like = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isLiked) {
      removeLiked(el.id);
    } else {
      addLiked(el);
    }
  };

  return (
    <div className={styles.auction_card} onClick={() => setActiveItem(el)}>
      <div className={styles.image_container}>
        <div className={styles.category_container}>
          <span>{el.category}</span>
          <span onClick={(e) => like(e)} className={styles.icon}>
            {isLiked ? <FaHeart /> : <FaRegHeart />}
          </span>
        </div>
        <img src={el.image} alt="" />
      </div>
      <div className={styles.content_section}>
        <ActionTitle el={el} />
        <ActionBidSection el={el} now={now} />
      </div>

      <Button text="Bid Now" className={styles.Auction_BTN} />
    </div>
  );
});
export default ActionCard;
