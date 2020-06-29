import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import Autocomplete from 'react-google-autocomplete';
import "./PropertyModal.style.scss";
import PropertiesService from "../../services/PropertiesService";
import History from "../../constants/History";

const PropertyModal = ({ setOpenModal, openFlag }) => {
  const [propertyInfo, setPropertyInfo] = useState({ details: {} });
  const userId = localStorage.getItem('userId');

  const handleClose = () => {
    setOpenModal(false);
  }

  const handleChangeInvestType = (e) => {
    let info = { ...propertyInfo };
    info.details.invest_type = e.target.value;
    setPropertyInfo(info);
  };
  const handleChangePropertyType = (e) => {
    let info = { ...propertyInfo };
    info.details.property_type = e.target.value;
    info.type = e.target.value;
    setPropertyInfo(info);
  };
  const handleChangeAddress = (e) => {
    let info = { ...propertyInfo };
    info.address = e.formatted_address;
    info.latitude = e.geometry.location.lat();
    info.longitude = e.geometry.location.lng();
    setPropertyInfo(info);
  };
  const onSubmit = async () => {
    let info = { ...propertyInfo };
    info.owner_id = userId;
    const { result } = await PropertiesService.addNewProperty(info);
    History.push(`/properties/submit/${result.insertId}`);
  }

  return (
    <div
      className="property-modal-background"
      style={!openFlag ? { display: "none" } : { display: "block" }}
    >
      <div className="property-modal">
        <div className="property-modal-header">
          <div className="title">
            <div className="button">Add Property</div>
          </div>
          <div className="close">
            <div className="button" onClick={handleClose}>
              <i className="fa fa-close"></i>
            </div>
          </div>
        </div>
        <div className="property-modal-body">
          <div className="modal-title">
            Please provide your property's info.
          </div>
          <div className="address-container">
            <Autocomplete
              className="address"
              onPlaceSelected={handleChangeAddress}
              types={['address']}
              componentRestrictions={{country: "us"}}
            />
          </div>
          <FormControl className="options-container">
            <InputLabel id="demo-simple-select-label">Invest Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={propertyInfo.details.invest_type || "residential"}
              onChange={handleChangeInvestType}
            >
              <MenuItem value="residential">Residential</MenuItem>
              <MenuItem value="commercial">Commercial</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="options-container">
            <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={propertyInfo.details.property_type || "sell"}
              onChange={handleChangePropertyType}
            >
              <MenuItem value="rent">Rent</MenuItem>
              <MenuItem value="sell">Sell</MenuItem>
            </Select>
          </FormControl>
          <div className="submit-button">
            <button onClick={onSubmit}>Create my listing</button>
          </div>
        </div>
        <div className="property-modal-footer"></div>
      </div>
    </div>
  );
};

export default PropertyModal;
