import styles from "./indexStyles.module.scss";

import Icons from "./ui/icons/icons";
import List from "./ui/list/list";
import Logo from "./ui/logo/logo";
import SearchPanel from "./ui/searchPanel/searchPanel";
import BurgerMenu from "./ui/burgerMenu/burgerMenu";
import LogoForPhones from "./ui/logo/logoForPhones";
import { useHeaderStore } from "@/store/useHeaderStore";
import { useEffect, useState } from "react";
import Balance from "./ui/balance/balance";
import { useBalanceStore } from "@/store/useBalanceStore";

export default function Header() {
  const { headerIsOpen } = useHeaderStore();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [showSearchPanel, setShowSearchPanel] = useState(
    () => window.innerWidth > 450,
  );
  const { balance } = useBalanceStore();

  useEffect(() => {
    const changeScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScroll(current);
    };

    window.addEventListener("scroll", changeScroll);

    return () => window.removeEventListener("scroll", changeScroll);
  }, [lastScroll]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 451px)");

    const handleChange = (e: MediaQueryListEvent) => {
      setShowSearchPanel(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <header
      className={`
          ${styles.header_Wrapper} 
          ${showHeader ? styles.show : styles.hide}`}
    >
      <Logo />
      {!showSearchPanel && (
        <div className={styles.balanceCon}>
          <h1>
            Bal: <span>$ {balance}</span>
          </h1>
        </div>
      )}
      <div
        className={`${styles.nav_container} ${headerIsOpen ? styles.open : ""}`}
      >
        <LogoForPhones />
        <List />
        {showSearchPanel && <SearchPanel />}
        <Icons />
        <Balance />
      </div>
      <BurgerMenu />
    </header>
  );
}
