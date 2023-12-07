import React from "react";
import styled from "styled-components";
import PrimaryText from "../../../components/Atoms/PrimaryText";
import { staticPath } from "../../../utils/$path";
import "../../home/home.css";

const TokenomicSection = () => {
  return (
    <TokenomicSectionContainer>
      <TokenomicSectionHeaderContainer>
        <TokenomicSectionHeaderTitle>
          DAOx Tokenomics
        </TokenomicSectionHeaderTitle>
        <TokenomicSectiontitleP>
          Buy and sell DAOx Token on JEXchange or OneDEX <br />
        </TokenomicSectiontitleP>
        <TokenomicHeaderLabelBox>
          <TokenomicHeaderLabel>Read Daopaper</TokenomicHeaderLabel>
          <TokenomicHeaderLabelImg>
            <img src={staticPath.arrow} alt="arrow" style={{ width: "100%" }} />
          </TokenomicHeaderLabelImg>
        </TokenomicHeaderLabelBox>
      </TokenomicSectionHeaderContainer>

      {/* Tokenomics main */}
      <TokenomicMain>
        <TokenomicDiscription>
          {`The $DAOx token has a total supply of 500,000. \n
          This supply is fixed, with no plans for additional $DAOx tokens to be generated. \n
          All 100% of $DAOx are minted and distributed exclusively through
          community-controlled with any Team, Marketing, Treasury or Funds \n\n\n 
          Distribution: \n\n Liquidity Pools (40%) - 200,000 DAOx\n\n P2E Rewards
          (40%) - 200,000 DAOx\n\n DAOx Staking Rewards (10%) - 50,000 DAOx\n\n Lending
          and Borrowing (10%) - 50,000 DAOx`}
        </TokenomicDiscription>
        <img
          src={staticPath.home.tokenomics.tokenomicslogoImg}
          className="tokenomicImg"
          alt="logo"
          style={{ width: "50%", height: "50%" }}
        />
      </TokenomicMain>
    </TokenomicSectionContainer>
  );
};

const TokenomicSectionContainer = styled.div`
  with: 100%;
  padding: 10rem 13.7rem 2rem 13.7rem;
  text-align: center;
  @media only screen and (max-width: 425px) {
    padding: 10rem 20px;
  }
`;

const TokenomicSectionHeaderContainer = styled.div`
  aline-items: center;
  row-gap: 3.2rem;
  display: flex;
  flex-direction: column;
`;

const TokenomicSectionHeaderTitle = styled(PrimaryText)`
  font-size: 4rem;
  @media only screen and (max-width: 425px) {
    font-size: 19px;
  }
`;

const TokenomicSectiontitleP = styled.p`
  font-size: 1.6rem;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  background: var(
    --Gradient-1,
    linear-gradient(228deg, #a2e6fb -6.9%, #f1c9de 98.89%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TokenomicHeaderLabel = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  background: var(
    --Gradient-1,
    linear-gradient(228deg, #a2e6fb -6.9%, #f1c9de 98.89%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TokenomicHeaderLabelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TokenomicMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TokenomicHeaderLabelImg = styled.div`
  with: 2.4rem;
  height: 2.4rem;
`;

const TokenomicDiscription = styled.p`
  width: 580px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  line-height: 150%;
  display: flex;
  align-items: center;
  white-space: pre-line;
  background: var(
    --Gradient-1,
    linear-gradient(228deg, #a2e6fb -6.9%, #f1c9de 98.89%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: 1024px) {
    padding-top: 10rem;
    width: 580px;
    font-size: 12px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    width: 90%;
  }
  @media only screen and (max-width: 425px) {
    font-size: 16px;
    width: 90%;
  }
`;

export default TokenomicSection;
