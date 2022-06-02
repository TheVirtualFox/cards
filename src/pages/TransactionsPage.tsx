import React from 'react';
import {Table, Tag} from 'antd';
import {ColumnsType} from 'antd/es/table';
import {NavLink, useParams} from 'react-router-dom';
import {Transaction} from '../models';
import {useTransactionsContext} from '../contexts/transactions/TransactionsContext';
import {createFilterDatePicker, createFilterInput, dateToString} from '../models/Utils';
import TransactionDetails from '../components/TransactionDetails';

function TransactionsPage() {

    const params = useParams();
    const {filter, setFilter, filteredTransaction} = useTransactionsContext();
    const FilterByCardIdInput = createFilterInput<Transaction>('cardID', filter, setFilter, 'Card Id');
    const FilterByCardAccountInput = createFilterInput<Transaction>('cardAccount', filter, setFilter, 'Account');
    const FilterByAmountInput = createFilterInput<Transaction>('amount', filter, setFilter, 'Amount');
    const FilterByCurrencyInput = createFilterInput<Transaction>('currency', filter, setFilter, 'Currency');
    const FilterByDateDatePicker = createFilterDatePicker('transactionDate', filter, setFilter, 'Transaction Date');

    const columns: ColumnsType<Transaction> = [
        Table.EXPAND_COLUMN,
        {
            title: 'transaction Id',
            dataIndex: 'transactionID',
            render: (_, {transactionID}) => {
                const base = params.cardId ? `/cards/${params.cardId}` : ``;
                return (<NavLink to={`${base}/transactions/${transactionID}`}>{transactionID}</NavLink>)
            }
        },
        {
            title: FilterByCardAccountInput,
            dataIndex: 'cardAccount',
        },
        {
            title: FilterByCardIdInput,
            dataIndex: 'cardID',
            render: (_, {transactionID, cardID}) => {
                const to = params.cardId ? `/cards/${params.cardId}` : `/transactions/${transactionID}/${cardID}`;
                return (<NavLink to={to}>{cardID}</NavLink>)
            }
        },
        {
            title: FilterByAmountInput,
            dataIndex: 'amount',
        },
        {
            title: FilterByCurrencyInput,
            dataIndex: 'currency',
            render: (_, {currency}) => (<Tag color={'geekblue'}>
                {currency.toUpperCase()}
            </Tag>)
        },
        {
            title: FilterByDateDatePicker,
            dataIndex: 'transactionDate',
            render: (_, {transactionDate}) => (<Tag color={'default'}>
                {dateToString(transactionDate)}
            </Tag>)
        }
    ];

    return (
        <div>
            <Table
                rowKey={transaction => transaction.transactionID}
                columns={columns}
                dataSource={filteredTransaction}
                pagination={{pageSize: 10}}
                expandable={{
                    expandedRowRender: transaction => <TransactionDetails transaction={transaction} />,
                }}
            />
        </div>
    );
}

export default TransactionsPage;