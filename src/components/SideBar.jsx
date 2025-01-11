import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const showSideBar = useSelector((store) => store.sideBar.isSideBarOpen);

  if (!showSideBar)
    return (
      <div className="w-10 p-2 m-2 shadow-xl">
        <div className="text-black font-medium ">
          <ul className="space-y-2">
            <li>🏡</li>
            <li>🩳</li>
            <li>🕺💼</li>
          </ul>
        </div>
      </div>
    );
  return (
    <div className="w-44 p-2 m-2 shadow-xl">
      <div className="text-black font-medium ">
        <ul className="space-y-2">
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <hr />
      <div className="text-black font-medium ">
        <h1>You {">"}</h1>
        <ul>
          <li>History</li>
          <li>Playlists</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Liked videos</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
