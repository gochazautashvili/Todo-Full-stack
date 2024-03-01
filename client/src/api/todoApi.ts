import axios from "axios";

const user = localStorage.getItem("user");
const { token } = user ? JSON.parse(user) : "";

export const getAllTodoAPI = async () => {
  const todo = await axios.get(`${import.meta.env.VITE_API_URL}/todo`, {
    headers: { authorization: `Bearer ${token}` },
  });

  return todo.data;
};

export const createTodoAPI = async (title: String) => {
  const todo = await axios.post(
    `${import.meta.env.VITE_API_URL}/todo`,
    { title },
    { headers: { authorization: `Bearer ${token}` } }
  );

  return todo.data;
};

export const deleteTodoAPI = async (_id: String | undefined) => {
  const todo = await axios.delete(
    `${import.meta.env.VITE_API_URL}/todo?_id=${_id}`,
    {
      headers: { authorization: `Bearer ${token}` },
    }
  );

  return todo.data;
};

export const toggleTodoAPI = async (_id: String | undefined) => {
  const todo = await axios.patch(
    `${import.meta.env.VITE_API_URL}/todo?_id=${_id}`,
    {},
    {
      headers: { authorization: `Bearer ${token}` },
    }
  );

  return todo.data;
};

export const updateTodoAPI = async (
  _id: String | undefined,
  updateText: String | undefined
) => {
  const todo = await axios.put(
    `${import.meta.env.VITE_API_URL}/todo?_id=${_id}`,
    { updateText },
    {
      headers: { authorization: `Bearer ${token}` },
    }
  );

  return todo.data;
};
