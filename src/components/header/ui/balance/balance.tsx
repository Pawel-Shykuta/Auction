import { useBalanceStore } from "@/store/useBalanceStore";
import styles from "./balance.module.scss";
import Button from "@/components/ui/Button";

const Balance = () => {
  const { balance, addBalance } = useBalanceStore();

  return (
    <section className={styles.Balance}>
      <h4>
        Balance: $ <span>{balance}</span>{" "}
      </h4>
      <Button
        className={styles.Button_addBalance}
        text={"+"}
        onClick={() => addBalance()}
      />
    </section>
  );
};

export default Balance;
