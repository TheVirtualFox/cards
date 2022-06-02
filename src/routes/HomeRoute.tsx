import React from 'react';
import {Card, Col, Row} from 'antd';
import {NavLink} from 'react-router-dom';
import {CreditCardTwoTone, ProfileTwoTone} from '@ant-design/icons';

export default function HomeRoute() {
    return (
        <Row gutter={16}>
            <Col span={4}>
                <NavLink to='/transactions'>
                    <Card title="Transactions" bordered={false}>
                        <ProfileTwoTone style={{ fontSize: '95px'}} />
                    </Card>
                </NavLink>
            </Col>
            <Col span={4}>
                <NavLink to='/cards'>
                    <Card title="Cards" bordered={false}>
                        <CreditCardTwoTone style={{ fontSize: '95px'}} />
                    </Card>
                </NavLink>
            </Col>
        </Row>
    );
}