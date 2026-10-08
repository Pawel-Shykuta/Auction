import styles from "../AuctionList.module.scss";
import type { Auction } from "@/entities/auction/auction.types";
import { useAuctionDetailsStore } from "@/store/useAuctionDetailsStore";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import AuctionBidSection from "./AuctionBidSection";
import AuctionTitle from "./AuctionTitle";
import Button from "@/components/ui/Button";

import { FaRegHeart, FaHeart } from "react-icons/fa";
import { memo } from "react";
import { useShallow } from "zustand/shallow";

interface AuctionCardProps {
  auction: Auction;
  now: number;
}

const AuctionCard = memo(({ auction, now }: AuctionCardProps) => {
  const isLiked = useFavoritesStore((state) =>
    state.likedIds.includes(auction.id),
  );

  const { addLiked, removeLiked } = useFavoritesStore(
    useShallow((state) => ({
      addLiked: state.addLiked,
      removeLiked: state.removeLiked,
    })),
  );

  const setActiveItemId = useAuctionDetailsStore(
    (state) => state.setActiveItemId,
  );

  const like = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isLiked) {
      removeLiked(auction.id);
    } else {
      addLiked(auction.id);
    }
  };

  const openAuction = () => {
    setActiveItemId(auction.id);
  };

  const cardKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openAuction();
    }

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openAuction();
    }
  };

  return (
    <div
      className={styles.auction_card}
      onClick={() => setActiveItemId(auction.id)}
      role="button"
      tabIndex={0}
      onKeyDown={cardKeyDown}
      aria-label={`Open auction: ${auction.title}`}
    >
      <div className={styles.image_container}>
        <div className={styles.category_container}>
          <span>{auction.category}</span>
          <Button
            onClick={like}
            className={styles.icon}
            aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
            aria-pressed={isLiked}
          >
            {isLiked ? <FaHeart /> : <FaRegHeart />}
          </Button>
        </div>

        <img src={auction.image} alt={auction.title} />
      </div>

      <div className={styles.content_section}>
        <AuctionTitle auction={auction} />
        <AuctionBidSection auction={auction} now={now} />
      </div>

      <Button
        text="Bet Now"
        className={styles.Auction_BTN}
        onClick={(event) => {
          event.stopPropagation();
          openAuction();
        }}
      />
    </div>
  );
});

export default AuctionCard;
