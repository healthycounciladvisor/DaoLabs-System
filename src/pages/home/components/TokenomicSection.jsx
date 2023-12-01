import React from "react";
import styled from "styled-components";
import PrimaryText from "../../../components/Atoms/PrimaryText";
import { staticPath } from "../../../utils/$path";

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
          {`The $DAOx token has a total supply of 500,000. \n This supply is fixed,
          with no plans for additional $DAOx tokens to be generated. \n   All 100%
          of $DAOx are minted and distributed exclusively through
          community-controlled with any Team, Marketing, Treasury
          Funds  Distribution:  Liquidity Pools (40%) - 200,000 DAOx P2E Rewards
          (40%) - 200,000 DAOx DAOx Staking Rewards (10%) - 50,000 DAOx Lending
          and Borrowing (10%) - 50,000 DAOx`}
        </TokenomicDiscription>
        <img src={staticPath.home.tokenomics.tokenomicslogoImg} alt="logo" />
      </TokenomicMain>
    </TokenomicSectionContainer>
  );
};

const TokenomicSectionContainer = styled.div`
  with: 100%;
  padding: 10rem 13.7rem 2rem 13.7rem;
  text-align: center;
`;

const TokenomicSectionHeaderContainer = styled.div`
  aline-items: center;
  row-gap: 3.2rem;
  display: flex;
  flex-direction: column;
`;

const TokenomicSectionHeaderTitle = styled(PrimaryText)`
  font-size: 4rem;
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

const TokenomicHeaderLabelImg = styled.div`
  with: 2.4rem;
  height: 2.4rem;
`;

const TokenomicDiscription = styled.p`
  with: 58rem;
  font-family: Inter;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  white-space: pre-line;
  background: var(
    --Gradient-1,
    linear-gradient(228deg, #a2e6fb -6.9%, #f1c9de 98.89%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TokenomicMain = styled.div`
  display: flex;
  justify-content: center;
`;

export default TokenomicSection;
