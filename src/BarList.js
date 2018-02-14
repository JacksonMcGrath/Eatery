import React, { Component } from 'react';
class Bars extends Component {

    // handleEdit(e) => {
    //     console.log(e.currentTarget.value, "Ready to edited.");
    // };

    // handleSubmit(e) => {
    //     console.log(e.currentTarget.value, "this will submit");
    // };

    // handleDelete(e) =. {
    //     console.log(e.currentTarget.value, "This will be deleted");
    // };

    render() {

        return (
            <div className="hero">
                <div className="prompt-container">
                    <h1 className="prompt">Do you wan't a Bar that serves food?</h1>
                </div>
                    <div className="option-pannel">
                        <button onClick={this.toggleBar} className="options">Yes</button>
                        <button onClick={this.toggleRestaurant} className="options">No</button>
                    </div>
                    <button onClick={this.toggleplaces} className="optionBoth">either</button>
            </div>
        );
    }
}

export default Bars;