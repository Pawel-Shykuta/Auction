import Header from "./components/header/header";
import styles from "./activAuction.module.scss";
import LeftContainer from "./components/leftContainer/intex";
import RightContainer from "./components/right";

const ActiveAuction = () => {
  return (
    <section className={styles.active_auction_wrapper}>
      <div className={styles.active_auction_container}>
        <Header />

        <div className={styles.content_container}>
          <LeftContainer />
          <RightContainer />
        </div>
      </div>
    </section>
  );
};

export default ActiveAuction;
