import React from "react";
import "../../containers/Home.style.scss";
import "video-react/dist/video-react.css";
import { Player } from 'video-react';
import Poster from "../../assets/img/poster.png";

const IntroSection = () => {
  return (
    <section className="section section-intro">
      <div className="container">
        <h2 className="section-title">Why SellDealsNow?</h2>
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
        <Player
          playsInline
          poster={Poster}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          width="70%"
        />
      </div>
    </section>
  );
};

export default IntroSection;
