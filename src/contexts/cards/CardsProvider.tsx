import { CardsContext } from "./CardsContext";
import {
  Dispatch,
  PropsWithChildren, SetStateAction,
  useEffect, useMemo,
  useState,
} from 'react';
import {Card} from '../../models';
import {getCards} from '../../services/CardsService';
import {createFilter, Filter} from '../../models/Utils';
import useSession from '../../hooks/useSession';

export type CardsContextType = {
  cards: Card[];
  filter: Filter<Card>,
  setFilter: Dispatch<SetStateAction<Filter<Card>>>;
  filteredCards: Card[];
};

export const CardsProvider = ({
  children
}: PropsWithChildren<{}>) => {
  const [cards, setCards] = useState<CardsContextType['cards']>([]);
  const [filter, setFilter] = useState<CardsContextType['filter']>({});

  useEffect( () => {
    getCards().then(setCards);
  }, []);

  const filteredCards = useMemo(() => {
    return cards.filter(createFilter<Card>(filter));
  }, [cards, filter]);

  useSession<Card>('cardsFilter', filter, setFilter);

  return (
    <CardsContext.Provider value={{ cards, filter, setFilter, filteredCards }}>
      {children}
    </CardsContext.Provider>
  );
};
