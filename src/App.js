import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects : [

      ]
    }
  }

  getProjects(){
      this.setState({
        projects :  [{
            id : uuid.v4(),
            title : 'business website ',
            category : 'Web Design'
          },
          {
            id : uuid.v4(),
            title : 'Social App ',
            category : 'Mobile Design'
          },
          {
            id : uuid.v4(),
            title : 'ecomm website ',
            category : 'Web development'
          }]
      })
    }
  componentWillMount(){
   this.getTodos();
   this.getProjects();
    console.log("inside App componentWillMount");

  }

  componentDidMount(){
    console.log("inside App componentDidMount");
    this.getTodos();
  }

  handleAddProject(project){

    console.log(project)
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects : projects})
  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects : projects})
  }
  render() {
    console.log("inside App render");
    return (
      <div className="App">
      <AddProject addProject = {this.handleAddProject.bind(this)}/>
      <Projects onDelete = {this.handleDeleteProject.bind(this)} projects = {this.state.projects} />

      </div>
    );
  }
  getTodos(){

  }
}

export default App;
