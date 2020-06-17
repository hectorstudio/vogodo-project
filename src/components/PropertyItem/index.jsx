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

const PropertyItem = ({ data = {} }) => {
  return (
    <div className="property-item">
      <div className="slide-container">
        <Link to={`/properties/detail/${data.id}`}>
          <Slide {...properties}>
            <EachSlide
              url={slideImages.propertyImages[0].imageUrl}
              propertyPrice={data.details.price || 1768}
            />
            <EachSlide
              url={slideImages.propertyImages[1].imageUrl}
              propertyPrice={data.details.price || 1768}
            />
            <EachSlide
              url={slideImages.propertyImages[2].imageUrl}
              propertyPrice={data.details.price || 1768}
            />
          </Slide>
        </Link>
      </div>
      <div className="item-description">
        <h3>{data.title || slideImages.propertyTitle}</h3>
        <p>{`${data.address}` || slideImages.address}</p>
        <div className="pricing">
          <div className="ind-plan">
            <span className="plan-title">
              {data.details.beds ? `${data.details.beds} Beds` : ""}{" "}
              {data.details.bath ? `${data.details.bath} Bathroom` : ""}{" "}
              {data.details.store ? `1 Store` : ""}
            </span>
            <div className="plan-price">${data.details.price || 1768} <span className="plan-detail">rate: ${data.details.rate || 11}</span></div>
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
