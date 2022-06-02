import { createContext, useContext } from "react";
import {TransactionContextType} from './TransactionProvider';

export const defaultValue = {
  transaction: null,
};

export const TransactionContext = createContext<TransactionContextType>(defaultValue);

export function useTransactionContext() {
  const context = useContext(TransactionContext);

  if (context === undefined) {
    throw new Error(
      "useTransactionContext must be used within TransactionProvider"
    );
  }

  return context;
}
