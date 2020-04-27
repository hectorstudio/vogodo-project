import React from "react";
import YouTube from 'react-youtube';
import "../../containers/Home.style.scss";

const IntroSection = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <section className="section section-intro">
      <div className="container">
        <h2 className="section-title">Why VOGODO?</h2>
        <p className="introduction">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="intro-video">
        <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
      </div>
    </section>
  );
};

export default IntroSection;
