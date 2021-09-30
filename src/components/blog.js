import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/components.css';


class Blog extends Component {
  render() {
	return (
	<div className="blog">	
		<div className="blogTitle">
			<h1>The Notebook</h1>
			<h4>My personal notes about the Books I read and the things I learn</h4>
		</div>
		<div className="postContainer">
			<div className="blogPost">
			<Link className="blogLink" to="/postnumberone">
				<img alt='' src="http://quotepixel.com/images/quotes/inspirational/quotes-with-self-discipline_10364-3.png"></img>
				<div>
					<h2>Title</h2>
					<h6>Date - 5 min read - 10 comments</h6>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<a href='www.google.com' className="readMore">Read More -></a>
				</div>
			</Link>
			</div>
		</div>
	</div>
	);
  }
}

export default Blog;
