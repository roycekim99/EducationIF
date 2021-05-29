import React from "react";
import VideoPlayer from "./VideoPlayer.jsx";

function VideoDisplayButton(props) {
  return (
    <>
      {" "}
      <VideoPlayer url={props.videoURL} />
    </>
  );
}

export default VideoDisplayButton;
