import React from 'react';
import { Table, Tag} from 'antd';
import {ColumnsType} from 'antd/es/table';
import {NavLink} from 'react-router-dom';
import {Card} from '../models';
import {useCardsContext} from '../contexts/cards/CardsContext';
import {createFilterInput} from '../models/Utils';
import CardDetails from '../components/CardDetails';

function CardsPage() {

    const {filter, setFilter, filteredCards} = useCardsContext();
    const FilterByCardIdInput = createFilterInput<Card>('cardID', filter, setFilter, 'Card Id');
    const FilterByCardAccountInput = createFilterInput<Card>('cardAccount', filter, setFilter, 'Account');
    const FilterByStatusInput = createFilterInput<Card>('status', filter, setFilter, 'Status');
    const FilterByCurrencyInput = createFilterInput<Card>('currency', filter, setFilter, 'Currency');

    const columns: ColumnsType<Card> = [
        Table.EXPAND_COLUMN,
        {
            title: FilterByCardIdInput,
            dataIndex: 'cardID',
            render: (_, {cardID}) => (<NavLink to={`/cards/${cardID}`}>{cardID}</NavLink>)
        },
        {
            title: FilterByCardAccountInput,
            dataIndex: 'cardAccount',
        },
        {
            title: FilterByCurrencyInput,
            dataIndex: 'currency',
            render: (_, {currency}) => (<Tag color={'geekblue'}>
                {currency.toUpperCase()}
            </Tag>)
        },
        {
            title: FilterByStatusInput,
            dataIndex: 'status',
            render: (_, {status}) => (<Tag color={status === 'active' ? 'success' : 'default'}>
                {status.toUpperCase()}
            </Tag>)
        }
    ];

    return (
        <div>
            <Table
                rowKey={card => card.cardID}
                columns={columns}
                dataSource={filteredCards}
                pagination={{pageSize: 10}}
                expandable={{
                    expandedRowRender: card => <CardDetails card={card} />,
                }}
            />
        </div>
    );
}

export default CardsPage;