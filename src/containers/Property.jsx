import React, { useState, Fragment, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVisibleType } from "../redux/actions";
import PropertyItem from "../components/PropertyItem";
import { makeStyles } from "@material-ui/core/styles";
import PropertiesService from "../services/PropertiesService";
import UserService from "../services/UserService";
import "./Property.style.scss";
import Breadcrumbs from "../components/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import GoogleMapReact from 'google-map-react';
import History from "../constants/History";
import { Place } from '@material-ui/icons';
import Autocomplete from 'react-google-autocomplete';

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

const CurrentPosition = () => <div><Place fontSize="large" color="primary"/></div>;
const PropertyPosition = ({onClick}) => <div onClick={onClick} style={{ cursor: 'pointer' }}><Place color="secondary"/></div>;

const Property = () => {
  const classes = useStyles();
  // Get State using Redux hooks api
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const [data, setData] = useState([]);  
  const [filterOption, setFilterOption] = useState({});
  const [geoInfo, setGeoInfo] = useState(null);
  const [currentPos, setCurrentPos] = useState("");
  const [saved, setSaved] = useState([]);
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  useEffect(() => {
    if (currentPos === "") {
      (async () => {
        try {
          const res = await UserService.getUser(userId);
          if (res && res.user) {
            if (globalState.searchCity === '') {
              setCurrentPos(res.user.address);
              setGeoInfo({latitude: parseFloat(res.user.latitude), longitude: parseFloat(res.user.longitude)});
            }
          } else {
            setCurrentPos("No Selected Current Position");
          }
        } catch (error) {
          console.log("Loading Data Error: ");
        }
        try {
          const { result } = await PropertiesService.getFavorites(userId);
          if (result) {
            setSaved(result);
          } else {
            console.log("Saved Data Loading Error");
          }
        } catch (error) {
          console.log("Loading Data Error: ");
        }
      })();
    }
    if (data.length < 1) {
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
  }, [userId]);

  useEffect(() => {
    let option = globalState.filterType === 'all' ? {...filterOption, type: ''} : {...filterOption, type: globalState.filterType};
    if ( globalState.searchCity !== '') {
      option.search = globalState.searchCity;
      setCurrentPos(globalState.searchCity);
    }
    if ( globalState.searchCityGeoInfo.latitude ) {
      setGeoInfo(globalState.searchCityGeoInfo);
    }
    if (globalState.visible_type === "") {
      dispatch(setVisibleType("fixed-height"));
    }
    setFilterOption(option);
  }, [globalState]);

  useEffect(() => {
    (async () => {
      try {
        const result = await PropertiesService.filterProperties(filterOption);
        if (result && result.Properties) {
          const { Properties } = result;
          setData(Properties);
        } else {
          console.log("Loading filtered Properties Data Error: ");
        }
      } catch (error) {
        console.log("Loading filtered Properties Data Error: ");
      }
    })();
  }, [filterOption]);

  const MapComponent = useMemo(() => {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: apiKey,
        }}
        defaultCenter={
          { lat: 39.0409, lng: -76.9932 }
        }
        center={
          geoInfo && geoInfo.latitude ? 
          { lat: geoInfo.latitude, lng: geoInfo.longitude } : 
          { lat: 39.0409, lng: -76.9932 }
        }
        defaultZoom={9}
      >
        <CurrentPosition
          lat={ geoInfo && geoInfo.latitude ? geoInfo.latitude : 39.0409 }
          lng={ geoInfo && geoInfo.longitude ? geoInfo.longitude : -76.9932 }
          text="Current Position"
        />
        { data.length > 0 && data.map((el, index) => (
          <PropertyPosition 
            onClick={() => History.push(`/properties/detail/${el.id}`)}
            key={`pos-${index}`}
            lat={ parseFloat(el.latitude) }
            lng={ parseFloat(el.longitude) }
            text="Property Position"
          />
        )) }
      </GoogleMapReact>
    )
  }, [geoInfo, data])

  const handleChangeSearch = (e) => {
    let options = {...filterOption};
    setGeoInfo({latitude: e.geometry.location.lat(), longitude: e.geometry.location.lng()});
    setCurrentPos(e.formatted_address);
    options.search = e.formatted_address;
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

  const handleChangeYear = (e) => {
    let options = {...filterOption};
    options.built = e.target.value;
    setFilterOption(options);
  };

  const handleDelete = (item) => {
    let options = {...filterOption};
    options[item] = '';
    if (item === 'search') {
      setCurrentPos("No Selected Current Position");
      setGeoInfo(null);
    }
    setFilterOption(options);
  };

  const handleUpdateSaved = (item) => {
    if(saved.some(el => el.property_id === item.pid)) {
      setSaved(saved.map(el => el.property_id === item.pid ? {...el, favorite: item.favorite} : el));
    } else {
      let items = [...saved];
      items.push({owner_id: parseInt(userId), property_id: item.pid, favorite: item.favorite});
      setSaved(items);
    }    
    PropertiesService.saveAsFavorite({uid: userId, pid: item.pid, favorite: item.favorite});
  };
  return (
    <Fragment>
      <div className={`container property-container ${Object.keys(filterOption).length < 1 ? "" : "has-filter"}`}>
        <Breadcrumbs parent="Home" child="Find properties" />
        <div className="filter-container">
          <div className="filter-items">
            <Autocomplete
              className="search-input"
              onPlaceSelected={handleChangeSearch}
              types={['(cities)']}
              componentRestrictions={{country: "us"}}
            />
            <input
              type="text"
              className="price-input"
              onChange={handleChangeMin}
              onBlur={handleChangeMin}
              placeholder="min: $"
            />
            <input
              type="text"
              className="price-input"
              onChange={handleChangeMax}
              onBlur={handleChangeMax}
              placeholder="max: $"
            />
            <input
              type="text"
              className="price-input"
              onChange={handleChangeYear}
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
            {MapComponent}
          </div>
          <div className="content">
            <div className="content-header">
              <div className="current-position">{currentPos}</div>
              <div className="search-details">
                <span>{`${data.length} results`}</span>
                <span>{`${saved.filter(el => el.favorite === 1).length} saved items`}</span>
              </div>
            </div>
            <div className={`content-body ${Object.keys(filterOption).length < 1 ? "" : "has-filter"}`}>
              {data.length > 0 ? 
                data.map((element, index) => (
                  <PropertyItem
                    key={`element-${index}`}
                    data={element}
                    saved={saved.find(el => el.property_id === element.id)}
                    onUpdate={handleUpdateSaved}
                  />
                )) : (
                  <div className="no-properties"> No properties </div>
                )}
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Property;
