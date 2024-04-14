import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/header-logo.png"
import "./navbar.css";

const NavigationBar = () => {
  return (
    <div>
      <Navbar data-bs-theme="light" className="navbar">
        <Container>
          <div className="logo">
            <img src={logo} alt="logo" href="#home"></img>
          </div>
          <div className="nav-links">
            <Nav>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#classes">Classes</Nav.Link>
              <Nav.Link href="#home">Contact Me</Nav.Link>
              <Nav.Link href="#home">Testimonials</Nav.Link>
              <Nav.Link href="#home">Gallery</Nav.Link>
            </Nav>
            <div className="nav-book-now">Book Now</div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
