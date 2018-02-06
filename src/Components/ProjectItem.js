import React, { Component } from 'react';


class ProjectItem extends Component {

deleteProject(id){
  console.log("test");
  this.props.onDelete(id)
}
   componentWillMount(){
    console.log("inside ProjectItem componentWillMount");
  }
  render() {

    return (
      <li>
      {this.props.project.title} {this.props.project.id} <a href = "#" onClick = {this.deleteProject.bind(this,this.props.project.id)}>x</a>
      </li>
    );
  }
}

export default ProjectItem;
