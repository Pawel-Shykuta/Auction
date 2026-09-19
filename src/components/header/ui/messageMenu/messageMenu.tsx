import { useMessageStore } from "@/store/useMessageStore";
import styles from "./messageMenu.module.scss";
import { useItemStore } from "@/store/useItemStore";
import { useAuctionsStore } from "@/store/useAuctionsStore";
import { useHeaderStore } from "@/store/useHeaderStore";

const MessageMenu = () => {
  const { messages } = useMessageStore();
  const setActiveItemId = useItemStore((state) => state.setActiveItemId);
  const auctions = useAuctionsStore((state) => state.auctions);
  const { closeShowMessage } = useHeaderStore();

  const showItem = (e: React.MouseEvent, el: number) => {
    e.stopPropagation();
    const item = auctions.find((item) => Number(item.id) === el);

    setActiveItemId(item?.id ?? null);
    closeShowMessage();
  };

  return (
    <ul className={styles.MessageWrapper}>
      <div className={styles.Messege_Header}>
        <h3>Notifications</h3>
        <span className={styles.badge}>New</span>
      </div>

      <div className={styles.list}>
        {messages.map((el) => (
          <li
            className={styles.item}
            key={el.id}
            onClick={(e) => showItem(e, el.auctionId)}
          >
            <span className={styles.item_title}>{el.Name}</span>
            <span className={styles.item_time}>{el.title}</span>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default MessageMenu;
