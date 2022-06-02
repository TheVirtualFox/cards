import { createContext, useContext } from "react";
import {TransactionsContextType} from './TransactionsProvider';

export const defaultValue = {
  transactions: [],
  filter: {},
  setFilter: () => {},
  filteredTransaction: [],
};

export const TransactionsContext = createContext<TransactionsContextType>(defaultValue);

export function useTransactionsContext() {
  const context = useContext(TransactionsContext);

  if (context === undefined) {
    throw new Error(
      "useTransactionsContext must be used within TransactionsProvider"
    );
  }

  return context;
}
