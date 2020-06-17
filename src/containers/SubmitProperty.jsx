import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { makeStyles } from "@material-ui/core/styles";
import History from "../constants/History";
import Autocomplete from 'react-google-autocomplete';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import SunEditor from "suneditor-react";
import { useDropzone } from "react-dropzone";
import PropertiesService from "../services/PropertiesService";
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
  const [propertyInfo, setPropertyInfo] = useState({ details: {} });
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const userId = localStorage.getItem("userId")

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const handleChangeInvestType = (e) => {
    let info = { ...propertyInfo };
    info.details.invest_type = e.target.value;
    setPropertyInfo(info);
  };

  const handleChangePropertyType = (e) => {
    let info = { ...propertyInfo };
    info.details.property_type = e.target.value;
    setPropertyInfo(info);
  };

  const handleChangePrice = (e) => {
    let info = { ...propertyInfo };
    info.details.price = e.target.value;
    setPropertyInfo(info);
  };

  const handleChangeRate = (e) => {
    let info = { ...propertyInfo };
    info.details.rate = e.target.value;
    setPropertyInfo(info);
  };

  const handleChangeTitle = (e) => {
    let info = { ...propertyInfo };
    info.title = e.target.value;
    setPropertyInfo(info);
  };

  const handleChangeAddress = (value) => {
    let info = { ...propertyInfo };
    info.address = value.formatted_address;
    setPropertyInfo(info);
  };

  const handleChangeBeds = (e) => {
    let info = { ...propertyInfo };
    info.details.beds = e.target.value;
    setPropertyInfo(info);
  };

  const handleChangeBath = (e) => {
    let info = { ...propertyInfo };
    info.details.bath = e.target.value;
    setPropertyInfo(info);
  };

  const setStormShelter = (value) => {
    let info = { ...propertyInfo };
    info.details.stormshelter = value;
    setPropertyInfo(info);
  };

  const handleChangeBuiltYear = (e) => {
    let info = { ...propertyInfo };
    info.details.built_year = e.target.value;
    setPropertyInfo(info);
  };

  const handleChangeRoofType = (e) => {
    let info = { ...propertyInfo };
    info.details.roof_type = e.target.value;
    setPropertyInfo(info);
  };

  const setCarport = (value) => {
    let info = { ...propertyInfo };
    info.details.carport = value;
    setPropertyInfo(info);
  };

  const setYard = (value) => {
    let info = { ...propertyInfo };
    info.details.yard = value;
    setPropertyInfo(info);
  };

  const setFence = (value) => {
    let info = { ...propertyInfo };
    info.details.fence = value;
    setPropertyInfo(info);
  };

  const setBrick = (value) => {
    let info = { ...propertyInfo };
    info.details.brick = value;
    setPropertyInfo(info);
  };

  const setSiding = (value) => {
    let info = { ...propertyInfo };
    info.details.siding = value;
    setPropertyInfo(info);
  };

  const setStore = (value) => {
    let info = { ...propertyInfo };
    info.details.store = value;
    setPropertyInfo(info);
  };

  const handleChangeFees = (e) => {
    let info = { ...propertyInfo };
    info.details.fees = e.target.value;
    setPropertyInfo(info);
  };

  const handleEditorChange = (value) => {
    let info = { ...propertyInfo };
    info.description = JSON.stringify(value);
    setPropertyInfo(info);
  };

  const handleChangeAlterName = (e) => {
    let info = { ...propertyInfo };
    info.alter_name = e.target.value;
    setPropertyInfo(info);
  };

  const handleChangeAlterEmail = (e) => {
    let info = { ...propertyInfo };
    info.alter_email = e.target.value;
    setPropertyInfo(info);
  };

  const handleChangeAlterPhone = (e) => {
    let info = { ...propertyInfo };
    info.alter_phone = e.target.value;
    setPropertyInfo(info);
  };

  const onSubmit = () => {
    let info = { ...propertyInfo };
    info.owner_id = userId;
    addNewProperty(info);
    setPropertyInfo({ details: {} });
    History.push("/properties");
  };

  const addNewProperty = async (info) => {    
    await PropertiesService.addNewProperty(info);
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
              value={propertyInfo.details.invest_type}
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
              value={propertyInfo.details.property_type}
              onChange={handleChangePropertyType}
            >
              <MenuItem value="residential">Residential</MenuItem>
              <MenuItem value="commercial">Commercial</MenuItem>
            </Select>
          </FormControl>
          <TextField
            className={classes.formControl}
            id="price"
            label="Price"
            onChange={handleChangePrice}
            value={propertyInfo.details.price}
          />
          <TextField
            className={classes.formControl}
            id="rate"
            label="Rent Rate(Optional)"
            onChange={handleChangeRate}
            value={propertyInfo.details.rate}
          />
        </div>
        <div className="address-container">
          <Autocomplete
            className="address"
            onPlaceSelected={handleChangeAddress}
            types={['(regions)']}
            componentRestrictions={{country: "us"}}
          />
        </div>
        <div className="title-container">
          <TextField
            className="title"
            id="city-basic"
            label="Property Title"
            onChange={handleChangeTitle}
            value={propertyInfo.title}
          />
        </div>
        <div className="property-area">
          <TextField
            className="element"
            label="Beds"
            onChange={handleChangeBeds}
            value={propertyInfo.details.beds}
          />
          <TextField
            className="element"
            label="Bath"
            onChange={handleChangeBath}
            value={propertyInfo.details.bath}
          />
          <PropertyElement
            className="element"
            label="Storm Shelter"
            avatar="S"
            defaultValue={propertyInfo.details.stormshelter || false}
            setValue={setStormShelter}
          />
          <TextField
            className="element"
            label="Year built"
            onChange={handleChangeBuiltYear}
            value={propertyInfo.details.built_year}
          />
          <TextField
            className="element"
            label="Roof Type"
            onChange={handleChangeRoofType}
            value={propertyInfo.details.roof_type}
          />
          <PropertyElement
            className="element"
            label="Carport"
            avatar="C"
            defaultValue={propertyInfo.details.carport || false}
            setValue={setCarport}
          />
          <PropertyElement
            className="element"
            label="Yard"
            avatar="Y"
            defaultValue={propertyInfo.details.yard || false}
            setValue={setYard}
          />
          <PropertyElement
            className="element"
            label="Fence"
            avatar="F"
            defaultValue={propertyInfo.details.fence || false}
            setValue={setFence}
          />
          <PropertyElement
            className="element"
            label="Brick"
            avatar="B"
            defaultValue={propertyInfo.details.brick || false}
            setValue={setBrick}
          />
          <PropertyElement
            className="element"
            label="Siding"
            avatar="S"
            defaultValue={propertyInfo.details.siding || false}
            setValue={setSiding}
          />
          <PropertyElement
            className="element"
            label="Store"
            avatar="S"
            defaultValue={propertyInfo.details.store || false}
            setValue={setStore}
          />
          <TextField
            className="element"
            label="HOA Fees"
            onChange={handleChangeFees}
            value={propertyInfo.details.fees}
          />
        </div>
        <div className="property-description">
          <SunEditor
            lang="en"
            setOptions={{
              height: 280,
            }}
            onChange={handleEditorChange}
          />
        </div>
        <div className="upload-area">
          <div className="photo-container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Drag & drop some photos here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </div>
          <div className="video-container">
            <div {...getRootProps({ className: "dropzone" })}>
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
          <TextField
            label="Full Name"
            onChange={handleChangeAlterName}
            value={propertyInfo.alter_name}
          />
          <TextField
            label="Email"
            onChange={handleChangeAlterEmail}
            value={propertyInfo.alter_email}
          />
          <TextField
            label="Phone Number"
            onChange={handleChangeAlterPhone}
            value={propertyInfo.alter_phone}
          />
        </div>
        <div className="submit-button">
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SubmitProperty;
