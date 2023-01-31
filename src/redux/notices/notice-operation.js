import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://api-petly.onrender.com/api';

// export const getNoticesCategories = createAsyncThunk(
//   '/api/ads/?categoryId',
//   async ({ categoryID, query = '' }) => {
//     try {
//       let data;
//       if (query) {
//         data = await axios.get(`/api/ads/?categoryId=${categoryID}&q=${query}`);
//       } else {
//         // data = await axios.get(`/notices?category=${category}`);
//         // data = await axios.get(`/api/ads/?category=${category}`);
//         // data = await axios.get(`/api/ads/?categoryId=1`);
//         data = await axios.get(`/ads`);
//         // data = await axios.get(`/api/ads/?categoryId=${categoryID}`);
//         // data = await axios.get(`/ads/notices?category=${category}`);
//       }
//       return console.log(data.data.data);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   }
// );
const getCat = () => {
  return axios.get(`/ads`).then(res => res.data.data);
  // .get(`/ads/?categoryId=${categoryID}`)
};
export const getNoticesCategories = createAsyncThunk(
  '/ads',
  async (_, thunkApi) => {
    try {
      const items = await getCat();
      return items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
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
      const { data } = await axios.get(`/api/userspets/add`, header);
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

      await axios.post(`/api/userspets/add`, values, header);
      const { data } = await axios.get('api/ads/');
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
      await axios.delete(`/notices/${petId}`);
      const { data } = await axios.get('notices/user');
      toast.success('Notice deleted!');
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
