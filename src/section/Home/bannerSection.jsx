import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Select, MenuItem } from "@material-ui/core"
import banner1 from "../../assets/img/banner1.jpg";
import "../../containers/Home.style.scss";
import History from "../../constants/History";
import Autocomplete from 'react-google-autocomplete';
import { useDispatch/*, useSelector */ } from "react-redux";
import { setOpenSignUp, setSearchCity, setSearchCityGeoInfo, setSearchVal } from "../../redux/actions";
import PropertyModal from "../../components/PropertyModal";
import Routes from "../../constants/Routes";
//import { checkIsPremiumMember } from "../../constants/Common";
import SimplePopover from "../../components/Popover";

const options = [
  { value: "all", label: "All" },
  { value: "Single Family", label: "Single Family" }, 
  { value: "Duplex", label: "Duplex" }, 
  { value: "Multifamily", label: "Multifamily" }, 
  { value: "Apartments", label: "Apartments" }, 
  { value: "Offices", label: "Offices" },
  { value: "Land", label: "Land" },
  { value: "Lots", label: "Lots" },
  { value: "Shopping Center", label: "Shopping Center" },
  { value: "Warehouses", label: "Warehouses" },
  { value: "Building", label: "Building" },
  { value: "Hotels", label: "Hotels" },
  { value: "Motels", label: "Motels" }
];

const BannerSection = () => {
  const [type, setType] = useState('');
  const [city, setCity] = useState('');
  const [geoInfo, setGeoInfo] = useState({});
  const dispatch = useDispatch();
  //const userInfo = useSelector(state => state.userInfo);
  const loggedin = localStorage.getItem('loggedin');
  const [openFlag, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSelectCity = (e) => {
    setCity(e.formatted_address);
    dispatch(setSearchCity(e.formatted_address));
    dispatch(setSearchCityGeoInfo({latitude: e.geometry.location.lat(), longitude: e.geometry.location.lng()}));
    setGeoInfo({latitude: e.geometry.location.lat(), longitude: e.geometry.location.lng()});
  }

  const handleSelectType = (value) => {
    setType(value);
  }

  const handleClickSearch = () =>{
    dispatch(setSearchVal(type));
    dispatch(setSearchCity(city));
    dispatch(setSearchCityGeoInfo(geoInfo));
    History.push(Routes.find_property);
  }

  const goToSubmitPage = () => {
    const login = localStorage.getItem("loggedin");
    //const userStatus = userInfo ? checkIsPremiumMember(userInfo) : false;
    if (login) {
      setOpenModal(true);
    } else {
      setOpen(true)
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
          <h1>Find Wholesales and Off Market Real Estate Deals</h1>
        </div>
        <div className="property-actions">
          <Link to={Routes.find_property}>
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
              >
                {
                  options.map(opt => (
                    <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
                  ))
                }
              </Select>
            </div>
            <div className="form-control input">
              <Autocomplete
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
        <div className="register-button">
          <button className={`btn btn-primary btn-semi-rounded btn-register uppercase`} style={{ cursor: "pointer" }} onClick={openSignUpDrawer}>
            Register Today!
          </button>
        </div>
      </div>
      <PropertyModal setOpenModal={setOpenModal} openFlag={openFlag}/>
      <SimplePopover status={open} setOpen={setOpen} description="You need to sign up to list your properties" type="error" />
    </section>
  );
};

export default BannerSection;
