import React, { Fragment } from "react";
import BannerSection from '../section/Home/bannerSection';
import FeaturedSection from '../section/Home/featuredSection';
import "./Home.style.scss";

const Home = () => {
  return (
    <Fragment>
      <BannerSection />
      <FeaturedSection />
    </Fragment>
  );
};

export default Home;
