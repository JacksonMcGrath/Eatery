
import React, { Component } from 'react';

class Bars extends Component {

    constructor(props){
        super(props)
    
        this.state = {

        }
    }

    render() {
        // console.log("Bars list is ready");

    const allBars = this.props.bars.map((bars, i) => {
        if (this.props.bars[i].restaurant == false) {
            // console.log(bars.name);
        return 
            <div key={i} className="output">
                <h2>{bars.name}</h2>
                <h4>{bars.location}</h4>
                <p>{bars.description}</p>
            </div>
     }
})

    //    console.log(allBars)
  
    return (
            <div className="component-container">
                <div className="hero" id="bar">
                    <div className="prompt-container">
                        <h1 className="prompt">Do you want a Bar that serves food?</h1>
                    </div>
                    <div className="option-pannel">
                        <button onClick={this.props.toggleFood} className="options">Yes</button>
                        <button onClick={this.props.toggleNoFood} className="options">No</button>
                    </div>
                    <button onClick={this.props.toggleBarEither} className="option-both">either</button>
                </div>
            </div>
        );
    }
}

export default Bars;