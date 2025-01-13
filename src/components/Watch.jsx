import React, { useEffect } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { useDispatch } from "react-redux";
import { oncloseSideBar } from "../utils/sideBarSlice";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(oncloseSideBar());
  }, []);
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="p-5 m-2 ">
          <iframe
            width="700"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Watch;
