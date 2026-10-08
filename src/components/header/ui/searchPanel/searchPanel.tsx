import styles from "./searchPanel.module.scss";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Input from "@/components/ui/input";

import { useAuctionFiltersStore } from "@/store/useAuctionFiltersStore";

export default function SearchPanel() {
  const searchText = useAuctionFiltersStore((state) => state.searchText);
  const setSearchText = useAuctionFiltersStore((state) => state.setSearchText);

  return (
    <section className={styles.searchPanel_Wrapper}>
      <FiSearch className={styles.searchIcon} />
      <Input
        type="text"
        placeholder="Search auctions..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className={styles.searchPanel}
      />
      {searchText.length > 0 && (
        <MdClose
          className={styles.closeIcon}
          onClick={() => setSearchText("")}
        />
      )}
    </section>
  );
}
