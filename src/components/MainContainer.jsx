import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import UserInfo from "./userInfo";

const MainContainer = () => {
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
