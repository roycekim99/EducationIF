import React from "react";

function VideoPlayer(props) {
  const [play, setPlay] = React.useState(false);

  const url = play ? props.url + `?autoplay=1` : props.url;
  //DEBUG
  //const url = "https://www.youtube.com/embed?v=w7ejDZ8SWv8&t=2703s";
  console.log("videoURL", url);

  return (
    <div>
      <iframe
        className="video-player"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <button onClick={() => setPlay(true)}>Play</button>
    </div>
  );
}

export default VideoPlayer;
