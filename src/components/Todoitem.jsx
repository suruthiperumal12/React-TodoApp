import styles from "./todoitem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Todoitem({ item, setTodos, todos }) {
  function handledelete(item) {
    // console.log(item);
    setTodos(todos.filter((todo) => item !== todo));
  }
  function handleclick(name) {
    // console.log("text is clicked", name);
    var newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    console.log(todos);
  }
  const linethrough = item.done ? styles.completed : "";
  return (
    <div className={styles.itemContainer}>
      <div className={styles.item}>
        <p onClick={() => handleclick(item.name)} className={linethrough}>
          {item.name}
        </p>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handledelete(item)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </span>
        {/* <hr className={styles.line}></hr> */}
      </div>
    </div>
  );
}
