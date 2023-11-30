import React from "react";
import ConnectButton from "../../../components/Atoms/ConnectButton";
import "../nav.css";

const NavRightSide = ({nav_right_price, title}) => {



    return (
        <div className="nav_daox_button">
          <div className="nav_daox_logo_price">
            <div className="nav_daox_logo">
              <img
                src="./assets/Homeimages/navlogo.png"
                alt="navlogo"
              />
            </div>
            <div className="nav_daox_price">{nav_right_price}$</div>
          </div>
          <ConnectButton title={title}/>
        </div>
    )
}

export default NavRightSide;