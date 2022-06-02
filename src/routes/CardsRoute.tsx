import React from 'react';
import CardsPage from '../pages/CardsPage';
import {CardsProvider} from '../contexts/cards/CardsProvider';

function CardsRoute() {
    return (
        <CardsProvider>
            <CardsPage />
        </CardsProvider>
    );
}

export default CardsRoute;