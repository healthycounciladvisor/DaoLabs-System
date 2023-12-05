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
  padding: 2.6rem 1.9rem;
  width: 31.3rem;
  height: 10.7rem;
  border-radius: 20.582px;
  border: 1px solid var(--Gradient-2, #e4fd84);

  background: var(--black-black-12, #1a1b23);
  /* Blur Layers */
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
`;

const SatisticsCardTitle = styled(PrimaryText)`
  font-size: 1.5rem;
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
