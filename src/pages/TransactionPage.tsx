import React from 'react';
import {useTransactionContext} from '../contexts/transaction/TransactionContext';
import TransactionDetails from '../components/TransactionDetails';

function TransactionPage() {

    const {transaction} = useTransactionContext();

    return (
        <>
            {transaction && <TransactionDetails transaction={transaction} />}
        </>
    );
}

export default TransactionPage;