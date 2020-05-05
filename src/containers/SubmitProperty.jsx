import React, { useState } from "react";
import Select from "react-dropdown-select";
import Breadcrumbs from "../components/Breadcrumbs";
import Checkbox from "@material-ui/core/Checkbox";
import "./SubmitProperty.style.scss";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import ImageGallery from 'react-image-gallery';
import YouTube from 'react-youtube';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const countries = [
  { value: 1, label: "United States" },
  { value: 2, label: "Canada" },
  { value: 3, label: "Sweden" },
  { value: 4, label: "Netherlands" },
  { value: 5, label: "United Kingdom" },
];

const cities = [
  { value: "San francisco", label: "San francisco" },
  { value: "New York", label: "New York" },
  { value: "Boston", label: "Boston" },
  { value: "Los Angeles", label: "Los Angeles" },
  { value: "Chicago", label: "Chicago" },
];

const states = [
  { value: "New York", label: "New York" },
  { value: "California", label: "California" },
  { value: "Chicago", label: "Chicago" },
];

const ages = [
  { value: "2000", label: "2000" },
  { value: "2001", label: "2001" },
  { value: "2002", label: "2002" },
];

const roof_ages = [
  { value: "5 years", label: "5 years" },
  { value: "10 years", label: "10 years" },
  { value: "15 years", label: "15 years" },
];
const SubmitProperty = () => {
  const [values, setValues] = useState("");
  const opts = {
    height: "160",
    width: "250",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <div className="container">
      <Breadcrumbs />
      <div className="submit-container">
        <div className="desc-body">
          <input
            type="text"
            className="address-input"
            placeholder="Property Address"
          />
          <div className="content-items">
            <div className="item">
              <label>City:</label>
              <Select
                options={cities}
                className="property_select"
                value={values}
                placeholder="City"
                onChange={(values) => setValues(values)}
              />
            </div>
            <div className="item">
              <label>State:</label>
              <Select
                options={states}
                className="property_select"
                value={values}
                placeholder="State"
                onChange={(values) => setValues(values)}
              />
            </div>
            <div className="item">
              <label>Zip Code:</label>
              <input className="property_input" placeholder="Zipcode" />
            </div>
            <div className="item">
              <label>Country:</label>
              <Select
                options={countries}
                className="property_select"
                value={values}
                placeholder="Country"
                onChange={(values) => setValues(values)}
              />
            </div>
            <div className="item">
              <label>Year built:</label>
              <Select
                options={ages}
                className="property_select"
                value={values}
                placeholder="Year built"
                onChange={(values) => setValues(values)}
              />
            </div>
            <div className="item">
              <label>Square Feet:</label>
              <input className="property_input" placeholder="Square Feet" />
            </div>
            <div className="item">
              <label>Garage:</label>
              <input className="property_input" placeholder="Garage" />
            </div>
            <div className="item">
              <label>Lot Size:</label>
              <input className="property_input" placeholder="Lot Size" />
            </div>
            <div className="item">
              <label>Roof Age:</label>
              <Select
                options={roof_ages}
                className="property_select"
                value={values}
                placeholder="Roof Age"
                onChange={(values) => setValues(values)}
              />
            </div>
          </div>
          <div className="rent-items">
            <div className="item">
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />{" "}
              Vacant or Occupied
            </div>
            <div className="item">
              <input
                className="property_input"
                placeholder="If Rented, How much?"
              />
            </div>
            <div className="item">
              <label>Rent Rate:</label>
              <input className="property_input" placeholder="Rent Rate" />
            </div>
            <div className="item">
              <label>Price:</label>
              <input className="property_input" placeholder="Price" />
            </div>
          </div>
          <div className="description">
            <SunEditor
              setOptions={{
                height: 200,
              }}
            />
          </div>
        </div>
        <div className="sidebar-container">
          <div className="media-section">
            <div className="section-title">
              <h3>Up to 20 Images</h3>
              <span> + </span>
            </div>
            <div className="section-body">
              <ImageGallery items={images} />
            </div>
          </div>
          <div className="media-section">
            <div className="section-title">
              <h3>Upload a video</h3>
              <span> + </span>
            </div>
            <div className="section-body">
              <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
            </div>
          </div>
          <div className="contact-info">
            <h3>Contact Info</h3>
            <input className="contact-input" placeholder="Full Name" />
            <input className="contact-input info" placeholder="Email" />
            <input className="contact-input info" placeholder="Phone Number" />
            <button className="contact-input btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitProperty;
