import React, { Component } from 'react';
import "./ProjectCard.css";

const ProjectCard = props =>{
  
  <div className="card">
    <div className = "card-header">
      {props.name}
    </div>
    <img className = "card-img-top" alt={props.name} src={props.image} />
    <div className="card-body">
      {props.summary}
    </div>
  </div>
}

export default ProjectCard;
