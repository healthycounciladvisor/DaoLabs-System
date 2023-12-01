import styled from "styled-components";
import PrimaryText from "../../../components/Atoms/PrimaryText";
import { staticPath } from "../../../utils/$path";
import ServiceCard from "../../../components/Molecules/ServiceCard";

const ServiceSection = () => {
  return (
    <ServiceSectionContainer>
      <SectionTitle>Servicies</SectionTitle>
      <CardList>
        <ServiceCard
          image={staticPath.home.service.connectImg}
          title="Connect People"          
          content="We find the reliable and trustable people that you need for the development of your project"
        />
        <ServiceCard
          image={staticPath.home.service.launchImg}
          title="LaunchPads"               
          content="We offer a Tech Service for launching your Website, NFT project, Token, Tools and more with a spot on our platform"
        />
        <ServiceCard
          image={staticPath.home.service.artImg}
          title="Art & Design"          
          content="We shape your project concept with Logos, Web Design UX/UI, NFT Art Characters and more with a spot on our platform"
        />
      </CardList>
    </ServiceSectionContainer>
  );
};


const ServiceSectionContainer = styled.div`
  width: 100%;
  padding: 6.8rem 13rem 12rem 13rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;

const CardList = styled.div`
  padding-top: 8.1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items:center;
  }
`;

const SectionTitle = styled(PrimaryText)`
  font-size: 40px !important;
`;


export default ServiceSection;
