import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://api-petly.onrender.com/';

export const getNoticesCategories = createAsyncThunk(
  '/notice/?categoryId',
  async ({ category, query = '' }) => {
    try {
      let data;
      if (query) {
        // data = await axios.get(`/notice/?categoryId=${category}&q=${query}`);
        data = await axios.get(`/notice/search/${query}`);
      } else {
        data = await axios.get(`/notice/?categoryId=${category}`);
      }
      return data.data.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

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
      const { data } = await axios.get(`/notice/my`, header);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
export const createNotices = createAsyncThunk(
  'notices/createNotices',
  async ({ values, token }, thunkAPI) => {
    try {
      const header = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      // await axios.post(`/ads/add`, values, header);
      // const { data } = await axios.get('/ads/my');

      const { data } = await axios.post(`/notice/add`, values, header);
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
      const { data } = await axios.get('/notice/my');
      toast.success('Notice deleted!');
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

///////////////////////////////////////////////////
