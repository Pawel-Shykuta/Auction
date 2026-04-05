import styles from "./indexStyles.module.scss";
import Icons from "./ui/icons/icons";

import List from "./ui/list/list";
import Logo from "./ui/logo/logo";
import SearchPanel from "./ui/searchPanel/searchPanel";

export default function Header() {
  return (
    <header className={styles.header_Wrapper}>
      <Logo />
      <List />
      <SearchPanel />
      <Icons />
    </header>
  );
}
