import React, { Component } from 'react';

class Places extends Component {
    render() {
        return (
            <div>
            <h3>Here you can add another location to our database</h3>
            <h2>Every form item is required</h2>

            <form>
                <input type='text' placeholder='name' name='name' /> <br/>
                
                <input type='text' placeholder='description' name='name' /> <br/>
                
                <input type='text' placeholder='location' name='name' /> <br/>
                
                <p>Does it have a bar?</p>
                <input type='checkbox'  name='age'/>
                <p>Does it serve food?</p>
                <input type='checkbox' name='food'/>
                <br/>
                <button type='submit'>Submit</button>
            </form>
            

        </div>
        );
    }
}

export default Places;