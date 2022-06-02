import React from 'react';
import {TransactionProvider} from '../contexts/transaction/TransactionProvider';
import TransactionPage from '../pages/TransactionPage';

function TransactionRoute() {
    return (
        <TransactionProvider>
            <TransactionPage />
        </TransactionProvider>
    );
}

export default TransactionRoute;