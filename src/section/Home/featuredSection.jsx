import React from "react";
import FeaturedItem from "../../components/FeaturedItem"

import "../../containers/Home.style.scss";

const FeaturedSection = () => {
  return (
    <section className="section section-featured" id="featured">
      <div className="container">
        <h2 className="section-title">Featured Deals</h2>
        <div className="content">
          <div className="featured">
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
