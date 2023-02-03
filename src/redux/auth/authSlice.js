import { createSlice } from '@reduxjs/toolkit';
import {
  addToFavorite,
  deleteFromFavorite,
  fetchCurrentUser,
  getFavorite,
  Login,
  Register,
  Reset,
  updateUserInfo,
} from './operations';

const handlePending = state => {
  state.isLoggedIn = false;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoggedIn = false;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    favorite: [],
    isLoggedIn: false,
    isRefreshing: false,
    isLoginError: null,
    token: null,
    error: null,
  },
  extraReducers: {
    [Login.pending]: handlePending,
    [Login.rejected](state, action) {
      state.isLoginError = action.payload;
      state.isLoggedIn = false;
    },
    [Login.fulfilled](state, action) {
      state.user = action.payload.data.data;
      state.token = action.payload.data.longToken;
      state.isLoggedIn = true;
      state.isLoginError = null;
    },
    [Register.pending]: handlePending,
    [Register.rejected]: handleRejected,
    [Register.fulfilled](state, action) {
      state.user = action.payload.data.data;
      state.token = action.payload.data.longToken;
      state.isLoggedIn = true;
      state.error = null;
    },
    [Reset.pending]: handlePending,
    [Reset.rejected]: handleRejected,
    [Reset.fulfilled](state) {
      state.user = {};
      state.token = null;
      state.isRefreshing = false;
      state.isLoggedIn = false;
      state.error = null;
      state.favorite = [];
    },
    [fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.rejected]: handleRejected,
    [fetchCurrentUser.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.user = action.payload.data;
      state.error = null;
    },
    [updateUserInfo.pending](state, action) {
      state.isLoggedIn = true;
    },
    [updateUserInfo.rejected](state, action) {
      state.isLoggedIn = true;
      state.error = action.payload;
    },
    [updateUserInfo.fulfilled](state, action) {
      state.user = { ...state.user, ...action.payload };
      state.error = null;
    },
    [getFavorite.fulfilled](state, action) {
      state.favorite = action.payload.favorite;
    },
    [addToFavorite.fulfilled](state, action) {
      state.favorite = action.payload.data.favoriteAds;
    },
    [deleteFromFavorite.fulfilled](state, action) {
      state.favorite = state.favorite.filter(el => el !== action.payload);
    },
  },
});

export const authReducer = authSlice.reducer;
