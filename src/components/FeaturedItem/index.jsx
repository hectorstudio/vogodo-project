import React from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import imgSrc from "../../assets/img/realestate.jpg";
import imgSrc1 from "../../assets/img/realestate1.jpg";
import imgSrc2 from "../../assets/img/realestate2.jpg";
import "./FeaturedItem.style.scss";

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
  propertyPrice: '2100.89'
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

const FeaturedItem = () => {
  return (
    <Link to="/properties" className="featured-item">
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages.propertyImages[0].imageUrl})` }}>
              <span>${slideImages.propertyPrice}</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages.propertyImages[1].imageUrl})` }}>
              <span>${slideImages.propertyPrice}</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages.propertyImages[2].imageUrl})` }}>
              <span>${slideImages.propertyPrice}</span>
            </div>
          </div>
        </Slide>
      </div>
      <div className="item-description">
        <h3>{slideImages.propertyTitle}</h3>
        <p>{slideImages.address}</p>
      </div>
    </Link>
  );
};

export default FeaturedItem;
