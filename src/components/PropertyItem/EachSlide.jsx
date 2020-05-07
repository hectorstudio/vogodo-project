import React from "react";
import "./PropertyItem.style.scss";

const EachSlide = ({setOpenModal, url, propertyPrice}) => {
  const handleClick = () => {
    console.log("setOpenModal");
    setOpenModal(true);
  }
  return (
    <div className="each-slide" onClick={handleClick}>
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
