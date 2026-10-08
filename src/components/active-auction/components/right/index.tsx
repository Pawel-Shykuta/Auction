import { useActiveAuction } from "@/hooks/useActiveAuction";
import styles from "./index.module.scss";
import ItemPrice from "./ItemPrice/itemPrice";
import BidBlock from "./BidBlock/bidBlock";

export const RightContainer = () => {
  const item = useActiveAuction();

  return (
    <section className={styles.right_container}>
      <div className={styles.item_desc}>
        <p>{item?.category}</p>
        <h3>{item?.title}</h3>
      </div>

      <ItemPrice />
      <BidBlock />
    </section>
  );
};

export default RightContainer;
