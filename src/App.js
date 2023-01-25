import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "./App.css";

const App = () => {
  let [taskList, setTaskList] = useState([]);
  const addTask = (task) => {
    task.name.length > 0 && setTaskList([...taskList, task]);
  };

  const setTaskState = (task) => {
    task.done = !task.done;
    setTaskList([...taskList]);
  };

  const deleteTask = (task) => {
    const selectedId = task.id;
    taskList = taskList.filter((task) => {
      return task.id !== selectedId;
    });
    setTaskList([...taskList]);
  };
  return (
    <>
      <Header />
      <Form onSubmit={addTask} />
      <ToDoList
        itemsList={taskList}
        handleState={setTaskState}
        handleDelete={deleteTask}
      />
    </>
  );
};

export default App;
