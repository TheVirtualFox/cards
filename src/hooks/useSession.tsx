import {Dispatch, SetStateAction, useEffect} from 'react';
import {Filter} from '../models/Utils';

export default function useSession<T>(
    key: string,
    filter: Filter<T>,
    setFilter: Dispatch<SetStateAction<Filter<T>>>) {
    useEffect(() => {
        const isFilter = Object.keys(filter).length;
        if (isFilter) {
            sessionStorage.setItem(key, JSON.stringify(filter));
        }
    }, [filter]);

    useEffect(() => {
        const transactionFilterJSON = sessionStorage.getItem(key);
        if (transactionFilterJSON) {
            const transactionFilter = JSON.parse(transactionFilterJSON);
            setFilter(transactionFilter);
        }
    }, []);
}