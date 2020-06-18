import React, { useState, useEffect, Fragment } from "react";
import {
  PowerSettingsNew,
  Save,
  ChatBubble,
  Settings,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticate, setUserId, setVisibleType } from "../../redux/actions";
import { Avatar, Menu, ListItemIcon, ListItemText, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import BaseDrawer from "../../components/BaseDrawer";
import History from "../../constants/History";
import Logo from "../../assets/img/logo.png";

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
}))(MenuItem);

const Header = () => {
  const [isShowDrawer, setShowDrawer] = useState(false);
  const [isSignUp, setSignUp] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [LoginFlag, setLoginFlag] = useState(false);
  const loginState = localStorage.getItem("loggedin");
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoginFlag(loginState && true);
    setShowDrawer(globalState.openSignUp);
    setSignUp(globalState.openSignUp);
  }, [loginState, globalState]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openLoginDrawer = () => {
    setShowDrawer(true);
    setSignUp(false);
  };

  const openSignUpDrawer = () => {
    setShowDrawer(true);
    setSignUp(true);
  };

  const goToAccountPage = () => {
    setAnchorEl(null);
    History.push("/account");
  };

  const goToMessageRoom = () => {
    setAnchorEl(null);
    History.push("/messages");
  };

  const LogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedin");
    localStorage.removeItem("userId");
    localStorage.removeItem("geoInfo");
    dispatch(setAuthenticate(false));
    dispatch(setUserId(0));
    setAnchorEl(null);
    History.push("/");
  };

  const goToHomePage = () => {
    dispatch(setVisibleType(""));
    History.push("/");
  }

  return (
    <header className="app-header">
      <div className="container menu-container">
        <div className="logo">
          <div onClick={goToHomePage} style={{ cursor: 'pointer' }}>
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="menu" id="menu">
          <div className="login">
            {LoginFlag ? (
              <div>
                <Avatar onClick={handleClick}>ES</Avatar>
              </div>
            ) : (
              <Fragment>
                <div className="login" onClick={openLoginDrawer} style={{ paddingRight: "10px"}}>
                  Log In
                </div>
                <div className="signup" onClick={openSignUpDrawer}>
                  Sign Up
                </div>
              </Fragment>
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
                <PowerSettingsNew fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </StyledMenuItem>
          </StyledMenu>
        </div>
      </div>
      <BaseDrawer
        isShowDrawer={isShowDrawer}
        setShowDrawer={setShowDrawer}
        isSignUp={isSignUp}
        setSignUp={setSignUp}
      />
    </header>
  );
};

export default Header;
