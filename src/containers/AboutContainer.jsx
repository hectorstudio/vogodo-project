import React from "react";
import "./AdditionalContainer.style.scss";
import Breadcrumbs from "../components/Breadcrumbs";

const AboutContainer = () => {
  return (
    <div className="additional-container">
      <Breadcrumbs parent="Home" child="About Us" />
      <div className="additional-content">
        <h1>About Us</h1>
        <p>
          Welcome to Selldealsnow.com LLC, your number one source for all things
          Real Estate Exclusive deals. We're dedicated to providing you the very
          best of off market deals, with an emphasis on connecting you with
          investors and realtors as well as bringing you off market deals that
          are not public. 
          <br/>
          Founded in 2020 by Ahmad and Tarek Wazzan,
          Selldealsnow.com LLC has come a long way from its beginnings in
          Oklahoma CIty. When the Wazzans first started out, Their passion for
          real estate investing drove them to start their own business. 
          <br/>
          We hope you enjoy our service as much as we enjoy offering them to you. If you
          have any questions or comments, please don't hesitate to contact us.
          <br/>
          Sincerely, 
          <br/>
          Ahmad & Tarek Wazzan
        </p>
      </div>
    </div>
  );
};

export default AboutContainer;
