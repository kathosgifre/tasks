import React, { useState } from "react";
import "../styles/TasksForm.css";
import { v4 as uuidv4 } from "uuid";
import { type } from "@testing-library/user-event/dist/type";

function TasksForm(props) {
  const [input, setInput] = useState();

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleTasks = e => {
    e.preventDefault();
    
    const newTasks = {
      id: uuidv4(),
      text: input,
      complete: false,
    };
    props.onSubmit(newTasks);
    e.target.reset();
    setInput(e.target.onSubmit);
  };
  return (
    <form className="tasks-form" onSubmit={handleTasks}>
      <input
        className="tasks-input"
        type="text"
        placeholder="Enter a task!"
        name="text"
        onChange={handleChange}
      />
      <button className="tasks-button">Add Task</button>
    </form>
  );
}

export default TasksForm;
