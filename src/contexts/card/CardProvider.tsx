import { CardContext } from "./CardContext";
import {
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import {Card} from '../../models';
import {useParams} from 'react-router-dom';
import {getCard} from '../../services/CardsService';
export type CardContextType = {
  card: Card | null;
};

export const CardProvider = ({
  children
}: PropsWithChildren<{}>) => {
  const [card, setCard] = useState<CardContextType['card']>(null);

  const params = useParams();

  useEffect( () => {
    if (params.cardId) {
      getCard(params.cardId).then(setCard);
    }
  }, [params]);

  return (
    <CardContext.Provider value={{ card }}>
      {children}
    </CardContext.Provider>
  );
};
