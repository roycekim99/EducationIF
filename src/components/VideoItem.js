import React, { useRef, useEffect, useState } from "react";
import VideoDisplayButton from "./VideoDisplayButton.js";
import VideoPlayer from "./VideoPlayer.jsx";

function VideoItem(props) {
  console.log(props.videoURL);
  return (
    <>
      <div
        style={{ color: props.color, animation: props.animation }}
        className="topic-name"
      >
        {props.videoTitle}
      </div>
      <VideoPlayer url={props.videoURL} />
    </>
  );
}

export default VideoItem;
