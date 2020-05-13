import React from "react";
import "./LocationSection.style.scss";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Map from "../../assets/img/map1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 12,
    '& > *': {
      margin: theme.spacing(1),
      width: '22%',
    },
  },
}));

const LocationSection = () => {
  const classess = useStyles();
  return (
    <section className={`location-section`}>
      <label className="title">Address:</label>
      <div className={`address-container ${classess.root}`}>
        <TextField id="city-basic" label="City" />
        <TextField id="state-basic" label="State" />
        <TextField id="zipcode-basic" label="Zip Code" />
        <TextField id="country-basic" label="Country" />
      </div>
      <label className="title">Google Map:</label>
      <div className="map-container">
        <img src={Map} alt="location map" />
      </div>
    </section>
  );
};

export default LocationSection;
