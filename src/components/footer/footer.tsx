import Links from "./links";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Links />
    </footer>
  );
};

export default Footer;
