import React, { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { makeStyles } from "@material-ui/core/styles";
import History from "../constants/History";
import {
  TextField, TextareaAutosize,
} from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import PropertiesService from "../services/PropertiesService";
import PropertyElement from "../components/PropertyElement";
import "./SubmitProperty.style.scss";
import GoogleMapReact from 'google-map-react';
import { Place } from '@material-ui/icons';
import Routes from "../constants/Routes";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "50%",
  },
}));

const CurrentPosition = ({ text }) => <div><Place color="primary"/></div>;

const SubmitProperty = ({match}) => {
  const { id } = match.params;
  const classes = useStyles();
  const [propertyInfo, setPropertyInfo] = useState({ details: {} });
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  useEffect(() => {
    (async () => {
      try {
        const result = await PropertiesService.getProperty(id);
        if ( result && result.Property) {
          setPropertyInfo(result.Property);
        } else {
          console.log("Property Detail Data Load Failed");
        }
      } catch (error) {
        console.log("Property Detail Data Load Failed");
      }
    })();
  }, [id])
/**
 * Property Details Field Handlers
 * @param e 
 */
  const handleChangePrice = (e) => {
    let info = { ...propertyInfo };
    info.details.price = e.target.value;
    info.price = e.target.value;
    setPropertyInfo(info);
  };

  const handleChangeRate = (e) => {
    let info = { ...propertyInfo };
    info.details.rate = e.target.value;
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

  const handleChangeSquare = (e) => {
    let info = { ...propertyInfo };
    info.details.square = e.target.value;
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
    info.built = e.target.value;
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

  const handleEditorChange = (e) => {
    setPropertyInfo({...propertyInfo, description: e.target.value});
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
    updateProperty(info);
    History.push(Routes.find_property);
  };

  const updateProperty = async (info) => {
    if (!acceptedFiles.length && propertyInfo.resources.length < 1) {
      return;
    } else {
      await PropertiesService.updateProperty(info.id, info, acceptedFiles);
    }
  }

  return (
    <div className="container">
      <Breadcrumbs parent="Properties" child="Submit" />
      <div className="list-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: apiKey,
          }}
          defaultCenter={
            { lat: 59.955413, lng: 30.337844 }
          }
          center={
            propertyInfo && propertyInfo.latitude ? 
            { lat: propertyInfo.latitude, lng: propertyInfo.longitude } : 
            { lat: 59.955413, lng: 30.337844 }
          }
          defaultZoom={15}
        >
          <CurrentPosition
            lat={ propertyInfo && propertyInfo.latitude ? propertyInfo.latitude : 59.955413 }
            lng={ propertyInfo && propertyInfo.longitude ? propertyInfo.longitude : 30.337844 }
            text="Current Position"
          />
        </GoogleMapReact>
      </div>
      <div className="listing-property">
        <div className="options-container">
          <div className="option-title">Listing Information</div>
          <TextField
            className={classes.formControl}
            id="rate"
            label="$ Monthly Rent"
            onChange={handleChangeRate}
            defaultValue={propertyInfo.details.rate ? propertyInfo.details.rate : "100"} 
            value={propertyInfo.details.rate}
          />
          <TextField
            className={classes.formControl}
            id="price"
            label="$ Price"
            onChange={handleChangePrice}
            defaultValue={propertyInfo.details.price ? propertyInfo.details.price : "100000"} 
            value={propertyInfo.details.price}
            helperText="Amount generally should not exceed 150% of the base rent"
          />
        </div>
        <div className="property-area">
          <TextField
            className="element"
            label="Beds"
            onChange={handleChangeBeds}
            defaultValue={propertyInfo.details.beds ? propertyInfo.details.beds : "1"} 
            value={propertyInfo.details.beds}
          />
          <TextField
            className="element"
            label="Bath"
            onChange={handleChangeBath}
            defaultValue={propertyInfo.details.bath ? propertyInfo.details.bath : "1"} 
            value={propertyInfo.details.bath}
          />
          <TextField
            className="element"
            label="Square Feet"
            onChange={handleChangeSquare}
            defaultValue={propertyInfo.details.square ? propertyInfo.details.square : "100"} 
            value={propertyInfo.details.square}
          />
        </div>
        <div className="property-area-details">
          <p><b>- Beds/baths</b> in the property. Your room for rent would be one of those</p>
          <p><b>- Square footage</b> of room being rented</p>
        </div>
        <div className="property-area">
          <TextField
            className="element"
            label="Year built"
            onChange={handleChangeBuiltYear}
            defaultValue={propertyInfo.details.built_year ? propertyInfo.details.built_year : "2000"} 
            value={propertyInfo.details.built_year}
          />
          <TextField
            className="element"
            label="Roof Type"
            onChange={handleChangeRoofType}
            defaultValue={propertyInfo.details.roof_type ? propertyInfo.details.roof_type : "Metal Roofing"} 
            value={propertyInfo.details.roof_type}
          />
          <TextField
            className="element"
            label="HOA Fees"
            onChange={handleChangeFees}
            defaultValue={propertyInfo.details.fees ? propertyInfo.details.fees : "11"} 
            value={propertyInfo.details.fees}
          />
        </div>
        <div className="option-title">Other Information</div>
        <div className="options-area">
          <PropertyElement
            className="element"
            label="Storm Shelter"
            avatar="S"
            defaultValue={propertyInfo.details.stormshelter || false}
            setValue={setStormShelter}
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
        </div>
        <div className="option-title">Detailed description</div>
        <div className="property-description">
          <TextareaAutosize
            rowsMin={7}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            defaultValue={propertyInfo.description ? propertyInfo.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            value={propertyInfo.description}
            onChange={handleEditorChange}
          />
        </div>
        <div className="option-title">Property media</div>
        <div className="upload-area">
          <div className="photo-container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Drag & drop some resources(photos, videos) here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>
                {
                  propertyInfo.resources && JSON.parse(propertyInfo.resources).map((file) => (
                    <li style={{wordBreak: "break-all"}} key={file}>
                      {file}
                    </li>
                  ))
                }
              </ul>
              <ul>
                {files}
              </ul>
            </aside>
          </div>
        </div>
        <div className="option-title">Your contact information</div>
        <div className="contact-information">
          <TextField
            label="Full Name"
            onChange={handleChangeAlterName}
            defaultValue={propertyInfo.alter_name ? propertyInfo.alter_name : "100"} 
            value={propertyInfo.alter_name}
          />
          <TextField
            label="Email"
            onChange={handleChangeAlterEmail}
            defaultValue={propertyInfo.alter_email ? propertyInfo.alter_email : "100"} 
            value={propertyInfo.alter_email}
          />
          <TextField
            label="Phone Number"
            onChange={handleChangeAlterPhone}
            defaultValue={propertyInfo.alter_phone ? propertyInfo.alter_phone : "100"} 
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
