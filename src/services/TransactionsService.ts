import {DB} from './DB';

export const getTransactions = async () => {
    return await Promise.resolve(DB.transactions);
}

export const getTransaction = async (transactionID: string) => {
    return await Promise.resolve(DB.transactions.find(({transactionID: id}) => id === transactionID)) || null;
}