import React, { Component } from 'react';
import axios from 'axios';
// eslint-disable-next-line
// This is how all the HTTP commands are issued
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

    //making the API calls
    componentDidMount() {
        axios.all([
            axios.get('http://172.20.0.136:9293/restaurants'),
            axios.get('http://172.20.0.136:9293/bars'),
            // axios.get('http://172.20.0.136:9292/places')
          ])
        
          //setting the state
            .then((res) => {
                const state = res
                // console.log(state.data);
                this.setState({restaurants: state[0].data});
                this.setState({bars: state[1].data});
                // console.log(this.state)     
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
                <RestaurantsList restaurants={this.state.restaurants}/>
                
                <BarsList bars={this.state.bars}/>
                {/* This form will allow you to add places */}
                <PlacesList/>
            </div>
        );
    }
}

export default App;
