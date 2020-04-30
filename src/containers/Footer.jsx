import React from "react";
import Logo from "../assets/img/logo.png";
import "./Footer.style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src={Logo} alt="footer-logo" />
        </div>
        <div className="company-info">
          <div className="info">COMPANY</div>
          <ul>
            <li>About</li>
            <li>Help</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="explore-info">
          <div className="info">EXPLORE</div>
          <ul>
            <li>Find a Property Manager</li>
            <li>Find a Contractor</li>
            <li>Find Private money Lenders</li>
            <li>Course to Learn RE Wholesailing</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
