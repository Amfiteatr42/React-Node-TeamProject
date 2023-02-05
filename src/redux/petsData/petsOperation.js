import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api-petly.onrender.com/api/';

export const fetchPets = createAsyncThunk(
  'userpets/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${URL}userspets`);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.messsage);
    }
  }
);

export const addPets = createAsyncThunk(
  'userspets/add',
  async (pet, { rejectWithValue }) => {
    try {
      const bodyFormData = new FormData();
      bodyFormData.append('petImg', pet.petImg);

      // const res = await axios.post(`${URL}userspets/add`, pet);
      const res = await axios({
        method: 'post',
        url: `${URL}userspets/add`,
        data: { ...pet, bodyFormData },
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(error.messsage);
    }
  }
);
export const removePets = createAsyncThunk(
  'userspets/remove',
  async (_id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`${URL}userspets/remove/${_id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.messsage);
    }
  }
);
