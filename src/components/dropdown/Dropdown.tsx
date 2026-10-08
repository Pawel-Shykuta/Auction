import { useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.scss";
import Button from "../ui/Button";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

interface DropdownProps<Option extends string> {
  options: Option[];
  label: string;
  onChange?: (option: Option) => void;
}

const Dropdown = <Option extends string>({
  options,
  label,
  onChange,
}: DropdownProps<Option>) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionChange = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <div ref={dropDownRef} className={styles.drop_dw_menu}>
      <h1>{label}</h1>

      <Button
        onClick={() => setIsOpen((previous) => !previous)}
        className={styles.openMenu}
        text={
          <>
            {selectedOption}
            {isOpen ? <GoChevronUp /> : <GoChevronDown />}
          </>
        }
      />

      {isOpen && (
        <ul className={styles.drop_dw_list}>
          {options.map((option) => (
            <li key={option}>
              <Button
                className={styles.optionButton}
                onClick={() => handleOptionChange(option)}
              >
                {option}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
