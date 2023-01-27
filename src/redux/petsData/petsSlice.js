import { createSlice } from '@reduxjs/toolkit';

// заглушка Slice
const petsSlice = createSlice({
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

export const petsReducer = petsSlice.reducer;
