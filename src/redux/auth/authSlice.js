import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, Login, Register, Reset } from './operations';

const handlePending = state => {
  state.isLoggedIn = false;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'mockname',
  initialState: {
    username: '',
    isLoggedIn: false,
    token: null,
    error: null,
    id: null,
  },
  extraReducers: {
    [Login.pending]: handlePending,
    [Login.pending]: handleRejected,
    [Login.fulfilled](state, action) {
      state.username = action.payload.user;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [Register.pending]: handlePending,
    [Register.pending]: handleRejected,
    [Register.fulfilled](state, action) {
      state.username = action.payload.user;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [Reset.pending]: handlePending,
    [Reset.rejected]: handleRejected,
    [Reset.fulfilled](state, action) {
        state.username = '';
        state.token = null;
        state.isLoggedIn = false;
        state.id = null;
        state.error = null;
    },
    [fetchCurrentUser.pending](state, action) {
      state.registerUser = false;
      state.isLoggedIn = false;
  },
    [fetchCurrentUser.rejected]: handleRejected,
    [fetchCurrentUser.fulfilled](state, action) {
        state.username = action.payload.username;
        state.isLoggedIn = true;
        state.error = null;
  
    },
  },
});

export const authReducer = authSlice.reducer;
