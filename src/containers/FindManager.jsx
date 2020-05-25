import React from "react";
import "./FindManager.style.scss";
import Breadcrumbs from "../components/Breadcrumbs";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import History from "../constants/History";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  subFormControl: {
    margin: theme.spacing(1),
    width: "48%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FindManager = () => {
  const classes = useStyles();
  
  const goToManagersList = () => {
    console.log("Manager listing");
    History.push("/managers/listing");
  }

  return (
    <div className="container">
      <Breadcrumbs parent="Home" child="Find a Property Manager" />
      <div className="find-form-container">
        <form>
          <div className="form-header">
            <h2>Find a Property Manager</h2>
          </div>
          <div className="form-body">
            <div className="form-group">
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Input
                  id="demo-simple-select-label"
                />
              </FormControl>
            </div>
            <div className="form-group">
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Company Name</InputLabel>
                <Input
                  id="demo-simple-select-label"
                />
              </FormControl>
            </div>
            <div className="form-group">
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-group">
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Language Spoken</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value={10}>English</MenuItem>
                  <MenuItem value={20}>French</MenuItem>
                  <MenuItem value={30}>Spanish</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-group">
              <FormControl className={classes.subFormControl}>
                <InputLabel id="demo-simple-select-label">First Name</InputLabel>
                <Input
                  id="demo-simple-select-label"
                />
              </FormControl>
              <FormControl className={classes.subFormControl}>
                <InputLabel id="demo-simple-select-label">Last Name</InputLabel>
                <Input
                  id="demo-simple-select-label"
                />
              </FormControl>
            </div>
          </div>
          <div className="form-footer">
            <button className="primary" type="button" onClick={() => goToManagersList()}>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindManager;
