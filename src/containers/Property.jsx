import React, { useState, Fragment, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVisibleType } from "../redux/actions";
import PropertyItem from "../components/PropertyItem";
import { makeStyles } from "@material-ui/core/styles";
import FilterItem from "../components/FilterItem";
import "./Property.style.scss";
import Breadcrumbs from "../components/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import map from "../assets/img/map.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      marginLeft: theme.spacing(0.5),
      marginTop: theme.spacing(0.5),
    },
  },
}));

const options = [
  { value: "Condominiums", label: "Condominiums" },
  { value: "Detached House", label: "Detached House" },
  { value: "Townhouse", label: "Townhouse" },
  { value: "Semi-detached House", label: "Semi-detached House" },
  { value: "Duplex/Triplex", label: "Duplex/Triplex" },
];

const min_price = [
  { value: 1000, label: "1K" },
  { value: 2000, label: "2K" },
  { value: 3000, label: "3K" },
  { value: 4000, label: "4K" },
  { value: 5000, label: "5K" },
];

const max_price = [
  { value: 2000, label: "2K" },
  { value: 3000, label: "3K" },
  { value: 4000, label: "4K" },
  { value: 5000, label: "5K" },
  { value: 6000, label: "5K" },
];

const cities = [
  { value: "San Francisco", label: "San Francisco" },
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

const MockupData = [
  {
    title: "Temporary Data",
    price: 1500,
    street: "Temporary Address",
    city: "San Francisco",
    state: "California",
    type: "Duplex/Triplex",
    age: 6,
  },
  {
    title: "Property Test Data 1",
    price: 2500,
    street: "Temporary Address",
    city: "San Francisco",
    state: "California",
    type: "Semi-detached House",
    age: 4,
  },
  {
    title: "Property Test Data 2",
    price: 1700,
    street: "Temporary Address",
    city: "San Francisco",
    state: "California",
    type: "Townhouse",
    age: 11,
  },
  {
    title: "Condowminium Data",
    price: 2000,
    street: "Temporary Address",
    city: "Los Angeles",
    state: "California",
    type: "Condominiums",
    age: 7,
  },
  {
    title: "New York Detached House",
    price: 1500,
    street: "Temporary Address",
    city: "New York",
    state: "New York",
    type: "Detached House",
    age: 16,
  },
  {
    title: "Example Data",
    price: 3500,
    street: "Temporary Address",
    city: "New York",
    state: "New York",
    type: "Townhouse",
    age: 19,
  },
  {
    title: "Temporary Data 12",
    price: 4500,
    street: "Temporary Address",
    city: "New York",
    state: "New York",
    type: "Semi-detached House",
    age: 13,
  },
  {
    title: "Chicago example property",
    price: 2500,
    street: "Temporary Address",
    city: "Chicago",
    state: "Chicago",
    type: "Condominiums",
    age: 8,
  },
];

const Property = () => {
  const classes = useStyles();
  // Get State using Redux hooks api
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();

  const [values, setValues] = useState([]);
  const [data, setData] = useState([]);  // ToDo: Should remove after finish filteredData using useMemo
  const [filterOption, setFilterOption] = useState({
    search: '',
    min: '',
    max: '',
    city: '',
    state: '',
    type: '',
    age: '',
  });

  useEffect(() => {
    if (data.length < 1) setData(MockupData);
  }, []);

  useEffect(() => {
    if (globalState.visible_type.length < 1) {
      dispatch(setVisibleType({ type: "fixed-height" }));
    }
  }, [globalState]);

  const filterMockdata = (option) => {
    // ToDo: get filtered data using option
    return [];
  }

  const filteredData = useMemo(() => {
    return filterMockdata(filterOption);
  }, [filterOption]);

  const handleDelete = (index) => {
    let data = [...values];
    data.splice(index, 1);
    setValues(data);
    filterData(data);
  };

  const filterData = (filterValues) => {
    let tempData = [...MockupData];
    if (filterValues.length > 0) {
      filterValues.map((item) => {
        if (item.includes("Search By: ")) {
          const arr = item.split(": ");
          tempData = tempData.filter((element) =>
            element.title.toLowerCase().includes(arr[1].toLowerCase())
          );
        }
        if (item.includes("min: ")) {
          const arr = item.split("$");
          tempData = tempData.filter(
            (element) => element.price > Number.parseInt(arr[1])
          );
        }
        if (item.includes("max: ")) {
          const arr = item.split("$");
          tempData = tempData.filter(
            (element) => element.price < Number.parseInt(arr[1])
          );
        }
        if (item.includes("City: ")) {
          const arr = item.split("City: ");
          tempData = tempData.filter((element) => element.city === arr[1]);
        }
        if (item.includes("State: ")) {
          const arr = item.split("State: ");
          tempData = tempData.filter((element) => element.state === arr[1]);
        }
        if (item.includes("Over ")) {
          const arr = item.split(" ");
          tempData = tempData.filter(
            (element) => element.age > Number.parseInt(arr[1])
          );
        }
        return true;
      });
    }
    setData(tempData);
  };

  const setFilterValues = (prefix, value, multiple) => {
    let data = [...values];
    const parentIndex = data.findIndex((item) => item.includes(prefix));
    if (parentIndex >= 0 && multiple === false)
      data[parentIndex] = `${prefix}${value[0].value}`;
    else data.push(`${prefix}${value[0].value}`);
    setValues(data);
    filterData(data);
  };

  const handleChagneSearch = (event) => {
    let data = [...values];
    const parentIndex = data.findIndex((item) => item.includes("Search By: "));
    if (parentIndex >= 0)
      data[parentIndex] = `Search By: ${event.target.value}`;
    else data.push(`Search By: ${event.target.value}`);
    setValues(data);
    filterData(data);
  };

  return (
    <Fragment>
      <div className={`container property-container ${values.length < 1 ? "" : "has-filter"}`}>
        <Breadcrumbs parent="Home" child="Find properties" />
        <div className="filter-container">
          <div className="filter-items">
            <div className="search-item">
              <input
                type="text"
                className="search-input"
                onChange={handleChagneSearch}
                placeholder="Search Properties"
              />
            </div>
            <FilterItem
              data={min_price}
              value=""
              prefix="min: $"
              setFilterValues={setFilterValues}
            />
            <FilterItem
              data={max_price}
              value=""
              prefix="max: $"
              setFilterValues={setFilterValues}
            />
            <FilterItem
              data={cities}
              value=""
              prefix="City: "
              setFilterValues={setFilterValues}
            />
            <FilterItem
              data={states}
              value=""
              prefix="State: "
              setFilterValues={setFilterValues}
            />
            <FilterItem
              data={options}
              multiple="true"
              value=""
              prefix="Type: "
              setFilterValues={setFilterValues}
            />
            <FilterItem
              data={ages}
              value=""
              prefix="Over "
              setFilterValues={setFilterValues}
            />
          </div>
          <div className={`filter-values ${classes.root}`}>
            {values.length > 0 ? (
              <Fragment>
                <span>Filter:</span>
                {values.map((item, index) => (
                  <Chip
                    key={`filter-item-${index}`}
                    label={item}
                    onDelete={() => handleDelete(index)}
                  />
                ))}
              </Fragment>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="items-container">
          <div className="map">
            <img className={`${values.length < 1 ? "" : "has-filter"}`} src={map} alt="map" />
          </div>
          <div className={`content-body ${values.length < 1 ? "" : "has-filter"}`}>
            {data.map((element, index) => (
              <PropertyItem
                key={`element-${index}`}
                data={element}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Property;
