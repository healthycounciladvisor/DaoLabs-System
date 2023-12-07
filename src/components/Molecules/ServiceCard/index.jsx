import React from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import styled from "styled-components";

const ServiceCard = ({ image, title, content }) => {
  return (
    <div className="homeservice_main">
      <div className="homeservice_main_first">
        <div className="connectpeople_Image">
          <img src={image} alt="service_image" />
        </div>
        <CardTitle>{title}</CardTitle>
        <p>{content}</p>
      </div>
      <div className="contactUs">
        <p className="contactUs_label">Contact Us</p>
        <img src="./assets/Homeimages/arrow.png" alt="arrow" />
      </div>
    </div>
  );
};

const CardTitle = styled(PrimaryText)`
  font-size: 30px;

  @media only screen and (max-width: 1024px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

export default ServiceCard;
