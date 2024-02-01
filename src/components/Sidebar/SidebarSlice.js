import { createSlice } from '@reduxjs/toolkit';

export const SidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: false
  },
  reducers: {
    openSidebar: (state) => {
      state.isOpen = true;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
});

export const {openSidebar, closeSidebar, toggleSidebar} = SidebarSlice.actions;

export default SidebarSlice.reducer;
