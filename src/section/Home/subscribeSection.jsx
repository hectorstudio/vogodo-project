import React from "react";
import { Link } from "react-router-dom";

import "../../containers/Home.style.scss";

const SubscribeSection = () => {
  return (
    <section className="section section-subscribe">
      <div className="containter">
        <div className="content-section">
          <h2>Find the Best Real Estate Deals In the U.S</h2>
          <p>don't wait Invest in Real Estate today!</p>
          <Link to ="/signup">
            <button className={`btn btn-primary btn-semi-rounded btn-register uppercase`} style={{ cursor: "pointer" }}>
              Register Today!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
