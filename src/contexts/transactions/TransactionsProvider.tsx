import { TransactionsContext } from "./TransactionsContext";
import {
  Dispatch,
  PropsWithChildren, SetStateAction,
  useEffect, useMemo,
  useState,
} from 'react';
import {Transaction} from '../../models';
import {getTransactions} from '../../services';
import {createFilter, Filter} from '../../models/Utils';
import useSession from '../../hooks/useSession';
import {useParams} from 'react-router-dom';

export type TransactionsContextType = {
  transactions: Transaction[];
  filter: Filter<Transaction>,
  setFilter: Dispatch<SetStateAction<Filter<Transaction>>>;
  filteredTransaction: Transaction[];
};

export const TransactionsProvider = ({
  children
}: PropsWithChildren<{}>) => {
  const [transactions, setTransactions] = useState<TransactionsContextType['transactions']>([]);
  const [filter, setFilter] = useState<TransactionsContextType['filter']>({});

  useEffect( () => {
    getTransactions().then(setTransactions);
  }, []);

  useSession('transactionFilter', filter, setFilter);

  const params = useParams();
  useEffect(() => {
    if (params.cardId) {
      setFilter((filter) => {
        return {...filter, cardID: params.cardId}
      });
    }
  }, [params.cardId]);

  const filteredTransaction = useMemo(() => {
    return transactions.filter(createFilter<Transaction>(filter))
  }, [transactions, filter]);

  return (
    <TransactionsContext.Provider value={{ transactions, filter, setFilter, filteredTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
