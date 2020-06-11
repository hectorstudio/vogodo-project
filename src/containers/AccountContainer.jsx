import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import "./AccountContainer.style.scss";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import SavedProperties from "../section/Account/SavedProperties";
import MyListing from "../section/Account/MyListing";
import AccountSettings from "../section/Account/AccountSettings";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      className="tab-panel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: 200,
  },
}));

const AccountContainer = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container account-container">
      <Breadcrumbs parent="Home" child="Account Page" />
      <div className={`account-area ${classes.root}`}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Account Settings" {...a11yProps(0)} />
          <Tab label="Saved Properties" {...a11yProps(1)} />
          <Tab label="My Listing" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <AccountSettings />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SavedProperties />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MyListing />
        </TabPanel>
      </div>
    </div>
  );
};

export default AccountContainer;
