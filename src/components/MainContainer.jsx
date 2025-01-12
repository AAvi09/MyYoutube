import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import UserInfo from "./userInfo";
import useYoutubeVideos from "../hooks/useYoutubeVideos";

const MainContainer = () => {
  useYoutubeVideos();
  return (
    <div>
      <div>
        <ButtonList />
        <VideoContainer />
      </div>
      <UserInfo />
    </div>
  );
};

export default MainContainer;
