import React from "react";
import { useSelector } from "react-redux";
import Logo from "../../assets/img/logo_footer.png";
import "./Footer.style.scss";
import { Link } from "react-router-dom";
import Routes from "../../constants/Routes";

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
            <li>
              <Link to={Routes.aboutus} className="featured-item">About</Link>
            </li>
            <li><Link to={Routes.terms} className="featured-item">Terms of Use</Link></li>
            <li><Link to={Routes.privacy} className="featured-item">Privacy Notice</Link></li>
            <li>
              <Link to={Routes.faq} className="featured-item">FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="footer-item explore-info">
          <div className="info">EXPLORE</div>
          <ul>
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
