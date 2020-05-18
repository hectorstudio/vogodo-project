import React, { Fragment } from "react";
import "./AboutMeSection.style.scss";

const AboutMeSection = () => {
  return (
    <Fragment>
      <div className="personal-website">http://vmlrealtor.webs.com</div>
      <div className="section-item">
        <div className="label">Title:</div>
        <div className="item-content">Broker Associate/Realto</div>
      </div>
      <div className="section-item">
        <div className="label">Languages Spoken:</div>
        <div className="item-content">English, Spanish</div>
      </div>
      <div className="section-item">
        <div className="label">Specialties:</div>
        <div className="item-content">Investment Sales Broker, Landlord Rep, Landlord Rep (Residential), Tenant Rep, Tenant Rep (Full Service), Tenant Rep (Residential) </div>
      </div>
      <div className="section-item">
        <div className="label">Markets:</div>
        <div className="item-content">Chicago</div>
      </div>
      <div className="section-item">
        <div className="label">Property Types:</div>
        <div className="item-content">Retail, Multi-Family</div>
      </div>
      <div className="section-item">
        <div className="label">Education:</div>
        <div className="item-content">http://vmlrealto.webs.com</div>
      </div>
      <div className="section-item">
        <div className="label">Organizations/Associations:</div>
        <div className="item-content">NAR - National Association of Realtors</div>
      </div>
    </Fragment>
  );
};

export default AboutMeSection;
