import { useEffect, useRef, useState } from "react";
import styles from "./dropDW.module.scss";
import Button from "../ui/Button";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const DropDW = ({
  categorys,
  CategoryName,
}: {
  categorys: string[];
  CategoryName: string;
}) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("ss");

  useEffect(() => {
    const handelClickOutside = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handelClickOutside);
    return () => document.removeEventListener("mousedown", handelClickOutside);
  }, []);

  const change = (el: string) => {
    setCategory(el);
    setIsOpen(false);
  };

  return (
    <div ref={dropDownRef} className={styles.drop_dw_menu}>
      <h1>{CategoryName}</h1>

      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.openMenu}
        text={
          <>
            {category} {isOpen ? <GoChevronUp /> : <GoChevronDown />}
          </>
        }
      />

      {isOpen && (
        <ul className={styles.drop_dw_list}>
          {categorys.map((el, i) => (
            <li key={i} onClick={() => change(el)}>
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropDW;
