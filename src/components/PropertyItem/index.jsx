import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import EachSlide from "./EachSlide";
import SimplePopover from "../Popover";
import { FavoriteBorder, Favorite } from "@material-ui/icons";
import "./PropertyItem.style.scss";

const slideImages = {
  address: "Temp Street 1 Oklabahma",
  propertyTitle: "Temp Property",
  propertyPrice: "2100.89",
};

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  pauseOnHover: true,
};

const PropertyItem = ({className, data = {}, featured=false, saved, onUpdate }) => {
  const loggedin = localStorage.getItem('loggedin');
  const [open, setOpen] = useState(false);
  const handleClickFavorite = () => {
    onUpdate({pid: data.id, favorite: saved ? (!saved.favorite ? 1 : 0) : 1});
  }
  return (
    <div className={`property-item`}>
      <div className="slide-container">
        <Slide {...properties}>
          {
            data.thumbnails.map((element, index) => (
              <EachSlide
                key={`slide-${index}`}
                url={element.url}
              />
            ))
          }
        </Slide>
        {
          !featured && <span className="badge">${data.details.price || 1768}</span>
        }
        {
          !featured && <span className="save" onClick={handleClickFavorite}>
            {saved && saved.favorite===1 ? <Favorite className="icon"/> :<FavoriteBorder className="icon"/>}
          </span>
        }
      </div>
      <div className={`item-description ${loggedin ? "" : "blur"} ${featured ? "featuredItem" : ""}`}>
        <div className="dec-header">
          <h3>${data.details.price || 1768}</h3>
          <span className="plan-title">
            {data.details.beds ? `${data.details.beds} Beds` : "3 bds"}{"|"}
            {data.details.bath ? `${data.details.bath} Bathroom` : "3 ba"}{"|"}
            {data.details.store ? `1 Store` : "1 St"}
          </span>
        </div>
        <p>{`${data.address}` || slideImages.address}</p>
        <div className="more">
          { loggedin ?
            <Link to={ loggedin ? `/properties/detail/${data.id}` : '/signup' }>More info...</Link>
            : 
            <div onClick={() => setOpen(true)} style={{cursor: "pointer"}}>More info...</div>
          }
        </div>
      </div>
      <SimplePopover status={open} setOpen={setOpen} description="You need to sign up to see details" type="error" />
    </div>
  );
};

export default PropertyItem;
