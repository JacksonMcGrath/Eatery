
import React, { Component } from 'react';

class Restaurants extends Component {

	constructor(props){
		super(props)
	
        this.state = {

        }
    }

    render() {

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
                    <button onClick={this.toggleEither} className="option-both">either</button>
                </div>
            </div>
        );
    }
}

export default Restaurants