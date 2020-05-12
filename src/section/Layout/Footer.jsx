import React from "react";
import { useSelector } from "react-redux";
import Logo from "../../assets/img/logo.png";
import store from "../../redux/service";
import "./Footer.style.scss";

const Footer = () => {
  const globalState = useSelector(state => state);
  return (
    <footer className={`${globalState.visible_type[0] ? globalState.visible_type[0].type : "" }`}>
      <div className="container">
        <div className="footer-item footer-logo">
          <img src={Logo} alt="footer-logo" />
        </div>
        <div className="footer-item property-types">
          <div className="info">Property Types</div>
          <ul>
            <li>Condominiums</li>
            <li>Detached House</li>
            <li>Townhouse</li>
            <li>Semi-detached House</li>
            <li>Duplex/Triplex</li>
          </ul>
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
            <li>Phone: +1 (123)-456-789</li>
            <li>Email: contact@vogodo.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
