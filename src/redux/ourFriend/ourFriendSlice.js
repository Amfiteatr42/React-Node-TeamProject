import { createSlice } from '@reduxjs/toolkit';
import { getOurFriends } from './ourFriendOperations';

const ourFriendsState = {
  friends: [],
  isLoading: false,
  error: null,
};

const pendingHandler = state => {
  state.isLoading = true;
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ourFriendsSlice = createSlice({
  name: 'friends',
  initialState: ourFriendsState,
  extraReducers: builder => {
    builder.addCase(getOurFriends.pending, pendingHandler);
    builder.addCase(getOurFriends.rejected, rejectedHandler);
    builder.addCase(getOurFriends.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.friends = action.payload;
    });
  },
});

export const ourFriendReducer = ourFriendsSlice.reducer;
