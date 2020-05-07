import React from "react";
import History from "../../constants/History";
import "./SignUpForm.style.scss";

const SignUpForm = ({setShowDrawer, openLogInForm}) => {
  const goToSignUpPage = () => {
    setShowDrawer(false);
    History.push("/signup");
  }
  return (
    <div className="signup-form">
      <div className="login-link">
        <p>Already have an account <br/> please <span onClick={openLogInForm}>Log In</span></p>
      </div>
      <div className="divider"></div>
      <div className="social-login">
        <button className="facebook" onClick={goToSignUpPage}>
          <i className="fa fa-facebook"></i> Sign Up With Facebook
        </button>
        <button className="google" onClick={goToSignUpPage}>
          <i className="fa fa-google"></i> Sign Up With Google
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
