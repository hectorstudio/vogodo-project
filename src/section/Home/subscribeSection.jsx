import React from "react";

import "../../containers/Home.style.scss";

const SubscribeSection = () => {
  return (
    <section className="section section-subscribe">
      <div className="containter">
        <div className="content-section">
          <h2>Find the Best Real Estate Deals In the U.S</h2>
          <p>don't wait Invest in Real Estate today!</p>
          <button className={`btn btn-semi-rounded btn-register uppercase`}>
            Register Today!
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
