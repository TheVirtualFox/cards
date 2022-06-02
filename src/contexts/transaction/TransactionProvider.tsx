import { TransactionContext } from "./TransactionContext";
import {
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import {Transaction} from '../../models';
import {getTransaction} from '../../services';
import {useParams} from 'react-router-dom';

export type TransactionContextType = {
  transaction: Transaction | null;
};

export const TransactionProvider = ({
  children
}: PropsWithChildren<{}>) => {
  const [transaction, setTransaction] = useState<TransactionContextType['transaction']>(null);

  const params = useParams();

  useEffect( () => {
    if (params.transactionId) {
      getTransaction(params.transactionId).then(setTransaction);
    }
  }, [params]);

  return (
    <TransactionContext.Provider value={{ transaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
