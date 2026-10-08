import { create } from "zustand";

interface NotificationsUiState {
  showMessage: boolean;
  changeShowMessage: () => void;
  closeShowMessage: () => void;
}

export const useNotificationsUiStore = create<NotificationsUiState>()(
  (set) => ({
    showMessage: false,

    changeShowMessage: () =>
      set((state) => ({ showMessage: !state.showMessage })),

    closeShowMessage: () => set({ showMessage: false }),
  }),
);
