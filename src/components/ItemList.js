import "./ItemList.css";

const ItemList = (props) => {
  let taskDescription = props.data.name;

  let stateTask = () => {
    props.handleState(props.data);
  };
  let deleteTask = () => {
    props.handleDelete(props.data);
  };

  return (
    <li className={`taskBox done-${props.data.done}`}>
      <span onClick={stateTask} className="material-symbols-outlined toDone">
        check_circle
      </span>
      <p>{taskDescription}</p>
      <span onClick={deleteTask} className="material-symbols-outlined toDelete">
        cancel
      </span>
    </li>
  );
};

export default ItemList;
