import BarFood from './BarFood'
import BarNoFood from './BarNoFood'

import React, { Component } from 'react';
class Bars extends Component {

    constructor(props){
        super(props)
    
        this.state = {

        }
    }

    toggleEither = () => {
        console.log("toggleBar was run");
        document.querySelector("#bar").style.display = "none";
        const either = this.either;
        this.setState({
            either: !either
        })
    }

    render() {

        return (
            <div className="component-container">
                <div className="hero" id="bar">
                    <div className="prompt-container">
                        <h1 className="prompt">Do you want a Bar that serves food?</h1>
                    </div>
                    <div className="option-pannel">
                        <button onClick={this.toggleFood} className="options">Yes</button>
                        <button onClick={this.toggleNoFood} className="options">No</button>
                    </div>
                    <button onClick={this.toggleEither} className="option-both">either</button>

                </div>
                {this.state.food && <BarFood/>}
                {this.state.noFood && <BarNoFood/>}
            </div>
        );
    }
}

export default Bars;