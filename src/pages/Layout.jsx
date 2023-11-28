import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <nav>
                <img src="./assets/Homeimages/daologo.png" className="DaoLabs-Logo" alt="DaoLabsLogo" />
                <ul>
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
            </nav>

            <Outlet/>
        </>
    )
}

export default Layout;