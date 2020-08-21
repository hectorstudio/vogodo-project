import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { setAuthenticate, setUserId } from "../../redux/actions";
import "./LoginForm.style.scss";
import UserService from "../../services/UserService";
import History from "../../constants/History";
import Routes from "../../constants/Routes";

const LoginForm = ({ setShowDrawer, openSignUpForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  
  const responseFacebook = async (response) => {
    if (response && response.userID) {
      const result = await UserService.signWithSocial(response, 'facebook');
      if (result && result.user && result.token) {
        const geoInfo = {latitude: result.user.latitude, longitude: result.user.longitude};
        localStorage.setItem('token', result.token.accessToken);
        localStorage.setItem('loggedin', true)
        localStorage.setItem('userId', result.user.id);
        localStorage.setItem('geoInfo', JSON.stringify(geoInfo));
        setShowDrawer(false);
        dispatch(setAuthenticate(true));
        dispatch(setUserId(result.user.id));
        // History.push(Routes.signup);
        History.push(Routes.home);
      }
    }
  }

  const responseGoogle = (response) => {
    console.log(response);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit();
  };

  const onSubmit = async () => {
    const result = await UserService.login(email, password);
    if (result && result.user && result.token) {
      const geoInfo = {latitude: result.user.latitude, longitude: result.user.longitude};
      localStorage.setItem('token', result.token.accessToken);
      localStorage.setItem('loggedin', true)
      localStorage.setItem('userId', result.user.id);
      localStorage.setItem('geoInfo', JSON.stringify(geoInfo));
      setShowDrawer(false);
      dispatch(setAuthenticate(true));
      dispatch(setUserId(result.user.id));
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
        <FacebookLogin
          appId="594376748148190"
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile,user_friends"
          cssClass="facebook"
          icon="fa-facebook"
          callback={responseFacebook}/>
        <GoogleLogin
          clientId="1078489387813-s6iplpe35dnbu7c9pdh24j9hq75sb6om.apps.googleusercontent.com"
          render={renderProps => (
            <button className="google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
              <i className="fa fa-google"></i> Log In With Google
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
};

export default LoginForm;
