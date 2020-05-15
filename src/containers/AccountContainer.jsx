import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import "./AccountContainer.style.scss";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PropertyModal from "../components/PropertyModal";
import SavedProperties from "../section/Account/SavedProperties";
import MyListing from "../section/Account/MyListing";

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
  const [value, setValue] = useState(2);
  const [openModal, setOpenModal] = useState(false);
  const accountType = localStorage.getItem("account-type");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container account-container">
      <Breadcrumbs parent="Home" child="Accuont Page" />
      <div className={`account-area ${classes.root}`}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Account Settings" {...a11yProps(1)} />
          {accountType === "contractor" ? (
            <Tab label="Saved Properties" {...a11yProps(2)} />
          ) : (
            <Tab label="My Listing" {...a11yProps(2)} />
          )}
        </Tabs>
        <TabPanel value={value} index={0}>
          This page is preparing...
        </TabPanel>
        <TabPanel value={value} index={1}>
          This page is preparing...
        </TabPanel>
        <TabPanel value={value} index={2}>
          {accountType === "contractor" ? (
            <SavedProperties setOpenModal={setOpenModal} />
          ) : (
            <MyListing setOpenModal={setOpenModal} />
          )}
        </TabPanel>
      </div>
      <PropertyModal setOpenModal={setOpenModal} openFlag={openModal} />
    </div>
  );
};

export default AccountContainer;
