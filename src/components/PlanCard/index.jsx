import React from "react";

import "./PlanCard.style.scss";

const PlanCard = ({ selected, planObject }) => {
  return (
    <div class={`price-ticket ${selected}`}>
      <div class={`ticket-header ${planObject.style}`}>
        <h4> {planObject.title} </h4>
        <p class="starting-from"> Per a Month </p>
        <p class="price">
          $<span class="price-cost">{planObject.price}</span>
        </p>
        <p class="price-detail">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor
        </p>
      </div>

      <div class="ticket-body">
        <h5> Features </h5>
        <div class="details">
          <p> 10 Pages Website Design </p>
          <p> Joomla & Wordpress Ready </p>
          <p> 3 Alternative Designs </p>
          <p> Free 1 Year Domain </p>
          <p> 10 GB Free Hosting </p>
          <p> Unlimited Revision </p>
          <p> 3 Months Support </p>
        </div>
        <button class={`btn btn-semi-rounded ${planObject.style} uppercase`}>
          Purchase
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
