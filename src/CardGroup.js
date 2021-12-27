import React from 'react';
import CardList from './CardList';

const CardGroup = ({ robots }) => {
    return (
        <div>
            <CardList robots={robots}/>
            <CardList robots={robots}/>
        </div>
    );
}

export default CardGroup;