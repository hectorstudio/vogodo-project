import React, { useState } from "react";
import LogoItem from "../../components/MenuItem/LogoItem";
import MenuItem from "../../components/MenuItem";
import BaseDrawer from "../../components/BaseDrawer";
import Login from "../../assets/svg/login.svg";

import "./Header.style.scss";

const Header = () => {
  const [isShowDrawer, setShowDrawer] = useState(false);

  const openLoginDrawer = () => {
    setShowDrawer(true);
  };

  return (
    <header>
      <div className="container">
        <div className="menu" id="menu">
          <ul>
            <MenuItem url="/" title="HOME" />
            <MenuItem url="#" title="ABOUT US" />
            <MenuItem url="#" title="HELP" />
            <MenuItem url="#" title="CONTACT US" />
            <LogoItem url="#" title="Logo" />
            <MenuItem url="#" title="Find a Property Manager" />
            <MenuItem url="#" title="Find a Contractor" />
          </ul>
          <div className="social-icons">
            {
              //<div onClick={openDrawer}><i className="fa fa-facebook"></i></div>
              //<div onClick={openDrawer}><i className="fa fa-google"></i></div>
            }
            <div onClick={openLoginDrawer}>
              <img src={Login} alt="login icon" />
            </div>
          </div>
        </div>
      </div>
      <BaseDrawer
        isShowDrawer={isShowDrawer}
        setShowDrawer={setShowDrawer}
      />
    </header>
  );
};

export default Header;
