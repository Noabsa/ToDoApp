import React, { useState } from "react";
import "./Form.css";

let idNum = 1;

const Form = (props) => {
  let [task, setTask] = useState("");
  const handleTakeTask = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    props.onSubmit({
      name: task,
      done: false,
      id: idNum++,
    });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleAddTask();
        setTask("");
      }}
    >
      <input type="text" name="task" onChange={handleTakeTask} value={task} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
