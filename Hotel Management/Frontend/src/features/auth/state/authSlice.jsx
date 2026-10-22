import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "hello",
    isAuthentication: false,
    isLoading: false,
  },

  reducers: {
    setUser: (state, action) => {
      user: action.user;
      isAuthentication: true;
      isLoading: true;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
