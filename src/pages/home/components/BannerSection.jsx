import JoinButton from "../../../components/Atoms/joinbutton";


const BannerSection = () => {
  return (
    <div className="home_daolabs1">
      <p className="daolabs_system_title">DaoLabs Ecosystem</p>
      <p className="daolabs_title_intro">
        DaoLabs is an Incubator project with the mission of connecting the
        Developers and Artists, creating and improving projects.
      </p>
      <div className="homejoinbutton">
        <JoinButton title="Join the club" JoinButtonclassname="join_button" />
        <JoinButton title="Learn More" JoinButtonclassname="learnmore" />
      </div>
    </div>
  );
};

export default BannerSection;
