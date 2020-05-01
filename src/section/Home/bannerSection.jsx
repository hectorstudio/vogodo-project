import React, { useState } from "react";
import Select from "react-dropdown-select";
import "../../containers/Home.style.scss";

const options = [
  { 'label':1, 'value': 1 },
  { 'label':2, 'value': 2 },
  { 'label':3, 'value': 3 },
]

const BannerSection = () => {
  
  const [values, setValues] = useState([]);

  return (
    <section className="section section-top">
      <div className="container">
        <div className="content">
          <div className="banner">
            <h1>Find The Available Properties</h1>
          </div>
          <div className="property-actions">
            <button className="btn-property btn-available">
              Available Properties
            </button>
            <button className="btn-property btn-list">List a Property</button>
          </div>
          <div className="search-form">
            <form>
              <div className="form-control select">
                <Select
                  options={options}
                  className="property_select"
                  placeholder="Select the property type..."
                  onChange={(values) => setValues(values)}
                />
              </div>
              <div className="form-control input">
                <input
                  type="text"
                  name="city"
                  placeholder="Enter a name of city"
                />
              </div>
              <div className="form-control button">
                <button name="submit">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
