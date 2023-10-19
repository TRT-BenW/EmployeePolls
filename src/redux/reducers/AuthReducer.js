import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const logOutAndRefresh = createAsyncThunk(
  'authUser/logOutAndRefresh',
  async (_, { dispatch }) => {
    dispatch(logOutUser());
    window.location.href = '/'; // Navigate to home page
    window.location.reload(); // This line may not be necessary as the above line will navigate and naturally refresh the page
  }
);

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