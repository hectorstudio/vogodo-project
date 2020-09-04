import React from "react";
import "../../containers/Home.style.scss";
import "video-react/dist/video-react.css";
import { Player } from 'video-react';
import Introduction from "../../assets/img/introduction.png";
import IntroductionVideo from "../../assets/img/introduction.mp4";

const IntroSection = () => {
  return (
    <section className="section section-intro">
      <div className="container">
        <h2 className="section-title">Why SellDealsNow?</h2>
        <div className="introduction">
          <p>Sell Deals Now isn’t your average home buying and selling marketplace.</p>
          <p>We focus solely on providing anyone interested in real estate with the best wholesale and off-market deals. The result is the ability to acquire high-value properties at a jaw-dropping price.</p>
          <div className="sector">
            <div className="intro-video">
              <Player
                playsInline
                poster={Introduction}
                src={IntroductionVideo}
              />
            </div>
            <div className="core-features">
              <div className="deal-1" style={{ flex:1, margin: '0 5px', padding: '10px 5px', border: '1px solid white' }}>
                <p>Off-market deals provide: </p>
                <ul style={{ listStyle: 'none', textAlign: 'left', margin: 0, paddingLeft: 3}}>
                  <li>🔘 Less competition to buy</li>
                  <li>🔘 More time to examine the property</li>
                  <li>🔘 Higher ability to negotiate</li>
                  <li>🔘 Unique opportunities and attractive opportunities  </li>
                </ul>
              </div>
              <div className="deal-2" style={{ flex:1, padding: '10px 5px', border: '1px solid white' }}>
                <p>Our platform assists the following groups:</p>
                <ul style={{ listStyle: 'none', textAlign: 'left', paddingLeft: 3 }}>
                  <li>✔ Agents</li>
                  <li>✔ Property owners</li>
                  <li>✔ Landlords</li>
                  <li>✔ Developers</li>
                  <li>✔ Brokerages</li>
                  <li>✔ Real estate investors</li>
                </ul>
              </div>
            </div>
          </div>
          <p style={{ margin: 0, padding: '1rem' }}>If you’re looking to sell a property you have the ability to list unlimited numbers of properties. Real estate players involved in frequent trades can utilize this perk to expand the level of exposure their properties are getting. </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
