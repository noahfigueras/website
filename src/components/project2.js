import React from 'react';
import data from '../db/projectsData';
import image from '../img/multiSender.png';

function Projects () {
	//Check if there are projects
	let content; 
	if(data.length <= 0){
		content = <h3 style={{marginTop: '100px'}}>Sorry, not enough projects in this category, more projects coming soon...</h3>
	} else {
		content = 
		data.map(project =>
			<div key={project._id} className="project">
				<a 
					href={project.link}
					target="_blank" 
					rel="noopener noreferrer">
					<img 
						className="imgProject"
						src={image}
						alt={project.title}
					/>
					<h3>{project.title}</h3>
				    <h5>{project.description}</h5>
				</a>
			</div>
            )
    }
    return(
	 <div className="projectContainer">
	  <h1 className="projectTitle">Projects</h1>
	  <div className="allProjects">	
		{content}
	  </div>
	 </div>
    );
}

export default Projects;
