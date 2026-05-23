import { useNavigate } from "react-router-dom";
import Styles from "./logo.module.scss";

import { RiAuctionLine } from "react-icons/ri";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div className={Styles.logo_Wrapper} onClick={() => navigate("/")}>
      <RiAuctionLine className={Styles.logo_Icon} />

      <p>AuctionPro</p>
    </div>
  );
}
