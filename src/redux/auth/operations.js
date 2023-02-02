import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import axios from 'axios';

const BASEURL = 'https://api-petly.onrender.com/api/users/';

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
      const user = await axios.post(`${BASEURL}login`, sign);
      token.set(user.data.longToken);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const Register = createAsyncThunk(
  'auth/register',
  async (sign, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASEURL}signup`, sign);
      const user = await axios.get(
        `${BASEURL}verify/${data.data._id}/${data.verificationEmailToken}`
      );
      token.set(user.data.longToken);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'auth/update',
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`${BASEURL}update`, info);
      token.set(data.longToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.messsage);
    }
  }
);

export const Reset = createAsyncThunk(
  'auth/Signout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.delete('');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.patch(`${BASEURL}refresh`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const getFavorite = createAsyncThunk('/favorite', async () => {
  try {
    const { data } = await axios.get(`${BASEURL}favorite`);
    return data;
  } catch (error) {
    // toast.error(error.response.data.message);
  }
});
export const addToFavorite = createAsyncThunk(
  'addToFavorite',
  async (petId, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    token.set(persistedToken);
    try {
      const { data } = await axios.post(`${BASEURL}favorite/${petId}`);
      // const { data } = await axios.get(
      //   'https://api-petly.onrender.com/api/ads'
      // );
      return data;
    } catch (error) {
      // toast.error(error.response.data.message);
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
      await axios.delete(`${BASEURL}favorite/${petId}`);
      const { data } = await axios.get(
        'https://api-petly.onrender.com/api/ads'
      );
      return data;
    } catch (error) {
      // toast.error(error.response.data.message);
    }
  }
);