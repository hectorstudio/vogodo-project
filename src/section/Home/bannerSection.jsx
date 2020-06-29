import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";
import banner1 from "../../assets/img/banner1.jpg";
import "../../containers/Home.style.scss";
import History from "../../constants/History";
import Autocomplete from 'react-google-autocomplete';
import { useDispatch } from "react-redux";
import { setOpenSignUp, setSearchCity, setSearchCityGeoInfo, setSearchVal } from "../../redux/actions";
import PropertyModal from "../../components/PropertyModal";

const options = [
  { value: "all", label: "All" },
  { value: "rent", label: "Rent" },
  { value: "sell", label: "Sell" },
];

const BannerSection = () => {
  const [type, setType] = useState('');
  const [city, setCity] = useState('');
  const [geoInfo, setGeoInfo] = useState({});
  const dispatch = useDispatch();
  const loggedin = localStorage.getItem('loggedin');
  const [openFlag, setOpenModal] = useState(false);

  const handleSelectCity = (e) => {
    setCity(e.formatted_address);
    dispatch(setSearchCity(e.formatted_address));
    dispatch(setSearchCityGeoInfo({latitude: e.geometry.location.lat(), longitude: e.geometry.location.lng()}));
    setGeoInfo({latitude: e.geometry.location.lat(), longitude: e.geometry.location.lng()});
  }

  const handleSelectType = (value) => {
    setType(value[0].value);
  }

  const handleClickSearch = () =>{
    dispatch(setSearchVal(type));
    dispatch(setSearchCity(city));
    dispatch(setSearchCityGeoInfo(geoInfo));
    History.push("/properties");
  }

  const goToSubmitPage = () => {
    const login = localStorage.getItem("loggedin");
    if (login) {
      setOpenModal(true);
    } else {
      History.push("/signup");
    }
  };

  const openSignUpDrawer = () => {
    if (!loggedin) {
      dispatch(setOpenSignUp(true));
    }
  }

  return (
    <section className="section section-top">
      <div className="slider-container">
        <img src={banner1} alt="banner 1" />
      </div>
      <div className="banner-content">
        <div className="banner">
          <h1>Find The Available Properties</h1>
        </div>
        <div className="property-actions">
          <Link to="/properties">
            <button className="btn-property btn-available">
              Available Properties
            </button>
          </Link>
          <button className="btn-property btn-list" onClick={goToSubmitPage} style={{ cursor:"pointer" }}>List a Property</button>
        </div>
        <div className="search-form">
          <div className="form">
            <div className="form-control select">
              <Select
                options={options}
                className="property_select"
                placeholder="Select the property type..."
                onChange={handleSelectType}
              />
            </div>
            <div className="form-control input">
              <Autocomplete
                style={{width: '95%'}}
                onPlaceSelected={handleSelectCity}
                types={['(cities)']}
                componentRestrictions={{country: "us"}}
              />
            </div>
            <div className="form-control button">
              <button onClick={handleClickSearch}>Search</button>
            </div>
          </div>
        </div>
        <div>
          <button className={`btn btn-primary btn-semi-rounded btn-register uppercase`} style={{ cursor: "pointer" }} onClick={openSignUpDrawer}>
            Register Today!
          </button>
        </div>
      </div>
      <PropertyModal setOpenModal={setOpenModal} openFlag={openFlag}/>
    </section>
  );
};

export default BannerSection;
