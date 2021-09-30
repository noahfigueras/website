import React from "react";

import css from "../img/icons/css3.png";
import html from "../img/icons/html5.png";
import js from "../img/icons/js.jpeg";
import react from "../img/icons/react.png";
import mongodb from "../img/icons/mongodb.png";
import REST from "../img/icons/REST.png";
import nodejs from "../img/icons/nodejs.png";
import SQL from "../img/icons/sql.png";
import AWS from "../img/icons/aws.png";
import git from "../img/icons/git.png";
import eth from "../img/icons/eth.png";
import hardhat from "../img/icons/hardhat.png";
import rust from "../img/icons/rust.png";
import solidity from "../img/icons/solidity-eth.png";

const Projects = () => {
	return(
	 <div className="skillsContainer">
	  <h1 className="skills-title">Skills & Offer</h1>
	  <p className="aboutme">
	    I am a self taught Full-Stack Blockchain developer with over two		   years of experience. <br/><br/>
        My main area of expertise is in the <span>Ethereum blockchain</span>. As a Full-Stack developer, I can develop all kind of smart contracts, interact with the Blockchain, build front-end applications and deploy <span>Dapps</span> from scratch. 
	  </p>
	  <h2 className="secondTitle">Blockchain Development</h2>
	    <p className="aboutme">
            I am recently using <span>Hardhat</span> as a framework to develop smart contracts with <span>solidity</span>. I Have a bast experience building smart contracts and interacting with other existing projects as: Uniswapv3, Chainlink, Avee, UMA and Compound. 
            Also, I'm currently learning <span>Rust</span> in order to build in other Blockchains as Solana, Casper and Polkadot.
		<br/><br/>
		Current experience in Blockchain: <br/><br/>
		<ul className="experience">
			<li>Experience building complex smart contracts with solidity.</li>
            <li>Use javascript to interact with the blockchain from the client side with <span>ethers</span> and <span>web3</span>.</li>
			<li>Unit testing experience with mainnet and different testnets.</li>
			<li>Deployment of smart contracts to mainnet.</li>
		</ul>
	    </p>
	    <ul className="devlogos">
		<li><img alt='' className="devlogo" src={eth}/></li>
		<li><img alt='' className="devlogo" src={hardhat}/></li>
		<li><img alt='' className="devlogo" src={rust}/></li>
		<li><img alt='' className="devlogo" src={solidity}/></li>
	    </ul>
	  <h2 className="secondTitle">Front-End Development</h2>
	    <p className="aboutme">
		I am recently using <span>React</span> to develop client applications, but I understand this kind of 
		frameworks and I can adapt to similar technologies as <span>Vue</span> or <span>Angular</span> very quick.
		<br/><br/>
		Current experience in front-end: <br/><br/>
		<ul className="experience">
			<li>Experience building HTML5 templates and front-end architecture.</li>
			<li>I use plain javascript to improve the functionality and the design of the website.</li>
			<li>Specialized in React applications.</li>
			<li>Full performance with css3 and media queries for mobile responsive websites.</li>
		</ul>
	    </p>
	    <ul className="devlogos">
		<li><img alt='' className="devlogo" src={html}/></li>
		<li><img alt='' className="devlogo" src={css}/></li>
		<li><img alt='' className="devlogo" src={js}/></li>
		<li><img alt='' className="devlogo" src={react}/></li>
	    </ul>
	  <h2 className="secondTitle">Back-End Development</h2>
	    <p className="aboutme">
		For the back-end development, my current stack involves <span>Express</span> and <span>NodeJS</span>. Although, I am specialized with the previous stack I am open to learn other technologies.
		<br/><br/>
		I have written the code for all the back-end apps I have developed. Through this process I have learned a lot from my mistakes and I am always looking for new ways to improve the speed and performance of my apps. Also, during my journey I have learned to implement new and more sofisticated algorithms for a better performance and to improve security.
		<br/><br/>
		I am familiar with the <span>REST</span> api, and I use it to develop my projects. In term of databases, I am more experienced with non-relational db as <span>MongoDB</span> because they work best for little projects but I am expanding my knowledge in relational db as <span>SQL</span>. 
	    </p>
	    <ul className="devlogos">
		<li><img alt='' className="devlogo" src={nodejs}/></li>
		<li><img alt='' className="devlogo" src={mongodb}/></li>
		<li><img alt='' className="devlogo" src={REST}/></li>
		<li><img alt='' className="devlogo" src={SQL}/></li>
		<li><img alt='' className="devlogo" src={AWS}/></li>
		<li><img alt='' className="devlogo" src={git}/></li>
	    </ul>
	 </div>
	);
}

export default Projects;
