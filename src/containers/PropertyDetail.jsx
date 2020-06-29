import React, {useEffect, useState} from "react";
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
import avatar from "../assets/img/avatar.jpg";
import "video-react/dist/video-react.css";
import { Player } from 'video-react';
import Poster from "../assets/img/poster.png";
import PropertiesService from "../services/PropertiesService";
import GoogleMapReact from 'google-map-react';
import { Place } from '@material-ui/icons';

const CurrentPosition = () => <div><Place fontSize="large" color="primary"/></div>;

const PropertyDetail = ({match}) => {
  const { id } = match.params;
  const [property, setProperty] = useState({details:{}, latitude: 59.955413, longitude: 30.337844 });
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await PropertiesService.getProperty(id);
        if ( result && result.Property) {
          setProperty(result.Property);
          const resources = JSON.parse(result.Property.resources);
          const thumbnails = JSON.parse(result.Property.thumbnails);
          const resourceImages = [];
          console.log(resources);
          resources.forEach((el, index) => {
            resourceImages.push({original: el, thumbnail: thumbnails.filter(el => el.order === index)[0].url});
          })
          setImages(resourceImages);
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
                  <span>{property.address || "Property Title"}</span>
                  <span>${property.details.price || 1768}</span>
                </div>
                <div className="city-and-state">
                  {property.address || "Warrenton, OR 97146, United States"}
                </div>
                <div className="real-estate-info">
                  <span>
                    <img src={Constructed} alt="Year built" /> Built at {property.details.built_year || 1900}
                  </span>
                  <span>
                    <img src={Feet} alt="Feets" /> {property.details.square || 0} feets
                  </span>
                  { property.details.carport ? 
                    <span>
                      <img src={Garage} alt="Garages" /> 1 Garage
                    </span>
                    : ( "" ) 
                  }
                  <span>
                    <img src={Roof} alt="roof age" /> {property.details.roof_type || "Metal Roof"}
                  </span>
                  <span>
                    <img src={Lot} alt="Lot Size" /> {property.details.fees || 100}
                  </span>
                </div>
                <div className="real-estate-info">
                  <span>
                    <img src={Rent} alt="For Rent" />
                    Rate: ${property.details.rate || 10}
                  </span>
                </div>
                <div className="real-estate-desc">
                  <p>
                    {property.description || "No Description"}
                  </p>
                </div>
                <div className="property-map">
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyB6ABnTCVsOqCaU_vwH6uPN3pLqaRQhyU0",
                    }}
                    defaultCenter={{ lat: parseFloat(property.latitude), lng: parseFloat(property.longitude) }}
                    defaultZoom={15}
                    center={{ lat: parseFloat(property.latitude), lng: parseFloat(property.longitude) }}
                  >
                    <CurrentPosition
                      lat={ parseFloat(property.latitude) }
                      lng={ parseFloat(property.longitude) }
                    />
                  </GoogleMapReact>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="manager-info">
              <div className="avatar">
                <img src={avatar} alt="manager avatar" />
              </div>
              <div className="detail">
                <p>{property.alter_name || "Scott Jacobs"}</p>
                <a href={`tel:${property.alter_phone || "703-594-3800"}`}>{property.alter_phone || "703-594-3800"}</a><br/>
                <a className="email" href={`mailto:${property.alter_email || "info@selldealsnow.com"}`}>{property.alter_email || "info@selldealsnow.com"}</a>
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
