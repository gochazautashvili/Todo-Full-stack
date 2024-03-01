import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userType, userTypes } from "../../types/types";

const initialState: userTypes = {
  value: { name: "", age: 0, gmail: "", password: "" },
};

const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<userType>) => {
      state.value = action.payload;
    },
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout, register } = userSlicer.actions;
export default userSlicer.reducer;
