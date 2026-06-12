import { useNavigate } from "react-router-dom";
import styles from "./list.module.scss";
import { useHeaderStore } from "@/store/useHeaderStore";

export default function List() {
  const listArr = ["Home", "Browse", "HowItWorks", "Sell"];
  const navigate = useNavigate();
  const { changeHeaderIsOpen } = useHeaderStore();

  const changePage = (item: string) => {
    navigate(`/${item === "Home" ? "/" : item}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
    changeHeaderIsOpen();
  };

  return (
    <ul className={styles.list_Wrapper}>
      {listArr.map((item, index) => (
        <li key={index} onClick={() => changePage(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}
