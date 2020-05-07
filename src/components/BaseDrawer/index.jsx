import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Close from "@material-ui/icons/Close";
import LoginForm from "../../components/LoginForm";
import "./Basedrawer.style.scss";

const BaseDrawer = ({
  isShowDrawer,
  setShowDrawer,
}) => {

  const closeDrawer = () => {
    setShowDrawer(false);
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
        <LoginForm setShowDrawer={setShowDrawer}></LoginForm>
      </div>
    </Drawer>
  );
};

export default BaseDrawer;
