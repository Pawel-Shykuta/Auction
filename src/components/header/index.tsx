import styles from "./indexStyles.module.scss";

import Icons from "./ui/icons/icons";
import List from "./ui/list/list";
import Logo from "./ui/logo/logo";
import SearchPanel from "./ui/searchPanel/searchPanel";
import BurgerMenu from "./ui/burgerMenu/burgerMenu";
import LogoForPhones from "./ui/logo/logoForPhones";
import { useHeaderStore } from "@/store/useHeaderStore";
import { useEffect, useState } from "react";

export default function Header() {
  const { headerIsOpen } = useHeaderStore();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

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

  return (
    <header
      className={`
          ${styles.header_Wrapper} 
          ${showHeader ? styles.show : styles.hide}`}
    >
      <Logo />
      <div
        className={`${styles.nav_container} ${headerIsOpen ? styles.open : ""}`}
      >
        <LogoForPhones />
        <List />
        {innerWidth > 450 && <SearchPanel />}
        <Icons />
      </div>
      <BurgerMenu />
    </header>
  );
}
