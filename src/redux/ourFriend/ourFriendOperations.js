import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api-petly.onrender.com/';

export const getOurFriends = createAsyncThunk('friends', async thunkApi => {
  try {
    const response = await axios.get('');
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.status);
  }
});
