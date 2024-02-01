import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL of your Node.js server
const SERVER_URL = `${import.meta.env.VITE_SERVER_URL}/llm`;
// const SERVER_URL = https://chatgpt-server-pmlcffocea-uc.a.run.app/llm

// Async thunk for sending a message and receiving a response
export const sendMessage = createAsyncThunk(
  'messages/sendMessage',
  async (messageText, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const messagesHistory = state.messages.data.map(msg => ({
        role: msg.from === 'You' ? 'user' : 'system',
        content: msg.text
      }));

      const payload = {
        messages: [...messagesHistory, { role: "user", content: messageText }]
      };

      const response = await axios.post(SERVER_URL, payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
          text: action.payload, // Response from the server
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

export const { startNewChat } = MessagesSlice.actions;

export default MessagesSlice.reducer;
