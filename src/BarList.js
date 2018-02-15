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
        // console.log("Bars list is ready");

    const allBars = this.props.bars.map((bars, i) => {
        return <li key={i} >{bars.name} - {bars.location}: {bars.description} </li>
  })

       
        
        // console.log(barsList())


        return (
            <div>
            <h1>This is the bars list</h1>
            <ul>
                {allBars}
                </ul>
            </div>
        );
    }
}

export default Bars;