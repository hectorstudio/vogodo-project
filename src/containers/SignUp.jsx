import React, { useState } from "react";
import PlanSection from "../section/Home/planSection";
import Breadcrumbs from "../components/Breadcrumbs";
import Manager from "../assets/img/manager.png";
import Contractor from "../assets/img/contractor.png";
import "./SignUp.style.scss";

const SignUpForm = () => {
  const [type, setType] = useState("");

  const clickAccountType = (accountType) => {
    setType(accountType);
  };

  return (
    <div className="container">
      <Breadcrumbs parent="Home" child="SignUp"/>
      <h2 className="section-title color-dark">User Type</h2>
      <div className="account-type">
        <div className="account manager">
          <label>Property Manager</label>
          <button
            className={type === "manager" ? "border-blur" : ""}
            onClick={() => clickAccountType("manager")}
          >
            <img src={Manager} alt="property manger" />
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
      </div>
      <PlanSection type={type}></PlanSection>
    </div>
  );
};

export default SignUpForm;
