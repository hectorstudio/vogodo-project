import React from "react";
import PlanCard from "../../components/PlanCard";
import "../../containers/Home.style.scss";

const bronzePlan = {
  title: "Bronze",
  price: "69.99",
  style: "bg-price-bronze",
};

const goldPlan = {
  title: "Gold",
  price: "89.99",
  style: "bg-price-gold",
};

const platiumPlan = {
  title: "Platium",
  price: "109.99",
  style: "bg-price-platium",
};

const PlanSection = () => {
  return (
    <section class="section section-promotion-price">
      <div class="container">
        <h2 class="title color-dark">Membership Plans</h2>
        <div class="promotion-prices">
          <PlanCard selected="" planObject={bronzePlan} />
          <PlanCard selected="selected" planObject={goldPlan} />
          <PlanCard selected="" planObject={platiumPlan} />
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
