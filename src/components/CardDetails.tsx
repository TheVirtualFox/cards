import {Card, Transaction} from '../models';
import {Descriptions} from 'antd';
import React from 'react';
import {NavLink} from 'react-router-dom';

export default function CardDetails({card}: {card: Card}) {

    const {
        cardID,
        status,
        maskedCardNumber,
        expireDate,
        currency,
        cardAccount,
        balance
    } = card;

    return (
        <>
            <Descriptions title="Card Info" style={{ margin: 0 }}>
                <Descriptions.Item label="Card ID">{cardID}</Descriptions.Item>
                <Descriptions.Item label="Balance">{balance}</Descriptions.Item>
                <Descriptions.Item label="Masked Card Number">{maskedCardNumber}</Descriptions.Item>
                <Descriptions.Item label="Currency">{currency}</Descriptions.Item>
                <Descriptions.Item label="Card Account">{cardAccount}</Descriptions.Item>
                <Descriptions.Item label="status">{status}</Descriptions.Item>
                <Descriptions.Item label="Expire Date">{expireDate}</Descriptions.Item>
            </Descriptions>

            <NavLink to={`/cards/${cardID}/transactions`}>Transactions</NavLink>
        </>
    );
}
