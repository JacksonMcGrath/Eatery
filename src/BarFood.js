import React, { Component } from 'react';

class BarFoods extends Component {

	constructor(){
		super()
	
		this.state = {
	
		}
	}

    render() {

        return (
            <div className="hero">
                <div className="prompt-container">
                    <h1 className="prompt">Are you looking in a specific neighborhood?</h1>
                </div>
                <div className="option-pannel">
                    <button onClick={this.toggleBar} className="options">Yes</button>
                    <button onClick={this.toggleRestaurant} className="options">No</button>
                </div>
            </div>
        );
    }
}

export default BarFoods