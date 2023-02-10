import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://api-petly.onrender.com/api';

export const getNoticesCategories = createAsyncThunk(
  '/notice?categoryId',
  async ({ category, query }) => {
    try {
      let data;
      if (query) {
        data = await axios(`notice/search/${query}`);
      } else {
        data = await axios(`/notice?categoryId=${category}`);
      }
      return data.data.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

export const fetchAllNotices = createAsyncThunk('notice/fetchAll', async () => {
  try {
    const data = await axios(`/notice`);
    return data.data.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
});

export const getUserNotices = createAsyncThunk(
  'notices/getUserNotices',
  async ({ token }) => {
    try {
      const header = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await axios(`/notice/my`, header);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
export const createNotices = createAsyncThunk(
  'notices/createNotices',
  async ({ values, token, petImg }, thunkAPI) => {
    try {
      const bodyFormData = new FormData();
      bodyFormData.append('petImg', petImg);
      const header = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post(
        `/notice/add`,
        { ...values, bodyFormData },
        header
      );
      toast.success('New notice added!');
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteUserNotices = createAsyncThunk(
  'notices/deleteUserNotices',
  async petId => {
    try {
      await axios.delete(`notice/remove/${petId}`);
      const { data } = await axios('/notice/my');
      toast.success('Notice deleted!');
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
