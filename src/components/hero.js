import React from "react";
import "./hero.css";
import profile from '../images/profile.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="profile image"></img>
      <h1>I'm Amanda, a certified minfulness coach.</h1>
      <p>Are you ready to get started on your journey?</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-get-started">Get Started</div>
      </div>
    </div>
  );
};

export default Hero;
