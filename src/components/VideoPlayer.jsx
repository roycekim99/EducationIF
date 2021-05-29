import React from "react";

function VideoPlayer(props) {
  const [play, setPlay] = React.useState(false);

  const url = play ? props.videoList.url + `?autoplay=1` : props.videoList.url;
  return (
    <div>
      <iframe
        className="video-player"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button onClick={() => setPlay(true)}>Play</button>
    </div>
  );
}

export default VideoPlayer;
