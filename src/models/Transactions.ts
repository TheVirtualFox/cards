export interface Transaction {
    transactionID: string;
    cardAccount: string;
    cardID: string;
    amount: number;
    currency: 'AZN' | 'EUR' | 'USD'
    transactionDate: string;
    merchantInfo: string;
}
