import React from "react";

import "../../containers/Home.style.scss";

const SubscribeSection = () => {
  return (
    <section class="section section-subscribe">
      <div class="containter">
        <div className="content-section">
          <h2>Find the Best Real Estate Deals In the U.S</h2>
          <p>don't wait Invest in Real Estate today!</p>
          <button class={`btn btn-semi-rounded btn-register uppercase`}>
            Register Today!
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
