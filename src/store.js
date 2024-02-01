// store.js
import { configureStore } from '@reduxjs/toolkit';
import MessagesSliceReducer from "./components/Messages/MessagesSlice"

export const store = configureStore({
  reducer: {
    messages: MessagesSliceReducer
    // other reducers...
  },
});
