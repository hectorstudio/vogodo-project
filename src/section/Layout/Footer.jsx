import React from "react";
import { useSelector } from "react-redux";
import Logo from "../../assets/img/logo_footer.png";
import "./Footer.style.scss";

const Footer = () => {
  const globalState = useSelector(state => state);
  return (
    <footer className={`${globalState.visible_type}`}>
      <div className="container">
        <div className="footer-item footer-logo">
          <img src={Logo} alt="footer-logo" />
        </div>
        <div className="footer-item company-info">
          <div className="info">Info</div>
          <ul>
            <li>About</li>
            <li>Help</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-item explore-info">
          <div className="info">EXPLORE</div>
          <ul>
            <li>Find a Property Manager</li>
            <li>Find a Contractor</li>
            <li>Find Private money Lenders</li>
            <li>Course to Learn RE Wholesailing</li>
          </ul>
        </div>
        <div className="footer-item contact-info">
          <div className="info">Contact Us</div>
          <ul>
            <li><span><i className="fa fa-facebook"></i></span> <span><i className="fa fa-google"></i></span></li>
            <li>Email: contact@selldealsnow.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
