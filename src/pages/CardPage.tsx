import React from 'react';
import CardDetails from '../components/CardDetails';
import {useCardContext} from '../contexts/card/CardContext';

function CardPage() {


    const {card} = useCardContext();

    return (
        <>
            {card && <CardDetails card={card} />}
        </>
    );
}

export default CardPage;