import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import "./App.css";
import 'tachyons';
import Scroll from '../components/Scroll';


function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState('');


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    },[]);

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
        <h1>Loading</h1>:
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
        
    
}

export default App;