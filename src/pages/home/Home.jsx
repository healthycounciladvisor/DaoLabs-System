import React, { Fragment } from "react";
import "./home.css";
import StatisticsSection from "./components/SatisticsSection";
import ServiceSection from "./components/ServiceSection";
import PassiveIncomeSection from "./components/PassiveIncomeSection";
import BannerSection from "./components/BannerSection";
import TokenomicSection from "./components/TokenomicSection";

const Home = () => {

  return (
    <Fragment>
      <div className="home_main">
        {/* DaoLabs Banner Section*/}
        <BannerSection />

        {/* DaoLabs Services Section */}
        <ServiceSection />

        {/* DaoLabs Statistics Section */}
        <StatisticsSection />

        {/* Passive income */}
        <PassiveIncomeSection />

        {/* DaoX Tokenomics */}
        <TokenomicSection />
      </div>
    </Fragment>
  );
};

export default Home;
