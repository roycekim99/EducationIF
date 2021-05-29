import React, { useRef, useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer.jsx";

function VideoLists(props) {
  
  return (
    <>
      <div style={{ color: props.color}}>{props.videoTitle}</div>
    </>
  );
}

export default VideoLists;
