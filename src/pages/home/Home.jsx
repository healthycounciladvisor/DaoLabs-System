import React, { Fragment } from "react";
import "./home.css";
import StatisticsSection from "./components/SatisticsSection";
import ServiceSection from "./components/ServiceSection";
import PassiveIncomeSection from "./components/PassiveIncomeSection";
import BannerSection from "./components/BannerSection";
import TokenomicSection from "./components/TokenomicSection";
import TeamPartnerSection from "./components/TeamPartnerSection";
import HomeFooter from "./components/Footer";

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

        {/* Team and Partner section */}
        <TeamPartnerSection />

        {/* DaoLabs Footer Section */}
        <HomeFooter />
      </div>
    </Fragment>
  );
};

export default Home;
