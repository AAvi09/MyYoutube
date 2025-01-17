import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    isSideBarOpen: true,
  },

  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    oncloseSideBar: (state, action) => {
      state.isSideBarOpen = false;
    },
  },
});
export const { toggleSideBar, oncloseSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer;
