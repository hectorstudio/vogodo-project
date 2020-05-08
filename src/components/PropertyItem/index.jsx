import React from "react";
import { Slide } from "react-slideshow-image";
import imgSrc from "../../assets/img/realestate.jpg";
import imgSrc1 from "../../assets/img/realestate1.jpg";
import imgSrc2 from "../../assets/img/realestate2.jpg";
import { Link } from "react-router-dom";
import EachSlide from "./EachSlide";
import "./PropertyItem.style.scss";

const slideImages = {
  address: "Temp Street 1 Oklabahma",
  propertyTitle: "Temp Property",
  propertyImages: [
    {
      imageUrl: imgSrc,
      imageTitle: "Temp Property 1",
    },
    {
      imageUrl: imgSrc1,
      imageTitle: "Temp Property 2",
    },
    {
      imageUrl: imgSrc2,
      imageTitle: "Temp Property 3",
    },
  ],
  propertyPrice: "2100.89",
};

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const PropertyItem = ({data, setOpenModal }) => {
  return (
    <div className="property-item">
      <div className="slide-container">
        <Slide {...properties}>
          <EachSlide setOpenModal={setOpenModal} url={slideImages.propertyImages[0].imageUrl} propertyPrice={slideImages.propertyPrice} />
          <EachSlide setOpenModal={setOpenModal} url={slideImages.propertyImages[1].imageUrl} propertyPrice={slideImages.propertyPrice} />
          <EachSlide setOpenModal={setOpenModal} url={slideImages.propertyImages[2].imageUrl} propertyPrice={slideImages.propertyPrice} />
        </Slide>
      </div>
      <div className="item-description">
        <h3>{data.title || slideImages.propertyTitle}</h3>
        <p>{`${data.street}, ${data.city} ${data.state}` || slideImages.address}</p>
        <div className="pricing">
          <div className="ind-plan">
            <span className="plan-title">1 Bedroom</span>
            <span className="plan-price">${data.price || 1768}</span>
            <span className="plan-detail">765sqft</span>
          </div>
          <div className="ind-plan">
            <span className="plan-title">2 Bedroom</span>
            <span className="plan-price">${data.price || 1768}</span>
            <span className="plan-detail">1052sqft</span>
          </div>
          <div className="ind-plan">
            <span className="plan-title">3 Bedroom</span>
            <span className="plan-price">${data.price || 1768}</span>
            <span className="plan-detail">1315sqft</span>
          </div>
        </div>
        <div className="more">
          <Link to="/">More info...</Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
