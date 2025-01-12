import { createSlice } from "@reduxjs/toolkit";

const youtubeVideoSlice = createSlice({
  name: "youtubeVideos",
  initialState: {
    nowPlayingVideos: null,
  },
  reducers: {
    addNowPlayingVideos: (state, action) => {
      state.nowPlayingVideos = action.payload;
    },
  },
});

export const { addNowPlayingVideos } = youtubeVideoSlice.actions;
export default youtubeVideoSlice.reducer;
