import React, { useState, Fragment } from "react";
import PropertyItem from "../components/PropertyItem";
import { makeStyles } from '@material-ui/core/styles';
import PropertyModal from "../components/PropertyModal";
import FilterItem from "../components/FilterItem";
import "./Property.style.scss";
import Breadcrumbs from "../components/Breadcrumbs";
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginLeft: theme.spacing(0.5),
    },
  },
}));

const options = [
  { value: 1, label: "Condominiums" },
  { value: 2, label: "Detached House" },
  { value: 3, label: "Townhouse" },
  { value: 4, label: "Semi-detached House" },
  { value: 5, label: "Duplex/Triplex" },
];

const min_price = [
  { value: "1K", label: "1K" },
  { value: "2K", label: "2K" },
  { value: "3K", label: "3K" },
  { value: "4K", label: "4K" },
  { value: "5K", label: "5K" },
];

const max_price = [
  { value: "2K", label: "2K" },
  { value: "3K", label: "3K" },
  { value: "4K", label: "4K" },
  { value: "5K", label: "5K" },
  { value: "6K", label: "6K" },
];

const cities = [
  { value: "San francisco", label: "San francisco" },
  { value: "New York", label: "New York" },
  { value: "Boston", label: "Boston" },
  { value: "Los Angeles", label: "Los Angeles" },
  { value: "Chicago", label: "Chicago" },
];

const states = [
  { value: "New York", label: "New York" },
  { value: "California", label: "California" },
  { value: "Chicago", label: "Chicago" },
];

const ages = [
  { value: "5 years", label: "5 years" },
  { value: "10 years", label: "10 years" },
  { value: "15 years", label: "15 years" },
];

const Property = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false)
  console.log(openModal);
  const [values, setValues] = useState([]);
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const setFilterValues = (prefix, value, multiple) => {
    console.log(prefix, value);
  }

  return (
    <Fragment>
      <div className="container property-container">
        <Breadcrumbs parent="Home" child="Find properties"/>
        <div className="filter-container">
          <div className="filter-items">
            <div className="search-item">
              <input type="text" className="search-input" placeholder="Search Properties" />
            </div>
            <FilterItem data={min_price} value="" prefix="min: " setFilterValues={setFilterValues} />
            <FilterItem data={max_price} value="" prefix="max: " setFilterValues={setFilterValues} />
            <FilterItem data={cities} value="" prefix="City: " setFilterValues={setFilterValues} />
            <FilterItem data={states} value="" prefix="State: " setFilterValues={setFilterValues} />
            <FilterItem data={options} multiple="true" value="" prefix="Type: " setFilterValues={setFilterValues} />
            <FilterItem data={ages} value="" prefix="Built: " setFilterValues={setFilterValues} />            
          </div>
          <div className={`filter-values ${classes.root}`}>
            Filter:
            <Chip
              label="Temparary Search String"
              onClick={handleClick}
              onDelete={handleDelete}
            />
            <Chip
              label="min: 1K"
              onClick={handleClick}
              onDelete={handleDelete}
            />
            <Chip
              label="max: 2K"
              onClick={handleClick}
              onDelete={handleDelete}
            />
            <Chip
              label="City: New York"
              onClick={handleClick}
              onDelete={handleDelete}
            />
            <Chip
              label="State: New York"
              onClick={handleClick}
              onDelete={handleDelete}
            />
            <Chip
              label="Townhouse"
              onClick={handleClick}
              onDelete={handleDelete}
            />
            <Chip
              label="5 years"
              onClick={handleClick}
              onDelete={handleDelete}
            />
          </div>
        </div>
        <div className="items-container">
          <PropertyItem setOpenModal={setOpenModal}/>
          <PropertyItem setOpenModal={setOpenModal}/>
          <PropertyItem setOpenModal={setOpenModal}/>
          <PropertyItem setOpenModal={setOpenModal}/>
          <PropertyItem setOpenModal={setOpenModal}/>
          <PropertyItem setOpenModal={setOpenModal}/>
          <PropertyItem setOpenModal={setOpenModal}/>
          <PropertyItem setOpenModal={setOpenModal}/>
        </div>
      </div>
      <PropertyModal setOpenModal={setOpenModal} openFlag={openModal}/>
    </Fragment>
  );
};

export default Property;
