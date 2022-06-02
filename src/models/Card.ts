export interface Card {
    cardID: string;
    cardAccount: string;
    maskedCardNumber: string;
    expireDate: string;
    currency: 'AZN' | 'EUR' | 'USD';
    status: 'active' | 'blocked';
    balance: number;
}