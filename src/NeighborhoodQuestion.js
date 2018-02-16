
import React, { Component } from 'react';

class NeighborhoodQuestions extends Component {

	constructor(props){
		super(props)
	
		this.state = {
	
		}
	}

    render() {

        return (
            <div className="hero" id="neighborhood">
                <div className="prompt-container">
                    <h1 className="prompt">Are you looking in a specific neighborhood?</h1>
                </div>
                <div className="option-pannel">
                    <button onClick={this.props.toggleNeighborhoodCare} className="options">Yes</button>
                    <button onClick={this.props.showResults} className="options">No</button>
                </div>
            </div>
        );
    }
}

export default NeighborhoodQuestions