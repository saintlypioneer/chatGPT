// features/yourFeatureSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const MessagesSlice = createSlice({
  name: 'messages',
  initialState: {
    // initial state
    data: []
  },
  reducers: {
    // your reducers
  },
});

export const { messages } = MessagesSlice.actions;

export default MessagesSlice.reducer;
