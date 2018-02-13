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
                <div>
                    <div className="hero">
                        <h1 className="prompt">What are you looking for?</h1>
                        <div className="prompt-container">
                            <div className="option-pannel">
                                <button className="options">Bar</button>
                                <button className="options">Restaurant</button>
                                <button className="options">Both</button>
                            </div>
                        </div>
                    </div>
                </div>
                <RestaurantsList/>
                <BarsList/>
            </div>
        );
    }
}

export default App;
