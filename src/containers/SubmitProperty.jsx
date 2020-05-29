import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox } from '@material-ui/core';
import SunEditor from "suneditor-react";
import {useDropzone} from 'react-dropzone';
import PropertyElement from "../components/PropertyElement";
import "suneditor/dist/css/suneditor.min.css";
import "./SubmitProperty.style.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "23%",
  },
}));

const SubmitProperty = () => {
  const classes = useStyles();
  const [invest_type, setInvestType] = useState("residential");
  const [property_type, setPropertyType] = useState(null);
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const [checkedA, setCheckA] = useState(false);

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const handleChangeInvestType = (value) => {
    setInvestType(value);
  }
  
  const handleChangePropertyType = (value) => {
    setPropertyType(value);
  }

  const handleChange = (value) => {
    console.log(value);
  }

  return (
    <div className="container">
      <Breadcrumbs parent="Properties" child="Submit" />
      <div className="listing-property">
        <div className="options-container">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Invest Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={invest_type}
              onChange={handleChangeInvestType}
            >
              <MenuItem value="residential">Residential</MenuItem>
              <MenuItem value="commercial">Commercial</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={property_type}
              onChange={handleChangePropertyType}
            >
              <MenuItem value="residential">Residential</MenuItem>
              <MenuItem value="commercial">Commercial</MenuItem>
            </Select>
          </FormControl>
          <TextField className={classes.formControl} id="price" label="Price" />
          <TextField className={classes.formControl} id="rate" label="Rent Rate(Optional)" />
        </div>
        <div className="address-container">
          <TextField className="address" id="city-basic" label="Property Address" />
        </div>
        <div className="property-area">
          <TextField className="element" label="Beds" />
          <TextField className="element" label="Bath" />
          <PropertyElement className="element" label="Storm Shelter" avatar="S" />
          <TextField className="element" label="Year built" />
          <TextField className="element" label="Roof Type" />
          <PropertyElement className="element" label="Carport" avatar="C" />
          <PropertyElement className="element" label="Yard" avatar="Y" />
          <PropertyElement className="element" label="Fence" avatar="F" />
          <PropertyElement className="element" label="Brick" avatar="B" />
          <PropertyElement className="element" label="Siding" avatar="S" />
          <PropertyElement className="element" label="Store" avatar="S" />
          <TextField className="element" label="HOA Fees" />
        </div>
        <div className="property-description">
          <SunEditor
            lang="en"
            setOptions={{
              height: 280,
            }}
          />
        </div>
        <div className="upload-area">
          <div className="photo-container">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag & drop some photos here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </div>
          <div className="video-container">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag & drop some videos here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </div>
        </div>
        <div className="contact-information">
          <TextField label="Full Name" />
          <TextField label="Email" />
          <TextField label="Phone Number" />
        </div>
        <div className="submit-button">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SubmitProperty;
