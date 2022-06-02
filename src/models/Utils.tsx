import {Transaction} from './Transactions';
import {TransactionsContextType} from '../contexts/transactions/TransactionsProvider';
import {DatePicker, Input} from 'antd';
import React, {Dispatch, SetStateAction} from 'react';

export type Filter<T> = { [key in keyof T]?: string };

export function createFilterInput<T>(
    key: keyof T,
    filter: Filter<T>,
    setFilter: Dispatch<SetStateAction<Filter<T>>>,
    placeholder: string
) {
    return (
        <Input
            placeholder={placeholder}
            value={filter[key]}
            onChange={e => {
                const currValue = e.target.value;
                setFilter((filter) => ({ ...filter, [key]: currValue}));
            }}
        />
);
}

export function createFilterDatePicker<T>(
    key: keyof T,
    filter: Filter<T>,
    setFilter: Dispatch<SetStateAction<Filter<T>>>,
    placeholder: string
) {
    return (
        <DatePicker placeholder={placeholder} onChange={(date, dateString) => {
            setFilter((filter) => ({ ...filter, [key]: dateString}));
        }} />
    );
}

export function createFilter<T>(filter: Filter<T>) {
    return (filtered: unknown) => {
        for (let key in filter) {
            // @ts-ignore
            const value = filtered[key].toString();
            // @ts-ignore
            const filterValue = filter[key].toString();
            if (!value.toLowerCase().includes(filterValue?.toLowerCase())) {
                return false
            }
        }

        return true;
    }
}

export function dateToString(date: string) {
    return date.toString().split('T').join(' ').replaceAll('-', '.').toUpperCase()
}