import React from "react";
import "../../home/home.css";
import styled from "styled-components";
import PrimaryText from "../../../components/Atoms/PrimaryText";
import SatisticsCard from "../../../components/Molecules/SatisticsCard";
import JoinButton from "../../../components/Atoms/joinbutton";

const satisticsItems = [
  {
    satisticscardlablel: "Total EGLD Distributed",
    satisticscardtitle: "1,000 EGLD (25,000 USD)",
  },
  {
    satisticscardlablel: "Total DAOx Distributed",
    satisticscardtitle: "100,000 DAOx (16,000 USD)",
  },
  {
    satisticscardlablel: "Total DAOx Burned",
    satisticscardtitle: "100,000 DAOx (16,000 USD)",
  },
  {
    satisticscardlablel: "EGLD Reward Block",
    satisticscardtitle: "100 EGLD (2,500 USD)",
  },
  {
    satisticscardlablel: "DAOx Reward Stake Block",
    satisticscardtitle: "1,000 DAOx (160 USD)",
  },
  {
    satisticscardlablel: "DAOx Game Reward Block",
    satisticscardtitle: "1 DAOx (0.16 USD)",
  },
  {
    satisticscardlablel: "Dr Dao X Floor Price",
    satisticscardtitle: "4 EGLD (100 USD) [+1000%]",
  },
  {
    satisticscardlablel: "Dr Dao X Highest Sale",
    satisticscardtitle: "100 EGLD (2,500 USD)",
  },
  {
    satisticscardlablel: "Dr Dao X Total Volume",
    satisticscardtitle: "10,000 EGLD (250,000 USD)",
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
      <JoinButton JoinButtonclassname="join_button" title="Join the Club"/>
    </div>
  );
};

const StatisticsTitle = styled(PrimaryText)`
  font-size: 40px;
`;

const SatisticsCardList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 13.4rem;
  grid-gap: 6rem;
  margin-top: 9.3rem;
  margin-bottom: 13.5rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export default StatisticsSection;
