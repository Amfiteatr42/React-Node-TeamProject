import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://api-petly.onrender.com/api/"

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchPets = createAsyncThunk('userpets/fetchAll', async (_, { rejectWithValue }) =>
{
    try {
        const res = await axios.get(`${URL}userpets/add`);
        // token.set(res.data.longToken);
        console.log(res.data)
        return res.data;
    } catch (error) {
        return rejectWithValue(error.messsage)
    }
})
export const addPets = createAsyncThunk('userpets/add', async (pet, { rejectWithValue }) => {
    try {
        const res = await axios.post(`${URL}userpets/add`, pet);
       // token.set(res.data.longToken);
         console.log(res.data)
        return res.data;
    } catch (error) {
        return rejectWithValue(error.messsage)
    }
})
export const removePets = createAsyncThunk('userpets/remove', async (_id, { rejectWithValue }) => {
    try {
        const res = await axios.delete(`${URL}userpets/remove/${_id}`);
         console.log(res.data)
           token.unset();
        return res.data;
    } catch (error) {
        return rejectWithValue(error.messsage)
    }
})