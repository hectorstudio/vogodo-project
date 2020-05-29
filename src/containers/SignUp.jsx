import React from "react";
import PlanSection from "../section/Home/planSection";
import Breadcrumbs from "../components/Breadcrumbs";
import "./SignUp.style.scss";

const SignUpForm = () => {

  return (
    <div className="container">
      <Breadcrumbs parent="Home" child="SignUp"/>
      {/*<h2 className="section-title color-dark">User Type</h2>
      <div className="account-type">
        <div className="account manager">
          <label>Property Manager</label>
          <button
            className={type === "manager" ? "border-blur" : ""}
            onClick={() => clickAccountType("manager")}
          >
            <img src={Manager} alt="property manager" />
          </button>
        </div>
        <div className="account contractor">
          <label>Contractor</label>
          <button
            className={type === "contractor" ? "border-blur" : ""}
            onClick={() => clickAccountType("contractor")}
          >
            <img src={Contractor} alt="property contractor" />
          </button>
        </div>
      </div>*/}
      <PlanSection></PlanSection>
    </div>
  );
};

export default SignUpForm;
