import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const videoData = useSelector(
    (store) => store.youtubeVideo?.nowPlayingVideos
  );
  if (!videoData) {
    return <p>Loading videos...</p>; // Handle null or empty state
  }
  console.log(videoData);

  return (
    <div className="grid grid-cols-4 gap-2">
      {videoData.map((video, index) => (
        <Link to={`/watch?v=${video.id}`} key={index}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
