import styles from "./indexStyles.module.scss";

import Icons from "./ui/icons/icons";
import List from "./ui/list/list";
import Logo from "./ui/logo/logo";
import SearchPanel from "./ui/searchPanel/searchPanel";
import BurgerMenu from "./ui/burgerMenu/burgerMenu";
import LogoForPhones from "./ui/logo/logoForPhones";
import { useHeader } from "../../context/HeaderContext";

export default function Header() {
  const { headerIsOpen } = useHeader();

  return (
    <header className={styles.header_Wrapper}>
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
