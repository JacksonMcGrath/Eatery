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
        document.querySelector(".hero").style.display = "none";
        const bar = this.bar;
        this.setState({
            bar: !bar
        })
    }

    toggleRestaurant = () => {
        console.log("toggleRestaurant was run");
        document.querySelector(".hero").style.display = "none";
        const restaurant = this.restaurant;
        this.setState({
            restaurant: !restaurant
        })
    }

    toggleBoth = () => {
        console.log("toggleplaces was run");
        document.querySelector(".hero").style.display = "none";
        const both = this.both;
        this.setState({
            both: !both
        })
    }

    toggleAdd = () => {
        console.log("toggleplaces was run");
        document.querySelector(".hero").style.display = "none";
        const add = this.add;
        this.setState({
            add: !add
        })
    }


    render() {
        return (
            <div className="App">
                <header>
                    <img className="logo" src="https://i.imgur.com/uCkqACX.png"></img>
                    <h2 className="logo-text">EATERY</h2>
                </header>
                <div className="hero">
                    <div className="prompt-container">
                        <h1 className="prompt">What are you looking for?</h1>
                    </div>
                        <div className="option-pannel">
                            <button onClick={this.toggleBar} className="options">Bar</button>
                            <button onClick={this.toggleRestaurant} className="options">Restaurant</button>
                        </div>
                        <button onClick={this.toggleBoth} className="option-both">both</button>
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
