import React from 'react';
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import CardSection from './CardSection';

class CheckoutForm extends React.Component {
  handleSubmit = async event => {
    event.preventDefault();

    // handle payment request
  };

  render() {
    return (
      <div>
        <div class="product-info">
          <h3 className="product-title">Apple MacBook Pro</h3>
          <h4 className="product-price">$999</h4>
        </div>
        <form onSubmit={this.handleSubmit}>
          <CardSection />
          <button className="btn-pay">Buy Now</button>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
