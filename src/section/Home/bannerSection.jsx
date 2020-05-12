import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";
import Slider from "nuka-carousel";
import banner1 from "../../assets/img/banner1.jpg";
import banner2 from "../../assets/img/banner2.jpg";
import banner3 from "../../assets/img/banner3.jpg";
import "../../containers/Home.style.scss";

const options = [
  { value: 1, label: "Condominiums" },
  { value: 2, label: "Detached House" },
  { value: 3, label: "Townhouse" },
  { value: 4, label: "Semi-detached House" },
  { value: 5, label: "Duplex/Triplex" },
];

const BannerSection = () => {
  const [values, setValues] = useState([]);

  return (
    <section className="section section-top">
      <div className="slider-container">
        <Slider easing="easeInOutElastic" slideWidth={1} width="100%">
          <img src={banner1} alt="banner 1" />
          <img src={banner2} alt="banner 2" />
          <img src={banner3} alt="banner 3" />
        </Slider>
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
          <Link to="/properties/submit">
            <button className="btn-property btn-list">List a Property</button>
          </Link>
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
    </section>
  );
};

export default BannerSection;
