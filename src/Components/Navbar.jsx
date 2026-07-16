import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="container nav-container">
                <h2 className="logo"> ATS <span></span></h2>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#event">Event</a></li>
                    <li><Link to="/register"> Register</Link></li>
                    <li><Link to= "/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );

}

export default Navbar;