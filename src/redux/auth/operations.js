import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import axios from 'axios';

const BASEURL = "https://api-petly.onrender.com/api/users/"

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
      console.log(user);
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
      const { user } = verification(data);
      console.log(user, 'work');
      token.set(user.data.longToken);

      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const verification = async ({ data, verificationEmailToken }) => {
  const { _id } = data;
  const user = await axios.get(`${BASEURL}verify/${_id}/${verificationEmailToken}`);
  return user;
};

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
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk('auth/update', async (info, { rejectWithValue }) => {
  try {
    const { data } = await axios.patch(`${BASEURL}update`, info);
      token.set(data.longToken);
    return data;
  } catch (error) {
    return rejectWithValue(error.messsage)
  }
})
//  const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue();
//     }
//     token.set(persistedToken);
//     try {
//       const { data } = await axios.get('refresh');
//       return data.longToken;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
