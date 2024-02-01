import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for sending a message and receiving a response
export const sendMessage = createAsyncThunk(
  'messages/sendMessage',
  async (messageText, { rejectWithValue }) => {
    try {
      // Simulate sending a payload to a URL and waiting for a response
      const fakeApiResponse = await new Promise((resolve) => 
        setTimeout(() => resolve(`Response to: ${messageText}`), 500)
      );
      return fakeApiResponse;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const MessagesSlice = createSlice({
  name: 'messages',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {
    startNewChat: (state) => {
      state.data = [];
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        // Add the user's message
        state.data.push({
          text: action.meta.arg, // Original message text sent by the user
          from: 'You',
          time: new Date().toISOString()
        });
        // Add the bot's response
        state.data.push({
          text: action.payload, // Response from the fake API
          from: 'ChatGPT',
          time: new Date().toISOString()
        });
        state.loading = false;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const {startNewChat} = MessagesSlice.actions;

export default MessagesSlice.reducer;
