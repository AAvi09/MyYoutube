import React from "react";
import {
  HAMBURGER_URL,
  NOTIFICATION_BELL,
  USER_LOGO,
  YOUTUBE_LOGO,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/sideBarSlice";
import { toggleUserInfoBar } from "../utils/userInfoSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const handleSideBarToggle = () => {
    dispatch(toggleSideBar());
  };
  const toggleUserInfoBarHandle = () => {
    dispatch(toggleUserInfoBar());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg ">
      <div className="flex col-span-1 p-2 ">
        <img
          alt="hamburger-logo"
          src={HAMBURGER_URL}
          className="h-8 w-6 cursor-pointer"
          onClick={() => handleSideBarToggle()}
        />
        <Link to="/">
          <img
            alt="youtube-logo"
            src={YOUTUBE_LOGO}
            className="h-8  mx-4 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex col-span-10 p-2 text-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className=" border border-gray-400 w-1/2 h-8 rounded-l-full px-2"
        />
        <button className=" pb-1 justify-center text-center hover:bg-zinc-300 bg-zinc-100 h-8 w-14 rounded-r-full">
          🧭
        </button>
      </div>
      <div className="flex col-span-1 gap-2 text-center justify-center p-2">
        <button className="h-8 w-20 font-semibold rounded-2xl bg-zinc-200  pb-1  text-center">
          + create
        </button>
        <img
          alt="notiication-bell"
          src={NOTIFICATION_BELL}
          className="h-8 cursor-pointer"
        />
        <img
          alt="user"
          src={USER_LOGO}
          className="h-8 bg-zinc-700 rounded-full cursor-pointer"
          onClick={() => toggleUserInfoBarHandle()}
        />
      </div>
    </div>
  );
};

export default Header;
