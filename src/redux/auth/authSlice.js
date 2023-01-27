import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'mockname',
  initialState: {
    mock: '',
  },
  reducers: {
    setMock(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

export const authReducer = authSlice.reducer;
