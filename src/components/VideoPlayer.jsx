import React from "react";

function VideoPlayer() {
  const [play, setPlay] = React.useState(false);
  const url = play
    ? `https://www.youtube.com/embed/tu-bgIg-Luo?autoplay=1`
    : `https://www.youtube.com/embed/tu-bgIg-Luo`;
  return (
    <>
      <iframe className="video-player"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button onClick={() => setPlay(true)}>Play</button>
    </>
  );
}

export default VideoPlayer;
