import React from "react";
import LogoItem from "../components/MenuItem/LogoItem";
import MenuItem from "../components/MenuItem";

import "./Header.style.scss";

const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="menu" id="menu">
          <ul>
            <MenuItem url="#" title="HOME" />
            <MenuItem url="#" title="ABOUT US" />
            <MenuItem url="#" title="HELP" />
            <MenuItem url="#" title="CONTACT US" />
            <LogoItem url="#" title="Logo" />
            <MenuItem url="#" title="Find a Property Manager" />
            <MenuItem url="#" title="Find a Contractor" />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
