import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;  // User data after login
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    signup: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;  // User data after signup
    },
  },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
