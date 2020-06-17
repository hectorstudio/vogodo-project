import React, {useMemo, useState} from "react";
import BreadCrumbs from "../components/Breadcrumbs";
import ImageGallery from "react-image-gallery";
import Constructed from "../assets/svg/constructed.svg";
import Roof from "../assets/svg/roof.svg";
import Feet from "../assets/svg/feet.svg";
import Garage from "../assets/svg/garage.svg";
import Rent from "../assets/svg/rent.svg";
import Lot from "../assets/svg/lot.svg";
import "react-image-gallery/styles/css/image-gallery.css";
import "./PropertyDetail.style.scss";
import map from "../assets/img/map1.png";
import avatar from "../assets/img/avatar.jpg";
import "video-react/dist/video-react.css";
import { Player } from 'video-react';
import Poster from "../assets/img/poster.png";
import PropertiesService from "../services/PropertiesService";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const PropertyDetail = ({match}) => {
  const { id } = match.params;
  const [property, setProperty] = useState({});

  useMemo(() => {
    (async () => {
      try {
        const result = await PropertiesService.getProperty(id);
        if ( result && result.Property) {
          setProperty(result.Property);
        } else {
          console.log("Property Detail Data Load Failed");
        }
      } catch (error) {
        console.log("Property Detail Data Load Failed");
      }
    })();
  }, [id]);

  return (
    <div className="container">
      <BreadCrumbs parent="Properties" child={`Detail: ${property.title || "Temp Property"}`} />
      <div className="detail-content">
        <div className="property-detail-container">
          <div className="body-title">
            <span className="title">View</span>
            <span className="address">
              {property.address || "Oregon Warrenton 97146 97146 80 Nw Birch Ave"}
            </span>
          </div>
          <div className="content-body">
            <ImageGallery items={images} />
            <div className="description">
              <div className="desc-info">
                <div className="street-address">
                  <span>80 NW Birch Ave</span>
                  <span>$25,900</span>
                </div>
                <div className="city-and-state">
                  Warrenton, OR 97146, United States
                </div>
                <div className="real-estate-info">
                  <span>
                    <img src={Constructed} alt="Year built" /> 5 years old
                  </span>
                  <span>
                    <img src={Feet} alt="Feets" /> 1600 feets
                  </span>
                  <span>
                    <img src={Garage} alt="Garages" /> 1 Garage
                  </span>
                  <span>
                    <img src={Roof} alt="roof age" /> 2 months
                  </span>
                  <span>
                    <img src={Lot} alt="Lot Size" /> 0.05
                  </span>
                </div>
                <div className="real-estate-info">
                  <span>
                    <img src={Rent} alt="For Rent" />
                    Rate: $15
                  </span>
                </div>
                <div className="real-estate-desc">
                  <p className="italic">
                    Note: This property is not currently for sale or for rent on
                    Zillow. The description below may be from a previous
                    listing.
                  </p>
                  <p>
                    Wonderful Warrenton 3 bedroom home with an oversized
                    garage/shop space & located on a nice corner lot.Enjoy a
                    large main bedroom on the main floor along with 2 full
                    bathrooms, laundry room, living room. The kitchen has oak
                    cabinetry, the dining area has lots of natural light and an
                    adorable built in hutch! Enjoy a fully fenced backyard with
                    a large deck for those summer BBQ's. This could be where you
                    call home! Call today for a showing.
                  </p>
                </div>
                <div className="property-map">
                  <img src={map} alt="property map" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            {/*<div className="map" style={{ height: "200px", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AKLjsdjdjkjlkasdfhjkdaeueujndjAJJKLAJNA",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              ></GoogleMapReact>
            </div>*/}
            <div className="manager-info">
              <div className="avatar">
                <img src={avatar} alt="manager avatar" />
              </div>
              <div className="detail">
                <p>Scott Jacobs</p>
                <a href="tel:703-594-3800">703-594-3800</a>
              </div>
            </div>
            <div className="contact-body">
              <h3>Contact Manager</h3>
              <input className="contact-input" placeholder="Full Name" />
              <input className="contact-input info" placeholder="Email" />
              <input
                className="contact-input info"
                placeholder="Phone Number"
              />
              <textarea className="contact-input info" placeholder="Description..." rows="10"></textarea>
              <button className="contact-input btn">Submit</button>
            </div>
            <div className="video">
              <Player
                playsInline
                poster={Poster}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                width="100%"
              />
            </div>
          </div>        
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
