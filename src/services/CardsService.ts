import {DB} from './DB';

export const getCards = async () => {
    return await Promise.resolve(DB.cards);
}

export const getCard = async (cardId: string) => {
    return await Promise.resolve(DB.cards.find(({cardID: id}) => id === cardId)) || null;
}