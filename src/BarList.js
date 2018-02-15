import React, { Component } from 'react';
class Bars extends Component {

    constructor(){
        super()
    
        this.state = {
            food: false,
            noFood: false,
            either: false,
        }
    }

    render() {

        return (
            <div className="hero">
                <div className="prompt-container">
                    <h1 className="prompt">Do you want a Bar that serves food?</h1>
                </div>
                <div className="option-pannel">
                    <button onClick={this.toggleFood} className="options">Yes</button>
                    <button onClick={this.toggleNoFood} className="options">No</button>
                </div>
                <button onClick={this.toggleEither} className="option-both">either</button>
            </div>
        );
    }
}

export default Bars;