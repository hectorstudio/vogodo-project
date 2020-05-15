import React from "react";
import "./ManagerDetail.style.scss";
import Breadcrumbs from "../components/Breadcrumbs"
import { Link } from "react-router-dom";
import { KeyboardArrowLeft } from "@material-ui/icons";
import Avatar from "../assets/img/avatar.jpg";
import Map from "../assets/img/profilemap.png";
import ProfileListingItem from "../components/ProfileListingItem";

const ManagerDetail = () => {
  return (
    <div className="container">
      <Breadcrumbs parent="Find a Property Manager" child="Detail" />
      <div className="manager-container">
        <div className="navigator">
          <Link to="/managers/listing"> <KeyboardArrowLeft /> Back To Directory </Link>
        </div>
        <div className="manager-content">
          <div className="content-header">
            <div className="name">Michael Elbilia</div>
            <div className="title">Real Estate Sales Associate</div>
          </div>
          <div className="content-body">
            <div className="personal-desc">
              <img src={Avatar} alt="avatar" />
              <div className="license">License #SL3199986</div>
              <div className="address">Miami, FL</div>
              <div className="office-number">
                office 305-305-6091
              </div>
              <div className="mobile-number">
                office 305-305-6091
              </div>
              <button className="primary" type="button">Send a Message</button>
            </div>
            <div className="full-desc">
              <div className="map">
                <img src={Map} alt="map" />
              </div>
              <div className="property-list">
                <ProfileListingItem />
                <ProfileListingItem />
                <ProfileListingItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDetail;
