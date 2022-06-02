import {Breadcrumb as AntBreadcrumb} from 'antd';
import React from 'react';
import {useParams, useLocation, NavLink} from 'react-router-dom';

function Breadcrumb() {
    const {pathname} = useLocation();
    const params = useParams();

    const Home = <AntBreadcrumb.Item>
                    <NavLink to={'/home'}>
                        Home
                    </NavLink>
                </AntBreadcrumb.Item>;

    const paths = pathname.split(`/`);
    if (paths[1] === 'transactions') {
        return (
            <AntBreadcrumb style={{margin: '16px 0'}}>
                {Home}
                <AntBreadcrumb.Item>
                    <NavLink to={`/transactions`}>
                        Transactions
                    </NavLink>
                </AntBreadcrumb.Item>
                {params.transactionId && <AntBreadcrumb.Item>
                    <NavLink to={`/transactions/${params.transactionId}`}>
                        {params.transactionId}
                    </NavLink>
                </AntBreadcrumb.Item>}
                {params.cardId && <AntBreadcrumb.Item>
                    <NavLink to={`/transactions/${params.transactionId}/${params.cardId}`}>
                        {params.cardId}
                    </NavLink>
                </AntBreadcrumb.Item>}
            </AntBreadcrumb>
        );
    } else if (paths[1] === 'cards') {
        return (
            <AntBreadcrumb style={{margin: '16px 0'}}>
                {Home}
                <AntBreadcrumb.Item>
                    <NavLink to={`/cards`}>
                        Cards
                    </NavLink>
                </AntBreadcrumb.Item>
                {params.cardId && <AntBreadcrumb.Item>
                    <NavLink to={`/cards/${params.cardId}`}>
                        {params.cardId}
                    </NavLink>
                </AntBreadcrumb.Item>}
                {params.transactionId && <AntBreadcrumb.Item>
                    <NavLink to={``}>
                        transactions
                    </NavLink>
                </AntBreadcrumb.Item>}
                {params.transactionId && <AntBreadcrumb.Item>
                    <NavLink to={``}>
                        {params.transactionId}
                    </NavLink>
                </AntBreadcrumb.Item>}
            </AntBreadcrumb>
        );
    }

    return (
        <AntBreadcrumb style={{margin: '16px 0'}}>
            {Home}
        </AntBreadcrumb>
    );
}

export default Breadcrumb;