import Header from "./components/header/header";
import styles from "./activAuction.module.scss";
import { useItemStore } from "@/store/useItemStore";
import LeftContainer from "./components/leftContainer/intex";
import RightContainer from "./components/right";

const ActiveAuction = () => {
  const item = useItemStore((state) => state.activeItem);

  return (
    <section className={styles.active_auction_wrapper}>
      <div className={styles.active_auction_container}>
        <Header />

        <div className={styles.content_container}>
          <LeftContainer item={item} />
          <RightContainer />
        </div>
      </div>
    </section>
  );
};

export default ActiveAuction;
