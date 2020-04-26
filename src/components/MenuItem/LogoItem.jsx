import React from "react";
import {Link} from 'react-router-dom';
import "./MenuItem.style.scss";
import Logo from "../../assets/img/logo.png";

const LogoItem = ({ title, url }) => {
  return (
    <li className={`menu-item logo`}>
      <Link to={url}>
        <img src={Logo} alt={title} />
      </Link>
    </li>
  );
};

export default LogoItem;
