import styles from "./home.module.scss";
import Boxes from "./components/boxes/boxes";
import FilterPanel from "./components/filterPanel/filterPanel";
import Description from "./components/description/description";
import { Auctions } from "@/components/auctions/auctions";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <Description />
      <FilterPanel />
      <Boxes />
      <Auctions />
    </div>
  );
}
