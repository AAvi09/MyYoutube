import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlice";
import userInfoBarReducer from "./userInfoSlice";
import youtubeVideReducer from "./YoutubeVideoSlice";
const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    userInfo: userInfoBarReducer,
    youtubeVideo: youtubeVideReducer,
  },
});

export default store;
