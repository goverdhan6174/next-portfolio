import React, { useEffect, useRef } from "react";

function VideoPlayer(props: any) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let videoPlayer: any = videoRef.current;
    if (!!videoPlayer) {
      // videoPlayer.src = require(`../../assets/${videoName}.webm`).default;
      videoPlayer.src = `/assets/${props.videoName}.webm`;
      videoPlayer.controls = false;
      videoPlayer.muted = true;
      videoPlayer.autoplay = true;
      videoPlayer.playsinline = true;
      videoPlayer.loop = true;
      setTimeout(() => {
        videoPlayer.play();
      }, 0);
    }
  }, [props.videoName]);

  return (
    <video ref={videoRef} loop autoPlay width={"100%"} height={"100%"}>
      <source type="video/webm" />
    </video>
  );
}

export default VideoPlayer;
