import React from "react";
import { useDispatch } from "react-redux";
import { setOpenSignUp } from "../../redux/actions";

import "../../containers/Home.style.scss";

const SubscribeSection = () => {
  const dispatch = useDispatch();
  const loggedin = localStorage.getItem('loggedin');
  
  const openSignUpDrawer = () => {
    if (!loggedin) {
      dispatch(setOpenSignUp(true));
    }
  }

  return (
    <section className="section section-subscribe">
      <div className="container">
        <div className="content-section">
          <h2>Find the Best Real Estate Deals In the U.S</h2>
          <p>don't wait Invest in Real Estate today!</p>
          <div>
            <button className={`btn btn-primary btn-semi-rounded btn-register uppercase`} style={{ cursor: "pointer" }} onClick={openSignUpDrawer}>
              Register Today!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
