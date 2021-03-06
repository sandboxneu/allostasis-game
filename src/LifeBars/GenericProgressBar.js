import React from 'react';
import Filler from './Filler.js';
import './GenericProgressBar.css';

const renderRanges = (bar, bottom, top) => {
	if (bar === 'Load') {
		return false;
	}
	top = top + "%";
	bottom = bottom + "%";
	return (
		<div>
			<div className="range-bottom" style = {{left: bottom}}></div>
			<div className="range-top" style ={{left: top}}> </div>
		</div>
	);
}

const GenericProgressBar = (props) => {
	let fillerColor = '#f7b733';

	if(props.name === 'Thirst') {
		fillerColor = '#6FB9F3'
	} else if(props.name === 'Hunger') {
		fillerColor = '#49AD1B'
	}

	return(
		<div className="genericContainer">
			<div className="textBox" style={{paddingTop: props.paddingTop}}>
				{props.name}
			</div> 
			<div className="generic-progress">
				<Filler percentage={props.percentage} color={fillerColor}/>
				{renderRanges(props.name, props.rangeBottom, props.rangeTop, 80)}
			</div>
		</div>
		)
}

export default GenericProgressBar;