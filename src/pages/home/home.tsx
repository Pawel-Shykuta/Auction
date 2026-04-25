import styles from "./home.module.scss";
import { Auctions } from "./components/auctions/auctions";
import Boxes from "./components/boxes/boxes";
import FilterPanel from "./components/filterPanel/filterPanel";
import Description from "./components/description/description";
import { useItemStore } from "@/store/useItemStore";
import ActiveAuction from "@/components/activAuction/activAuction";

export default function Home() {
  const activeItem = useItemStore((state) => state.activeItem);

  return (
    <div className={styles.home_container}>
      <Description />
      <FilterPanel />
      <Boxes />
      <Auctions />

      {activeItem && <ActiveAuction />}
    </div>
  );
}
