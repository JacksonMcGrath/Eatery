import React, { Component } from 'react';

class Places extends Component {
    constructor(){
        super()
    
        this.state = {
    
        }
    }

    render() {
        return (
            <div className="hero">
                <div className="prompt-container">
                    <h1 className="prompt">Are you looking in a certain neighborhood?</h1>
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

export default Places;