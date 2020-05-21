import React, { useState } from "react";
import "./ManagerDetail.style.scss";
import Breadcrumbs from "../components/Breadcrumbs"
import { Link } from "react-router-dom";
import { KeyboardArrowLeft } from "@material-ui/icons";
import Avatar from "../assets/img/avatar.jpg";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ListingSection from "../section/ManagerDetails/ListingSection";
import AboutMeSection from "../section/ManagerDetails/AboutMeSection";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    minHeight: 610
  },
  margin: {
    margin: theme.spacing(2),
  },
}));

const ManagerDetail = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="container">
      <Breadcrumbs parent="Find a Property Manager" child="Detail" />
      <div className="manager-container">
        <div className="navigator">
          <Link to="/managers/listing"> <KeyboardArrowLeft /> Back To Directory </Link>
        </div>
        <div className="manager-content">
          <div className="content-header">
            <div className="name">Michael Elbilia</div>
            <div className="title">Real Estate Sales Associate</div>
          </div>
          <div className="content-body">
            <div className="personal-desc">
              <img src={Avatar} alt="avatar" />
              <div className="license">License #SL3199986</div>
              <div className="address">Miami, FL</div>
              <div className="office-number">
                office 305-305-6091
              </div>
              <div className="mobile-number">
                mobile 305-305-6091
              </div>
              <button className="primary" type="button">Send a Message</button>
            </div>
            <div className="full-desc">              
              <div className={classes.root}>
                <AppBar className="tab-header" position="static" color="default">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    className="tabs-list"
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab label="LISTING" {...a11yProps(0)} />
                    <Tab label="ABOUT ME" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel
                    className="tab-panel"
                    value={value}
                    index={0}
                    dir={theme.direction}
                  >
                    <ListingSection />
                  </TabPanel>
                  <TabPanel
                    className="tab-panel"
                    value={value}
                    index={1}
                    dir={theme.direction}
                  >
                    <AboutMeSection />
                  </TabPanel>
                </SwipeableViews>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDetail;
