import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVisibleType } from "../redux/actions";
import PropertyItem from "../components/PropertyItem";
import { makeStyles } from "@material-ui/core/styles";
import FilterItem from "../components/FilterItem";
import PropertiesService from "../services/PropertiesService";
import "./Property.style.scss";
import Breadcrumbs from "../components/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import GoogleMapReact from 'google-map-react';

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

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Property = () => {
  const classes = useStyles();
  // Get State using Redux hooks api
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);  
  const [filterOption, setFilterOption] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [geoInfo, setGeoInfo] = useState(null);

  useEffect(() => {
    if (!geoInfo) {
      const userGeoInfo = JSON.parse(localStorage.getItem("geoInfo"));
      setGeoInfo(userGeoInfo);
    }
  });

  useEffect(() => {
    if (states.length < 1) {
      (async () => {
        try {
          const result = await PropertiesService.getStates();
          if (result) {
            const { states } = result;
            setStates(states);
          } else {
            console.log("Loading States Data Error: ");
          }
        } catch (error) {
          console.log("Loading States Data Error: ");
        }
      })();
    }
  }, [states]);
  
  useEffect(() => {
    if (filterOption.state) {
      (async () => {
        try {
          const result = await PropertiesService.getCitiesById(filterOption.state);
          if (result && result.cities) {
            const { cities } = result;
            setCities(cities);
          } else {
            console.log("Loading Cities Data Error: ");
          }
        } catch (error) {
          console.log("Loading Cities Data Error: ");
        }
      })();
    }
  }, [filterOption.state])

  useEffect(() => {
    if (data.length < 1 && Object.keys(filterOption).length < 1) {
      (async () => {
        try {
          const result = await PropertiesService.getProperties();
          if (result && result.Properties) {
            const { Properties } = result;
            setData(Properties);
          } else {
            console.log("Loading Properties Data Error: ");
          }
        } catch (error) {
          console.log("Loading Properties Data Error: ");
        }
      })();
    }
  }, [data, filterOption]);

  useEffect(() => {
    if (globalState.visible_type === "") {
      dispatch(setVisibleType("fixed-height"));
    }
  }, [globalState, dispatch]);

  const handleChangeSearch = (e) => {
    let options = {...filterOption};
    options.search = e.target.value;
    setFilterOption(options);
  };

  const handleChangeMin = (e) => {
    let options = {...filterOption};
    options.min = e.target.value;
    setFilterOption(options);
  };

  const handleChangeMax = (e) => {
    let options = {...filterOption};
    options.max = e.target.value;
    setFilterOption(options);
  };

  const handleChangeCity = (e) => {
    setGeoInfo({latitude: parseFloat(e[0].lat), longitude: parseFloat(e[0].lng)})
    let options = {...filterOption};
    options.city = e[0].value;
    setFilterOption(options);
  };

  const handleChangeState = (e) => {
    let options = {...filterOption};
    options.state = e[0].value;
    setFilterOption(options);
  };

  const handleChangeYear = (e) => {
    let options = {...filterOption};
    options.built = e.target.value;
    setFilterOption(options);
  };

  const handleDelete = (item) => {
    let options = {...filterOption};
    options[item] = '';
    setFilterOption(options);
  } 

  return (
    <Fragment>
      <div className={`container property-container ${Object.keys(filterOption).length < 1 ? "" : "has-filter"}`}>
        <Breadcrumbs parent="Home" child="Find properties" />
        <div className="filter-container">
          <div className="filter-items">
            <div className="search-item">
              <input
                type="text"
                className="search-input"
                onBlur={handleChangeSearch}
                placeholder="Search Properties"
              />
            </div>
            <input
              type="text"
              className="price-input"
              onBlur={handleChangeMin}
              placeholder="min: $"
            />
            <input
              type="text"
              className="price-input"
              onBlur={handleChangeMax}
              placeholder="max: $"
            />
            <FilterItem
              data={cities}
              value=""
              prefix="City: "
              onChange={handleChangeCity}
            />
            <FilterItem
              data={states}
              value=""
              prefix="State: "
              onChange={handleChangeState}
            />
            <input
              type="text"
              className="price-input"
              onBlur={handleChangeYear}
              placeholder="Year: $"
            />
          </div>
          <div className={`filter-values ${classes.root}`}>
            {Object.keys(filterOption).length > 0 ? (
              <Fragment>
                <span>Filter:</span>
                {Object.keys(filterOption).map((item, index) => (
                   filterOption[item] !== '' ? (
                    <Chip
                      key={`filter-item-${index}`}
                      label={`${item}: ${filterOption[item]}`}
                      onDelete={() => handleDelete(item)}
                    /> ) : "" 
                ))}
              </Fragment>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="items-container">
          <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyB6ABnTCVsOqCaU_vwH6uPN3pLqaRQhyU0",
              }}
              defaultCenter={
                geoInfo && geoInfo.latitude ? 
                { lat: geoInfo.latitude, lng: geoInfo.longitude } : 
                { lat: 59.955413, lng: 30.337844 }
              }
              defaultZoom={15}
            >
              <AnyReactComponent
                lat={ geoInfo && geoInfo.latitude ? geoInfo.latitude : 59.955413 }
                lng={ geoInfo && geoInfo.longitude ? geoInfo.longitude : 30.337844 }
                text="Current Position"
              />
            </GoogleMapReact>
          </div>
          <div className={`content-body ${Object.keys(filterOption).length < 1 ? "" : "has-filter"}`}>
            {data.length > 0 ? 
              data.map((element, index) => (
                <PropertyItem
                  key={`element-${index}`}
                  data={element}
                />
              )) : (
                <div className="no-properties"> No properties </div>
              )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Property;
