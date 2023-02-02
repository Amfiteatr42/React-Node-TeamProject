import { createSlice } from '@reduxjs/toolkit';
import { addPets, fetchPets, removePets } from './petsOperation';

// заглушка Slice
const handelPending = state => {
  state.isLoading = true;
};
const handelReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const petsSlice = createSlice({
  name: 'mockname',
  initialState: {
    mock: [ {}],
    isLoading: false,
    error: null,
  },
  reducers: {
    setMock(state, action) {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addPets.pending, handelPending).addCase(fetchPets.pending, handelPending)
      .addCase(removePets.pending, handelPending)
      .addCase(addPets.rejected, handelReject).addCase(fetchPets.rejected, handelReject)
      .addCase(removePets.rejected, handelReject)
      .addCase(addPets.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
     console.log( state.mock.push(payload))
        state.mock.push(payload);
      }).addCase(fetchPets.fulfilled,  (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.mock = payload;
      })
      .addCase(removePets.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.mock = state.mock.filter(el => el._id !== payload._id);
      });
  },
});
  
export const petsReducer = petsSlice.reducer;
