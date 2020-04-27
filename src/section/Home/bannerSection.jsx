import React from "react";

import "../../containers/Home.style.scss";

const BannerSection = () => {
  return (
    <section className="section section-top">
      <div className="container">
        <div className="content">
          <div className="banner">
            <h1>Find The Available Properties</h1>
          </div>
          <div className="property-actions">
            <button className="btn-property btn-available">Available Properties</button>
            <button className="btn-property btn-list">List a Property</button>
          </div>
          <div className="search-form">
            <form>
              <div className="form-control select">
                <input
                  type="text"
                  name="property_type"
                  placeholder="Enter a property type"
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
