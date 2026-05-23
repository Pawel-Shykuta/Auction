import { useNavigate } from "react-router-dom";
import styles from "./list.module.scss";

export default function List() {
  const listArr = ["Home", "Browse", "How it Works", "Sell"];
  const navigate = useNavigate();

  return (
    <ul className={styles.list_Wrapper}>
      {listArr.map((item, index) => (
        <li
          key={index}
          onClick={() => navigate(`/${item === "Home" ? "" : item}`)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
