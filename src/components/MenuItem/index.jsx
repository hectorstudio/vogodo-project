import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.style.scss";

const MenuItem = ({ title, url }) => {
  return (
    <li className={`menu-item`}>
      <Link to={url}>{title}</Link>
    </li>
  );
};

export default MenuItem;
