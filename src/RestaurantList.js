
import React, { Component } from 'react';

class Restaurants extends Component {

	constructor(props){
		super(props)
	
        this.state = {

        }
    }

    render() {

        // console.log("restaurants are ready")
        const allRestaurants = this.props.restaurants.map((restaurants, i) => { 
            if (this.props.restaurants[i].restaurant == true) 
            // console.log(restaurants.name)
            return <li key={i} >{restaurants.name} - {restaurants.location}: {restaurants.description} </li>})

        return (
            <div className="component-container">
                <div className="hero" id="restaurant">
                    <div className="prompt-container">
                        <h1 className="prompt">Do you want a restaurant that also has a bar</h1>
                    </div>
                    <div className="option-pannel">
                        <button onClick={this.props.toggleRestBar} className="options">Yes</button>
                        <button onClick={this.props.toggleNoBar} className="options">No</button>
                    </div>
                    <button onClick={this.props.toggleRestEither} className="option-both">either</button>
                </div>
            </div>
        );
    }
}

export default Restaurants