import Todoitem from "./Todoitem";
import styles from "./list.module.css";
export default function Todolist({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <Todoitem key={item.id} item={item} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  );
}
