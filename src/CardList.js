import React from 'react';
import Card from './Card';



const CardList = ({ robots }) => {
    return (
        <div>
            <Card id={robots[Math.floor(Math.random() * robots.length)].id} name={robots[Math.floor(Math.random() * robots.length)].name} email={robots[Math.floor(Math.random() * robots.length)].email}/>
            <Card id={robots[Math.floor(Math.random() * robots.length)].id} name={robots[Math.floor(Math.random() * robots.length)].name} email={robots[Math.floor(Math.random() * robots.length)].email}/>
            <Card id={robots[Math.floor(Math.random() * robots.length)].id} name={robots[Math.floor(Math.random() * robots.length)].name} email={robots[Math.floor(Math.random() * robots.length)].email}/>
            <Card id={robots[Math.floor(Math.random() * robots.length)].id} name={robots[Math.floor(Math.random() * robots.length)].name} email={robots[Math.floor(Math.random() * robots.length)].email}/>
            <Card id={robots[Math.floor(Math.random() * robots.length)].id} name={robots[Math.floor(Math.random() * robots.length)].name} email={robots[Math.floor(Math.random() * robots.length)].email}/>
        </div>
    );
}

export default CardList;