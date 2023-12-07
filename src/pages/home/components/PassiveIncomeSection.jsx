import React from "react";
import styled from "styled-components";
import PrimaryText from "../../../components/Atoms/PrimaryText";
import "../../home/home.css";
import JoinButton from "../../../components/Atoms/joinbutton";
import { staticPath } from "../../../utils/$path";

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
        <HiddenButton>
          <JoinButton title="Learn More" classname="learnmore" />
        </HiddenButton>
        <img src={staticPath.home.passiveIncome.DiamondImg} alt="Diamond" />
      </PassiveIncomeHeader>

      {/* Learn more Button */}
      <JoinButtonPosition>
        <JoinButton title="Learn More" classname="learnmore" />
      </JoinButtonPosition>
    </PassiveIncomeSectionContainer>
  );
};

const PassiveIncomeSectionContainer = styled.div`
  background-image: url(./assets/Homeimages/passiveIncomebg.png);
  width: 100%;
  height: calc(48vw);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-left: 9.1vw;
  position: relative;
  @media only screen and (max-width: 768px) {
    padding-left: 0;
    background: none;
    margin-bottom: 200px;
    height: 200px;
  }
`;

const PassiveIncomeHeader = styled.div`
  position: absolute;
  margin-top: 28.5rem;
  margin-left: 60rem;
  aline-items: center;
  width: auto;
  img { display: none; }
  @media only screen and (max-width: 1127px) {
    margin-top: 85px;
    margin-left: 40px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    margin: auto;
    img { display: block; 
      padding-top: 20px;
    }
  }
`;

const PassiveIncomeHeaderTitle = styled(PrimaryText)`
  font-size: 40px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const JoinButtonPosition = styled.div`
  margin-top: 39%;
  margin-left: 33%;
  position: absolute;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const HiddenButton = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    padding-top: 20px;
  }
`;

export default PassiveIncomeSection;
