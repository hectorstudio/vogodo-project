import React from "react";
import History from "../../constants/History";

import "./PlanCard.style.scss";

const PlanCard = ({ selected, planObject }) => {
  const goToHomepage = () => {
    History.push("/");
  };
  return (
    <div className={`price-ticket`}>
      <div className={`ticket-header`}>
        <h4> {planObject.title} </h4>
        <p className="price">
          $<span className="price-cost">{planObject.price}</span>
          <span className="starting-from">per month</span>
        </p>
        <p className="price-detail">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor
        </p>
      </div>
      <div className="ticket-body">
        <h5> Features </h5>
        <div className="details">
          <p>&#10004; 10 Pages Website Design </p>
          <p>&#10004; Joomla & Wordpress Ready </p>
          <p>&#10004; 3 Alternative Designs </p>
          <p>&#10004; Free 1 Year Domain </p>
          <p>&#10004; 10 GB Free Hosting </p>
          <p>&#10004; Unlimited Revision </p>
          <p>&#10004; 3 Months Support </p>
        </div>
        <button onClick={goToHomepage} className={`btn btn-rounded uppercase`}>
          Purchase
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
