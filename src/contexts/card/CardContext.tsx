import { createContext, useContext } from "react";
import {CardContextType} from './CardProvider';

export const defaultValue = {
  card: null,
};

export const CardContext = createContext<CardContextType>(defaultValue);

export function useCardContext() {
  const context = useContext(CardContext);

  if (context === undefined) {
    throw new Error(
      "useCardContext must be used within CardProvider"
    );
  }

  return context;
}
