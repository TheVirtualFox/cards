import React from 'react';
import CardPage from '../pages/CardPage';
import {CardProvider} from '../contexts/card/CardProvider';

function CardRoute() {
    return (
        <CardProvider>
            <CardPage />
        </CardProvider>
    );
}

export default CardRoute;