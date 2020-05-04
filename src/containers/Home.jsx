import React, { Fragment } from "react";
import BannerSection from "../section/Home/bannerSection";
import FeaturedSection from "../section/Home/featuredSection";
import IntroSection from "../section/Home/introSection";
import PlanSection from "../section/Home/planSection";
import "./Home.style.scss";
import SubscribeSection from "../section/Home/subscribeSection";

const Home = () => {
  console.log('HOME PAGE')
  return (
    <Fragment>
      <BannerSection />
      <FeaturedSection />
      <IntroSection />
      <PlanSection />
      <SubscribeSection />
    </Fragment>
  );
};

export default Home;
