import styles from "./list.module.scss";

export default function List() {
  const listArr = ["Home", "Browse", "How it Works", "Sell"];

  return (
    <ul className={styles.list_Wrapper}>
      {listArr.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
