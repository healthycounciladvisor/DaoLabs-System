import React from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import styled from "styled-components";

const SatisticsCard = ({ satisticscardtitle, satisticscardlablel }) => {
  return (
    <SatisticsCardContainer>
      <SatisticsCardTitle>{satisticscardtitle}</SatisticsCardTitle>
      <SatisticsCardLbel>{satisticscardlablel}</SatisticsCardLbel>
    </SatisticsCardContainer>
  );
};

const SatisticsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  padding: 26px 19px;
  width: 313px;
  height: 107px;
  border-radius: 20.582px;
  border: 1px solid var(--Gradient-2, #e4fd84);

  background: var(--black-black-12, #1a1b23);
  /* Blur Layers */
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
  @media only screen and (max-width: 768px) {
    width: 270px;
    height: 105px;
    padding: 20px 10px;
    border-radius: 16px;
  }
  @media only screen and (max-width: 658px) {
    width: 315px;
    height: 105px;
    padding: 20px 10px;
    border-radius: 20px;
  }
  @media only screen and (max-width: 375px) {
    width: 270px;
    height: 105px;
    padding: 20px 10px;
    border-radius: 16px;
  }
`;

const SatisticsCardTitle = styled(PrimaryText)`
  font-size: 16px;
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

const SatisticsCardLbel = styled.p`
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  background: var(
    --Gradient-1,
    linear-gradient(228deg, #a2e6fb -6.9%, #f1c9de 98.89%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default SatisticsCard;
