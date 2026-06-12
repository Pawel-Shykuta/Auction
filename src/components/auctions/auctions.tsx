import { useNow } from "@/hooks/useTimer";
import styles from "./auctions.module.scss";

import ActionCard from "./components/ActionCard";
import { useFilteredAuctions } from "@/hooks/useFilteredAuctions";

export const Auctions = () => {
  const now = useNow();
  const visibleItems = useFilteredAuctions();

  return (
    <section className={styles.auctions_container}>
      {visibleItems.length > 0 ? (
        visibleItems.map((el) => <ActionCard key={el.id} el={el} now={now} />)
      ) : (
        <h1>There are currently no active auctions.</h1>
      )}
    </section>
  );
};
