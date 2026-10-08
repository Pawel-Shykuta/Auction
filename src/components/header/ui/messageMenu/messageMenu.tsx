import { useMessageStore } from "@/store/useMessageStore";
import styles from "./messageMenu.module.scss";
import { useAuctionDetailsStore } from "@/store/useAuctionDetailsStore";
import { useAuctionsStore } from "@/store/useAuctionsStore";
import { useNotificationsUiStore } from "@/store/useNotificationsUiStore";
import Button from "@/components/ui/Button";

const MessageMenu = () => {
  const setActiveItemId = useAuctionDetailsStore(
    (state) => state.setActiveItemId,
  );
  const { messages } = useMessageStore();
  const auctions = useAuctionsStore((state) => state.auctions);
  const { closeShowMessage } = useNotificationsUiStore();

  const showItem = (event: React.MouseEvent, auctionId: string) => {
    event.stopPropagation();

    const item = auctions.find((item) => item.id === auctionId);

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
          <li className={styles.item} key={el.id}>
            <Button
              className={styles.item_button}
              onClick={(event) => showItem(event, el.auctionId)}
            >
              <span className={styles.item_title}>{el.heading}</span>
              <span className={styles.item_time}>{el.description}</span>
            </Button>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default MessageMenu;
