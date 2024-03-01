import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
  getTodoAllTodo,
} from "../redux/todoSlicer/todoSlicer";
import { RootState } from "../redux/store";
import {
  createTodoAPI,
  deleteTodoAPI,
  getAllTodoAPI,
  toggleTodoAPI,
  updateTodoAPI,
} from "../api/todoApi";

function useTodo() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.todo);

  const CreateTodo = async (text: String) => {
    if (text.trim() != "") {
      const todo = await createTodoAPI(text);
      dispatch(
        addTodo({ _id: todo._id, title: todo.title, completed: todo.completed })
      );
      return todo;
    }
  };

  const getTodo = async () => {
    const todo = await getAllTodoAPI();

    dispatch(getTodoAllTodo(todo));

    return todo;
  };

  const DeleteTodo = (_id: String | undefined) => {
    deleteTodoAPI(_id).then(() => {
      dispatch(deleteTodo({ _id }));
    });
  };

  const handleToggleTodo = (_id: String | undefined) => {
    toggleTodoAPI(_id).then(() => {
      dispatch(toggleTodo({ _id }));
    });
  };

  const handleUpdateTodo = (
    _id: String | undefined,
    updateText: String | undefined
  ) => {
    updateTodoAPI(_id, updateText).then(() => {
      dispatch(updateTodo({ _id, updateText }));
    });
  };

  return {
    CreateTodo,
    DeleteTodo,
    handleToggleTodo,
    tasks,
    handleUpdateTodo,
    getTodo,
  };
}

export default useTodo;
