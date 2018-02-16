import React, { Component } from 'react';

class NeihborhoodList extends Component {

	constructor(props){
		super(props)
	
		this.state = {
	
		}
	}

    render() {

        return (
            <div className="hero" id="neighborhood-list">
                <div className="prompt-container">
                    <h1 className="prompt">Choose a neighborhood</h1>
                </div>
                <div className="neighborhood-container">
                    <div>
                        <h4 id="1" onClick={this.props.updateNeighborhood}>Wicker Park</h4>
                        <h4 id="2" onClick={this.props.updateNeighborhood}>West Loop</h4>
                        <h4 id="3" onClick={this.props.updateNeighborhood}>Bucktown</h4>
                        <h4 id="4" onClick={this.props.updateNeighborhood}>Logan Square</h4>
                        <h4 id="5" onClick={this.props.updateNeighborhood}>Lincoln Park</h4>
                        <h4 id="6" onClick={this.props.updateNeighborhood}>Avondale</h4>
                        <h4 id="7" onClick={this.props.updateNeighborhood}>Irving Park</h4>
                    </div>
                    <div>
                        <h4 id="8" onClick={this.props.updateNeighborhood}>Hunboldt Park</h4>
                        <h4 id="9" onClick={this.props.updateNeighborhood}>Old Town</h4>
                        <h4 id="10" onClick={this.props.updateNeighborhood}>Lakeview</h4>
                        <h4 id="11" onClick={this.props.updateNeighborhood}>Oak Park</h4>
                        <h4 id="12" onClick={this.props.updateNeighborhood}>Pilsen</h4>
                        <h4 id="13" onClick={this.props.updateNeighborhood}>Ravenswood</h4>
                        <h4 id="14" onClick={this.props.updateNeighborhood}>Lincoln Square</h4>
                    </div>
                    <div>
                        <h4 id="15" onClick={this.props.updateNeighborhood}>Ukrainian Village</h4>
                        <h4 id="16" onClick={this.props.updateNeighborhood}>Near North Side</h4>
                        <h4 id="17" onClick={this.props.updateNeighborhood}>Fulton Market</h4>
                        <h4 id="18" onClick={this.props.updateNeighborhood}>South Loop</h4>
                        <h4 id="19" onClick={this.props.updateNeighborhood}>Andersonville</h4>
                        <h4 id="20" onClick={this.props.updateNeighborhood}>West Town</h4>
                        <h4 id="21" onClick={this.props.updateNeighborhood}>Rogers Park</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default NeihborhoodList