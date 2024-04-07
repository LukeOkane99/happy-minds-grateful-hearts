import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/icon.png";
import "./navbar.css";

const NavigationBar = () => {
  return (
    <Navbar bg="#30D5C8" fixed="top" data-bs-theme="light" className="navbar">
      <Container>
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="nav-links">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#classes">Classes</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
