import { create } from "zustand";

interface BalanceState {
  balance: number;
  paymentAmount: number;

  changePaymentAmount: (sum: number) => void;
  addBalance: () => void;
  payment: (amount: number) => boolean;
}

export const useBalanceStore = create<BalanceState>()((set, get) => ({
  balance: 4000,
  paymentAmount: 0,

  addBalance: () => set((state) => ({ balance: state.balance + 2500 })),

  changePaymentAmount: (sum: number) => set({ paymentAmount: sum }),

  payment: (amount: number) => {
    const { balance } = get();

    if (balance < amount) {
      alert("Not enough funds on the balance!!");
      return false;
    }
    set({ balance: balance - amount });

    return true;
  },
}));
