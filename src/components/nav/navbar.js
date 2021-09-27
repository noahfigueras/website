import React, { Component  } from "react";
import {NavLink} from "react-router-dom";

import "../../css/components.css";

import resume from '../../documents/Resume.pdf';
import profileImg from "../../img/noah-foto.png";
import github from "../../img/icons/github.png";
import linkedin from  "../../img/icons/linkedin.png";
import twitter from  "../../img/icons/twitter.png";
import gmail from "../../img/icons/gmail.png";

class Navbar extends Component {
	render(){
	 return(
	 <div className="navContainer"> 	 
	   <NavLink className="link" to="/website">
	    <img src={profileImg} className="profileImg"/>
            <div className="title">		 
              <h2>Noah Figueras</h2>
	      <h5>Blockchain Developer</h5>
            </div>
           </NavLink>
	   <div className="hr"></div>
	   <ul>
		 <NavLink className="nav-btn link" to="/skills"><li>Skills & Offer</li></NavLink>
		 <NavLink className="nav-btn link" to="/projects"><li>Projects</li></NavLink>
		 <NavLink className="nav-btn link" to="/blog"><li>Blog</li></NavLink>
		 <a className="nav-btn link" target="_blank" rel="noopener noreferrer" href={resume}><li>CV</li></a>
	   </ul>
	   <div className="footer">
		 <a href="mailto:noahfigueras@gmail.com"><img className="icons" src={gmail}/></a>
		 <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/9SIGKILL"><img className="icons" src={twitter}/></a>
		 <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/noahfigueras/"><img className="icons" src={linkedin}/></a>
		 <a target="_blank" rel="noopener noreferrer" href="https://github.com/noahfigueras"><img className="icons" src={github}/></a>
           </div>			 

	 </div>
	 );
	}
}

export default Navbar;
