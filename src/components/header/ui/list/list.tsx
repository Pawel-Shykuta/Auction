import { useNavigate } from "react-router-dom";
import styles from "./list.module.scss";
import { useHeaderStore } from "@/store/useHeaderStore";

export default function List() {
  const listArr = [
    { label: "Home", path: "/" },
    { label: "Browse", path: "/browse" },
    { label: "HowItWorks", path: "how-it-works" },
    { label: "Sell", path: "/" },
  ];
  const navigate = useNavigate();
  const { changeHeaderIsOpen } = useHeaderStore();

  const changePage = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    changeHeaderIsOpen();
  };

  return (
    <ul className={styles.list_Wrapper}>
      {listArr.map((item) => (
        <li key={item.path} onClick={() => changePage(item.path)}>
          {item.label}
        </li>
      ))}
    </ul>
  );
}
