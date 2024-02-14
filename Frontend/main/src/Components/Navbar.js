
// Navbar.js
import "../CSS/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "./logo.png"; // with import
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar({ Display, setStyle, isLogin }) {
  const [stateOfNavbar, setState] = useState(false);

  function handleClick() {
    setState(!stateOfNavbar);

  }
  function loadLogin() {
    setStyle(!Display);
  }



  return (
    <nav className={`navbar ${stateOfNavbar ? "open" : ""}`}>
      <div className="logo-bg">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className={`navItems-div ${stateOfNavbar ? "open" : ""}`}>
        <ul className="navbarItems">
          <li className="items">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="items">
            <NavLink to="/About">About</NavLink>
          </li>
          <li className="items">Contact Us</li>
          <li className="items"> <NavLink to="/register"> Create Account </NavLink></li>
        { isLogin ? "" : (<li className="items">
            <button onClick={loadLogin} >
              <div className="radius">
                <div className="ringOfBtn">Login</div>
              </div>
            </button>
          </li>)}
      
        </ul>
      </div>
      <div className="hamBurgerButton" onClick={handleClick}>
        <FontAwesomeIcon
          className="icon"
          size="2x"
          icon={stateOfNavbar ? faTimes : faBars}
        />
      </div>
    </nav>
  );
}

export default Navbar;
