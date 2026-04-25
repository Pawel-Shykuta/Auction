import type { Auctions } from "@/data/auctions";
import styles from "./index.module.scss";
import Infoboxes from "./infoboxes";

interface LeftContainerProps {
  item: Auctions | null;
}

const LeftContainer = ({ item }: LeftContainerProps) => {
  return (
    <div className={styles.left_container}>
      <div className={styles.image_container}>
        <img src={item?.image} />
      </div>

      <div className={styles.info_container}>
        <h1>Description</h1>
        <p>{item?.description}</p>
        <p>
          This item is in excellent condition and has been carefully verified.
          Includes seller guarantee and verified authenticity. The auction ends
          automatically when the timer reaches zero.
        </p>
      </div>

      <Infoboxes item={item} />
    </div>
  );
};
export default LeftContainer;
