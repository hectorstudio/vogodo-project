import React, {useState, Fragment} from "react";
import "../../containers/Home.style.scss";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutModal from '../../components/CheckOutModal';

const PlanSection = () => {
  const [openForm, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  return (
    <Fragment>
      <section className="section section-promotion-price">
        <div className="container">
          <h2 className="section-title color-dark">Membership</h2>
          <div className="promotion-prices">
            <div className="title">Join Today!</div>
            <div className='price-tickets'>
              <div className={`price-ticket`}>
                <div className={`ticket-header`}>
                  <h4> 14 Days Trial </h4>
                  <p className="price">
                    <span className="unit">$</span>
                    <span className="price-cost-big">79</span>
                    <span className="price-cost-small">.99</span>
                  </p>
                  <p className="starting-from">Per Month</p>
                </div>
                <div className="ticket-body">
                  <h5> Features </h5>
                  <div className="details">
                    <p>&#10004; Unlimited Deals </p>
                  </div>
                  <button className={`btn btn-rounded uppercase`} onClick={handleClickOpen}>
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Elements stripe={stripePromise}>
        <CheckoutModal setOpenModal={setOpen} openFlag={openForm} />
      </Elements>
    </Fragment>
  );
};

export default PlanSection;
