
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantsList from './RestaurantList'
import BarsList from './BarList'
import PlacesList from  './PlaceList'
import AddLocations from './AddForm'
import RestaurantWithBar from './RestaurantWithBar'
import RestaurantNoBar from './RestaurantNoBar'
import BarFood from './BarFood'
import BarNoFood from './BarNoFood'


class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            restaurant: false,
            bar: false,
            both: false,
            food: false,
            noFood: false,
            barEither: false,
            restBar: false,
            noBar: false,
            restEither: false,
        }

        this.toggleBar = this.toggleBar.bind(this)
        this.toggleRestaurant = this.toggleRestaurant.bind(this)
        this.toggleBoth = this.toggleBoth.bind(this)
        this.toggleAdd = this.toggleAdd.bind(this)
        this.toggleFood = this.toggleFood.bind(this)
        this.toggleNoFood = this.toggleNoFood.bind(this)
    }

    // PARENT FUNCTIONS

    toggleBar = () => {
        document.querySelector(".hero").style.display = "none";
        const bar = this.bar;
        this.setState({
            bar: !bar
        })
    }

    toggleRestaurant = () => {
        document.querySelector(".hero").style.display = "none";
        const restaurant = this.restaurant;
        this.setState({
            restaurant: !restaurant
        })
    }

    toggleBoth = () => {
        document.querySelector(".hero").style.display = "none";
        const both = this.both;
        this.setState({
            both: !both
        })
    }

    toggleAdd = () => {
        document.querySelector(".hero").style.display = "none";
        const add = this.add;
        this.setState({
            add: !add
        })
    }

    // BAR FUNCTIONS


    toggleFood = () => {
        document.querySelector("#bar").style.display = "none";
        const food = this.food;
        this.setState({
            food: !food
        })
    }

    toggleNoFood = () => {
        document.querySelector("#bar").style.display = "none";
        const noFood = this.noFood;
        this.setState({
            noFood: !noFood
        })
    }

    // RESTAURANT FUNCTIONS

    toggleRestBar = () => {
        document.querySelector("#restaurant").style.display = "none";
        const restBar = this.restBar;
        this.setState({
            restBar: !restBar
        })
    }

    toggleNoBar = () => {
        document.querySelector("#restaurant").style.display = "none";
        const noBar = this.noBar;
        this.setState({
            noBar: !noBar
        })
    }

    toggleRestEither = () => {
        document.querySelector("#bar").style.display = "none";
        const restEither = this.restEither;
        this.setState({
            restEither: !restEither
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
                {this.state.restaurant && <RestaurantsList toggleRestBar={this.toggleRestBar} toggleNoBar={this.toggleNoBar}/>}
                {this.state.bar && <BarsList toggleFood={this.toggleFood} toggleNoFood={this.toggleNoFood}/>}
                {this.state.both && <PlacesList/>}
                {this.state.restBar && <RestaurantWithBar/>}
                {this.state.noBar && <RestaurantNoBar/>}
                {this.state.add && <AddLocations/>}
                {this.state.food && <BarFood/>}
                {this.state.noFood && <BarNoFood/>}
            </div>
        );
    }
}

export default App;
