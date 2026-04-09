import BurgerMenu from "../burgerMenu/burgerMenu";
import Styles from "./logoForPhones.module.scss";

import { RiAuctionLine } from "react-icons/ri";

export default function LogoForPhones() {
  return (
    <div className={Styles.logoForPhones}>
      <div className={Styles.logoForPhones_Wrapper}>
        <div className={Styles.logoForPhones_Icon}>
          <RiAuctionLine className={Styles.logo_Icon} />
          <p>AuctionPro</p>
        </div>

        <BurgerMenu />
      </div>

      <h3>Navigation menu</h3>
    </div>
  );
}
