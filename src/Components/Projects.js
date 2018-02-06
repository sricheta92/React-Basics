import React, { Component } from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {

deleteProject(id){
  this.props.onDelete(id);
}
  componentWillMount(){
    console.log("inside  Projects componentWillMount ")
  }
  render() {
  	let projectItems;
	  if(this.props.projects){
		projectItems = this.props.projects.map(projects=>{
			return (
				<ProjectItem onDelete = {this.deleteProject.bind(this,this.props.projects.id)} key = {projects.title} project = {projects} />
				);
		});
	}

    return (
      <div className="Projects">
       My Projects

     {projectItems}
      </div>
    );
  }
}

export default Projects;
