import React, { useRef } from "react";
import logo from "../images/header-logo.png";
import "./navbar.css";
import menu_toggle from "../images/menu-toggle.svg";
import menu_close from "../images/menu-close.svg";
import mob_logo from "../images/mob-logo.png"

const NavigationBar = () => {
  const menuRef = useRef();

  // When right = 0, menu will be displayed in the small screen.
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="nav-logo"></img>
      <img src={mob_logo} alt="" className="nav-mob-logo"></img>
      <img
        src={menu_toggle}
        onClick={openMenu}
        alt=""
        className="nav-mob-open"
      ></img>
      <ul ref={menuRef} className="nav-links">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        ></img>
        <li>About</li>
        <li>Classes</li>
        <li>Contact Me</li>
        <li>Testimonials</li>
        <li>Gallery</li>
      </ul>
      <div className="nav-book-now">Book Now</div>
    </div>
  );
};

export default NavigationBar;
