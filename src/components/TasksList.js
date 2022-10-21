import React, { useState } from "react";
import TasksForm from "./TasksForm";
import Tasks from "./Tasks.js";
import "../styles/TasksList.css";

function ListTasks() {
  const [tasks, setTasks, e] = useState([]);

  const addTasks = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const tasksUpdate = [task, ...tasks];
      setTasks(tasksUpdate);
    }
  };

  const deleteTask = (id) => {
    const tasksUpdate = tasks.filter((task) => task.id !== id);
    setTasks(tasksUpdate);
  };

  const completeTasks = (id) => {
    const tasksUpdate = tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(tasksUpdate);
  };
  return (
    <>
      <TasksForm onSubmit={addTasks} />
      <div className="tasks-list-container">
        {tasks.map((task) => (
          <Tasks
            key={task.id}
            id={task.id}
            text={task.text}
            complete={task.complete}
            completeTasks={completeTasks}
            deleteTasks={deleteTask}
          />
        ))}
      </div>
    </>
  );
}

export default ListTasks;