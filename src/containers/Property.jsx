import React, { useState, Fragment } from "react";
import PropertyItem from "../components/PropertyItem";
import { makeStyles } from '@material-ui/core/styles';
import Select from "react-dropdown-select";
import PropertyModal from "../components/PropertyModal";
import "./Property.style.scss";
import Breadcrumbs from "../components/Breadcrumbs";
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
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
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  const [values, setValues] = useState([]);
  return (
    <Fragment>
      <div className="container property-container">
        <Breadcrumbs />
        <div className="filter-container">
          <div className="filter-items">
            <div className="search-item">
              <input type="text" className="search-input" placeholder="Search Properties" />
            </div>
            <div className="item">
              <Select
                options={min_price}
                className="property_select"
                value={values}
                placeholder="Min Price"
                onChange={(values) => setValues(values)}
              />
            </div>
            <div className="item">
              <Select
                options={max_price}
                className="property_select"
                value={values}
                placeholder="Max Price"
                onChange={(values) => setValues(values)}
              />
            </div>
            <div className="item">
              <Select
                options={cities}
                className="property_select"
                value={values}
                placeholder="City"
                onChange={(values) => setValues(values)}
              />
            </div>
            <div className="item">
              <Select
                options={states}
                className="property_select"
                value={values}
                placeholder="State"
                onChange={(values) => setValues(values)}
              />
            </div>
            <div className="item">
              <Select
                options={options}
                className="property_select"
                value={values}
                placeholder="Type"
                onChange={(values) => setValues(values)}
              />
            </div>
            <div className="item">
              <Select
                options={ages}
                className="property_select"
                value={values}
                placeholder="Age"
                onChange={(values) => setValues(values)}
              />
            </div>
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
          <PropertyItem />
          <PropertyItem />
          <PropertyItem />
          <PropertyItem />
          <PropertyItem />
          <PropertyItem />
          <PropertyItem />
          <PropertyItem />
        </div>
      </div>
      <PropertyModal openModal={true}/>
    </Fragment>
  );
};

export default Property;
