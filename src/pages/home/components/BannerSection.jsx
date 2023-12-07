import JoinButton from "../../../components/Atoms/joinbutton";
import { staticPath } from "../../../utils/$path";
import styled from "styled-components";

const BannerSection = () => {
  return (
    <div className="home_daolabs1">
      <p className="daolabs_system_title">DaoLabs Ecosystem</p>
      <p className="daolabs_title_intro">
        DaoLabs is an Incubator project with the mission of connecting the
        Developers and Artists, creating and improving projects.
      </p>
      <div className="homejoinbutton">
        <JoinButton title="Join the club" classname="join_button" />
        <JoinButton title="Learn More" classname="learnmore" />
      </div>
      <ResponsiveBannerImg>
      <img src={staticPath.home.banner.responsiveBannerImg1} alt="responsiveBannerImg1" />
      <img src={staticPath.home.banner.responsiveBannerImg2} alt="responsiveBannerImg2" />
      </ResponsiveBannerImg>
    </div>
  );
};

const ResponsiveBannerImg = styled.div`
  display: none;
  @media only screen and (max-width: 765px) {
      display: flex;
      justify-content: center;
      padding-top: 20px;
      gap: -30px;
      img {
        width: 50%;
        height: 50%;
      }
      img:first-child {
        margin-top: 50px;
        margin-left: 20px;
      }
      img:nth-child(2) {
        margin-top: 0px;
        margin-left: -70px;
      }
  }
`;

export default BannerSection;
