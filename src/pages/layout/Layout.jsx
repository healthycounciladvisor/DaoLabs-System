import { Outlet, Link } from "react-router-dom";
import NavRightSide from "./components/nav_rightside";
import "./nav.css";

const Layout = () => {
  return (
    <>
      <div className="main">
        <nav>
          <div className="nav_logo">
            <img src="./assets/Homeimages/daologo.png" alt="daolabslogo" />
          </div>
          <ul className="nav_list" id="nav_list">
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
          </ul>

          <NavRightSide nav_right_price="0.016" title="Connect" />
        </nav>

        <ul className="nav_list_360">
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
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
