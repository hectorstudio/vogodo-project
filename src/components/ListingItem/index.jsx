import React from "react";
import "./ListingItem.style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import imgSrc from "../../assets/img/realestate.jpg";
import imgSrc1 from "../../assets/img/realestate1.jpg";
import imgSrc2 from "../../assets/img/realestate2.jpg";

const ListingItem = () => {
  return (
    <div className="listing-item-container">
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
          East End Submarket - Office
        </div>
        <div className="sale-info">
          <div className="title">For sale</div>
          <div className="info">6 Spaces | $23000 - 35100</div>
        </div>
      </div>
      <div className="item-review-details">
        <div className="title">90 Day Views</div>
        <div className="info">2,215</div>
        <span>Want to improve?</span>
      </div>
      <div className="item-action">
        <div className="action-status">
          Added Today
        </div>
        <button className="confirm-button">Confirm up-to-date</button>
        <button className="edit-button">Edit Listing</button>
        <button className="delete-button">delete Lisiting</button>
      </div>
    </div>
  );
};

export default ListingItem;
