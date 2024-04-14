import React from "react";
import "./about.css";
import about from "../images/about-img.png";
import whitelogo from "../images/logo-white.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <img src={whitelogo}></img>
        <h1>My Story</h1>
        <img src={whitelogo}></img>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about}></img>
        </div>
        <div className="about-right">
          <p>
            My name is Amanda Brennan. I am a mother of 10 wonderful children,
            based out of Northern Ireland. Testing 123454578676576
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
