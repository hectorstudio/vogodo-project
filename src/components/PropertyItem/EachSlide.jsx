import React from "react";
import "./PropertyItem.style.scss";

const EachSlide = ({url, propertyPrice}) => {
  return (
    <div className="each-slide">
      <div
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <span>${propertyPrice}</span>
      </div>
    </div>
  );
};

export default EachSlide;
