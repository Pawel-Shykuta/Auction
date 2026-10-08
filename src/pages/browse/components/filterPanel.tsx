import styles from "./filterPanel.module.scss";

import { CATEGORIES, SORT_OPTIONS } from "@/constants/filters";

import { IoMdOptions } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import PriceRange from "@/components/priceRange/priceRange";
import Input from "@/components/ui/input";
import Button from "@/components/ui/Button";

import Dropdown from "@/components/dropdown/Dropdown";

import { useAuctionFiltersStore } from "@/store/useAuctionFiltersStore";

const SearchPanel = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const searchText = useAuctionFiltersStore((state) => state.searchText);
  const setSearchText = useAuctionFiltersStore((state) => state.setSearchText);
  const setFilter = useAuctionFiltersStore((state) => state.setFilter);
  const setSortBy = useAuctionFiltersStore((state) => state.setSortBy);

  return (
    <div className={styles.Search_panel}>
      <div className={styles.Search_controllers}>
        <div className={styles.search_container}>
          <FiSearch className={styles.searchIcon} />
          <Input
            placeholder="Search auctions..."
            className={styles.Search_input}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
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
          <Dropdown
            options={CATEGORIES}
            label="Category"
            onChange={(option) => setFilter(option)}
          />
          <Dropdown
            options={SORT_OPTIONS}
            label="Sort By"
            onChange={(option) => setSortBy(option)}
          />

          <PriceRange />
        </div>
      )}
    </div>
  );
};

export default SearchPanel;
