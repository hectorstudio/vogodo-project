import React, { useState, useEffect } from "react";
import PropertyItem from "../../components/PropertyItem"

import "../../containers/Home.style.scss";
import PropertiesService from "../../services/PropertiesService";

const FeaturedSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length < 1) {
      (async () => {
        try {
          const { Properties } = await PropertiesService.getRecentProperties();
          if (Properties) {
            setData(Properties);
          }
        } catch (err) {
          console.log(err);
        }
      })();
    }
  })

  return (
    <section className="section section-featured" id="featured">
      <div className="container">
        <h2 className="section-title">Featured Deals</h2>
        <div className="content">
          <div className="featured">
            {
              data && data.map((el, index) => (
                <PropertyItem
                  key={`element-${index}`}
                  data={el}
                  className={'featured-item'}
                  featured={true}
                />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
