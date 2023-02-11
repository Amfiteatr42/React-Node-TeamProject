import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import axios from 'axios';
import { toast } from 'react-toastify';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const Login = createAsyncThunk(
  'auth/login',
  async (sign, { rejectWithValue }) => {
    try {
      const user = await axios.post(`/users/login`, sign);
      token.set(user.data.longToken);
      return user;
    } catch (error) {
      if (error.response.request.status === 400) {
        toast.error('Email or password is wrong');
      }
      return rejectWithValue(error.message);
    }
  }
);

export const Register = createAsyncThunk(
  'auth/register',
  async (sign, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users/signup`, sign);
      const user = await axios.post(
        `/users/verify/${data.data._id}/${data.verificationEmailToken}`
      );
      token.set(user.data.longToken);
      return user;
    } catch (error) {
      if (error.response.data.err.code === 11000) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'auth/update',
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/users/update`, info);
      return data;
    } catch (error) {
      return rejectWithValue(error.messsage);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/update',
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: 'patch',
        url: `/users/avatar`,
        data: info,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error.messsage);
    }
  }
);

export const Reset = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(`/users/logout`);
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('no token saved in localstorage');
    }
    token.set(persistedToken);
    try {
      const { data } = await axios(`/users/current`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavorite = createAsyncThunk('/favorite', async () => {
  try {
    const { data } = await axios(`/users/favorite`);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
});
export const addToFavorite = createAsyncThunk(
  'addToFavorite',
  async (petId, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    token.set(persistedToken);
    try {
      const { data } = await axios.post(`/users/favorite/${petId}`);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
export const deleteFromFavorite = createAsyncThunk(
  'deleteFromFavorite',
  async (petId, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    token.set(persistedToken);
    try {
      const { data } = await axios.delete(`/users/favorite/${petId}`);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
