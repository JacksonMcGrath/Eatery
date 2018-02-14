import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantsList from './RestaurantList'
import BarsList from './BarList'
import PlacesList from  './PlaceList'
import AddLocations from './AddForm'


class App extends Component {

    constructor(){
        super()

        this.state = {
            restaurant: false,
            bar: false,
            both: false,
            add: false,
        }

        this.toggleBar = this.toggleBar.bind(this)

        this.toggleRestaurant = this.toggleRestaurant.bind(this)

        this.toggleBoth = this.toggleBoth.bind(this)

        this.toggleAdd = this.toggleAdd.bind(this)
    }

    toggleBar = () => {
        console.log("toggleBar was run");
        const bar = this.bar;
        this.setState({
            bar: !bar
        })
    }

    toggleRestaurant = () => {
        console.log("toggleRestaurant was run");
        const restaurant = this.restaurant;
        this.setState({
            restaurant: !restaurant
        })
    }

    toggleBoth = () => {
        console.log("toggleplaces was run");
        const both = this.both;
        this.setState({
            both: !both
        })
    }

    toggleAdd = () => {
        console.log("toggleplaces was run");
        const add = this.add;
        this.setState({
            add: !add
        })
    }


    render() {
        return (
            <div className="App">
                <div className="hero">
                    <div className="prompt-container">
                        <h1 className="prompt">What are you looking for?</h1>
                    </div>
                        <div className="option-pannel">
                            <button onClick={this.toggleBar} className="options">Bar</button>
                            <button onClick={this.toggleRestaurant} className="options">Restaurant</button>
                        </div>
                        <button onClick={this.toggleplaces} className="optionBoth">places</button>
                </div>
                {this.state.restaurant && <RestaurantsList/>}
                {this.state.bar && <BarsList/>}
                {this.state.both && <PlacesList/>}
                {this.state.add && <AddLocations/>}
            </div>
        );
    }
}

export default App;
