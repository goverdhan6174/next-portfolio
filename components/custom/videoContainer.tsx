import React from "react";
import { OnlineVideoContainer } from "../../styles/customStyles";

function OnlineVideoPlayer(props: any) {
  // const VIDEO_URL = `https://player.vimeo.com/video/${props.videoId}?controls=0&autoplay=1&loop=1&autopause=0&muted=1`;
  const VIDEO_URL = "";

  return (
    <OnlineVideoContainer>
      {/* <iframe
        ref={iframeRef}
        width="560"
        height="315"
        // src="https://www.youtube.com/embed/diU9dH9h43c?controls=0&autoplay=1&loop=1&playlist=diU9dH9h43c"
        src={VIDEO_URL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay"
        allowFullScreen
      ></iframe> */}
    </OnlineVideoContainer>
  );
}

export default OnlineVideoPlayer;
