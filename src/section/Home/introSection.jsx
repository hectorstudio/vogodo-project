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
          <p>Here is a list of ways you can benefit from wholesaling: </p>
            <ul>
              <li>One of the easiest introductory real estate investment strategies </li>
              <li>Quick entry and easy to learn </li>
              <li>Faster deals than developing </li>
              <li>Loose cash and credit requirements </li>
              <li>Freedom in location choices </li>
              <li>High return on investment </li>
              <li>More volume potential with less risk </li>
            </ul>
          <p>Off-market deals provide: </p>
            <ul>
              <li>Less competition to buy</li>
              <li>More time to examine the property</li>
              <li>Higher ability to negotiate</li>
              <li>Unique opportunities and attractive opportunities  </li>
            </ul>
          <p>Our platform is geared toward assisting the following groups:</p>
            <ul>
              <li>Agents</li>
              <li>Property owners</li>
              <li>Landlords</li>
              <li>Developers</li>
              <li>Brokerages</li>
              <li>Real estate investors</li>
            </ul>
          <p>If you’re looking to sell a property you have the ability to list unlimited numbers of properties. Real estate players involved in frequent trades can utilize this perk to expand the level of exposure their properties are getting. </p>

          <p>The cost of a monthly membership on Sell Deals Now pales in comparison to the amount of profit you can make through our attractive high value property philosophy. </p>

          <p>As stated in our motto, making dream homes a reality has been our mission for years. While we started in Oklahoma City, the Sell Deals Now network extends nationwide so you can market and purchase from ideal American real estate locations. </p>

        </div>
      </div>
      <div className="intro-video">
        <Player
          playsInline
          poster={Introduction}
          src={IntroductionVideo}
          width="70%"
        />
      </div>
    </section>
  );
};

export default IntroSection;
