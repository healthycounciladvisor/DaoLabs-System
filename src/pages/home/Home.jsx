import React, { Fragment } from "react";
import JoinButton from "../../components/Atoms/joinbutton";
import "./home.css";
import HomeService from "./components/HomeService";
import TitleP from "../../components/Atoms/titlep";

const trade = {
  firstimg: "./assets/Homeimages/trade.png",
};

const Home = () => {
  return (
    <Fragment>
      <div className="home_main">
        <div className="home_daolabs1">
          <p className="daolabs_system_title">DaoLabs Ecosystem</p>
          <p className="daolabs_title_intro">
            DaoLabs is an Incubator project with the mission of connecting the
            Developers and Artists, creating and improving projects.
          </p>
          <div className="homejoinbutton">
            <JoinButton
              title="Join the club"
              JoinButtonclassname="join_button"
            />
            <JoinButton title="Learn More" JoinButtonclassname="learnmore" />
          </div>
        </div>

        {/* DaoLabs Services */}

        <div className="home_daolabs2">
          <TitleP title="DaoLabs Services" fontSize="40px" />
          <div className="homeserviceArray">
            <HomeService
              serviceImage={trade.firstimg}
              title="Connect People"
              fontSize="1.5rem"
            />
            <HomeService
              serviceImage={trade.firstimg}
              title="Connect People"
              fontSize="1.5rem"
            />
            <HomeService
              serviceImage={trade.firstimg}
              title="Connect People"
              fontSize="1.5rem"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
