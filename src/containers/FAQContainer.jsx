import React from "react";
import "./AdditionalContainer.style.scss";
import Breadcrumbs from "../components/Breadcrumbs";

const FAQContainer = () => {
  return (
    <div className="additional-container">
      <Breadcrumbs parent="Home" child="FAQs" />
      <div className="additional-content">
        <h1>FAQs</h1>
        <p>
          <b>1. What is Selldealsnow.com? </b><br/>
          We provide exclusive access to off market deals throughout the United States. <br/>
          <b>2. Can I list unlimited properties?</b><br/>
          Yes, you can list as many as you want with your monthly subscription.
          <b>3. If I like a property, how can I contact the seller/investor/broker?</b><br/>
          Their contact info will be on the listing. <br/>
          <b>4. Can I cancel my membership at anytime?</b> <br/>
          Yes, you can cancel at any time. <br/>
          <b>5. Are these deals public? </b><br/>
          No, we check on the properties to make sure they are not public and if
          they are, the member would be in violation and their account can be
          suspended. <br/>
          <b>6. Can I list deals if I am a broker/ realtor/ or investor?</b><br/>
          Yes, as long as you have an agreement with the seller that states that
          you have the right to market it.
        </p>
      </div>
    </div>
  );
};

export default FAQContainer;
