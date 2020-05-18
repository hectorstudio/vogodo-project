import React from "react";
import "./ProfileListingItem.style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import imgSrc from "../../assets/img/realestate.jpg";
import imgSrc1 from "../../assets/img/realestate1.jpg";
import imgSrc2 from "../../assets/img/realestate2.jpg";

const ProfileListingItem = () => {
  return (
    <div className="mylisting-item-container">
      <div className="item-carousel">
        <Carousel showThumbs={false} >
          <div>
            <img src={imgSrc} alt="carousel"/>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={imgSrc1} alt="carousel"/>
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={imgSrc2} alt="carousel"/>
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
      <div className="item-details">
        <div className="address">
          1099 14th St NW - Franklin Court
        </div>
        <div className="property-detail">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="sale-info">
          <div className="title">For sale</div>
          <div className="info">6 Spaces | $23000 - 35100</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileListingItem;
