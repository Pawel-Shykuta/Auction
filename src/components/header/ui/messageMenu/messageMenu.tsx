import styles from "./messageMenu.module.scss";

const MessageMenu = () => {
  return (
    <ul className={styles.MessageWrapper}>
      <div className={styles.Messege_Header}>
        <h3>Notifications</h3>
        <span className={styles.badge}>New</span>
      </div>

      <div className={styles.list}>
        <li className={styles.item}>
          <span className={styles.item_title}>Auction ending in 30 min</span>
          <span className={styles.item_time}>2 hours ago</span>
        </li>
      </div>
    </ul>
  );
};

export default MessageMenu;
