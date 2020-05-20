import React, { Fragment } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {Input, InputLabel, InputAdornment, FormControl, FormControlLabel, Button, Radio } from "@material-ui/core";
import { AlternateEmail, VpnKey, PersonPin, Place } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import "./AccountSettings.style.scss";

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

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const AccountSettings = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const classes = useStyles();
  return (
    <Fragment>
      <div className="pane-title">Account Settings</div>
      <div className="pane-body account-settings">
        <FormControlLabel
          value="Manager"
          control={
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-button-demo"
              inputProps={{ "aria-label": "B" }}
            />
          }
          className="member-type"
          label="Manager"
        />
        <FormControlLabel
          value="Contractor"
          control={
            <GreenRadio
              checked={selectedValue === "c"}
              onChange={handleChange}
              value="c"
              name="radio-button-demo"
              inputProps={{ "aria-label": "C" }}
            />
          }
          className="member-type"
          label="Contractor"
        />
        
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Full Name
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <PersonPin />
              </InputAdornment>
            }
          />
        </FormControl>
        
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Address
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <Place />
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Email Address
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AlternateEmail />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <VpnKey />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Confirm Password
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <VpnKey />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            Change Account Settings
          </Button>
        </FormControl>
      </div>
    </Fragment>
  );
};

export default AccountSettings;
