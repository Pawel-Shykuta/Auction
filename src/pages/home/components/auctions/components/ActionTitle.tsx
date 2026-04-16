import type { Auctions } from "@/data/auctions";
import styles from "../auctions.module.scss";

interface ActionTitleProp {
  el: Auctions;
}

const ActionTitle = ({ el }: ActionTitleProp) => {
  return (
    <div className={styles.title_container}>
      <h1>{el.title} </h1>
      <p>{el.description}</p>
    </div>
  );
};

export default ActionTitle;
