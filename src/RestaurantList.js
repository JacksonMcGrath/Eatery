import React, { Component } from 'react';

class Restaurants extends Component {
    render() {
        // console.log("restaurants are ready")
        const allRestaurants = this.props.restaurants.map((restaurants, i) => {
            return <li key={i} >{restaurants.name} - {restaurants.location}: {restaurants.description} </li>})

        return (
            <div>
                 <h1>This is the Restaurants list</h1>
                <ul>
                {allRestaurants}
                </ul>
            </div>
        );
    }
}

export default Restaurants