import React from "react";
import vrGaming from "../../video/vrGaming.mp4";

function BackgroundVideo() {
  return (
    <>
      <video
        src={vrGaming}
        muted
        loop
        maxWidth="100%"
        autoplay="true"
        type="video/mp4"
        id="backgroundVideo"
      />
    </>
  );
}

export default BackgroundVideo;
