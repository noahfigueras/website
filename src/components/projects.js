import React, {Component} from "react";
import axios from 'axios';

class Projects  extends Component {
	constructor(){
        super();
		this.state = {
			projects: [],
			tag: 'all',
		}
	
	this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){
		axios.get('/api/projects')
			.then(res => {
				this.setState({projects: res.data});
				console.log(res);
			});		
	}

	handleChange(e){
		this.setState({tag: e.target.value})
	}

        render() {
	const {projects, tag} = this.state;
	
	//Filter projects by tag
	const filterProjects = projects.filter(x => {
		if(tag === "all"){
			return x;
		}
		return x.tags.indexOf(tag) >= 0;
	});
	
	//Check if there are projects
	let content; 
	if(filterProjects.length <= 0){
		content = <h3 style={{marginTop: '100px'}}>Sorry, not enough projects in this category, more projects coming soon...</h3>
	} else {
		content = 
		filterProjects.map(project =>
			<div key={project._id} className="project">
				<a 
					href={project.link}
					target="_blank" 
					rel="noopener noreferrer">
					<img 
						className="imgProject"
						src={'/img/' + project.img}
						alt={project.title}
					/>
					<h4>{project.title}</h4>
				</a>
				<h6>{project.description}</h6>
			</div>
		)
	}
	return(
	 <div className="projectContainer">
	  <h1 className="projectTitle">Projects</h1>
	  <div className="filterProjects">	
	  	<p>Filter my projects by technology:</p><br/>
			<div className="filterBtn">
  	  			<button onClick={this.handleChange}
					value="all">ALL</button>	  
  	  			<button onClick={this.handleChange}
					value="html"></button>

  	  			<button onClick={this.handleChange}
					value="css">CSS</button>	  
  	  			<button onClick={this.handleChange}
					value="javascript">JAVASCRIPT</button>	  
  	  			<button onClick={this.handleChange}
					value="react">REACT</button>	  
  	  			<button onClick={this.handleChange}
					value="nodejs">NODEJS</button>	  
  	  			<button onClick={this.handleChange}
					value="mongodb">MONGODB</button>	  
  	  			<button onClick={this.handleChange}
					value="c">C</button>
			</div>
	  </div>
	  <div className="allProjects">	
		{content}
	  </div>
	 </div>
	);
	}
}

export default Projects;
