
import React, { Component } from 'react';
import TaskSearch from './TaskSearch';
import TaskSort from './TaskSort';
import 'bootstrap/dist/css/bootstrap.min.css';

class TaskControl extends Component {
  render() {
    return (
        <div className="row mt-15">
            <TaskSearch />
            <TaskSort  />
             
        </div>
    );
  }
  
}

export default TaskControl;
