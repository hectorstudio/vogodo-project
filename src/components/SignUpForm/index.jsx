import React, { useState } from "react";
import { useDispatch } from "react-redux";
import History from "../../constants/History";
import "./SignUpForm.style.scss";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import UserService from '../../services/UserService';
import { setAuthenticate, setUserId } from "../../redux/actions";
import Routes from "../../constants/Routes";

const SignUpForm = ({setShowDrawer, openLogInForm}) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [disable, setDisable] = useState(true);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    checkStatus();
  }

  const checkStatus = () => {
    if ( firstName !== '' && lastName !== '' && email !== '' && password !== '' && password === confirm ) {
      setDisable(false);
    }
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    checkStatus();
  }

  const handleChangeConfirm = (e) => {
    setConfirm(e.target.value);
    checkStatus();
  }

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
    checkStatus();
  }

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
    checkStatus();
  }

  const handleClickSubmit = async () => {
    try {
      const result = await UserService.insertUser({firstName, lastName, emailAddress: email, password});
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
    } catch(err) {
      console.log(err);
    }
  }

  const responseFacebook = (response) => {
    console.log(response);
    if (response.data) {
      setShowDrawer(false);
      History.push(Routes.signup);
    }
  }

  const responseGoogle = (response) => {
    console.log(response);
    if (response.data) {
      setShowDrawer(false);
      History.push(Routes.signup);
    }
  }
  return (
    <div className="signup-form">
      <div className="form-group">
        <div className="form-control">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChangeFirstName}
            onBlur={handleChangeFirstName}
            value={firstName}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChangeLastName}
            onBlur={handleChangeLastName}
            value={lastName}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="emailAddress"
            placeholder="User Email"
            onChange={handleChangeEmail}
            onBlur={handleChangeEmail}
            value={email}
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChangePassword}
            onConBlurhange={handleChangePassword}
            value={password}
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            onChange={handleChangeConfirm}
            onBlur={handleChangeConfirm}
            value={confirm}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-control">
          <button type="button" className={ disable ? "disable" : "" } onClick={handleClickSubmit} disabled={disable}>Sign Up</button>
        </div>
      </div>
      <div className="login-link">
        <p>Already have an account <br/> please <span onClick={openLogInForm}>Log In</span></p>
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

export default SignUpForm;
