import {Transaction} from '../models';
import {Descriptions} from 'antd';
import React from 'react';

export default function TransactionDetails({transaction}: {transaction: Transaction}) {

    const {
        transactionID,
        cardID,
        transactionDate,
        currency,
        cardAccount,
        amount,
        merchantInfo
    } = transaction;

    return (
        <Descriptions title="Transaction Info" style={{ margin: 0 }}>
            <Descriptions.Item label="Transaction ID">{transactionID}</Descriptions.Item>
            <Descriptions.Item label="Card ID">{cardID}</Descriptions.Item>
            <Descriptions.Item label="Transaction Date">{transactionDate}</Descriptions.Item>
            <Descriptions.Item label="Merchant Info">{merchantInfo}</Descriptions.Item>
            <Descriptions.Item label="Currency">{currency}</Descriptions.Item>
            <Descriptions.Item label="Card Account">{cardAccount}</Descriptions.Item>
            <Descriptions.Item label="Amount">{amount}</Descriptions.Item>
        </Descriptions>
    );
}
