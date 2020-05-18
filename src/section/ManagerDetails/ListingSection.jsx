import React, { Fragment } from "react";
import "./ListingSection.style.scss";
import Map from "../../assets/img/profilemap.png";
import ProfileListingItem from "../../components/ProfileListingItem";

const ListingSection = () => {
  return (
    <Fragment>
      <div className="map">
        <img src={Map} alt="map" />
      </div>
      <div className="property-list">
        <ProfileListingItem />
        <ProfileListingItem />
        <ProfileListingItem />
      </div>
    </Fragment>
  );
};

export default ListingSection;
