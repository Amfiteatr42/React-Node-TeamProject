import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import axios from 'axios';

axios.defaults.baseURL = '';

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
      const { data } = await axios.post('', sign);
      token.set(data.token);
      return data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const Register = createAsyncThunk(
    'auth/register',
    async (sign, { rejectWithValue }) => {
      try {
        const { data } = await axios.post('', sign);
        token.set(data.token);
        return data
      } catch (error) {
        return rejectWithValue(error.message);
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
        const { data } = await axios.get('users/current');
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );