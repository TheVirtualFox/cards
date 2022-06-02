import React from 'react';
import {TransactionsProvider} from '../contexts/transactions/TransactionsProvider';
import TransactionsPage from '../pages/TransactionsPage';

function TransactionsRoute() {
    return (
        <TransactionsProvider>
            <TransactionsPage />
        </TransactionsProvider>
    );
}

export default TransactionsRoute;