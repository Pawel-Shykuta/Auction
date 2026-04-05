import Styles from "./logo.module.scss";

import { RiAuctionLine } from "react-icons/ri";

export default function Logo() {
  return (
    <div className={Styles.logo_Wrapper}>
      <RiAuctionLine className={Styles.logo_Icon} />

      <p>AuctionPro</p>
    </div>
  );
}
