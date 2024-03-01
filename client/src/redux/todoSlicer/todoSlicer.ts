import { createSlice } from "@reduxjs/toolkit";
import { todoType } from "../../types/types";

const initialState: todoType[] = [];

const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    getTodoAllTodo: (state, action) => {
      return (state = action.payload);
    },
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo._id !== action.payload._id);
    },
    toggleTodo: (state, action) => {
      state.map((todo) => {
        if (todo._id === action.payload._id) {
          return (todo.completed = !todo.completed);
        }
      });
    },
    updateTodo: (state, action) => {
      state.map((todo) => {
        if (todo._id === action.payload._id) {
          return (todo.title = action.payload.updateText);
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo, getTodoAllTodo } =
  userSlicer.actions;
export default userSlicer.reducer;
