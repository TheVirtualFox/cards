import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionsRoute from './routes/TransactionsRoute';
import TransactionRoute from './routes/TransactionRoute';
import CardRoute from './routes/CardRoute';
import CardsRoute from './routes/CardsRoute';
import LayoutApp from './components/LayoutApp';
import HomeRoute from './routes/HomeRoute';

function App() {
    return (
        <Router >
            <div className="App">
                <Routes>
                    <Route element={<LayoutApp />}>
                        <Route index element={<HomeRoute />}/>
                        <Route path="home" element={<HomeRoute />}/>
                        <Route path="transactions/" element={<TransactionsRoute />}/>
                        <Route path="transactions/:transactionId" element={<TransactionRoute />}/>
                        <Route path="transactions/:transactionId/:cardId" element={<CardRoute />}/>
                        <Route path="cards" element={<CardsRoute />}/>
                        <Route path="cards/:cardId" element={<CardRoute />}/>
                        <Route path="cards/:cardId/transactions" element={<TransactionsRoute />}/>
                        <Route path="cards/:cardId/transactions/:transactionId" element={<TransactionRoute />}/>
                        <Route path="*" element={<p>There's nothing here: 404!</p>}/>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
