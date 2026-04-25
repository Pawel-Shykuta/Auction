import { BsBoxSeam } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { FaArrowTrendUp } from "react-icons/fa6";

import styles from "./index.module.scss";
import type { Auctions } from "@/data/auctions";

interface InfoboxesProps {
  item: Auctions | null;
}

const Infoboxes = ({ item }: InfoboxesProps) => {
  return (
    <ul className={styles.info_boxes}>
      <li>
        <BsBoxSeam />
        <div>
          <h3>Condition</h3>
          <p>{item?.condition}</p>
        </div>
      </li>
      <li>
        <MdSecurity />
        <div>
          <h3>Warranty</h3>
          <p>Verified</p>
        </div>
      </li>
      <li>
        <GoPerson />
        <div>
          <h3>Seller</h3>
          <p>{item?.seller}</p>
        </div>
      </li>
      <li>
        <FaArrowTrendUp />
        <div>
          <h3>Category</h3>
          <p>{item?.category}</p>
        </div>
      </li>
    </ul>
  );
};

export default Infoboxes;
