import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Close from "@material-ui/icons/Close";
import "./Basedrawer.style.scss";

class BaseDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDrawer: false,
      drawerContent: null,
      anchor: props.anchor || "bottom",
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
    const { isShowDrawer, drawerContent, anchor } = this.state;
    return (
      <Drawer anchor={anchor} open={isShowDrawer} onClose={this.closeDrawer}>
        <div className="container">
          {drawerContent && drawerContent}
          <div className="drawer-footer">
            <Button variant="contained" onClick={this.closeDrawer} color="secondary" endIcon={<Close />}>
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForward />}
            >
              Send
            </Button>
          </div>
        </div>
      </Drawer>
    );
  }
}

export default BaseDrawer;
