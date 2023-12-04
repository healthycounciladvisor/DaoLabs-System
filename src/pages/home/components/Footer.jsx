import React from "react";
import styled from "styled-components";
import { staticPath } from "../../../utils/$path";
import PrimaryText from "../../../components/Atoms/PrimaryText";
import PrimaryPtag from "../../../components/Atoms/primaryPtag";
import { Outlet, Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <FooterContainer>
      <img src={staticPath.navigator.logo.DaologoImg} alt="DaologoImg" />
      <FooterMain>
        <FooterLeft>
          <FooterYellowDis>
            DaoLabs is an Incubator project with the mission of connecting
            Developers and Artists, fostering collaboration, and facilitating
            the creation and enhancement of innovative projects that have a
            lasting impact on their respective companies.
          </FooterYellowDis>
          <FooterLabel>
            <FooterLabelText>Build with DaoLabs</FooterLabelText>
            <img src={staticPath.arrow} alt="Arrow" />
          </FooterLabel>
          <CopyRight>© DaoLabs Ecosystem, 2023</CopyRight>
        </FooterLeft>

        {/* Footer Right */}
        <FooterRight>
          <FooterNavLeft>
            <li>
              <Link to="/">Website</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="LaunchPad">LaunchPad</Link>
            </li>
            <li>
              <Link to="Games">Games</Link>
            </li>
            <li>
              <Link to="Staking">Staking</Link>
            </li>
            <li>
              <Link to="Markets">Markets</Link>
            </li>
          </FooterNavLeft>
          <FooterDaoLabsRright>
            <li>
              <Link to="/">Do Your Own Research</Link>
            </li>
            <li>
              <Link to="/">Daolist Pass X 3D NFTs</Link>
            </li>
            <li>
              <Link to="LaunchPad">Dr Dao X NFTs Collection</Link>
            </li>
            <li>
              <Link to="Games">DAOx Tokenomics</Link>
            </li>
            <li>
              <Link to="Staking">Games</Link>
            </li>
            <li>
              <Link to="Markets">DaoLabs on Cronos Blockchain</Link>
            </li>
          </FooterDaoLabsRright>
        </FooterRight>
      </FooterMain>
      <Outlet />
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 10rem 16.8rem 10rem;
  @media only screen and (max-width: 768px) {
    padding: 2rem 2rem 10rem 2rem;
    row-gap: 20px;
`;

const FooterMain = styled.div`
  display: flex;
  padding: 2.1rem 2.4rem;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    padding: 20px 0;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 90%;
`;

const FooterYellowDis = styled(PrimaryText)`
  font-size: 14px;
  width: 60rem;
  text-align: left;
  line-height: 150%;
  @media only screen and (max-width: 700px) {
    width: 200px;
    margin: 0;
    padding: 0;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const FooterLabel = styled.div`
  display: flex;
  width: 304px;
  height: 56px;
  padding: 1.6rem 2rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  border: 1px solid var(--Gradient-1, #a2e6fb);
  /* blur/glass */
  box-shadow: 0px 2px 2px 0px rgba(255, 255, 255, 0.15) inset,
    0px 0px 30px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(20px);
  @media only screen and (max-width: 774px) {
    width: 90%;
  }
`;

const FooterLabelText = styled(PrimaryPtag)`
  font-size: 14px;
`;

const CopyRight = styled(PrimaryText)`
  font-size: 12px;
  text-align: left;
`;

const FooterRight = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`;

const FooterNavLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 250px;
  list-style-type: none;
  row-gap: 2.4rem;
  font-family: Inter;
  font-size: 14px;
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

  @media only screen and (max-width: 900px) {
    font-size: 14px;
    width: 100px;
  }
`;

const FooterDaoLabsRright = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 250px;
  row-gap: 2.4rem;
  list-style-type: none;
  font-family: Inter;
  font-size: 14px;
  line-height: 150%;
  background: var(
    --Gradient-1,
    linear-gradient(228deg, #a2e6fb -6.9%, #f1c9de 98.89%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media only screen and (max-width: 900px) {
    text-align: right;
  }
`;

export default HomeFooter;
