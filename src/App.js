import "./App.css";
import reactlogo from "./imagenes/react-logo.png";
import TasksList from "./components/TasksList.js";
import React from "react";

class App extends React.Component{
  render(){
  return (
    <div className="app-tasks">
      <div className="logo-react">
        <img src={reactlogo} className="logo-react" alt="" />
      </div>
      <div className="task-list-main">
        <h1> My Tasks Daily's</h1>
        <TasksList />
      </div>
    </div>
  );
}
}
export default App;