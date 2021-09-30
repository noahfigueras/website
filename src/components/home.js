import React from "react";
import {NavLink} from "react-router-dom";

import "../css/components.css";

const Home = () => {
	return(
	<div className="background">
	 <div className="home-title">
	  <h1>Hi, this is Noah</h1>
	  <h2>Full-Stack Blockchain Developer</h2>
	  <div className="home-buttons">
          <NavLink to="/skills" className="bSpace btn1">Skills & Offer</NavLink>
          <NavLink to="/projects" className="bSpace btn2">Portfolio</NavLink>
	  </div>
	 </div>
	</div>
	);
}

export default Home;
