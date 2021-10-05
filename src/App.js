import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Navbar from "./components/nav/navbar";
import Hamburger from './components/nav/toggleNav';
import SideNav from './components/nav/sideNav';

import Home from "./components/home";
import Projects from "./components/project2";
//import Contact from "./components/contact";
import Skills from "./components/skills";
import Blog from "./components/blog";
import Post from "./components/post";
import Error from "./components/error";

import './css/App.css';

class App extends Component {
  state = {
  	sideNavOpen: false
  };
  
  toggleSideNav = () => {
  	this.setState((prevState) => {
		return {sideNavOpen: !prevState.sideNavOpen};
	});
  }
  render() {
    return (
 <BrowserRouter>
     	<div className="container">
         <div className="navbar">
	    <Navbar/>
         </div>
	    <Hamburger click={this.toggleSideNav}/>
	    <SideNav status={this.state.sideNavOpen} click={this.toggleSideNav}/>
         <div className="content">
	      <Switch>
            <Route path="/website" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/blog" exact component={Blog}/>
            <Route path="/blog/:post" exact component={Post}/>
            <Route  component={Error}/>
	      </Switch>
         </div>
        </div>
 </BrowserRouter>
    );
  }
}

export default App;
