import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";
import banner1 from "../../assets/img/banner1.jpg";
import "../../containers/Home.style.scss";
import History from "../../constants/History";
import Autocomplete from 'react-google-autocomplete';

const options = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Detached House" },
];

const BannerSection = () => {
  const [values, setValues] = useState([]);

  const goToSubmitPage = () => {
    const login = localStorage.getItem("loggedin");
    if(login)
      History.push("/properties/submit");
    else
      History.push("/signup");
  };

  return (
    <section className="section section-top">
      <div className="slider-container">
        <img src={banner1} alt="banner 1" />
      </div>
      <div className="banner-content">
        <div className="banner">
          <h1>Find The Available Properties</h1>
        </div>
        <div className="property-actions">
          <Link to="/properties">
            <button className="btn-property btn-available">
              Available Properties
            </button>
          </Link>
          <button className="btn-property btn-list" onClick={goToSubmitPage} style={{ cursor:"pointer" }}>List a Property</button>
        </div>
        <div className="search-form">
          <form>
            <div className="form-control select">
              <Select
                options={options}
                className="property_select"
                value={values}
                placeholder="Select the property type..."
                onChange={(values) => setValues(values)}
              />
            </div>
            <div className="form-control input">
              <Autocomplete
                style={{width: '95%'}}
                onPlaceSelected={(place) => {
                  console.log(place);
                }}
                types={['(regions)']}
                componentRestrictions={{country: "us"}}
              />
            </div>
            <div className="form-control button">
              <button name="submit">Search</button>
            </div>
          </form>
        </div>
        <Link to ="/signup">
          <button className={`btn btn-primary btn-semi-rounded btn-register uppercase`} style={{ cursor: "pointer" }}>
            Register Today!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BannerSection;
