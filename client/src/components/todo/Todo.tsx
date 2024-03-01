import "./Todo.scss";
import { FormEvent, useEffect, useState } from "react";
import useTodo from "../../hooks/useTodo";
import TodoItem from "./todoItem/TodoItem";
import useUser from "../../hooks/useUser";

function TodoComp() {
  const { user, Logout } = useUser();
  const { CreateTodo, getTodo, tasks } = useTodo();
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleCreateTodo = (e: FormEvent) => {
    e.preventDefault();
    CreateTodo(text).then(() => {
      setText("");
    });
  };

  useEffect(() => {
    getTodo().catch((err) => {
      setError(err.response.data);
    });
  }, []);

  return (
    <section>
      <h1>{user.name ? `Hello: ${user.name}!` : "Hello"}</h1>
      {error ? <p className="error">{error}</p> : ""}
      <form className="todo" onSubmit={handleCreateTodo}>
        <label htmlFor="todo"></label>
        <input
          id="todo"
          type="text"
          value={text}
          placeholder="Enter your task..."
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">ADD</button>
        <button onClick={Logout} type="button">
          Logout
        </button>
      </form>
      <section className="todoBox">
        {tasks?.map((task, i) => {
          return (
            <TodoItem
              key={i}
              _id={task?._id}
              title={task?.title}
              completed={task?.completed}
            />
          );
        })}
      </section>
    </section>
  );
}

export default TodoComp;
