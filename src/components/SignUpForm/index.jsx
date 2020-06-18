import React from "react";
import History from "../../constants/History";
import "./SignUpForm.style.scss";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const SignUpForm = ({setShowDrawer, openLogInForm}) => {  
  const responseFacebook = (response) => {
    console.log(response);
    if (response.data) {
      setShowDrawer(false);
      History.push("/signup");
    }
  }

  const responseGoogle = (response) => {
    console.log(response);
    if (response.data) {
      setShowDrawer(false);
      History.push("/signup");
    }
  }
  return (
    <div className="signup-form">
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
