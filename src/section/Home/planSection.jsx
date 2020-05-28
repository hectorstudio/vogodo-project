import React from "react";
import "../../containers/Home.style.scss";

const PlanSection = ({type=""}) => {
  if(type !== "") {
    localStorage.setItem('login', true);
    localStorage.setItem('account-type', type);
  }
  
  const goToHomepage = () => {

  }
  
  return (
    <section className="section section-promotion-price">
      <div className="container">
        <h2 className="section-title color-dark">Membership</h2>
        <div className="promotion-prices">
          <div className="title">Join Today!</div>
          <div className={`price-ticket`}>
            <div className={`ticket-header`}>
              <h4> Only </h4>
              <p className="price">
                <span className="unit">$</span>
                <span className="price-cost-big">109</span>
                <span className="price-cost-small">.99</span>
              </p>
              <p className="starting-from">Per Month</p>
            </div>
            <div className="ticket-body">
              <h5> Features </h5>
              <div className="details">
                <p>&#10004; Unlimited Deals </p>
              </div>
              <button onClick={goToHomepage} className={`btn btn-rounded uppercase`}>
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
