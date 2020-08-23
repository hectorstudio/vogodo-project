import React from "react";
import "./AdditionalContainer.style.scss";
import Breadcrumbs from "../components/Breadcrumbs";

const AboutContainer = () => {
  return (
    <div className="additional-container">
      <Breadcrumbs parent="Home" child="About Us" />
      <div className="additional-content">
        <h1>About Us</h1>
        <p>Welcome to Selldealsnow.com LLC, your number one source for all exclusive Real Estate deals.</p>
        <p>We're dedicated to providing you the very best of off-market deals, with an emphasis on:</p>
        <li>Connecting you with investors and realtors </li>
        <li>Bringing you off-market deals that are not accessible to the general public</li>
        <li>Helping you list and market properties in an organized and efficient manner</li>
        <p>Founded in 2020 by Ahmad and Tarek Wazzan, Selldealsnow.com LLC has come a long way since its founder's beginnings in Oklahoma City. When the Wazzan's first started, their passion for real estate investing drove them to start their own business. </p>
        <p>Part of the problem that people looking to get into real estate face is their false perception that the industry is challenging to succeed in.</p>
        <p>Forget all of that. </p>
        <p>Sell Deals Now functions through an inclusive philosophy that brings together all significant aspects of the buying and selling real estate market. </p>
        <p>You no longer have to feel like you're looking in from the outside as our service gives you essential tools and leads to succeed in buying and selling real estate. </p>
        <p>We're not here to confuse you along the way, either. </p>
        <p>Our platform features a straightforward, easy-to-use design so you can make the most of your time. </p>
        <p>Quick communication is vital for capturing leads in the real estate market. Our online platform makes inquiring about a listing and answering prospective buyers an easy task, so you don't have to deal with middlemen. </p>
        <p>The modern aesthetic of Sell Deals Now serves as the perfect backdrop for the high-quality imaging of properties you're looking to sell. We make it easy to provide a quality listing, so our visitors are sold on what you're offering. </p>
        <p>We hope you enjoy our service as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
        <p>Sincerely,</p>
        <b>Ahmad & Tarek Wazzan</b>
      </div>
    </div>
  );
};

export default AboutContainer;
