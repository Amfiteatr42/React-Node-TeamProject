import { createSlice } from '@reduxjs/toolkit';
import {
  addToFavorite,
  deleteFromFavorite,
  fetchCurrentUser,
  getFavorite,
  Login,
  Register,
  Reset,
  updateAvatar,
  updateUserInfo,
} from './operations';

const handlePending = state => {
  state.isLoggedIn = false;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
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
    [Login.rejected](state, { payload }) {
      state.isLoginError = payload;
      state.isLoggedIn = false;
    },
    [Login.fulfilled](state, { payload }) {
      state.user = payload.data.data;
      state.token = payload.data.longToken;
      state.isLoggedIn = true;
      state.isLoginError = null;
      state.favorite = payload.data.data.favoriteAds;
    },
    [Register.pending]: handlePending,
    [Register.rejected]: handleRejected,
    [Register.fulfilled](state, { payload }) {
      state.user = payload.data.data;
      state.token = payload.data.longToken;
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
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.user = payload.data;
      state.error = null;
      state.favorite = payload.data.favoriteAds;
    },
    [updateUserInfo.pending](state) {
      state.isLoggedIn = true;
    },
    [updateUserInfo.rejected](state, { payload }) {
      state.isLoggedIn = true;
      state.error = payload;
    },
    [updateUserInfo.fulfilled](state, { payload }) {
      state.user = { ...state.user, ...payload.data };
      state.error = null;
    },
    [updateAvatar.pending](state) {
      state.isLoggedIn = true;
    },
    [updateAvatar.rejected](state, { payload }) {
      state.error = payload;
    },
    [updateAvatar.fulfilled](state, { payload }) {
      state.user = { ...state.user, ...payload };
      state.error = null;
    },
    [getFavorite.fulfilled](state, { payload }) {
      state.favorite = payload.favorite;
    },
    [addToFavorite.fulfilled](state, { payload }) {
      state.favorite = payload.data.favoriteAds;
    },
    [deleteFromFavorite.fulfilled](state, { payload }) {
      state.favorite = state.favorite.filter(
        el => el !== payload.data.favoriteAds
      );
      state.favorite = payload.data.favoriteAds;
    },
  },
});

export const authReducer = authSlice.reducer;
