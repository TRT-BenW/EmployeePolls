import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.value = action.payload;
    },
    logOutUser: (state) => {
      state.value = "";
    },
  },
});

export const { loginUser, logOutUser } = authUserSlice.actions;

export default authUserSlice.reducer;
