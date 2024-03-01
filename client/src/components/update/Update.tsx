import { FormEvent, useState } from "react";
import "./Update.scss";
import useTodo from "../../hooks/useTodo";
import { updateTodoType } from "../../types/types";

function Update({ title, setUpdate, _id }: updateTodoType) {
  const [updateText, setUpdateText] = useState(title);
  const { handleUpdateTodo } = useTodo();

  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    handleUpdateTodo(_id, updateText);
    setUpdate(false);
  };

  return (
    <form className="update" onSubmit={handleUpdate}>
      <h1>Update your todo...</h1>
      <input
        type="text"
        placeholder="Update todo"
        value={updateText}
        onChange={(e) => setUpdateText(e.target.value)}
      />
      <button type="submit">UPDATE</button>
    </form>
  );
}

export default Update;
