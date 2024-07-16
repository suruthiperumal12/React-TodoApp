import { useState, useEffect } from "react";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer";

export default function Todoapp() {
  const [todos, setTodos] = useState([]);
  const completedtodos = todos.filter((todo) => todo.done).length;
  const totalcount = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
      <Footer completedtodos={completedtodos} totalcount={totalcount} />
    </div>
  );
}
