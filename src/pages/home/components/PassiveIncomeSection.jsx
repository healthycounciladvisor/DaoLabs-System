import React from "react";
import styled from "styled-components";
import PrimaryText from "../../../components/Atoms/PrimaryText";
import "../../home/home.css";
import JoinButton from "../../../components/Atoms/joinbutton";

const PassiveIncomeSection = () => {
  return (
    <PassiveIncomeSectionContainer>
      <PassiveIncomeHeader>
        <PassiveIncomeHeaderTitle>
          Earn Daily Passive Incomes
        </PassiveIncomeHeaderTitle>
        <p className="daolabs4_headintro">
          Our services are designed to maximize revenue generation for our NFTs
          and Token Holders by providing a wide range of daily earning
          opportunities
        </p>
      </PassiveIncomeHeader>

      {/* Learn more Button */}
      <JoinButtonPosition>
        <JoinButton title="Learn More" JoinButtonclassname="learnmore" />
      </JoinButtonPosition>
    </PassiveIncomeSectionContainer>
  );
};

const PassiveIncomeSectionContainer = styled.div`
  background-image: url(./assets/Homeimages/passiveIncomebg.png);
  width: 100%;
  height: calc(43vw);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-left: 9.1vw;
  position: relative;
`;

const PassiveIncomeHeader = styled.div`
  position: absolute;
  margin-top: 28.5rem;
  margin-left: 76.4rem;
  aline-items: center;
  with: 58rem;
`;

const PassiveIncomeHeaderTitle = styled(PrimaryText)`
  font-size: 4rem;
`;

const JoinButtonPosition = styled.div`
  margin-top: 55rem;
  margin-left: 64.2rem;
  position: absolute;
`;

export default PassiveIncomeSection;
