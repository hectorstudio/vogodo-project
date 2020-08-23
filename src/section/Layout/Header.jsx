import React, { useState, useEffect, Fragment } from "react";
import {
  PowerSettingsNew,
  Save,
  Settings,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticate, setUserId, setUserInfo, setFilterType, setVisibleType, setOpenSignUp, setMenuType } from "../../redux/actions";
import { Avatar, Menu, ListItemIcon, ListItemText, MenuItem, Grid } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import BaseDrawer from "../../components/BaseDrawer";
import History from "../../constants/History";
import Logo from "../../assets/img/logo.png";
import jwt from "jsonwebtoken";
import UserService from "../../services/UserService";
import "./Header.style.scss";
import { checkIsPremiumMember } from "../../constants/Common";
import Routes from "../../constants/Routes";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [isShowDrawer, setShowDrawer] = useState(false);
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem('userId');
  const [isSignUp, setSignUp] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const LoginFlag = localStorage.getItem("loggedin");
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const jwtSecret = process.env.REACT_APP_JWT_SECRET;
  useEffect(() => {
    if (token) {
      try {
        jwt.verify(token, jwtSecret);
        if (!user) {
          (async () => {
            try {
              const result = await UserService.getUser(userId || globalState.userId);
              if (result && result.user) {
                const { user } = result;
                setUser(user);
                dispatch(setUserInfo(user));
                const status = checkIsPremiumMember(user);
                if (History.location.pathname !== Routes.signup && History.location.pathname !== Routes.home) {
                  if (!status) {
                    //History.push(Routes.signup);
                  }
                }
              } else {
                console.log("Loading User Data Error: ");
              }
            } catch (error) {
              console.log("Loading USer Data Error: ");
            }
          })();
        }
      } catch (err) {
        localStorage.removeItem('geoInfo');
        localStorage.removeItem('loggedin');
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        dispatch(setOpenSignUp(false));
        dispatch(setAuthenticate(false));
        dispatch(setUserId(0));
        if (History.location.pathname !== Routes.home || History.location.pathname !== Routes.find_property)
          History.push(Routes.home);
      }
    }
  });

  // useEffect(() => {
  //   if (globalState.userInfo) {
  //     const status = checkIsPremiumMember(globalState.userInfo);
  //     if (History.location.pathname !== Routes.signup && History.location.pathname !== Routes.home) {
  //       if (!status) {
  //         //History.push(Routes.signup);
  //       }
  //     }
  //   }
  // }, [History.location]);


  useEffect(() => {
    setShowDrawer(globalState.openSignUp);
    setSignUp(globalState.openSignUp);
  }, [globalState]);

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

  const goToAccountPage = (value) => {
    setAnchorEl(null);
    dispatch(setOpenSignUp(false));
    dispatch(setMenuType(value))
    History.push(Routes.account);
  };

  const LogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedin");
    localStorage.removeItem("userId");
    localStorage.removeItem("geoInfo");
    dispatch(setOpenSignUp(false));
    dispatch(setAuthenticate(false));
    dispatch(setUserId(0));
    dispatch(setUserInfo(null));
    setAnchorEl(null);
    History.push(Routes.home);
  };

  const goToHomePage = () => {
    dispatch(setVisibleType(""));
    History.push(Routes.home);
  }
  
  return (
    <header className={`app-header ${globalState.visible_type}`}>
      { globalState.visible_type === 'fixed-height' ? (
        <div className={classes.root}>
          <Grid container className="search-header container">
            <Grid xs={12} md={4} className="header-item category">
              {/* <div className="menu" id="menu">
                {options.map(opt => (
                  <div className={globalState.filterType === opt.value ? "active" : ""} onClick={() => dispatch(setFilterType(opt.value))}>
                    { opt.label }
                  </div>
                ))}
              </div> */}
            </Grid>
            <Grid xs={6} md={4} className="header-item">
              <div className="logo" onClick={goToHomePage} style={{ cursor: 'pointer' }}>
                <img src={Logo} alt="Logo" />
              </div>
            </Grid>
            <Grid xs={6} md={4} className="header-item account">
              <div className="menu" id="menu">
                <div className="login">
                  {LoginFlag ? (
                    <div>
                      <Avatar onClick={handleClick}>{user ? `${user.firstName.charAt(0)}${user.lastName.charAt(0)}` : 'TE'}</Avatar>
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
                  <StyledMenuItem onClick={() => goToAccountPage(0)}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={() => goToAccountPage(1)}>
                    <ListItemIcon>
                      <Save fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Saved Properties" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={() => goToAccountPage(2)}>
                    <ListItemIcon>
                      <Save fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="My Listing" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={LogOut}>
                    <ListItemIcon>
                      <PowerSettingsNew fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                  </StyledMenuItem>
                </StyledMenu>
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className="container menu-container">
          <Grid container>
            <Grid xs={12} md={4}>
            </Grid>
            <Grid xs={6} md={4}>
              <div className="logo" onClick={goToHomePage} style={{ cursor: 'pointer' }}>
                <img src={Logo} alt="Logo" />
              </div>
            </Grid>
            <Grid xs={6} md={4} container justify="flex-end" direction="row" alignItems="center">
              <div className="menu" id="menu">
                <div className="login">
                  {LoginFlag ? (
                    <div>
                      <Avatar onClick={handleClick}>{user ? `${user.firstName.charAt(0)}${user.lastName.charAt(0)}` : 'TE'}</Avatar>
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
                  <StyledMenuItem onClick={() => goToAccountPage(0)}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={() => goToAccountPage(1)}>
                    <ListItemIcon>
                      <Save fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Saved Properties" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={() => goToAccountPage(2)}>
                    <ListItemIcon>
                      <Save fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="My Listing" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={LogOut}>
                    <ListItemIcon>
                      <PowerSettingsNew fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                  </StyledMenuItem>
                </StyledMenu>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
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
