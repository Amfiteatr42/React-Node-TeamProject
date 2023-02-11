import { createSlice } from '@reduxjs/toolkit';
import { noticesOperations } from 'redux/notices';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    notices: [],
    userNotices: [],
    allNotices: [],
  },
  extraReducers: {
    [noticesOperations.getNoticesCategories.pending](state) {
      state.isLoading = true;
    },
    [noticesOperations.getNoticesCategories.fulfilled](state, action) {
      state.notices = action.payload.reverse();
      state.isLoading = false;
    },
    [noticesOperations.getNoticesCategories.rejected](state) {
      state.isLoading = false;
    },

    [noticesOperations.getUserNotices.pending](state) {
      state.isLoading = true;
    },
    [noticesOperations.getUserNotices.fulfilled](state, action) {
      state.userNotices = action.payload.data.reverse();
      state.isLoading = false;
    },
    [noticesOperations.getUserNotices.rejected](state) {
      state.isLoading = false;
    },

    [noticesOperations.createNotices.pending](state) {
      state.isLoading = true;
    },
    [noticesOperations.createNotices.fulfilled](state, action) {
      state.userNotices.push(action.payload.data);
      state.notices.push(action.payload.data);
      state.allNotices.push(action.payload.data);
      state.isLoading = false;
    },
    [noticesOperations.createNotices.rejected](state) {
      state.isLoading = false;
    },

    [noticesOperations.deleteUserNotices.pending](state) {
      state.isLoading = true;
    },
    [noticesOperations.deleteUserNotices.fulfilled](state, action) {
      state.userNotices = action.payload.data;
      state.isLoading = false;
      state.allNotices.filter(el => el !== action.payload.data);
    },
    [noticesOperations.deleteUserNotices.rejected](state) {
      state.isLoading = false;
    },
    [noticesOperations.fetchAllNotices.fulfilled](state, { payload }) {
      state.allNotices = payload;
    },
  },
});

export const noticesReducer = noticesSlice.reducer;
