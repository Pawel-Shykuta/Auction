import { create } from "zustand";

interface BalanceState {
  balance: number;
  paymentAmount: number;

  changePaymentAmount: (sum: number) => void;
  addBalance: () => void;
  payment: () => void;
}

export const useBalanceStore = create<BalanceState>()((set, get) => ({
  balance: 4000,
  paymentAmount: 0,

  addBalance: () => set((state) => ({ balance: state.balance + 2500 })),

  changePaymentAmount: (sum: number) => set({ paymentAmount: sum }),

  payment: () => {
    const { balance, paymentAmount } = get();
    if (balance >= paymentAmount) {
      set({ balance: balance - paymentAmount });
    } else {
      alert("Not enough funds on the balance!!");
    }
  },
}));
