import { Auctions } from "@/components/auctions/auctions";
import styles from "./browse.module.scss";
import SearchPanel from "./components/filterPanel";

const Browse = () => {
  return (
    <section className={styles.browse}>
      <div className={styles.browse_text}>
        <h1>Browse All Auctions</h1>
        <p>
          Explore our complete collection of auctions with advanced filtering
        </p>
      </div>
      <SearchPanel />

      <Auctions />
    </section>
  );
};

export default Browse;
