import React from "react";
import "./ListingItem.style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const ListingItem = ({data, onDelete}) => {
  const handleClickDelete = () => {
    onDelete(data.id);
  }
  return (
    <div className="listing-item-container">
      <div className="item-carousel">
        <Carousel showThumbs={false} >
          {
            data.resources.map((element, index) => (
              <div key={`carousel-${index}`}>
                <img src={element} alt={`carousel-${index}`}/>
              </div>
            ))
          }
        </Carousel>
      </div>
      <div className="item-details">
        <div className="address">
          {data.address || "1099 14th St NW - Franklin Court"}
        </div>
        <div className="property-detail">
          {data.title || "East End Submarket - Office"}
        </div>
        <div className="sale-info">
          <div className="title">For sale</div>
          <div className="info">rate: ${data.details.rate || 11} | ${data.details.price || 23000}</div>
        </div>
      </div>
      <div className="item-review-details">
        {/* <div className="title">90 Day Views</div>
        <div className="info">2,215</div>
        <span>Want to improve?</span> */}
      </div>
      <div className="item-action">
        <Link style={{width: "100%"}} to={`/properties/submit/${data.id}`}><button className="button edit-button">Edit Listing</button></Link>
        <button className="button delete-button" onClick={handleClickDelete}>Delete Listing</button>
      </div>
    </div>
  );
};

export default ListingItem;
