import React, { Component } from 'react';

class Restaurants extends Component {
    render() {
        // console.log("restaurants are ready")
        const allRestaurants = this.props.restaurants.map((restaurants, i) => {
            return <li key={i} >{restaurants.name} - {restaurants.location}: {restaurants.description} </li>})
        return (
            <div>
                {allRestaurants}
            </div>
        );
    }
}

export default Restaurants