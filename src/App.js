import React, { Component } from 'react';
import axios from 'axios';
// eslint-disable-next-line
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
// eslint-disable-next-line
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
            restaurants: [],
            bars: []
        }
    
    }

    componentDidMount() {
        axios.get('http://172.20.0.123:9292/restaurants')
            .then((res) => {
                // console.log(this.state.);
                const state = res.data
                this.setState({restaurants: state});
                console.log(this.state)


                
            })
            .catch((err) => {
                console.log(err)
            })
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
                <AddLocations />
                <RestaurantsList/>
                
                <BarsList/>
                {/* This form will allow you to add places */}
                <PlacesList/>
            </div>
        );
    }
}

export default App;
