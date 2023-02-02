import { createSlice } from '@reduxjs/toolkit';
import { noticesOperations } from 'redux/notices';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    notices: [],
    userNotices: [],
    isLoading: false,
    // favorite: [false],
  },
  extraReducers: {
    [noticesOperations.getNoticesCategories.pending](state) {
      state.isLoading = true;
    },
    [noticesOperations.getNoticesCategories.fulfilled](state, action) {
      state.notices = action.payload;
      // state.favorite = action.payload;
      state.isLoading = false;
    },
    [noticesOperations.getNoticesCategories.rejected](state) {
      state.isLoading = false;
    },

    [noticesOperations.getUserNotices.pending](state) {
      state.isLoading = true;
    },
    [noticesOperations.getUserNotices.fulfilled](state, action) {
      state.userNotices = action.payload;
      state.isLoading = false;
    },
    [noticesOperations.getUserNotices.rejected](state) {
      state.isLoading = false;
    },

    [noticesOperations.createNotices.pending](state) {
      state.isLoading = true;
    },
    [noticesOperations.createNotices.fulfilled](state, action) {
      state.userNotices = action.payload;
      state.isLoading = false;
    },
    [noticesOperations.createNotices.rejected](state) {
      state.isLoading = false;
    },

    [noticesOperations.deleteUserNotices.pending](state) {
      state.isLoading = true;
    },
    [noticesOperations.deleteUserNotices.fulfilled](state, action) {
      state.userNotices = action.payload;
      state.isLoading = false;
    },
    [noticesOperations.deleteUserNotices.rejected](state) {
      state.isLoading = false;
    },

    // [noticesOperations.addToFavorite.pending](state) {
    //   state.isLoading = true;
    // },
    // [noticesOperations.addToFavorite.fulfilled](state) {
    //   // state.notices = action.payload;
    //   state.favorite = true;
    //   state.isLoading = false;
    // },
    // [noticesOperations.addToFavorite.rejected](state) {
    //   state.isLoading = false;
    // },

    // [noticesOperations.deleteFromFavorite.pending](state) {
    //   state.isLoading = true;
    // },
    // [noticesOperations.deleteFromFavorite.fulfilled](state) {
    //   // state.notices = action.payload;
    //   state.favorite = false;
    //   state.isLoading = false;
    // },
    // [noticesOperations.deleteFromFavorite.rejected](state) {
    //   state.isLoading = false;
    // },
  },
});

// export default noticesSlice.reducer;
export const noticesReducer = noticesSlice.reducer;
