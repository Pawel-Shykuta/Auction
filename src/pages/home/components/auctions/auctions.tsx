import styles from "./auctions.module.scss";

import { auctions } from "@/data/auctions";
import { useEffect, useMemo, useState } from "react";
import ActionCard from "./components/ActionCard";
import { useAppStore } from "@/store/useAppStore";

export const Auctions = () => {
  const [now, setNow] = useState(() => Date.now());
  const filter = useAppStore((state) => state.filter);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const filtredItems = useMemo(() => {
    if (!filter || filter === "All") return auctions;

    return auctions.filter((el) => el.category === filter);
  }, [filter]);

  return (
    <section className={styles.auctions_container}>
      {filtredItems.length > 0 ? (
        filtredItems.map((el) => <ActionCard key={el.id} el={el} now={now} />)
      ) : (
        <h1>There are currently no active auctions.</h1>
      )}
    </section>
  );
};
