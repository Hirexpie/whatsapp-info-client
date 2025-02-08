import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem('token') || null,
    expiresAt: localStorage.getItem("expiresAt") || null,
    id: localStorage.getItem('userId') || null
  },
  reducers: {
    logIn: (state, action) => {
      state.token = action.payload.token;
      state.expiresAt = action.payload.expiresAt;
      state.id = action.payload.userId;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("expiresAt",action.payload.expiresAt);
      localStorage.setItem("userId",action.payload.userId);
    },
    logout: (state) => {
        state.token = null;
        state.expiresAt = null;
        localStorage.removeItem("token");
        localStorage.removeItem("expiresAt");
    }
  },
});

export const { logIn,logout } = authSlice.actions;
export default authSlice.reducer;