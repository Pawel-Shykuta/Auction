import React from "react";
import { UserPlus, Gavel, ShieldCheck } from "lucide-react";
import styles from "./howItWorks.module.scss";

interface Step {
  id: number;
  icon: React.ReactNode;
  title?: string;
  description: string;
}

export const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      icon: <UserPlus className={styles.icon} />,
      title: "Create an Account",
      description:
        "Sign up on the platform in just a few clicks. It's completely free and grants full access to creating listings and placing bids.",
    },
    {
      id: 2,
      icon: <Gavel className={styles.icon} />,
      title: "Place Bids or Sell",
      description:
        "List your items for auction with a starting price, or browse interesting lots and submit your bids in real time.",
    },
    {
      id: 3,
      icon: "Win the Auction",
      description:
        "Keep an eye on the auction timer. The user with the highest and final bid at the moment the time runs out wins.",
    },
    {
      id: 4,
      icon: <ShieldCheck className={styles.icon} />,
      title: "Secure Deal",
      description:
        "Once the auction closes, the buyer and seller receive each other's contact details to complete the transaction safely.",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>How Does BidMaster Work?</h1>
          <p className={styles.subtitle}>
            Our platform makes it easy, fast, and secure to buy and sell items
            through online auctions in real time.
          </p>
        </header>

        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                {step.icon}
                <span className={styles.stepNumber}>{step.id}</span>
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h2>Ready to Start Your First Auction?</h2>
          <button className={styles.button}>Join Now</button>
        </div>
      </div>
    </section>
  );
};
