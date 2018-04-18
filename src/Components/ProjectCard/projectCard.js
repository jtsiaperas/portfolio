import React from 'react';
import "./ProjectCard.css";

const ProjectCard = props => {
 	return(
 	<div id="projects">
 	{props.projects.map((project,index) => (
  	<div className="card" key={index}>
    	<div className = "card-header">
      	{project.name}
    	</div>
    	<img className = "card-img-top" alt={project.name} src={project.image} />
    	<div className="card-body">
      	{project.summary}
    	</div>
  	</div>
  	
 	))}
 	</div>
 );
};

export default ProjectCard;
