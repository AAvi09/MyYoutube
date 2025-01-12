import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfoBar",
  initialState: {
    isInfoBarOpen: true,
  },
  reducers: {
    toggleUserInfoBar: (state) => {
      state.isInfoBarOpen = !state.isInfoBarOpen;
    },
  },
});
export const { toggleUserInfoBar } = userInfoSlice.actions;
export default userInfoSlice.reducer;
