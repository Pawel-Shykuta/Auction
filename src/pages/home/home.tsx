import styles from "./home.module.scss";
import FilterPanel from "./ui/filterPanel/filterPanel";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.text_container}>
        <h1>Live Auctions</h1>
        <p>
          Discover unique items and bid on your favorites. New auctions daily
          with verified products and seller guarantee.
        </p>
      </div>

      <FilterPanel />
    </div>
  );
}
