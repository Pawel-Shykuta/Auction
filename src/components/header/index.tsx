import styles from "./indexStyles.module.scss";
import { useEffect, useRef, useState } from "react";
import { useHeaderStore } from "@/store/useHeaderStore";
import { useBalanceStore } from "@/store/useBalanceStore";
import Icons from "./ui/icons/icons";
import List from "./ui/list/list";
import Logo from "./ui/logo/logo";
import SearchPanel from "./ui/searchPanel/searchPanel";
import BurgerMenu from "./ui/burgerMenu/burgerMenu";
import LogoForPhones from "./ui/logo/logoForPhones";
import Balance from "./ui/balance/balance";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Header() {
  const headerIsOpen = useHeaderStore((state) => state.headerIsOpen);
  const balance = useBalanceStore((state) => state.balance);
  const [showHeader, setShowHeader] = useState(true);
  const showSearchPanel = useMediaQuery("(min-width: 451px)");
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setShowHeader(currentScroll <= lastScrollRef.current);
      lastScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
