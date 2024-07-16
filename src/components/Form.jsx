import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form onSubmit={handleSubmit} className={styles.formtodo}>
      <div className={styles.formContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
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
