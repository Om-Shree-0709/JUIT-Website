import React, { useRef } from "react";
import "./VedioPlayer.css";
import vid from "../../assets/vid.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={vid} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
