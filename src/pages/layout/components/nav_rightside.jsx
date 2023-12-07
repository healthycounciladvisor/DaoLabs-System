import React from "react";
import styled from "styled-components";
import ConnectButton from "../../../components/Atoms/ConnectButton";
import "../nav.css";
import { staticPath } from "../../../utils/$path";

const NavRightSide = ({ nav_right_price, title }) => {
  return (
    <div className="nav_daox_button">
      <div className="nav_daox_logo_price">
        <div className="nav_daox_logo">
          <img src="./assets/Homeimages/navlogo.png" alt="navlogo" />
        </div>
        <div className="nav_daox_price">{nav_right_price}$</div>
      </div>
      <ConnectButton title={title} />
      <ResponsiveConnectButton>
        <img src={staticPath.navigator.logo.ResponsiveConnectButtonImg} alt="connectButton" />
      </ResponsiveConnectButton>
    </div>
  );
};

const ResponsiveConnectButton = styled.div`
  display: none;
  @media only screen and (max-width: 765px) {
      display: inline-flex;
`;

export default NavRightSide;
