import React, { Component } from 'react';
import CardGroup from './CardGroup';
import { robots } from './robots';
import SearchBox from './SearchBox';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange(event) {
        console.log(event.target.value);
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(searcfield.toLowerCase());
        })
    }

    render() {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardGroup robots={this.state.robots}/>
            </div>
        );
    }
    
}

export default App;