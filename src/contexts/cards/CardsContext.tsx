import { createContext, useContext } from "react";
import {CardsContextType} from './CardsProvider';

export const defaultValue = {
  cards: [],
  filter: {},
  setFilter: () => {},
  filteredCards: [],
};

export const CardsContext = createContext<CardsContextType>(defaultValue);

export function useCardsContext() {
  const context = useContext(CardsContext);

  if (context === undefined) {
    throw new Error(
      "useCardsContext must be used within CardsProvider"
    );
  }

  return context;
}
