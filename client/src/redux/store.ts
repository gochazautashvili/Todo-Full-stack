import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlicer from "./userSlicer/userSlicer";
import todoSlicer from "./todoSlicer/todoSlicer";

const rootReducer = combineReducers({
  user: userSlicer,
  todo: todoSlicer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: {
    user: userSlicer,
    todo: todoSlicer,
  },
});

export default store;
