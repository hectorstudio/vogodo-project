import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  Grid,
  Button,
} from "@material-ui/core";
import { Title, Place, LocalLibrary } from "@material-ui/icons";
import MultiSelector from "../../components/MultiSelector";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
    textAlign: "right", 
  },
}));

const languages = [
  { title: "English", year: "en" },
  { title: "Spanish", year: "sp" },
  { title: "French", year: "fr" },
];

const AccountProfile = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className="pane-title">PROFILE</div>
      <div className={`pane-body profile-config ${classes.root}`}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">Title</InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <Title />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <MultiSelector
              className={classes.margin}
              data={languages}
              label="Langauges Spoken"
              placeholder="Please choose at least one...."
            />
          </Grid>
          <Grid item xs={6}>
            <MultiSelector
              className={classes.margin}
              data={languages}
              label="Specialties"
              placeholder="Please choose at least one...."
            />
          </Grid>
          <Grid item xs={6}>
            <MultiSelector
              className={classes.margin}
              data={languages}
              label="Property Types"
              placeholder="Please choose at least one...."
            />
          </Grid>
          <Grid item xs={6}>
            <MultiSelector
              className={classes.margin}
              data={languages}
              label="Markets"
              placeholder="Please choose at least one...."
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Education
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <LocalLibrary />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Organizations/Associations
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
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <FormControl className={classes.margin}>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Change Profile Information
            </Button>
          </FormControl>
        </Grid>
      </div>
    </Fragment>
  );
};

export default AccountProfile;
