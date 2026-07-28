import { createAppStore } from '@/shared/state/createStore';

type CurrencyState = {
  /** ON = Euro (default), OFF = FCFA */
  isEuro: boolean;
  setEuro: (isEuro: boolean) => void;
  toggleCurrency: () => void;
};

export const useServiceCurrencyStore = createAppStore<CurrencyState>(
  (set, get) => ({
    isEuro: true,
    setEuro: (isEuro) => set({ isEuro }),
    toggleCurrency: () => set({ isEuro: !get().isEuro }),
  }),
  { name: 'service-currency', enablePersist: true },
);
