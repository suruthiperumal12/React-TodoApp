import styles from "./todoitem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faSave } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Todoitem({ item, setTodos, todos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.name);
  console.log(editValue);
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
    // console.log(todos);
  }
  function handleEdit() {
    setIsEditing(true);
  }
  function handleSave() {
    const editArrays = todos.map((todo) =>
      todo.id === item.id ? { ...todo, name: editValue } : todo
    );
    setTodos(editArrays);
    setIsEditing(false);
  }
  const linethrough = item.done ? styles.completed : "";
  return (
    <div className={styles.itemContainer}>
      <div className={styles.item}>
        {isEditing ? (
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className={styles.editInput}
          />
        ) : (
          <p onClick={() => handleclick(item.name)} className={linethrough}>
            {item.name}
          </p>
        )}
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handledelete(item)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          {isEditing ? (
            <button className={styles.deleteButton} onClick={handleSave}>
              <FontAwesomeIcon icon={faSave} />
            </button>
          ) : (
            <button className={styles.deleteButton} onClick={handleEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          )}
        </span>
        {/* <hr className={styles.line}></hr> */}
      </div>
    </div>
  );
}
