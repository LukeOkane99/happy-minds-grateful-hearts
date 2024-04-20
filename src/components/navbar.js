import React from "react";
import logo from "../images/header-logo.png"
import "./navbar.css";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo"></img>
      <ul className="nav-links">
        <li href="#about">About</li>
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
