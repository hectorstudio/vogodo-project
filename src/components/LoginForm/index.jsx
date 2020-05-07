import React from "react";
import History from "../../constants/History";
import "./LoginForm.style.scss";

const LoginForm = ({ setShowDrawer, openSignUpForm }) => {
  const goToHomePage = () => {
    setShowDrawer(false);
    localStorage.setItem("login", true);
    localStorage.setItem("account-type", "manager");
    History.push("/");
  };
  return (
    <div className="login-form">
      <form>
        <div className="form-group">
          <div className="form-control">
            <input type="text" name="user_email" placeholder="User Email" />
          </div>
          <div className="form-control">
            <input type="password" name="user_pass" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-control">
            <button type="submit" onClick={goToHomePage}>Log In</button>
          </div>
        </div>
      </form>
      <div className="signup-link">
        <p>
          If the account is doesn't exist, <br /> please{" "}
          <span onClick={openSignUpForm}>Create an account</span>
        </p>
      </div>
      <div className="divider"></div>
      <div className="social-login">
        <button className="facebook" onClick={goToHomePage}>
          <i className="fa fa-facebook"></i> Log In With Facebook
        </button>
        <button className="google" onClick={goToHomePage}>
          <i className="fa fa-google"></i> Log In With Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
