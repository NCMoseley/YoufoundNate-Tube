import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div> Loading....</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div className="owner">{video.snippet.channelTitle}</div>
        <div className="time">
          {moment(video.snippet.publishedAt).format("dddd, MMMM Do YYYY")}
        </div>
        <div>{(video.snippet.title, console.log(video))}</div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
