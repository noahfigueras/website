import React from "react";

import "../css/components.css";

const Home = () => {
	return(
	<div className="background">
	 <div className="home-title">
	  <h1>Hi, this is Noah</h1>
	  <h2>Full-Stack Blockchain Developer</h2>
	  <div className="home-buttons">
           <a href="/skills" className="bSpace btn1">Skills & Offer</a>
           <a href="/projects" className="bSpace btn2">Portfolio</a>
	  </div>
	 </div>
	</div>
	);
}

export default Home;
