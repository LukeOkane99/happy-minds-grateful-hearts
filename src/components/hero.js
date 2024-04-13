import React from "react";
import "./hero.css";
import profile from '../images/profile-img.png'

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="profile image"></img>
      <h1>Holistic Practitioner & The Trainee Holistic Psychotherapist</h1>
      <p>Mindfulness | Meditation | Breathwork</p>
      <div className="hero-action">
        <div className="hero-connect">Book Now</div>
        <div className="hero-get-started">Connect With Me</div>
      </div>
    </div>
  );
};

export default Hero;
