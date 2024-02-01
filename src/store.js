import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import MessagesSliceReducer from "./components/Messages/MessagesSlice";
import SidebarSliceReducer from "./components/Sidebar/SidebarSlice";


const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  messages: MessagesSliceReducer,
  sidebar: SidebarSliceReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
