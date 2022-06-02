import {Layout, Menu} from 'antd';
import {Content, Footer, Header} from 'antd/es/layout/layout';
import {NavLink, Outlet} from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import React from 'react';

export default function LayoutApp() {
    return (
        <Layout>
            <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    items={[
                        {
                            key: 1,
                            label: (<NavLink key={1} to="/transactions">
                                transactions
                            </NavLink>)
                        },
                        {
                            key: 9,
                            label: (<NavLink key={2} to="/cards">
                                cards
                            </NavLink>)
                        }
                    ]}
                />
            </Header>
            <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                <Breadcrumb />
                <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
                    <Outlet/>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}></Footer>
        </Layout>
    );
};