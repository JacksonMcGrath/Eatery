import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantsList from './RestaurantList'
import BarsList from './BarList'


class App extends Component {

    constructor(){
        super()

        this.state = {

        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <RestaurantsList />
                <BarsList />
            </div>
        );
    }
}

export default App;
