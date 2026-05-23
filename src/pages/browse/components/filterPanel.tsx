import styles from "./filterPanel.module.scss";

import { IoMdOptions } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import Input from "@/components/ui/input";
import Button from "@/components/ui/Button";
import { useState } from "react";
import DropDW from "@/components/dropDW/dropDW";

const SearchPanel = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className={styles.Search_panel}>
      <div className={styles.Search_controllers}>
        <div className={styles.search_container}>
          <FiSearch className={styles.searchIcon} />
          <Input
            placeholder="Search auctions..."
            className={styles.Search_input}
          />
        </div>

        <Button
          text={
            <>
              <IoMdOptions /> Filters
            </>
          }
          className={styles.SearchBtn}
          onClick={() => setFilterOpen((prev) => !prev)}
        />
      </div>

      {filterOpen && (
        <div className={styles.filters_container}>
          <DropDW
            categorys={["sssss", "aaaaaa", "dddddd", "ffffff"]}
            CategoryName={"Category"}
          />
          <DropDW
            categorys={["ssssss", "aaaaaa", "dddddd", "ffffff"]}
            CategoryName={"Sort By"}
          />
        </div>
      )}
    </div>
  );
};

export default SearchPanel;
