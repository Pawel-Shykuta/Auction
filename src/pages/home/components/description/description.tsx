import styles from "./description.module.scss";

const Description = () => {
  return (
    <div className={styles.text_container}>
      <h1>Live Auctions</h1>
      <p>
        Discover unique items and bid on your favorites. New auctions daily with
        verified products and seller guarantee.
      </p>
    </div>
  );
};

export default Description;
