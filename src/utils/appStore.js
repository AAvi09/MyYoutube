import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlice";
import userInfoBarReducer from "./userInfoSlice";
const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    userInfo: userInfoBarReducer,
  },
});

export default store;
