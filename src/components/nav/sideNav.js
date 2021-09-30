import React from 'react';
import {NavLink} from 'react-router-dom';

import resume from '../../documents/Resume.pdf';
import github from "../../img/icons/github.png";
import linkedin from  "../../img/icons/linkedin.png";
import twitter from  "../../img/icons/twitter.png";
import gmail from "../../img/icons/gmail.png";

import '../../css/components.css';

const sideNav = (props) => {
    if(props.status){
	return(
		<div className='sideNav'>
			<button onClick={props.click}>X</button>
			<ul>
				<li onClick={props.click}><NavLink to='/website'>Home</NavLink></li>
				<li onClick={props.click}><NavLink to='/skills'>Skills</NavLink></li>
				<li onClick={props.click}><NavLink to='/projects'>Portfolio</NavLink></li>
				<li><a target="_blank" rel="noopener noreferrer" href={resume}>CV</a></li>
			</ul>
			<div className="responsive-footer">
				<a href="mailto:noahfigueras@gmail.com">
					<img alt='gmail' className="icons" src={gmail}/>
				</a>
		 		<a target="_blank" 
				   rel="noopener noreferrer" 
				   href="https://twitter.com/Noahfigueras17">
					<img alt='twitter' className="icons" src={twitter}/>
				</a>
		 		<a target="_blank" 
				   rel="noopener noreferrer" 
				   href="https://www.linkedin.com/in/noahfigueras/">
					<img alt='linkedin' className="icons" src={linkedin}/>
				</a>
		 		<a target="_blank" 
				   rel="noopener noreferrer" 
				   href="https://github.com/noahfigueras">
					<img alt='github' className="icons" src={github}/>
				</a>
			</div>
		</div>
	);  
    }
    return null;
}

export default sideNav;
