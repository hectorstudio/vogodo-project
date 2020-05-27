import React, { useState, useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import Close from "@material-ui/icons/Close";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
import "./Basedrawer.style.scss";

const BaseDrawer = ({ isShowDrawer, setShowDrawer, isSignUp, setSignUp }) => {
  const [drawerContent, setDrawerContent] = useState("");

  useEffect(() => {
    if (isShowDrawer === true) {
      if (isSignUp === true) {
        console.log("signup");
        setDrawerContent("signup")
      }
      else {
        console.log("login");
        setDrawerContent("login");
      }
    }
  }, [isShowDrawer, isSignUp]);

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const openSignUpForm = () => {
    setShowDrawer(true);
    setSignUp(true);
    setDrawerContent("signup");
  };

  const openLogInForm = () => {
    setShowDrawer(true);
    setSignUp(false);
    setDrawerContent("login");
  };

  return (
    <Drawer
      className="drawer-container"
      anchor="right"
      open={isShowDrawer}
      onClose={closeDrawer}
    >
      <div className={`container login`}>
        <div className="drawer-header">
          <span onClick={closeDrawer}>
            <Close />
          </span>
        </div>
        {drawerContent === "login" ? (
          <LoginForm
            setShowDrawer={setShowDrawer}
            openSignUpForm={openSignUpForm}
          ></LoginForm>
        ) : (
          <SignUpForm
            setShowDrawer={setShowDrawer}
            openLogInForm={openLogInForm}
          ></SignUpForm>
        )}
      </div>
    </Drawer>
  );
};

export default BaseDrawer;
