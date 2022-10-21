import React from "react";
import "../styles/Tasks.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

class Tasks extends React.Component{
  render(){
  return (
    <div className={this.props.complete ? "tasks-container complete" : "tasks-container"}>
      <div className="tasks-text" onClick={() => this.props.completeTasks(this.props.id)}>
        {this.props.text}
      </div>
      <div className="tasks-container-icon" onClick={() => this.props.deleteTasks(this.props.id)}>
        <AiOutlineCloseCircle className="tasks-icon" />
      </div>
    </div>
  );
}
}

export default Tasks;
