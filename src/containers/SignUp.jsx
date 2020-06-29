import React from "react";
import PlanSection from "../section/Home/planSection";
import Breadcrumbs from "../components/Breadcrumbs";
import "./SignUp.style.scss";

const SignUpForm = () => {

  return (
    <div className="container">
      <Breadcrumbs parent="Home" child="SignUp"/>
      <PlanSection></PlanSection>
    </div>
  );
};

export default SignUpForm;
