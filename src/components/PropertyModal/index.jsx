import React, { useState, useEffect } from "react";
import "./PropertyModal.style.scss";
import ImageGallery from "react-image-gallery";
import YouTube from "react-youtube";
import GoogleMapReact from "google-map-react";
import Constructed from "../../assets/svg/constructed.svg";
import Roof from "../../assets/svg/roof.svg";
import Feet from "../../assets/svg/feet.svg";
import Garage from "../../assets/svg/garage.svg";
import Rent from "../../assets/svg/rent.svg";
import Lot from "../../assets/svg/lot.svg";
import "react-image-gallery/styles/css/image-gallery.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteIconBorder from "@material-ui/icons/FavoriteBorder";
import MailOut from "@material-ui/icons/MailOutline";
import Unsubscribe from "@material-ui/icons/Unsubscribe";

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

const PropertyModal = ({ setOpenModal, openFlag, favorite = true, share = false }) => {
  const [save, setSave] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  useEffect(() => {
    setSave(favorite);
    setSubscribe(share);
  }, [favorite, share]);

  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  const opts = {
    height: "160",
    width: "250",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSave = () => {
    setSave(save ? false : true);
  };

  const handleSubscribe = () => {
    setSubscribe(subscribe ? false : true);
  };
  return (
    <div
      className="property-modal-background"
      style={!openFlag ? { display: "none" } : { display: "block" }}
    >
      <div className="property-modal">
        <div className="property-modal-header">
          <div className="title">
            <div className="button">Home Details</div>
            <div className="button" onClick={handleSave}>
              {save ? <FavoriteIcon /> : <FavoriteIconBorder />}
              Save
            </div>
            <div className="button" onClick={handleSubscribe}>
              {subscribe ? <Unsubscribe /> : <MailOut />} Share
            </div>
          </div>
          <div className="close">
            <div className="button" onClick={handleClose}>
              <i className="fa fa-close"></i>Close
            </div>
          </div>
        </div>
        <div className="property-modal-body">
          <div className="body-title">
            <span className="title">View</span>
            <span className="address">
              Oregon Warrenton 97146 97146 80 Nw Birch Ave
            </span>
          </div>
          <div className="modal-body">
            <ImageGallery items={images} />
            <div className="description">
              <div className="desc-info">
                <div className="street-address">80 NW Birch Ave</div>
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
                    Rate: $15 Price: $24000
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
              </div>
              <div className="contact-info">
                <div className="map" style={{ height: "200px", width: "100%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AKLjsdjdjkjlkasdfhjkdaeueujndjAJJKLAJNA",
                    }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  ></GoogleMapReact>
                </div>
                <div className="video">
                  <YouTube
                    videoId="2g811Eo7K8U"
                    opts={opts}
                    onReady={_onReady}
                  />
                </div>

                <div className="contact-body">
                  <h3>Contact Info</h3>
                  <input className="contact-input" placeholder="Full Name" />
                  <input className="contact-input info" placeholder="Email" />
                  <input
                    className="contact-input info"
                    placeholder="Phone Number"
                  />
                  <button className="contact-input btn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="property-modal-footer"></div>
      </div>
    </div>
  );
};

export default PropertyModal;
