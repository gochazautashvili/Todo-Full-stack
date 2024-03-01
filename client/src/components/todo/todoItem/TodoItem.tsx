import { useState } from "react";
import useTodo from "../../../hooks/useTodo";
import { todoType } from "../../../types/types";
import Update from "../../update/Update";
import "./TodoItem.scss";

function TodoItem({ _id, title, completed }: todoType) {
  const [update, setUpdate] = useState<boolean>(false);
  const { DeleteTodo, handleToggleTodo } = useTodo();

  const handleDeleteTodo = () => {
    DeleteTodo(_id);
  };

  const handleToggleTodoByID = () => {
    handleToggleTodo(_id);
  };

  return (
    <>
      <div className={completed ? "todoItem completed" : "todoItem"}>
        <p onClick={handleToggleTodoByID}>{title}</p>
        <div className="todoItem__button">
          <button type="button" onClick={handleDeleteTodo}>
            X
          </button>
          <button type="button" onClick={() => setUpdate(!update)}>
            UP
          </button>
        </div>
        {update ? <Update _id={_id} setUpdate={setUpdate} title={title} /> : ""}
      </div>
    </>
  );
}

export default TodoItem;
