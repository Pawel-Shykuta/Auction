import { auctions } from "@/data/auctions";
import styles from "./boxes.module.scss";

export default function Boxes() {
  const arr = [
    { title: "Active Auctions", num: auctions.length },
    {
      title: "Total Bids",
      num: auctions.reduce((acc, el) => acc + el.totalBids, 0),
    },
    { title: "Availability", num: "24/7" },
    { title: "Secure", num: "100%" },
  ];

  return (
    <section className={styles.boxes_container}>
      {arr.map((item) => (
        <div key={item.title} className={styles.box_item}>
          <h1>{item.num}</h1>
          <p>{item.title}</p>
        </div>
      ))}
    </section>
  );
}
