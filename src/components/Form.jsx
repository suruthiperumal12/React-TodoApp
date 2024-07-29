import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ id: null, name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name.trim() === "") return;
    // Assign a unique ID to the new todo item
    const newtodo = { ...todo, id: Date.now() };
    // console.log(newtodo);
    setTodos([...todos, newtodo]);
    setTodo({ id: null, name: "", done: false });
  }
  return (
    <form onSubmit={handleSubmit} className={styles.formtodo}>
      <div className={styles.formContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
          type="text"
          value={todo.name}
          placeholder="Enter a task"
        />
        <button type="submit" className={styles.modernButton}>
          Add
        </button>
      </div>
    </form>
  );
}
