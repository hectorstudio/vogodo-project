import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthenticate, setUserId } from "../../redux/actions";
import History from "../../constants/History";
import "./LoginForm.style.scss";
import UserService from "../../services/UserService";

const LoginForm = ({ setShowDrawer, openSignUpForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const goToHomePage = () => {
    setShowDrawer(false);
    localStorage.setItem("login", true);
    localStorage.setItem("account-type", "manager");
    History.push("/");
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // const validateEmailAddress = (value, callback) => {
  //   if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
  //     callback("Please enter correct format email");
  //   }
  //   callback();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit();
  };

  const onSubmit = async () => {
    const result = await UserService.login(email, password);
    if (result && result.user && result.token) {
      localStorage.setItem('token', result.token.accessToken);
      localStorage.setItem('loggedin', true)
      localStorage.setItem('userId', result.user.id);
      setShowDrawer(false);
      dispatch(setAuthenticate({type: true}));
      dispatch(setUserId({type: result.user.id}));
    }
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-control">
            <input
              type="text"
              name="emailAddress"
              placeholder="User Email"
              onChange={handleChangeEmail}
              value={email}
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChangePassword}
              value={password}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-control">
            <button type="submit">Log In</button>
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
