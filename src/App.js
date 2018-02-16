
import React, { Component } from 'react';
import axios from 'axios';
// This is how all the HTTP commands are issued
// eslint-disable-next-line
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

import RestaurantsList from './RestaurantList'
import BarsList from './BarList'
import PlacesList from  './PlaceList'
import AddLocations from './AddForm'
import NeighborhoodQuestion from './NeighborhoodQuestion'
import NeighborhoodList from './NeighborhoodList'

class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            add: false,
            eateries: [],
            restaurant: false,
            bar: false,
            both: false,
            food: false,
            noFood: false,
            barEither: false,
            restBar: false,
            noBar: false,
            restEither: false,
            neighborhoodCare: false,
            neighborhood: 0,
        }

        this.toggleBar = this.toggleBar.bind(this)
        this.toggleRestaurant = this.toggleRestaurant.bind(this)
        this.toggleBoth = this.toggleBoth.bind(this)
        this.toggleAdd = this.toggleAdd.bind(this)
        this.toggleFood = this.toggleFood.bind(this)
        this.toggleNoFood = this.toggleNoFood.bind(this)
        this.toggleNeighborhoodCare = this.toggleNeighborhoodCare.bind(this)
        this.showResults = this.showResults.bind(this)
        this.updateNeighborhood = this.updateNeighborhood.bind(this)
        this.grab = this.grab.bind(this)
    }

    //making the API calls
    componentDidMount() {
        axios.all([
            // axios.get('http://172.20.0.136:9293/restaurants'),
            // axios.get('http://172.20.0.136:9293/bars'),
            axios.get('http://172.20.0.136:9293/places')
          ])
        
          //setting the state
            .then((res) => {
                const state = res
                // console.log(state[0].data);
                this.setState({eateries: state[0].data});
                console.log(this.state)     

            })
            .catch((err) => {
                console.log(err)
            })
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

    toggleBarEither = () => {
        console.log("BarEither");
        document.querySelector("#bar").style.display = "none";
        const barEither = this.barEither;
        this.setState({
            barEither: !barEither
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
        console.log("RestEither");
        document.querySelector("#restaurant").style.display = "none";
        const restEither = this.restEither;
        this.setState({
            restEither: !restEither
        })
    }

    // RESULTS

    showResults = (e) => {
        console.log(this.state);
        if (this.state.bar == true) {
            console.log(this.state.bars);
        } else if (this.state.restaurant == true){
            console.log(this.state.restaurants);
        } else if (this.state.both == true) {
            console.log(this.state.restaurants + " | " + this.state.bars);
        }
        this.grab(e)
    }

    grab(e) {
        console.log(e.currentTarget.id);
        this.setState({
            neighborhood: e.currentTarget.id
        })
    }

    // NEIGHBORHOOD

    toggleNeighborhoodCare = () => {
        console.log("neighborhoodCare");
        document.querySelector("#neighborhood").style.display = "none";
        const neighborhoodCare = this.neighborhoodCare;
        this.setState({
            neighborhoodCare: !neighborhoodCare
        })
    }

    updateNeighborhood = (e) => {
        console.log("updateNeighborhood");
        console.log(this.currentTarget);
        document.querySelector("#neighborhood-list").style.display = "none";
        const neighborhood = this.neighborhood;
        this.grab(e)
    }


    render() {
        return (
            <div className="App">
                <header>
                    <button className="add" onClick={this.toggleAdd}>Add an Eatery</button>
                    <div className="logo-container"> 
                        <img className="logo" src="https://i.imgur.com/uCkqACX.png"></img>
                        <h2 className="logo-text">EATERY</h2>
                    </div>
                    <button className="show" onClick={this.showResults}>Show Results</button>
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

                {this.state.restaurant && <RestaurantsList 
                    restaurants={this.state.eateries}
                    toggleRestBar={this.toggleRestBar} 
                    toggleNoBar={this.toggleNoBar}
                    toggleRestEither={this.toggleRestEither}
                />}
                {this.state.bar && <BarsList 
                    bars={this.state.eateries}
                    toggleFood={this.toggleFood} 
                    toggleNoFood={this.toggleNoFood}
                    toggleBarEither={this.toggleBarEither}
                />}
                {this.state.both && <NeighborhoodQuestion
                    toggleNeighborhoodCare={this.toggleNeighborhoodCare}
                    showResults={this.showResults}
                />}
                {this.state.restEither && <NeighborhoodQuestion
                    toggleNeighborhoodCare={this.toggleNeighborhoodCare}
                    showResults={this.showResults}
                />}
                {this.state.barEither && <NeighborhoodQuestion
                    toggleNeighborhoodCare={this.toggleNeighborhoodCare}
                    showResults={this.showResults}
                />}
                {this.state.restBar && <NeighborhoodQuestion
                    toggleNeighborhoodCare={this.toggleNeighborhoodCare}
                    showResults={this.showResults}
                />}
                {this.state.noBar && <NeighborhoodQuestion
                    toggleNeighborhoodCare={this.toggleNeighborhoodCare}
                    showResults={this.showResults}
                />}
                {this.state.add && <NeighborhoodQuestion
                    toggleNeighborhoodCare={this.toggleNeighborhoodCare}
                    showResults={this.showResults}
                />}
                {this.state.food && <NeighborhoodQuestion
                    toggleNeighborhoodCare={this.toggleNeighborhoodCare}
                    showResults={this.showResults}
                />}
                {this.state.noFood && <NeighborhoodQuestion
                    toggleNeighborhoodCare={this.toggleNeighborhoodCare}
                    showResults={this.showResults}
                />}
                {this.state.neighborhoodCare && <NeighborhoodList
                    updateNeighborhood={this.updateNeighborhood}
                    showResults={this.showResults}
                />}
            </div>
        );
    }
}

export default App;
