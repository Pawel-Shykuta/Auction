import styles from "./auctions.module.scss";

import { auctions } from "@/data/auctions";
import { useEffect, useState } from "react";
import ActionCard from "./components/actionCard";

export const Auctions = () => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.auctions_container}>
      {auctions.map((el) => (
        <ActionCard el={el} now={now} />
      ))}
    </section>
  );
};
