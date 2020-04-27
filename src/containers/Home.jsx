import React, { Fragment } from "react";
import BannerSection from '../section/Home/bannerSection';
import FeaturedSection from '../section/Home/featuredSection';
import IntroSection from '../section/Home/introSection';
import "./Home.style.scss";

const Home = () => {
  return (
    <Fragment>
      <BannerSection />
      <FeaturedSection />
      <IntroSection />
    </Fragment>
  );
};

export default Home;
