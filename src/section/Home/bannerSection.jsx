import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";
import banner1 from "../../assets/img/banner1.jpg";
import "../../containers/Home.style.scss";
import History from "../../constants/History";
import Autocomplete from 'react-google-autocomplete';
import { useDispatch } from "react-redux";
import { setOpenSignUp } from "../../redux/actions";
import PropertyModal from "../../components/PropertyModal";

const options = [
  { value: "rent", label: "Rent" },
  { value: "sell", label: "Sell" },
];

const BannerSection = () => {
  const [values, setValues] = useState("sell");
  const dispatch = useDispatch();
  const loggedin = localStorage.getItem('loggedin');
  const [openFlag, setOpenModal] = useState(false);

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
          <form>
            <div className="form-control select">
              <Select
                options={options}
                className="property_select"
                value={values}
                placeholder="Select the property type..."
                onChange={(values) => setValues(values)}
              />
            </div>
            <div className="form-control input">
              <Autocomplete
                style={{width: '95%'}}
                onPlaceSelected={(place) => {
                  console.log(place);
                }}
                types={['(cities)']}
                componentRestrictions={{country: "us"}}
              />
            </div>
            <div className="form-control button">
              <button name="submit">Search</button>
            </div>
          </form>
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
