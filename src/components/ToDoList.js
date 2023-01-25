import ItemList from "./ItemList";
import "./ToDoList.css";

const ToDoList = (props) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <ul className="listBox">
        {props.itemsList.map((task, ind) => {
          return (
            <ItemList
              key={ind}
              data={task}
              handleState={props.handleState}
              handleDelete={props.handleDelete}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;
