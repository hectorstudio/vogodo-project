import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { lighten, makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./SubmitProperty.style.scss";

import LocationSection from "../section/Submit/LocationSection";
import PropertySection from "../section/Submit/PropertySection";
import FileUploadSection from "../section/Submit/FileUploadSection";

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

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#3f51b5", 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#3f51b5",
  },
})(LinearProgress);

const SubmitProperty = () => {
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
      <Breadcrumbs parent="Properties" child="Submit" />
      <div className="listing-property">
        <div className="submit-container">
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
                <Tab label="Location" {...a11yProps(0)} />
                <Tab label="Property" {...a11yProps(1)} />
                <Tab label="Files" {...a11yProps(2)} />
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
                <LocationSection />
              </TabPanel>
              <TabPanel
                className="tab-panel"
                value={value}
                index={1}
                dir={theme.direction}
              >
                <PropertySection />
              </TabPanel>
              <TabPanel
                className="tab-panel"
                value={value}
                index={2}
                dir={theme.direction}
              >
                <FileUploadSection />
              </TabPanel>
            </SwipeableViews>
          </div>
          <div className="submit-button">
            <button>Submit</button>
          </div>
        </div>
        <div className="sidebar-container">
          <h2>Listing Property Completition</h2>
          <span>75%</span>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={50}
          />
          <div className="divider"></div>
          <h3>Add Details To Increase Exposure</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and</p>
        </div>
      </div>
    </div>
  );
};

export default SubmitProperty;
