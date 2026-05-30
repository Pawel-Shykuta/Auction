import styles from "./filterPanel.module.scss";

import { IoMdOptions } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import PriceRange from "@/components/priceRange/priceRange";
import Input from "@/components/ui/input";
import Button from "@/components/ui/Button";

import DropDW from "@/components/dropDW/dropDW";
import { useAppStore } from "@/store/useAppStore";
import { useHeaderStore } from "@/store/useHeaderStore";

const SearchPanel = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const searchingText = useHeaderStore((state) => state.searchingText);
  const setSearchingText = useHeaderStore((state) => state.setSearchingText);
  const setFilter = useAppStore((state) => state.setFilter);
  const setSortBy = useAppStore((state) => state.setSortBy);

  return (
    <div className={styles.Search_panel}>
      <div className={styles.Search_controllers}>
        <div className={styles.search_container}>
          <FiSearch className={styles.searchIcon} />
          <Input
            placeholder="Search auctions..."
            className={styles.Search_input}
            value={searchingText}
            onChange={(e) => setSearchingText(e.target.value)}
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
            categorys={[
              "All",
              "Watches",
              "Technology",
              "Art",
              "Vehicles",
              "Fashion",
              "Jewelry",
              "Photography",
            ]}
            CategoryName={"Category"}
            onClick={(el) => setFilter(el)}
          />
          <DropDW
            categorys={[
              "Ending Soon",
              "Price: Low to High",
              "Price: High to Low",
              "Most Recent",
            ]}
            CategoryName={"Sort By"}
            onClick={(el) => setSortBy(el)}
          />

          <PriceRange />
        </div>
      )}
    </div>
  );
};

export default SearchPanel;
