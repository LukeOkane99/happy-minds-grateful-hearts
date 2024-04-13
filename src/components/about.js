import React from "react";
import "./about.css";
import about from "../images/about-img.png";
import whitelogo from "../images/logo-white.png";

const About = () => {
  return (
    <div className="about">
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
            based out of Northern Ireland. Testing
            12345457867657657676767657657657657676576587878787878787687687878787878787876876876876878
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
