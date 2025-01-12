import React from "react";

const VideoCard = ({ video }) => {
  //   console.log(info);
  const { title, thumbnails, channelTitle } = video.snippet;
  return (
    <div className="border rounded-lg shadow-md p-4 w-72 h-80">
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-72 h-40 object-cover rounded-md"
      />
      <h3 className="font-bold text-lg mt-2">{title}</h3>
      <p className="text-sm text-gray-600">{channelTitle}</p>
    </div>
  );
};

export default VideoCard;
