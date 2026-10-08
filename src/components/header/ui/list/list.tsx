import { useNavigate } from "react-router-dom";
import styles from "./list.module.scss";
import { useHeaderStore } from "@/store/useHeaderStore";
import Button from "@/components/ui/Button";
import { HEADER_NAVIGATION } from "@/constants/navigation";

export default function List() {
  const navigate = useNavigate();
  const changeHeaderIsOpen = useHeaderStore((state) => state.setHeaderIsOpen);

  const changePage = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    changeHeaderIsOpen(false);
  };

  return (
    <ul className={styles.list_Wrapper}>
      {HEADER_NAVIGATION.map((item) => (
        <li key={item.label}>
          <Button
            className={styles.list_button}
            onClick={() => changePage(item.path)}
          >
            {item.label}
          </Button>
        </li>
      ))}
    </ul>
  );
}
