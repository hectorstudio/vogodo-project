import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import {Input, InputLabel, InputAdornment, FormControl, Button, Grid } from "@material-ui/core";
import { Title, AlternateEmail, VpnKey, PersonPin } from "@material-ui/icons";
import Autocomplete from 'react-google-autocomplete';
import "./AccountSettings.style.scss";

import UserService from "../../services/UserService";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
    textAlign: "right", 
  },
}));

const AccountSettings = () => {
  const classes = useStyles();
  const globalState = useSelector(state => state);
  const userId = localStorage.getItem('userId');
  const [user, setUser] = useState({});
  const [confirm, setConfirm] = useState("");
  const [allowSubmit, setAllow] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await UserService.getUser(userId || globalState.userId);
        if (result && result.user) {
          const { user } = result;
          setUser(user);
        } else {
          console.log("Loading User Data Error: ");
        }
      } catch (error) {
        console.log("Loading USer Data Error: ");
      }
    })();
  }, [userId, globalState.userId]);

  const submitUpdatedUserInfo = async () => {
    await UserService.updateUser(userId || globalState.userId, user);
  }

  const onChangeFirstName = (e) => {
    let tempUser = {...user};
    tempUser.firstName = e.target.value;
    setUser(tempUser);
  }

  const onChangeLastName = (e) => {
    let tempUser = {...user};
    tempUser.lastName = e.target.value;
    setUser(tempUser);
  }

  const onChangeAddress = (e) => {
    let tempUser = {...user};
    tempUser.address = e.formatted_address;
    tempUser.latitude = e.geometry.location.lat();
    tempUser.longitude = e.geometry.location.lng();
    setUser(tempUser);
  }

  const onChangeEmailAddress = (e) => {
    let tempUser = {...user};
    tempUser.address = e.target.value;
    setUser(tempUser);
  }

  const onChangePassword = (e) => {
    let tempUser = {...user};
    tempUser.password = e.target.value;
    setUser(tempUser);
  }

  const onChangeTitle = (e) => {
    let tempUser = {...user};
    tempUser.title = e.target.value;
    setUser(tempUser);
  }

  const onChangeConfirm = (e) => {
    setConfirm(e.target.value);
    if (confirm !== "" && confirm === user.password) {
      setAllow(true);
    } else {
      setAllow(false);
    }
  }

  return (
    <Fragment>
      <div className="pane-title">Account Settings</div>
      <div className="pane-body account-settings">   
        <Grid container spacing={3}>
          <Grid item xs={6}>     
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="firstName">
                First Name
              </InputLabel>
              <Input
                id="firstName"
                value={user.firstName}
                onChange={onChangeFirstName}
                startAdornment={
                  <InputAdornment position="start">
                    <PersonPin />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>  
          <Grid item xs={6}>     
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="lastName">
                Last Name
              </InputLabel>
              <Input
                id="lastName"
                value={user.lastName}
                onChange={onChangeLastName}
                startAdornment={
                  <InputAdornment position="start">
                    <PersonPin />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        
        <FormControl className={classes.margin}>
          <Autocomplete
            className="address"
            onPlaceSelected={onChangeAddress}
            types={['(regions)']}
            value={user.address}
            componentRestrictions={{country: "us"}}
          />
        </FormControl>

        <FormControl className={classes.margin}>
          <InputLabel htmlFor="emailAddress">
            Email Address
          </InputLabel>
          <Input
            id="emailAddress"
            value={user.emailAddress}
            onChange={onChangeEmailAddress}
            startAdornment={
              <InputAdornment position="start">
                <AlternateEmail />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            value={user.password}
            onChange={onChangePassword}
            startAdornment={
              <InputAdornment position="start">
                <VpnKey />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="confirm">
            Confirm Password
          </InputLabel>
          <Input
            id="confirm"
            value={confirm}
            onChange={onChangeConfirm}
            onBlur={onChangeConfirm}
            startAdornment={
              <InputAdornment position="start">
                <VpnKey />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            id="title"
            value={user.title}
            onChange={onChangeTitle}
            startAdornment={
              <InputAdornment position="start">
                <Title />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <Button
            variant="outlined"
            color="primary"
            disabled={!allowSubmit}
            className={classes.button}
            onClick={submitUpdatedUserInfo}
          >
            Change Account Settings
          </Button>
        </FormControl>
      </div>
    </Fragment>
  );
};

export default AccountSettings;
