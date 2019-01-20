import React, { Component } from 'react';
import GenericProgressBar from './GenericProgressBar.js';

class HungerBar extends Component {
	render() {
		return(
			<div>
				<GenericProgressBar percentage={this.props.hunger}
									name={"Hunger"}
									paddingTop={11} />
			</div>)
	}
}

export default HungerBar;