import { useDispatch } from "react-redux";
import { YOUTUBE_API } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingVideos } from "../utils/YoutubeVideoSlice";

const useYoutubeVideos = () => {
  const dispatch = useDispatch();
  const YoutubeData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json.items);
    dispatch(addNowPlayingVideos(json.items));
  };
  useEffect(() => {
    YoutubeData();
  }, []);
};

export default useYoutubeVideos;
