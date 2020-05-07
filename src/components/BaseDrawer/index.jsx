import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Close from "@material-ui/icons/Close";
import "./Basedrawer.style.scss";

class BaseDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDrawer: false,
      drawerContent: null,
    };
  }

  openDrawer = (drawerContent) => {
    this.setState({
      isShowDrawer: true,
      drawerContent,
    });
  };

  closeDrawer = () => {
    this.setState({
      isShowDrawer: false,
      drawerContent: null,
    });
    const { customClose } = this.props;
    customClose && customClose();
  };

  render() {
    const { isShowDrawer, drawerContent } = this.state;
    return (
      <Drawer
        className="drawer-container"
        anchor={this.props.anchor}
        open={isShowDrawer}
        onClose={this.closeDrawer}
      >
        <div className="container">
          <div className="drawer-header">
            <span onClick={this.closeDrawer}>
              <Close />
            </span>
          </div>
          {drawerContent && drawerContent}
        </div>
      </Drawer>
    );
  }
}

export default BaseDrawer;
