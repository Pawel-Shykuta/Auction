import { useState } from "react";

import styles from "./searchPanel.module.scss";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Input from "@/components/ui/input";

export default function SearchPanel() {
  const [searchingText, setSearchingText] = useState("");

  return (
    <section className={styles.searchPanel_Wrapper}>
      <FiSearch className={styles.searchIcon} />
      <Input
        type="text"
        placeholder="Search auctions..."
        value={searchingText}
        onChange={(e) => setSearchingText(e.target.value)}
        className={styles.searchPanel}
      />
      {searchingText.length > 0 && (
        <MdClose
          className={styles.closeIcon}
          onClick={() => setSearchingText("")}
        />
      )}
    </section>
  );
}
