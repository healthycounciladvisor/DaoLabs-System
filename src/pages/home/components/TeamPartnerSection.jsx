import React from "react";
import styled from "styled-components";
import PrimaryText from "../../../components/Atoms/PrimaryText";
import { staticPath } from "../../../utils/$path";

const TeamPartnerSection = () => {
  return (
    <TeamPartnerSectionContainer>
      <DaoLabsTeamMain>
        <TeamPartnerSectionTitle>DaoLabs Team</TeamPartnerSectionTitle>
        <DaoLabsTeamList>
          <img src={staticPath.home.teamlists.drsimonImg} alt="drsimonImg" />
          <img src={staticPath.home.teamlists.drazenImg} alt="DRZEN" />
          <img src={staticPath.home.teamlists.crosmodevImg} alt="CROSMODEV" />
          <img
            src={staticPath.home.teamlists.davidtanakaImg}
            alt="DAVIDTANAKA"
          />
          <img
            src={staticPath.home.teamlists.atlasdragonImg}
            alt="ATLAS_DRAGON"
          />
          <img
            src={staticPath.home.teamlists.cellerdwellerImg}
            alt="CELLARDWELLER"
          />
        </DaoLabsTeamList>
      </DaoLabsTeamMain>

      {/* DaoLabs partners */}
      <DaoLabsPartnerMain>
        <TeamPartnerSectionTitle>DaoLabs Partners</TeamPartnerSectionTitle>
        <DaoLabsPartnersList>
          <img
            src={staticPath.home.partnerslists.PartnerLogo1Imag}
            alt="PartnerLogoImag1"
          />
          <img
            src={staticPath.home.partnerslists.PartnerLogo2Imag}
            alt="PartnerLogoImag2"
          />
          <img
            src={staticPath.home.partnerslists.PartnerLogo3Imag}
            alt="PartnerLogoImag3"
          />
        </DaoLabsPartnersList>
      </DaoLabsPartnerMain>
    </TeamPartnerSectionContainer>
  );
};

const TeamPartnerSectionContainer = styled.div`
  width: 100%;
  background-image: url(./assets/Homeimages/teamPartner.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10.8rem 6.9rem 9.2rem 6.9rem;
  display: flex;
  flex-direction: column;
  row-gap: 12rem;
  @media only screen and (max-width: 320px) {
    height: 615rem;
  }
`;

const DaoLabsTeamMain = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6rem;
`;

const DaoLabsTeamList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;
  img {
    width: 200px;
  }
  @media only screen and (max-width: 1439px) {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 12rem;
  }
  @media only screen and (max-width: 960px) {
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 10rem;
  }
  @media only screen and (max-width: 470px) {
    display: grid;
    grid-template-columns: auto;
    row-gap: 10rem;
    img {
        width: 250px;
    }
  }
`;

const DaoLabsPartnerMain = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6rem;
`;

const DaoLabsPartnersList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  @media only screen and (max-width: 960px) {
    display: grid;
    grid-template-columns: auto;
    row-gap: 10rem;
    img {
        width: 250px;
      }
    }
  }
`;

const TeamPartnerSectionTitle = styled(PrimaryText)`
  font-size: 40px !important;
  @media only screen and (max-width: 320px) {
    font-size: 20px !important;
  }
`;

export default TeamPartnerSection;
