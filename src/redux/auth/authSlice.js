import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, Login, Register, Reset } from './operations';

const handlePending = state => {
  state.isLoggedIn = false;
  state.isRefreshing = false;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'mockname',
  initialState: {
    user: {},
    isLoggedIn: false,
    isRefreshing: false,
    token: null,
    error: null,
  },
  extraReducers: {
    [Login.pending]: handlePending,
    [Login.rejected]: handleRejected,
    [Login.fulfilled](state, action) {
      state.user = action.payload.data.data;
      state.token = action.payload.data.longToken;
      state.isLoggedIn = true;
      state.error = null;
    },
    [Register.pending]: handlePending,
    [Register.rejected](state, action) {
      state.user = action.payload.data.data;
      state.token = action.payload.data.longToken;
      state.error = null;
    },
    [Register.fulfilled](state, action) {
      state.user = action.payload.data.data;
      state.token = action.payload.data.longToken;
      state.isLoggedIn = true;
      state.error = null;
    },
    [Reset.pending]: handlePending,
    [Reset.rejected]: handleRejected,
    [Reset.fulfilled](state, action) {
      state.user = {};
      state.token = null;
      state.isRefreshing =false;
      state.isLoggedIn = false;
      state.id = null;
      state.error = null;
    },
    [fetchCurrentUser.pending](state, action) {
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.rejected]: handleRejected,
    [fetchCurrentUser.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.isRefreshing = true;
      state.user = action.payload.data;
      state.token = action.payload.longToken;
      state.error = null;
    },
  },
});

export const authReducer = authSlice.reducer;
