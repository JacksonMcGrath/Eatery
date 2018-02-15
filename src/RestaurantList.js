import React, { Component } from 'react';

class Restaurants extends Component {
    render() {

        return (
            <div className="hero">
                <div className="prompt-container">
                    <h1 className="prompt">Do you wan't a Restaurant that also has a bar?</h1>
                </div>
                    <div className="option-pannel">
                        <button onClick={this.toggleBar} className="options">Yes</button>
                        <button onClick={this.toggleRestaurant} className="options">No</button>
                    </div>
                    <button onClick={this.toggleplaces} className="option-both">either</button>
            </div>
        );
    }
}

export default Restaurants