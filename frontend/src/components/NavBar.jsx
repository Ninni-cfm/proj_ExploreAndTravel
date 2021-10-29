import { Link } from "react-router-dom";

import logo from "../assets/img/logo.svg";

import "../assets/css/NavBar.css";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>

            <ul>
                <li>
                    <Link to="/" className="HomeButton">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/destination" className="DestinationButton">
                        Destinations
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="AboutButton">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/partner" className="PartnerButton">
                        Partner
                    </Link>
                </li>
                <li>
                    <Link to="/login" className="ButtonClear">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/logout" className="ButtonClear">
                        Logout
                    </Link>
                </li>
                <li>
                    <Link to="/register" className="ButtonOrange">
                        Register
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
