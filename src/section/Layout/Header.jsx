import React, { useState, useEffect } from "react";
import MenuItem from "../../components/MenuItem";
import BaseDrawer from "../../components/BaseDrawer";
import Login from "../../assets/svg/login.svg";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import Menuitem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Power from "@material-ui/icons/PowerSettingsNew";
import Save from "@material-ui/icons/Save";
import ChatBubble from "@material-ui/icons/ChatBubble";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Settings from "@material-ui/icons/Settings";
import History from "../../constants/History";
import Logo from "../../assets/img/logo.png";
import {Link} from 'react-router-dom';

import "./Header.style.scss";

const StyledMenu = withStyles({
  paper: {
    margin: "10px 0px",
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(Menuitem);

const Header = () => {
  const [isShowDrawer, setShowDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [LoginFlag, setLoginFlag] = useState(false); 

  useEffect(() => {
    setLoginFlag(localStorage.getItem("login") && true);
  }, [LoginFlag]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openLoginDrawer = () => {
    setShowDrawer(true);
  };

  const goToAccountPage = () => {
    setAnchorEl(null);
    History.push("/account");
  };

  const goToMessageRoom = () => {
    setAnchorEl(null);
    History.push("/messages");
  }

  const LogOut = () => {
    localStorage.removeItem("account-type");
    localStorage.removeItem("login");
    setAnchorEl(null);
    History.push("/");
  }

  return (
    <header className="app-header">
      <div className="container menu-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="menu" id="menu">
          <ul>
            <MenuItem url="/" title="HOME" />
            <MenuItem url="/managers" title="Find a Property Manager" />
            <MenuItem url="#" title="Find a Contractor" />
          </ul>
          <div className="social-icons">
            {
              //<div onClick={openDrawer}><i className="fa fa-facebook"></i></div>
              //<div onClick={openDrawer}><i className="fa fa-google"></i></div>
            }
          </div>
          <div className="login">
            {LoginFlag ? (
              <div>
                <Avatar onClick={handleClick}>ES</Avatar>
              </div>
            ) : (
              <div onClick={openLoginDrawer}>
                <img src={Login} alt="login icon" />
              </div>
            )}
          </div>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem onClick={goToAccountPage}>
              <ListItemIcon>
                <AccountCircle fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </StyledMenuItem>
            <StyledMenuItem onClick={goToAccountPage}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </StyledMenuItem>
            <StyledMenuItem onClick={goToAccountPage}>
              <ListItemIcon>
                <Save fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Saved Properties" />
            </StyledMenuItem>
            <StyledMenuItem onClick={goToAccountPage}>
              <ListItemIcon>
                <Save fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="My Listing" />
            </StyledMenuItem>
            <StyledMenuItem onClick={goToMessageRoom}>
              <ListItemIcon>
                <ChatBubble fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </StyledMenuItem>
            <StyledMenuItem onClick={LogOut}>
              <ListItemIcon>
                <Power fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </StyledMenuItem>
          </StyledMenu>
        </div>
      </div>
      <BaseDrawer isShowDrawer={isShowDrawer} setShowDrawer={setShowDrawer} />
    </header>
  );
};

export default Header;
