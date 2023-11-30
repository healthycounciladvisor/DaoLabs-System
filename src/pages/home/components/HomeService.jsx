import React from "react";
import TitleP from "../../../components/Atoms/titlep";
import "../../home/home.css";

const HomeService = ({ serviceImage, title, fontSize, homeserviceIntro }) => {
  return (
    <div className="homeservice_main">
      <div className="homeservice_main_first">
        <div className="connectpeople_Image">
          <img src={serviceImage} alt="connectpeople_Image" />
        </div>
        <TitleP title={title} fontSize={fontSize} />
        <p>{homeserviceIntro}</p>
      </div>
      <div className="contactUs">
        <p className="contactUs_label">Contact Us</p>
        <img src="./assets/Homeimages/arrow.png" alt="arrow" />
      </div>
    </div>
  );
};

export default HomeService;
