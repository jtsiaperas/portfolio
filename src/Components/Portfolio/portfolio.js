import React, { Component } from 'react';
import ProjectCard from "../ProjectCard";
import projects from "./projects.js";
import "./Portfolio.css";

class Portfolio extends Component {
	state = {
		projects: projects
	}
	render(){
	return(
	<ProjectCard projects={this.state.projects} />
	);
}
};

export default Portfolio;
