import React, { Component } from 'react';
import ProjectItem from './ProjectItem'
import uuid from 'uuid';

class AddProject extends Component {

  constructor(){
    super();
    this.state = {
      newProject :{}
    }
  }


  static defaultProps = {
    categories :['Web development','Mobile Design','Web Design']
  }

  handleSubmit(e){
    console.log("submitted");
    if(this.refs.title.value === ''){
      alert('tite is required');
    }else{
      this.setState({newProject:{
        id : uuid.v4(),
        title : this.refs.title.value,
        category : this.refs.category.value
      }},function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    console.log("submitted");
    e.preventDefault();
  }
  render() {
    let categoryOptions = this.props.categories.map(category =>{
       return <option key = {category} value = {category}>{category}</option>
    });
  	return (
    <div>
      <h3> Add Projects </h3>
      <form onSubmit = {this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type = "text" ref = "title" />
          </div>
          <div>
            <label>Category</label>
            <select ref = "category">
              {categoryOptions}
            </select>
          </div>
          <input type = "submit" value = "Submit"/>
      </form>
    </div>
  )
  }
}

export default AddProject;
