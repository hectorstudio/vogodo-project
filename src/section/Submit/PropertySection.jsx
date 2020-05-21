import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import "./PropertySection.style.scss";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "30%",
  },
  subFormControl: {
    margin: theme.spacing(1),
    minWidth: "14%",
    maxWidth: "14%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PropertySection = () => {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const [value, setValue] = useState(9);

  const handleChange = (event) => {
    //console.log(event);
  };
  return (
    <section className="property-section">
      <div className="description-container">
        <div className="property-area">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Garage</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              Property Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="vacant">Vacant</MenuItem>
              <MenuItem value="occupied">Occupied</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="property-area">
          <FormControl className={classes.subFormControl}>
            <InputLabel id="demo-simple-select-label">Year built</InputLabel>
            <Input
              id="demo-simple-select-label"
              value={value}
              onChange={handleChange("amount")}
            />
          </FormControl>
          <FormControl className={classes.subFormControl}>
            <InputLabel id="demo-simple-select-label">Renovated</InputLabel>
            <Input
              id="demo-simple-select-label"
              value={value}
              onChange={handleChange("amount")}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Square Feet</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={1}>10*10</MenuItem>
              <MenuItem value={2}>20*20</MenuItem>
              <MenuItem value={3}>30*30</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Roof Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="0.5">15 Days</MenuItem>
              <MenuItem value="1">1 Month</MenuItem>
              <MenuItem value="2">2 Month</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="property-area">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Lot Size</InputLabel>
            <Input
              id="demo-simple-select-label"
              value={value}
              onChange={handleChange("amount")}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Rate</InputLabel>
            <Input
              id="demo-simple-select-label"
              value={value}
              onChange={handleChange("amount")}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Price</InputLabel>
            <Input
              id="demo-simple-select-label"
              value={value}
              onChange={handleChange("amount")}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <div className="property-description">
            <SunEditor
              lang="en"
              setOptions={{
                height: 280,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
