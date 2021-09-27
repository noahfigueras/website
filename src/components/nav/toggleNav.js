import React from 'react';

import '../../css/components.css';

const toggleButton = (props) => {
	return(
	<div className="hamburger">
	<button className="toggleButton" onClick={props.click}>
		<div className="toggleButton-line"/>
		<div className="toggleButton-line"/>
		<div className="toggleButton-line"/>
	</button>
	</div>
	);
};

export default toggleButton;
