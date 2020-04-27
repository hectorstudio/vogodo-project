import React from "react";

import imgSrc from "../../assets/img/realestate.jpg";
import "./FeaturedItem.style.scss";

const FeaturedItem = () => {
  return (
    <div class="featured-item">
      <div class="img">
        <img src={imgSrc} alt="Many Variations" />
      </div>
    </div>
  );
};

export default FeaturedItem;
