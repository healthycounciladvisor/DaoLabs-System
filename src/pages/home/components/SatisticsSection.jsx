import React from "react";
import "../../home/home.css";
import styled from "styled-components";
import PrimaryText from "../../../components/Atoms/PrimaryText";
import SatisticsCard from "../../../components/Molecules/SatisticsCard";
import JoinButton from "../../../components/Atoms/joinbutton";

const satisticsItems = [
  {
    satisticscardtitle: "Total EGLD Distributed",
    satisticscardlablel: "1,000 EGLD (25,000 USD)",
  },
  {
    satisticscardtitle: "Total DAOx Distributed",
    satisticscardlablel: "100,000 DAOx (16,000 USD)",
  },
  {
    satisticscardtitle: "Total DAOx Burned",
    satisticscardlablel: "100,000 DAOx (16,000 USD)",
  },
  {
    satisticscardtitle: "EGLD Reward Block",
    satisticscardlablel: "100 EGLD (2,500 USD)",
  },
  {
    satisticscardtitle: "DAOx Reward Stake Block",
    satisticscardlablel: "1,000 DAOx (160 USD)",
  },
  {
    satisticscardtitle: "DAOx Game Reward Block",
    satisticscardlablel: "1 DAOx (0.16 USD)",
  },
  {
    satisticscardtitle: "Dr Dao X Floor Price",
    satisticscardlablel: "4 EGLD (100 USD) [+1000%]",
  },
  {
    satisticscardtitle: "Dr Dao X Highest Sale",
    satisticscardlablel: "100 EGLD (2,500 USD)",
  },
  {
    satisticscardtitle: "Dr Dao X Total Volume",
    satisticscardlablel: "10,000 EGLD (250,000 USD)",
  },
];

const StatisticsSection = () => {
  return (
    <div className="homesatistics_main">
      <StatisticsTitle>Satistics</StatisticsTitle>

      {/* Satistics List */}
      <SatisticsCardList>
      {satisticsItems.map((satisticsitem) => (
        <SatisticsCard
          satisticscardtitle={satisticsitem.satisticscardtitle}
          satisticscardlablel={satisticsitem.satisticscardlablel}
        />
      ))}
      </SatisticsCardList>

      {/* Satistics section join Button */}
      <JoinButton classname="join_button" title="Join the Club"/>
    </div>
  );
};

const StatisticsTitle = styled(PrimaryText)`
  font-size: 40px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const SatisticsCardList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 13.4rem;
  grid-gap: 6rem;
  margin-top: 9.3rem;
  margin-bottom: 13.5rem;
  @media only screen and (max-width: 1100px) {
    grid-template-columns: auto auto;
  }
  @media only screen and (max-width: 658px) {
    grid-template-columns: auto;
  }
`;

export default StatisticsSection;
