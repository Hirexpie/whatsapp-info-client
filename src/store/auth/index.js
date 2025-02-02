import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem('token') || null,
    expiresAt: localStorage.getItem("expiresAt") || null,
  },
  reducers: {
    setToken: (state, action) => {
        state.token = action.payload.token;
        state.expiresAt = action.payload.expiresAt;
  
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("expiresAt",action.payload.expiresAt);
    },
    logout: (state) => {
        state.token = null;
        state.expiresAt = null;
        localStorage.removeItem("token");
        localStorage.removeItem("expiresAt");
    }
  },
});

export const { setToken,logout } = authSlice.actions;
export default authSlice.reducer;