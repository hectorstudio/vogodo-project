import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import "../../containers/Home.style.scss";
import UserService from "../../services/UserService";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../../components/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PlanSection = () => {
  const userId = localStorage.getItem('userId');
  const [user, setUser] = useState({});
  const globalState = useSelector(state => state);
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
  useEffect(() => {
    (async () => {
      try {
        const result = await UserService.getUser(userId || globalState.userId);
        if (result && result.user) {
          const { user } = result;
          setUser(user);
        } else {
          console.log("Loading User Data Error: ");
        }
      } catch (error) {
        console.log("Loading USer Data Error: ");
      }
    })();
  }, [userId, globalState.userId]);
  
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
              <div className="product">
                <img
                  src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
                  alt="laptop"
                  style={{ width: "100%", height: "auto" }}
                />
                <div>
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
